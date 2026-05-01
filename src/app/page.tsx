import type { Metadata } from 'next';
import Link from 'next/link';
import TimelineSection from '@/components/TimelineSection';
import { locationLinks } from '@/lib/locations';

export const metadata: Metadata = {
  title: 'Bowlay Law — California Tenant Rights Attorney',
  description:
    'Your landlord has lawyers. Now you can too. Bowlay Law represents California tenants in wrongful eviction and rent control cases. No fee unless we win.',
};

const howItWorks = [
  {
    step: '01',
    title: 'Tell us what happened',
    body: 'Fill out our short form — it takes about 2 minutes. No legal knowledge required.',
  },
  {
    step: '02',
    title: "We'll talk through your case",
    body: 'Cody will call you for a free, no-pressure screening call. He listens first.',
  },
  {
    step: '03',
    title: 'No fee unless we win',
    body: "If we take your case, you pay nothing upfront — ever. We only get paid when you do.",
  },
];

const situations = [
  'You were given a notice to leave without a valid legal reason',
  'Your landlord moved someone in and claimed they needed your unit',
  'Your home was made unlivable until you felt you had no choice but to go',
  'You left based on a notice that turned out to be improper or misleading',
  'Your rent was increased beyond what the law allows',
  'You were harassed or intimidated into vacating',
];

const whyPoints = [
  {
    icon: '📞',
    title: 'You will always hear from us',
    body: 'Every update, every development — Cody calls and explains. No waiting weeks to hear back.',
  },
  {
    icon: '🤝',
    title: 'Your case is a collaboration',
    body: 'Cody wants your input, your facts, your perspective. You are not a file number.',
  },
  {
    icon: '⚡',
    title: 'Tech-forward practice',
    body: 'AI-assisted note-taking, organized case files, fast turnaround. Modern tools for your benefit.',
  },
  {
    icon: '⚖️',
    title: 'Contingency fee — always',
    body: 'No retainer. No hourly rate. You pay nothing unless we win your case.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white px-6 py-24 md:py-32 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6 text-ink">
            Your landlord has lawyers.
            <br />
            <span className="text-brand">Now you can too.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted leading-relaxed mb-10 max-w-3xl mx-auto">
            Bowlay Law represents California tenants in wrongful eviction cases and rent control
            disputes. No fee unless we win.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-brand-dark text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand transition-colors"
            >
              Get a Free Case Review
            </Link>
            <Link
              href="/practice-areas"
              className="border-2 border-brand-dark/25 text-brand-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-dark/5 transition-colors"
            >
              See What We Handle
            </Link>
          </div>
          <p className="mt-6 text-sm text-muted/60">
            California tenants only &middot; Contingency fee &middot; Free screening call
          </p>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-cream-dark px-6 py-10 border-b border-border">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-4">
          <p className="text-sm font-medium text-muted shrink-0">We serve tenants in:</p>
          <div className="flex flex-wrap gap-2">
            {locationLinks.map(({ href, city }) => (
              <Link
                key={href}
                href={href}
                className="px-4 py-1.5 rounded-full border border-brand-dark/20 text-sm text-brand-dark font-medium hover:bg-brand-dark hover:text-white transition-colors"
              >
                {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* You may have a case */}
      <section className="bg-cream-dark px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink text-center mb-4">
            You may have a case if&hellip;
          </h2>
          <p className="text-center text-muted mb-12 max-w-xl mx-auto">
            These are the most common situations we see. If any sound familiar, it is worth a conversation.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {situations.map((s, i) => (
              <li key={i} className="flex items-start gap-3 bg-white rounded-xl px-5 py-4 shadow-sm">
                <span className="text-brand mt-0.5 text-lg">✓</span>
                <span className="text-ink leading-snug">{s}</span>
              </li>
            ))}
          </ul>
          <p className="text-center text-muted text-sm mt-8">
            Cases are strongest when your tenancy is at least a year old and is covered by a local rent
            ordinance or the California Tenant Protection Act.{' '}
            <Link href="/faq" className="text-brand underline hover:text-brand-mid">
              Learn more in the FAQ.
            </Link>
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-cream px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink text-center mb-12">
            How it works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map(({ step, title, body }) => (
              <div key={step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-brand-pale text-brand-dark font-display font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {step}
                </div>
                <h3 className="font-display text-xl font-semibold text-ink mb-2">{title}</h3>
                <p className="text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TimelineSection />

      {/* Why Bowlay Law */}
      <section className="bg-brand-dark text-white px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            Why Bowlay Law
          </h2>
          <p className="text-white/70 text-center mb-12 max-w-xl mx-auto">
            Cody started this practice because he believed tenants deserved a lawyer who actually
            listens — and responds.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {whyPoints.map(({ icon, title, body }) => (
              <div key={title} className="bg-brand/60 rounded-2xl p-6">
                <div className="text-2xl mb-3">{icon}</div>
                <h3 className="font-semibold text-brand-pale mb-2">{title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/about"
              className="inline-block border-2 border-brand-pale text-brand-pale px-6 py-3 rounded-full font-semibold hover:bg-brand-pale/10 transition-colors mr-4"
            >
              About Cody
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-gold text-ink px-6 py-3 rounded-full font-semibold hover:bg-gold-light transition-colors"
            >
              Get a Free Case Review
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA strip */}
      <section className="bg-gold-pale px-6 py-14">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-ink mb-3">
            Not sure if you have a case?
          </h2>
          <p className="text-muted mb-6">
            The free screening call costs you nothing and takes 15&ndash;20 minutes. Cody will tell
            you what he thinks — honestly.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-brand-dark text-white px-8 py-4 rounded-full font-semibold hover:bg-brand transition-colors"
          >
            Request a Free Case Review
          </Link>
        </div>
      </section>
    </>
  );
}
