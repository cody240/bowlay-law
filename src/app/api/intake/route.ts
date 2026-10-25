// Receives the website intake form and files it in GoHighLevel.
//
// The form has two steps:
//   1. "quick"   – first name, phone, what happened. Upserts the contact and opens a card
//                  in the Intake pipeline at "New inquiry". This alone is a callable lead.
//   2. "details" – optional last name, email, city, residence type, move-in date, moved out.
//                  Updates the same contact. The client proves which contact it is with
//                  the signed token returned by step 1, so nobody can edit other contacts.
// Requests without `step` (an older cached page sending every field) go through "quick",
// which also saves any extra fields it receives. The GHL token stays server-side.

import { createHmac, timingSafeEqual } from 'node:crypto';

const GHL_API = 'https://services.leadconnectorhq.com';
const GHL_VERSION = '2021-07-28';

const RESIDENCE_TYPES = ['Single-family home', 'Apartment', 'Condo', 'In-law unit', 'Other'];

type IntakeBody = {
  step?: 'quick' | 'details';
  contactId?: string;
  token?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  city?: string;
  residenceType?: string;
  moveInDate?: string;
  movedOut?: string;
  whatHappened?: string;
  smsConsent?: boolean;
  website?: string; // honeypot: real people never fill this
};

function clean(value: unknown, max = 200): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

// GHL wants E.164; assume US for bare 10-digit numbers.
function toE164(raw: string): string {
  const digits = raw.replace(/\D/g, '');
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
  return raw;
}

function sign(contactId: string): string {
  return createHmac('sha256', process.env.GHL_API_TOKEN as string).update(`intake:${contactId}`).digest('hex');
}

function validToken(contactId: string, token: string): boolean {
  const expected = Buffer.from(sign(contactId));
  const given = Buffer.from(token);
  return expected.length === given.length && timingSafeEqual(expected, given);
}

async function ghl(method: 'POST' | 'PUT', path: string, body: unknown) {
  const res = await fetch(`${GHL_API}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${process.env.GHL_API_TOKEN}`,
      Version: GHL_VERSION,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, data };
}

// Optional detail fields: blank is fine, but anything sent must be valid.
function readDetails(body: IntakeBody) {
  const d = {
    lastName: clean(body.lastName, 80),
    email: clean(body.email, 120).toLowerCase(),
    city: clean(body.city, 120),
    residenceType: clean(body.residenceType, 40),
    moveInDate: clean(body.moveInDate, 10),
    movedOut: clean(body.movedOut, 3),
  };
  const invalid =
    (d.email && !/^\S+@\S+\.\S+$/.test(d.email)) ||
    (d.residenceType && !RESIDENCE_TYPES.includes(d.residenceType)) ||
    (d.movedOut && !['Yes', 'No'].includes(d.movedOut)) ||
    (d.moveInDate && !/^\d{4}-\d{2}-\d{2}$/.test(d.moveInDate));
  return { d, invalid };
}

function detailFields(d: ReturnType<typeof readDetails>['d']) {
  return [
    { key: 'city_where_you_rent', field_value: d.city },
    { key: 'type_of_residence', field_value: d.residenceType },
    { key: 'approximate_movein_date', field_value: d.moveInDate },
    { key: 'moved_out', field_value: d.movedOut },
  ].filter((f) => f.field_value);
}

export async function POST(request: Request) {
  const { GHL_API_TOKEN, GHL_LOCATION_ID, GHL_PIPELINE_ID, GHL_NEW_INQUIRY_STAGE_ID } = process.env;
  if (!GHL_API_TOKEN || !GHL_LOCATION_ID || !GHL_PIPELINE_ID || !GHL_NEW_INQUIRY_STAGE_ID) {
    console.error('intake: GHL environment variables are missing');
    return Response.json({ error: 'Form is temporarily unavailable.' }, { status: 500 });
  }

  let body: IntakeBody;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Bots fill every field; pretend success so they move on.
  if (clean(body.website)) return Response.json({ ok: true });

  const { d, invalid } = readDetails(body);
  if (invalid) {
    return Response.json({ error: 'Please check the email and date fields.' }, { status: 400 });
  }

  // Step 2: add details to the contact created in step 1.
  if (body.step === 'details') {
    const contactId = clean(body.contactId, 64);
    const token = clean(body.token, 128);
    if (!contactId || !token || !validToken(contactId, token)) {
      return Response.json({ error: 'Invalid request.' }, { status: 400 });
    }
    const update: Record<string, unknown> = { customFields: detailFields(d) };
    if (d.lastName) update.lastName = d.lastName;
    if (d.email) update.email = d.email;
    const res = await ghl('PUT', `/contacts/${encodeURIComponent(contactId)}`, update);
    if (!res.ok) {
      console.error('intake: details update failed', res.status, res.data);
      return Response.json({ error: 'Something went wrong saving the details.' }, { status: 502 });
    }
    return Response.json({ ok: true });
  }

  // Step 1 (quick): the lead itself.
  const firstName = clean(body.firstName, 80);
  const phone = toE164(clean(body.phone, 40));
  const whatHappened = clean(body.whatHappened, 5000);
  if (!firstName || !whatHappened || phone.replace(/\D/g, '').length < 10) {
    return Response.json({ error: 'Please add your name, phone number and what happened.' }, { status: 400 });
  }

  const tags = ['website-inquiry'];
  if (body.smsConsent === true) tags.push('sms-consent');

  const contact = await ghl('POST', '/contacts/upsert', {
    locationId: GHL_LOCATION_ID,
    firstName,
    ...(d.lastName && { lastName: d.lastName }),
    ...(d.email && { email: d.email }),
    phone,
    source: 'Website contact form',
    tags,
    customFields: [{ key: 'what_happened', field_value: whatHappened }, ...detailFields(d)],
  });
  const contactId: string | undefined = contact.data?.contact?.id;
  if (!contact.ok || !contactId) {
    console.error('intake: contact upsert failed', contact.status, contact.data);
    return Response.json({ error: 'Something went wrong. Please call or email instead.' }, { status: 502 });
  }

  const opportunity = await ghl('POST', '/opportunities/', {
    locationId: GHL_LOCATION_ID,
    pipelineId: GHL_PIPELINE_ID,
    pipelineStageId: GHL_NEW_INQUIRY_STAGE_ID,
    contactId,
    name: [firstName, d.lastName].filter(Boolean).join(' '),
    status: 'open',
    source: 'Website contact form',
  });
  // A repeat inquiry from someone with an open card fails here; the contact
  // (and their latest answers) is still saved, so don't fail the visitor.
  if (!opportunity.ok) {
    console.error('intake: opportunity create failed', opportunity.status, opportunity.data);
  }

  return Response.json({ ok: true, contactId, token: sign(contactId) });
}
