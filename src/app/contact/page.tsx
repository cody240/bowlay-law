'use client';

import { useState, FormEvent } from 'react';
import { trackEvent } from '@/lib/analytics';

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? '';

const tenancyOptions = [
  'Less than 6 months',
  '6–12 months',
  '1–3 years',
  '3–5 years',
  '5–10 years',
  'Over 10 years',
];

const issueOptions = [
  'Wrongful eviction / improper notice',
  'Constructive eviction (forced out by conditions)',
  'Illegal rent increase',
  'Landlord harassment',
  'I moved out and think I was pushed out',
  'Other',
];

const cityOptions = [
  'San Francisco',
  'Oakland',
  'Los Angeles',
  'Berkeley',
  'San Jose',
  'Santa Barbara',
  'Other California city',
];

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!FORMSPREE_ENDPOINT) {
      setStatus('error');
      return;
    }
    setStatus('submitting');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        trackEvent('consultation_form_submit');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-white px-6 py-20 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <p className="text-brand-mid text-sm font-semibold uppercase tracking-wider mb-4">
            Free Case Review
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6 text-ink">
            Let&rsquo;s talk about what happened.
          </h1>
          <p className="text-muted text-lg leading-relaxed max-w-xl">
            Fill out the form below and Cody will call you — usually within one business day. The
            call is free, low-pressure, and takes about 15&ndash;20 minutes. No commitment required.
          </p>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="bg-cream px-6 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h2 className="font-display text-xl font-semibold text-ink mb-3">What to expect</h2>
              <ul className="space-y-3 text-muted text-sm leading-relaxed">
                <li className="flex gap-2"><span className="text-brand font-bold mt-0.5">1.</span>Submit the short form below.</li>
                <li className="flex gap-2"><span className="text-brand font-bold mt-0.5">2.</span>Cody reviews your situation and calls you back.</li>
                <li className="flex gap-2"><span className="text-brand font-bold mt-0.5">3.</span>On the call, you tell Cody what happened. He listens, asks questions, and gives you an honest read.</li>
                <li className="flex gap-2"><span className="text-brand font-bold mt-0.5">4.</span>If there is a case worth taking, Cody will explain next steps. If not, he will do his best to point you somewhere useful.</li>
              </ul>
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="font-semibold text-ink mb-3 text-sm">Prefer to reach out directly?</h3>
              <div className="space-y-2 text-sm">
                <a
                  href="tel:+14159095920"
                  onClick={() => trackEvent('phone_click', { location: 'contact_page' })}
                  className="flex items-center gap-2 text-brand hover:text-brand-mid transition-colors font-medium"
                >
                  📞 (415) 909-5920
                </a>
                <a
                  href="mailto:cody@bowlaylaw.com"
                  onClick={() => trackEvent('email_click', { location: 'contact_page' })}
                  className="flex items-center gap-2 text-brand hover:text-brand-mid transition-colors font-medium"
                >
                  ✉️ cody@bowlaylaw.com
                </a>
              </div>
            </div>

            <div className="bg-gold-pale rounded-xl p-4 text-sm text-ink/70 leading-relaxed border border-gold/20">
              <strong className="text-ink">No fee unless we win.</strong> Bowlay Law is a contingency-fee practice. You will never be asked for money upfront.
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {status === 'success' ? (
              <div className="bg-brand-pale rounded-2xl p-10 text-center">
                <div className="text-4xl mb-4">✅</div>
                <h2 className="font-display text-2xl font-bold text-ink mb-3">
                  Got it — Cody will be in touch.
                </h2>
                <p className="text-muted leading-relaxed">
                  He will give you a call within one business day. In the meantime, feel free to
                  gather any documents that might be helpful (lease, notices, texts from your
                  landlord).
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="name">
                      Full name <span className="text-brand-mid">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-xl border border-border bg-white px-4 py-3 text-ink placeholder:text-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="phone">
                      Phone number <span className="text-brand-mid">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="w-full rounded-xl border border-border bg-white px-4 py-3 text-ink placeholder:text-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                      placeholder="(415) 555-0100"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="email">
                    Email address <span className="text-brand-mid">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-ink placeholder:text-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                    placeholder="jane@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="city">
                      City where you rent <span className="text-brand-mid">*</span>
                    </label>
                    <select
                      id="city"
                      name="city"
                      required
                      className="w-full rounded-xl border border-border bg-white px-4 py-3 text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                    >
                      <option value="">Select a city</option>
                      {cityOptions.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="tenancy">
                      How long have you lived there? <span className="text-brand-mid">*</span>
                    </label>
                    <select
                      id="tenancy"
                      name="tenancy_length"
                      required
                      className="w-full rounded-xl border border-border bg-white px-4 py-3 text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                    >
                      <option value="">Select one</option>
                      {tenancyOptions.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="issue">
                    What type of issue are you dealing with? <span className="text-brand-mid">*</span>
                  </label>
                  <select
                    id="issue"
                    name="issue_type"
                    required
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                  >
                    <option value="">Select one</option>
                    {issueOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="moved_out">
                    Have you already moved out?
                  </label>
                  <select
                    id="moved_out"
                    name="moved_out"
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                  >
                    <option value="">Select one</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No, still in the unit</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="description">
                    Briefly describe what happened <span className="text-brand-mid">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    required
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-ink placeholder:text-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 resize-none"
                    placeholder="Tell Cody what happened in your own words. Don't worry about legal language — just explain the situation."
                  />
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-600 bg-red-50 rounded-xl px-4 py-3 border border-red-200">
                    {FORMSPREE_ENDPOINT
                      ? 'Something went wrong. Please try again or call (415) 909-5920.'
                      : 'The contact form is not yet configured. Please email cody@bowlaylaw.com or call (415) 909-5920.'}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-brand-dark text-white py-4 rounded-full font-semibold text-lg hover:bg-brand transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending…' : 'Request Free Case Review'}
                </button>

                <p className="text-xs text-muted text-center leading-relaxed">
                  Submitting this form does not create an attorney-client relationship. No legal
                  advice is given until a formal engagement is established.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
