// Receives the Contact page form and creates a lead in the Clio Grow Lead
// Inbox. The Grow lead capture token stays server-side (CLIO_GROW_LEAD_TOKEN).
// Endpoint reference: https://docs.developers.clio.com/guides/clio-grow/lead-inbox-api/

const GROW_LEAD_INBOX = 'https://grow.clio.com/inbox_leads';
const LEAD_SOURCE = 'Website contact form';
const FORM_URL = 'https://bowlaylaw.com/contact';

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

// Normalize bare 10-digit US numbers to E.164; leave anything else as typed.
function toE164(raw: string): string {
  const digits = raw.replace(/\D/g, '');
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
  return raw;
}

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

  // Grow's inbox lead has one free-text field, so the intake answers go there.
  const message = [
    `City where you rent: ${lead.city}`,
    `Type of residence: ${lead.residenceType}`,
    `Approximate move-in date: ${lead.moveInDate}`,
    `Moved out: ${lead.movedOut}`,
    `SMS consent: ${body.smsConsent === true ? 'Yes' : 'No'}`,
    '',
    'What happened:',
    lead.whatHappened,
  ].join('\n');

  const res = await fetch(GROW_LEAD_INBOX, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      inbox_lead: {
        from_first: lead.firstName,
        from_last: lead.lastName,
        from_email: lead.email,
        from_phone: lead.phone,
        from_message: message,
        referring_url: FORM_URL,
        from_source: LEAD_SOURCE,
      },
      inbox_lead_token: token,
    }),
  });

  if (!res.ok) {
    const data = await res.text().catch(() => '');
    console.error('intake: Clio Grow lead create failed', res.status, data);
    return Response.json({ error: 'Something went wrong. Please call or email instead.' }, { status: 502 });
  }

  return Response.json({ ok: true });
}
