import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SMS Terms & Privacy',
  description: 'Terms of service and privacy policy for SMS communications from Bowlay Law.',
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white px-6 py-20 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <p className="text-brand-mid text-sm font-semibold uppercase tracking-wider mb-4">
            Policies
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6 text-ink">
            SMS Terms &amp; Privacy
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Terms of service and privacy policy for SMS communications
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-cream px-6 py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink mb-4">Terms of Service</h2>
            <div className="space-y-4 text-ink/80 leading-relaxed">
              <p>
                By opting in to SMS messages from <strong>Bowlay Law</strong>, you agree to receive
                text messages for customer support, service updates, and other communications
                related to your account.
              </p>
              <p>
                You can cancel the SMS service at any time. Just text <strong>STOP</strong>. After
                you send the SMS message &ldquo;STOP&rdquo; to us, we will send you an SMS message
                to confirm that you have been unsubscribed. After this, you will no longer receive
                SMS messages from us. If you want to join again, just sign up as you did the first
                time and we will start sending SMS messages to you again.
              </p>
              <p>
                If you are experiencing issues with the messaging program, you can reply with the
                keyword <strong>HELP</strong> for more assistance.
              </p>
              <p>Carriers are not liable for delayed or undelivered messages.</p>
              <p>
                As always, message and data rates may apply for any messages sent to you from us
                and to us from you. Message frequency varies. If you have any questions about your
                text plan or data plan, it is best to contact your wireless provider.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-ink mb-4">Privacy Policy</h2>
            <div className="space-y-4 text-ink/80 leading-relaxed">
              <p>
                <strong>Bowlay Law</strong> does not share mobile numbers, text messaging
                originator opt-in data, or consent with any third parties or affiliates for
                marketing or promotional purposes.
              </p>
              <p>
                Mobile information may be shared only with subcontractors and service providers
                that support the delivery of SMS services, such as messaging platforms,
                telecommunications providers, or customer support vendors. This information is
                used solely to provide and operate the messaging service.
              </p>
              <p>
                All other use case categories exclude text messaging originator opt-in data and
                consent. This information will not be shared with any third parties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream-dark px-6 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-ink mb-4">
            Questions?
          </h2>
          <p className="text-muted mb-8">
            Email Cody directly, or use the contact form. He will get back to you personally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-brand-dark text-white px-8 py-4 rounded-full font-semibold hover:bg-brand transition-colors"
            >
              Contact Bowlay Law
            </Link>
            <a
              href="mailto:cody@bowlaylaw.com"
              className="border-2 border-brand-dark text-brand-dark px-8 py-4 rounded-full font-semibold hover:bg-brand-pale transition-colors"
            >
              cody@bowlaylaw.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
