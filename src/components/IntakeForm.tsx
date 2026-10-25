'use client';

import { useState, type FormEvent } from 'react';
import { trackEvent } from '@/lib/analytics';

const RESIDENCE_TYPES = ['Single-family home', 'Apartment', 'Condo', 'In-law unit', 'Other'];

const inputClass =
  'w-full rounded-xl border border-border bg-white px-4 py-3 text-ink placeholder:text-muted/50 focus:border-brand-mid focus:outline-none focus:ring-2 focus:ring-brand-light/50';
const labelClass = 'block text-sm font-semibold text-ink mb-1.5';

type Status = 'idle' | 'sending' | 'sent' | 'error';

// `location` tags the form_submit event so GA4 shows which page the lead came from.
export default function IntakeForm({ location = 'contact_page' }: { location?: string }) {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setStatus('sending');
    setError('');

    try {
      const res = await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.get('firstName'),
          lastName: form.get('lastName'),
          phone: form.get('phone'),
          email: form.get('email'),
          city: form.get('city'),
          residenceType: form.get('residenceType'),
          moveInDate: form.get('moveInDate'),
          movedOut: form.get('movedOut'),
          whatHappened: form.get('whatHappened'),
          smsConsent: form.get('smsConsent') === 'on',
          website: form.get('website'),
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Something went wrong.');
      }
      setStatus('sent');
      trackEvent('form_submit', { location });
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-xl border border-border bg-cream-dark p-10 text-center">
        <h2 className="font-display text-2xl font-semibold text-ink mb-3">Thank you. We got it.</h2>
        <p className="text-muted leading-relaxed">
          Cody will review what you sent and call you, usually within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstName" className={labelClass}>First name</label>
          <input id="firstName" name="firstName" required autoComplete="given-name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>Last name</label>
          <input id="lastName" name="lastName" required autoComplete="family-name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone number</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email address</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
        </div>
        <div>
          <label htmlFor="city" className={labelClass}>City where you rent</label>
          <input id="city" name="city" required autoComplete="address-level2" className={inputClass} />
        </div>
        <div>
          <label htmlFor="residenceType" className={labelClass}>Type of residence</label>
          <select id="residenceType" name="residenceType" required defaultValue="" className={inputClass}>
            <option value="" disabled>Select one</option>
            {RESIDENCE_TYPES.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="moveInDate" className={labelClass}>Approximate move-in date</label>
          <input id="moveInDate" name="moveInDate" type="date" required className={inputClass} />
        </div>
        <fieldset>
          <legend className={labelClass}>Have you moved out?</legend>
          <div className="flex gap-6 pt-2.5">
            {['Yes', 'No'].map((option) => (
              <label key={option} className="flex items-center gap-2 text-ink">
                <input type="radio" name="movedOut" value={option} required className="accent-brand-dark" />
                {option}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <div>
        <label htmlFor="whatHappened" className={labelClass}>Briefly describe what happened</label>
        <textarea id="whatHappened" name="whatHappened" required rows={6} className={inputClass} />
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

      {status === 'error' && (
        <p className="text-sm text-red-700" role="alert">
          {error} You can also call <a href="tel:+14159095920" className="underline">(415) 909-5920</a> or
          email <a href="mailto:cody@bowlaylaw.com" className="underline">cody@bowlaylaw.com</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="bg-brand-dark text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand transition-colors disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Request my free case review'}
      </button>
    </form>
  );
}
