// Shared helpers for creating leads in the Clio Grow Lead Inbox.
// Endpoint reference: https://docs.developers.clio.com/guides/clio-grow/lead-inbox-api/

const GROW_LEAD_INBOX = 'https://grow.clio.com/inbox_leads';

export const RESIDENCE_TYPES = ['Single-family home', 'Apartment', 'Condo', 'In-law unit', 'Other'];

export type IntakeFields = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  city: string;
  residenceType: string;
  moveInDate: string;
  movedOut: string;
  smsConsent: boolean;
  whatHappened: string;
};

export type Attribution = {
  source?: string;
  medium?: string;
  campaign?: string;
  keywords?: string;
  landingPage?: string;
  referrer?: string;
  firstForm?: boolean;
};

export function clean(value: unknown, max = 200): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

// Normalize bare 10-digit US numbers to E.164; leave anything else as typed.
export function toE164(raw: string): string {
  const digits = raw.replace(/\D/g, '');
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
  return raw;
}

// Grow's inbox lead has one free-text field, so the intake answers go there.
export function formatIntakeMessage(lead: IntakeFields, attribution?: Attribution): string {
  const lines = [
    `City where you rent: ${lead.city}`,
    `Type of residence: ${lead.residenceType}`,
    `Approximate move-in date: ${lead.moveInDate}`,
    `Moved out: ${lead.movedOut}`,
    `SMS consent: ${lead.smsConsent ? 'Yes' : 'No'}`,
    '',
    'What happened:',
    lead.whatHappened,
  ];

  if (attribution) {
    const attr = [
      ['Source', attribution.source],
      ['Medium', attribution.medium],
      ['Campaign', attribution.campaign],
      ['Keywords', attribution.keywords],
      ['Landing page', attribution.landingPage],
      ['Referrer', attribution.referrer],
      ['First form from this visitor', attribution.firstForm === undefined ? '' : attribution.firstForm ? 'Yes' : 'No'],
    ].filter(([, v]) => v);
    if (attr.length) {
      lines.push('', 'Attribution (CallRail):');
      for (const [k, v] of attr) lines.push(`${k}: ${v}`);
    }
  }

  return lines.join('\n');
}

export async function createGrowLead(input: {
  token: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  referringUrl: string;
  source: string;
}): Promise<{ ok: boolean; status: number; body: string }> {
  const res = await fetch(GROW_LEAD_INBOX, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      inbox_lead: {
        from_first: input.firstName,
        from_last: input.lastName,
        from_email: input.email,
        from_phone: input.phone,
        from_message: input.message,
        referring_url: input.referringUrl,
        from_source: input.source,
      },
      inbox_lead_token: input.token,
    }),
  });
  const body = await res.text().catch(() => '');
  return { ok: res.ok, status: res.status, body };
}
