// Receives the Contact page form and files it in GoHighLevel:
// upserts the contact (with intake custom fields), then opens a card in the
// Intake pipeline at "New inquiry". The GHL token stays server-side.

const GHL_API = 'https://services.leadconnectorhq.com';
const GHL_VERSION = '2021-07-28';

const RESIDENCE_TYPES = ['Single-family home', 'Apartment', 'Condo', 'In-law unit', 'Other'];

type IntakeBody = {
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

async function ghl(path: string, body: unknown) {
  const res = await fetch(`${GHL_API}${path}`, {
    method: 'POST',
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

  const lead = {
    firstName: clean(body.firstName, 80),
    lastName: clean(body.lastName, 80),
    phone: toE164(clean(body.phone, 40)),
    email: clean(body.email, 120).toLowerCase(),
    city: clean(body.city, 120),
    residenceType: clean(body.residenceType, 40),
    moveInDate: clean(body.moveInDate, 10),
    movedOut: clean(body.movedOut, 3),
    whatHappened: clean(body.whatHappened, 5000),
  };

  const missing = Object.entries(lead).filter(([, v]) => !v).map(([k]) => k);
  if (
    missing.length ||
    !/^\S+@\S+\.\S+$/.test(lead.email) ||
    !RESIDENCE_TYPES.includes(lead.residenceType) ||
    !['Yes', 'No'].includes(lead.movedOut) ||
    !/^\d{4}-\d{2}-\d{2}$/.test(lead.moveInDate)
  ) {
    return Response.json({ error: 'Please fill in every field.' }, { status: 400 });
  }

  const tags = ['website-inquiry'];
  if (body.smsConsent === true) tags.push('sms-consent');

  const contact = await ghl('/contacts/upsert', {
    locationId: GHL_LOCATION_ID,
    firstName: lead.firstName,
    lastName: lead.lastName,
    email: lead.email,
    phone: lead.phone,
    source: 'Website contact form',
    tags,
    customFields: [
      { key: 'city_where_you_rent', field_value: lead.city },
      { key: 'type_of_residence', field_value: lead.residenceType },
      { key: 'approximate_movein_date', field_value: lead.moveInDate },
      { key: 'moved_out', field_value: lead.movedOut },
      { key: 'what_happened', field_value: lead.whatHappened },
    ],
  });
  const contactId: string | undefined = contact.data?.contact?.id;
  if (!contact.ok || !contactId) {
    console.error('intake: contact upsert failed', contact.status, contact.data);
    return Response.json({ error: 'Something went wrong. Please call or email instead.' }, { status: 502 });
  }

  const opportunity = await ghl('/opportunities/', {
    locationId: GHL_LOCATION_ID,
    pipelineId: GHL_PIPELINE_ID,
    pipelineStageId: GHL_NEW_INQUIRY_STAGE_ID,
    contactId,
    name: `${lead.firstName} ${lead.lastName}`,
    status: 'open',
    source: 'Website contact form',
  });
  // A repeat inquiry from someone with an open card fails here; the contact
  // (and their latest answers) is still saved, so don't fail the visitor.
  if (!opportunity.ok) {
    console.error('intake: opportunity create failed', opportunity.status, opportunity.data);
  }

  return Response.json({ ok: true });
}
