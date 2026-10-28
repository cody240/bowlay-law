// Receives CallRail's "Form Submission" webhook for the Contact page form and
// creates the lead in the Clio Grow Lead Inbox with CallRail's attribution.
//
// This is the primary path for website leads. /api/intake posts to Grow only
// when CallRail's script was not running in the visitor's browser.
//
// CallRail signs each request: Signature header = base64(HMAC-SHA1(secret, raw body)).
// Docs: https://apidocs.callrail.com/#webhooks

import { createHmac, timingSafeEqual } from 'node:crypto';
import { clean, createGrowLead, formatIntakeMessage, toE164, type IntakeFields } from '@/lib/growLead';

const FORM_URL = 'https://bowlaylaw.com/contact';

type CallRailFormWebhook = {
  id?: number | string;
  company_id?: number | string;
  form_data?: Record<string, unknown>;
  form_url?: string;
  landing_page_url?: string;
  referrer?: string;
  referring_url?: string;
  submitted_at?: string;
  first_form?: boolean;
  source?: string;
  keywords?: string;
  campaign?: string;
  medium?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
};

function verifySignature(rawBody: string, header: string | null, secret: string): boolean {
  if (!header) return false;
  const expected = createHmac('sha1', secret).update(rawBody).digest('base64');
  const a = Buffer.from(expected);
  const b = Buffer.from(header.trim());
  return a.length === b.length && timingSafeEqual(a, b);
}

// CallRail keys form_data by the field's label when it can find one, otherwise
// by the input name. Match either, ignoring case and punctuation.
function normalize(key: string): string {
  return key.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function pick(data: Record<string, unknown>, ...candidates: string[]): string {
  const wanted = new Set(candidates.map(normalize));
  for (const [key, value] of Object.entries(data)) {
    if (wanted.has(normalize(key))) return clean(value, 5000);
  }
  return '';
}

export async function POST(request: Request) {
  const token = process.env.CLIO_GROW_LEAD_TOKEN;
  const secret = process.env.CALLRAIL_WEBHOOK_SECRET;
  if (!token || !secret) {
    console.error('callrail webhook: CLIO_GROW_LEAD_TOKEN or CALLRAIL_WEBHOOK_SECRET is missing');
    return Response.json({ error: 'Not configured.' }, { status: 500 });
  }

  const rawBody = await request.text();
  if (!verifySignature(rawBody, request.headers.get('signature'), secret)) {
    console.error('callrail webhook: bad signature');
    return Response.json({ error: 'Invalid signature.' }, { status: 401 });
  }

  let payload: CallRailFormWebhook;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return Response.json({ error: 'Invalid JSON.' }, { status: 400 });
  }

  const data = payload.form_data && typeof payload.form_data === 'object' ? payload.form_data : {};

  // Honeypot: bots fill the hidden "website" field. Acknowledge and drop.
  if (pick(data, 'website')) return Response.json({ ok: true, skipped: 'honeypot' });

  const movedOutRaw = pick(data, 'movedOut', 'Have you moved out?', 'Have you moved out');
  const smsRaw = pick(data, 'smsConsent', 'SMS consent').toLowerCase();

  const lead: IntakeFields = {
    firstName: pick(data, 'First name', 'firstName') || 'Unknown',
    lastName: pick(data, 'Last name', 'lastName') || 'Unknown',
    phone: toE164(pick(data, 'Phone number', 'phone')),
    email: pick(data, 'Email address', 'email').toLowerCase(),
    city: pick(data, 'City where you rent', 'city'),
    residenceType: pick(data, 'Type of residence', 'residenceType'),
    moveInDate: pick(data, 'Approximate move-in date', 'moveInDate'),
    movedOut: /^(yes|no)$/i.test(movedOutRaw) ? movedOutRaw[0].toUpperCase() + movedOutRaw.slice(1).toLowerCase() : movedOutRaw,
    smsConsent: smsRaw === 'on' || smsRaw === 'yes' || smsRaw === 'true',
    whatHappened: pick(data, 'Briefly describe what happened', 'whatHappened'),
  };

  const message = formatIntakeMessage(lead, {
    source: clean(payload.source, 100),
    medium: clean(payload.medium, 100),
    campaign: clean(payload.campaign, 200) || clean(payload.utm_campaign, 200),
    keywords: clean(payload.keywords, 200),
    landingPage: clean(payload.landing_page_url, 500),
    referrer: clean(payload.referring_url, 500) || clean(payload.referrer, 500),
    firstForm: typeof payload.first_form === 'boolean' ? payload.first_form : undefined,
  });

  const source = clean(payload.source, 100);
  const result = await createGrowLead({
    token,
    firstName: lead.firstName,
    lastName: lead.lastName,
    email: lead.email,
    phone: lead.phone,
    message,
    referringUrl: clean(payload.form_url, 500) || FORM_URL,
    source: source ? `Website - ${source}` : 'Website contact form',
  });

  if (!result.ok) {
    console.error('callrail webhook: Clio Grow lead create failed', result.status, result.body);
    return Response.json({ error: 'Lead create failed.' }, { status: 502 });
  }

  return Response.json({ ok: true });
}
