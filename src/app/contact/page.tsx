'use client';

import { trackEvent } from '@/lib/analytics';

const FILLOUT_FORM_URL = 'https://bowlaylaw.fillout.com/t/je9Kza31Mkus';

export default function ContactPage() {
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
      <section className="bg-white px-6 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h2 className="font-display text-xl font-semibold text-ink mb-3">What to expect</h2>
              <ul className="space-y-3 text-muted text-sm leading-relaxed">
                <li className="flex gap-2"><span className="text-brand font-bold mt-0.5">1.</span>Submit the short form.</li>
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

          {/* Fillout form embed */}
          <div className="lg:col-span-2">
            <iframe
              src={FILLOUT_FORM_URL}
              title="Free Case Review form"
              className="w-full bg-white"
              style={{ minHeight: 760 }}
              loading="lazy"
            />
            <p className="text-xs text-muted text-center leading-relaxed mt-4">
              Submitting this form does not create an attorney-client relationship. No legal
              advice is given until a formal engagement is established.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
