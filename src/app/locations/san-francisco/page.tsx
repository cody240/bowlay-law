import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'San Francisco Tenant Rights Attorney | Bowlay Law',
  description:
    'Bowlay Law represents San Francisco tenants under the SF Rent Ordinance (Chapter 37). Wrongful eviction, OMI, Ellis Act, constructive eviction, rent control violations, and tenant harassment. No fee unless we win.',
  keywords: [
    'San Francisco tenant rights attorney',
    'SF wrongful eviction lawyer',
    'San Francisco rent control attorney',
    'owner move-in eviction SF lawyer',
    'Ellis Act attorney San Francisco',
    'tenant harassment attorney SF',
  ],
  openGraph: {
    type: 'article',
    url: 'https://bowlaylaw.com/locations/san-francisco',
    title: 'San Francisco Tenant Rights Attorney | Bowlay Law',
    description:
      'Cases under the SF Rent Ordinance (Chapter 37). Wrongful eviction, OMI, Ellis Act, rent control, and harassment claims. No fee unless we win.',
  },
};

const topics = [
  {
    title: 'Wrongful Eviction',
    description: 'Your landlord got you out through means that weren't legally valid.',
    href: '/locations/san-francisco/wrongful-eviction',
  },
  {
    title: 'Owner Move-In (OMI)',
    description: 'Your landlord said they or a relative needed the unit — and then didn't move in, or moved out early.',
    href: '/locations/san-francisco/omi-eviction',
  },
  {
    title: 'Ellis Act',
    description: 'Your landlord withdrew the building from the rental market.',
    href: '/locations/san-francisco/ellis-act',
  },
  {
    title: 'Constructive Eviction',
    description: 'Conditions in your unit became so bad you had no real choice but to leave.',
    href: '/locations/san-francisco/constructive-eviction',
  },
  {
    title: 'Rent Control Violations',
    description: 'Your rent was raised beyond what the ordinance allows.',
    href: '/locations/san-francisco/rent-control',
  },
  {
    title: 'Tenant Harassment',
    description: "Your landlord's conduct was designed to pressure you out.",
    href: '/locations/san-francisco/tenant-harassment',
  },
];

const process = [
  {
    step: '01',
    title: 'Free screening call',
    body: '15–20 minutes. Cody listens to what happened, asks about your rent and tenancy, and tells you honestly whether there\'s a case.',
  },
  {
    step: '02',
    title: 'Case evaluation',
    body: 'If the facts support a claim, Cody reviews any notices, Rent Board records, and evidence — typically within two weeks of the screening call.',
  },
  {
    step: '03',
    title: 'Engagement on contingency',
    body: 'No upfront fee. Bowlay Law takes the case on contingency — you pay nothing unless we win.',
  },
  {
    step: '04',
    title: 'Filing → settlement',
    body: 'Most SF wrongful eviction cases settle within 10–18 months. Cody handles filing, discovery, negotiation, and — when necessary — trial.',
  },
];

export default function SanFranciscoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white px-6 py-20 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <p className="text-brand-mid text-sm font-semibold tracking-wider mb-4">
            San Francisco
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4 text-ink">
            San Francisco Tenant Rights Attorney
          </h1>
          <p className="text-muted text-lg leading-relaxed mb-8 max-w-2xl">
            Cases under the SF Rent Ordinance (Chapter 37). No fee unless we win.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-block bg-brand-dark text-white px-8 py-4 rounded-full font-semibold hover:bg-brand transition-colors"
            >
              Get a Free Case Review
            </Link>
            <a
              href="tel:+14159095920"
              className="inline-block border-2 border-brand-dark/25 text-brand-dark px-8 py-4 rounded-full font-semibold hover:bg-brand-dark/5 transition-colors text-center"
            >
              (415) 909-5920
            </a>
          </div>
        </div>
      </section>

      {/* Why SF cases are valuable */}
      <section className="bg-cream-dark px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-6">
            Why SF tenant cases are valuable
          </h2>
          <div className="space-y-4 text-muted leading-relaxed max-w-3xl">
            <p>
              San Francisco has had one of the strongest tenant ordinances in the country
              since 1979. For long-term tenants, the gap between their controlled rent and
              current SF market rates is often the core of a wrongful eviction case — and
              that gap can be substantial. A tenant paying $1,900/month for a unit renting
              at $5,200 on the open market is sitting on a rent differential that becomes
              the foundation of actual damages.
            </p>
            <p>
              That&rsquo;s before the multiplier. SF Admin Code § 37.9(f) requires treble
              damages — not less than 3× actual damages — for wrongful evictions in
              violation of the Rent Ordinance. Attorney&rsquo;s fees are recovered separately
              by the prevailing party. No-fault evictions (OMI, Ellis Act, demolition)
              also require substantial relocation assistance, and just cause is required
              for almost all evictions regardless of whether the unit is rent-controlled.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Treble damages', value: '3× actual' },
              { label: "Attorney's fees", value: 'Mandatory' },
              { label: 'Just cause required', value: 'All units' },
              { label: 'Established', value: '1979' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white rounded-xl p-4 border border-border text-center">
                <p className="font-display text-xl font-bold text-ink mb-1">{value}</p>
                <p className="text-xs text-muted">{label}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-muted text-sm">
            For the full statutory framework — every just cause, exemption, and exception — see our{' '}
            <Link href="/resources/local-ordinances/san-francisco" className="text-brand underline hover:text-brand-mid">
              SF Rent Ordinance reference (Chapter 37)
            </Link>
            .
          </p>
        </div>
      </section>

      {/* What I handle */}
      <section className="bg-white px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-10">What I handle in SF</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topics.map(({ title, description, href }) => (
              <Link
                key={href}
                href={href}
                className="group rounded-xl border border-border p-6 bg-cream-dark hover:border-brand-dark hover:bg-white transition-colors"
              >
                <h3 className="font-display text-lg font-semibold text-ink mb-2 group-hover:text-brand-dark transition-colors">
                  {title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{description}</p>
                <p className="mt-4 text-sm font-medium text-brand-dark group-hover:text-brand transition-colors">
                  Learn more →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How cases work */}
      <section className="bg-cream-dark px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-10">How SF cases work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map(({ step, title, body }) => (
              <div key={step}>
                <p className="font-display text-4xl font-bold text-brand-dark/20 mb-3">{step}</p>
                <h3 className="font-display text-base font-semibold text-ink mb-2">{title}</h3>
                <p className="text-muted text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Bowlay Law */}
      <section className="bg-white px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-6">Why work with Bowlay Law on an SF case</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
            {[
              { label: 'Plaintiff-side only', body: 'Practice focuses on California tenant law. No landlord work, no conflicts.' },
              { label: 'SF Rent Board familiar', body: 'The local procedures, filing requirements, and common landlord tactics are known quantities.' },
              { label: 'Direct attorney communication', body: 'Cody handles the case directly. No associate handoff, no junior staff fielding your calls.' },
              { label: 'Contingency only', body: 'No upfront fee, no hourly billing. You pay nothing unless we win.' },
            ].map(({ label, body }) => (
              <div key={label} className="bg-cream-dark rounded-xl p-5 border border-border">
                <p className="font-medium text-ink text-sm mb-1.5">{label}</p>
                <p className="text-muted text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-dark text-white px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            San Francisco tenant? Let&rsquo;s talk.
          </h2>
          <p className="text-white/70 mb-2 leading-relaxed">
            Free screening call. 15–20 minutes. No commitment.
          </p>
          <p className="text-white/50 text-sm mb-8">
            No fee unless we win &middot; Contingency fee &middot; SF tenants only
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-brand-dark px-8 py-4 rounded-full font-semibold hover:bg-cream transition-colors"
            >
              Get a Free Case Review
            </Link>
            <a
              href="tel:+14159095920"
              className="inline-block border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              (415) 909-5920
            </a>
          </div>
          <p className="mt-12 text-white/30 text-xs">
            For attorneys, journalists, and tenants who want the full statutory text:{' '}
            <Link href="/resources/local-ordinances/san-francisco" className="underline hover:text-white/60 transition-colors">
              SF Rent Ordinance Reference (Chapter 37) →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
