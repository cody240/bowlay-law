// Receives the Contact page form. Validates it and, when CallRail's script was
// not running in the visitor's browser (ad blocker, Brave), creates the lead in
// the Clio Grow Lead Inbox directly. When CallRail did capture the submission,
// the lead is created by /api/callrail/form from CallRail's webhook instead,
// so it carries CallRail's attribution and is never duplicated.
// The Grow lead capture token stays server-side (CLIO_GROW_LEAD_TOKEN).

import { RESIDENCE_TYPES, clean, createGrowLead, formatIntakeMessage, toE164, type IntakeFields } from '@/lib/growLead';

const FORM_URL = 'https://bowlaylaw.com/contact';

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
  callrailCaptured?: boolean; // true when CallRail's script was present at submit
  website?: string; // honeypot: real people never fill this
};

export async function POST(request: Request) {
  const token = process.env.CLIO_GROW_LEAD_TOKEN;
  if (!token) {
    console.error('intake: CLIO_GROW_LEAD_TOKEN is missing');
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

  const lead: IntakeFields = {
    firstName: clean(body.firstName, 80),
    lastName: clean(body.lastName, 80),
    phone: toE164(clean(body.phone, 40)),
    email: clean(body.email, 120).toLowerCase(),
    city: clean(body.city, 120),
    residenceType: clean(body.residenceType, 40),
    moveInDate: clean(body.moveInDate, 10),
    movedOut: clean(body.movedOut, 3),
    smsConsent: body.smsConsent === true,
    whatHappened: clean(body.whatHappened, 5000),
  };

  const required = { ...lead } as Record<string, unknown>;
  delete required.smsConsent;
  const missing = Object.entries(required).filter(([, v]) => !v).map(([k]) => k);
  if (
    missing.length ||
    !/^\S+@\S+\.\S+$/.test(lead.email) ||
    !RESIDENCE_TYPES.includes(lead.residenceType) ||
    !['Yes', 'No'].includes(lead.movedOut) ||
    !/^\d{4}-\d{2}-\d{2}$/.test(lead.moveInDate)
  ) {
    return Response.json({ error: 'Please fill in every field.' }, { status: 400 });
  }

  // CallRail captured this submission; its webhook creates the Grow lead.
  if (body.callrailCaptured === true) return Response.json({ ok: true, via: 'callrail' });

  const result = await createGrowLead({
    token,
    firstName: lead.firstName,
    lastName: lead.lastName,
    email: lead.email,
    phone: lead.phone,
    message: formatIntakeMessage(lead),
    referringUrl: FORM_URL,
    source: 'Website contact form',
  });

  if (!result.ok) {
    console.error('intake: Clio Grow lead create failed', result.status, result.body);
    return Response.json({ error: 'Something went wrong. Please call or email instead.' }, { status: 502 });
  }

  return Response.json({ ok: true, via: 'direct' });
}
