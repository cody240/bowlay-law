'use client';

import { useState, type FormEvent } from 'react';
import { trackEvent } from '@/lib/analytics';
import { EMAIL, PHONE_DISPLAY, PHONE_TEL } from '@/lib/contact';

const RESIDENCE_TYPES = ['Single-family home', 'Apartment', 'Condo', 'In-law unit', 'Other'];

const inputClass =
  'w-full rounded-xl border border-border bg-white px-4 py-3 text-ink placeholder:text-muted/50 focus:border-brand-mid focus:outline-none focus:ring-2 focus:ring-brand-light/50';
const labelClass = 'block text-sm font-semibold text-ink mb-1.5';
const optional = <span className="font-normal text-muted">(optional)</span>;

type Step = 'quick' | 'details' | 'done';
type Status = 'idle' | 'sending' | 'error';

async function post(body: Record<string, unknown>) {
  const res = await fetch('/api/intake', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'Something went wrong.');
  return data as { contactId?: string; token?: string };
}

function ErrorNote({ message }: { message: string }) {
  return (
    <p className="text-sm text-red-700" role="alert">
      {message} You can also call <a href={PHONE_TEL} className="underline">{PHONE_DISPLAY}</a> or
      email <a href={`mailto:${EMAIL}`} className="underline">{EMAIL}</a>.
    </p>
  );
}

// Two steps so the lead is captured early: step 1 (name, phone, what happened) creates the
// lead in GoHighLevel; step 2 (optional details) adds to it. `location` tags the GA4 events
// with the page the lead came from. form_submit fires on step 1, the lead itself.
export default function IntakeForm({ location = 'contact_page' }: { location?: string }) {
  const [step, setStep] = useState<Step>('quick');
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  const [lead, setLead] = useState<{ contactId?: string; token?: string }>({});

  async function submitQuick(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setStatus('sending');
    setError('');
    try {
      const data = await post({
        step: 'quick',
        firstName: form.get('firstName'),
        phone: form.get('phone'),
        whatHappened: form.get('whatHappened'),
        smsConsent: form.get('smsConsent') === 'on',
        website: form.get('website'),
      });
      trackEvent('form_submit', { location });
      setLead(data);
      setStatus('idle');
      // Honeypot hits get no contact back; nothing to add details to.
      setStep(data.contactId ? 'details' : 'done');
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  async function submitDetails(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setStatus('sending');
    setError('');
    try {
      await post({
        step: 'details',
        ...lead,
        lastName: form.get('lastName'),
        email: form.get('email'),
        city: form.get('city'),
        residenceType: form.get('residenceType'),
        moveInDate: form.get('moveInDate'),
        movedOut: form.get('movedOut'),
      });
      trackEvent('form_details_submit', { location });
      setStep('done');
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  if (step === 'done') {
    return (
      <div className="rounded-xl border border-border bg-cream-dark p-10 text-center">
        <h2 className="font-display text-2xl font-semibold text-ink mb-3">Thank you. We got it.</h2>
        <p className="text-muted leading-relaxed">
          Cody will review what you sent and call you, usually within one business day.
        </p>
      </div>
    );
  }

  if (step === 'details') {
    return (
      <form onSubmit={submitDetails} className="space-y-5">
        <div className="rounded-xl bg-cream-dark p-5">
          <p className="font-display text-xl font-semibold text-ink mb-1">Got it. Cody will call you.</p>
          <p className="text-muted text-sm leading-relaxed">
            Your request is in. If you have a minute, these details help Cody prepare for the call.
            All optional.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="lastName" className={labelClass}>Last name {optional}</label>
            <input id="lastName" name="lastName" autoComplete="family-name" className={inputClass} />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>Email address {optional}</label>
            <input id="email" name="email" type="email" autoComplete="email" className={inputClass} />
          </div>
          <div>
            <label htmlFor="city" className={labelClass}>City where you rent {optional}</label>
            <input id="city" name="city" autoComplete="address-level2" className={inputClass} />
          </div>
          <div>
            <label htmlFor="residenceType" className={labelClass}>Type of residence {optional}</label>
            <select id="residenceType" name="residenceType" defaultValue="" className={inputClass}>
              <option value="">Select one</option>
              {RESIDENCE_TYPES.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="moveInDate" className={labelClass}>Approximate move-in date {optional}</label>
            <input id="moveInDate" name="moveInDate" type="date" className={inputClass} />
          </div>
          <fieldset>
            <legend className={labelClass}>Have you moved out? {optional}</legend>
            <div className="flex gap-6 pt-2.5">
              {['Yes', 'No'].map((option) => (
                <label key={option} className="flex items-center gap-2 text-ink">
                  <input type="radio" name="movedOut" value={option} className="accent-brand-dark" />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        {status === 'error' && <ErrorNote message={error} />}

        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <button
            type="submit"
            disabled={status === 'sending'}
            className="bg-brand-dark text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand transition-colors disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending…' : 'Send details'}
          </button>
          <button
            type="button"
            onClick={() => {
              trackEvent('form_details_skip', { location });
              setStep('done');
            }}
            className="text-sm font-semibold text-muted underline hover:text-ink"
          >
            Skip, I&rsquo;ll tell Cody on the call
          </button>
        </div>
      </form>
    );
  }

  return (
    <form onSubmit={submitQuick} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstName" className={labelClass}>First name</label>
          <input id="firstName" name="firstName" required autoComplete="given-name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone number</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="whatHappened" className={labelClass}>Briefly, what happened?</label>
        <textarea
          id="whatHappened"
          name="whatHappened"
          required
          rows={4}
          placeholder="e.g. My landlord is evicting me to move in, or raised my rent 15%"
          className={inputClass}
        />
      </div>

      {/* Honeypot: hidden from people, filled by bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <label className="flex items-start gap-3 text-sm text-muted leading-relaxed">
        <input type="checkbox" name="smsConsent" className="mt-1 accent-brand-dark" />
        <span>
          I agree to receive text messages from Bowlay Law about my inquiry. Msg &amp; data rates may
          apply. Reply STOP to opt out. (Optional)
        </span>
      </label>

      {status === 'error' && <ErrorNote message={error} />}

      <div>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full sm:w-auto bg-brand-dark text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand transition-colors disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending…' : 'Request my free case review'}
        </button>
        <p className="text-xs text-muted mt-2">Takes about 30 seconds. Free and confidential.</p>
      </div>
    </form>
  );
}
