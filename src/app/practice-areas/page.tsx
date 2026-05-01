import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Practice Areas',
  description:
    'Bowlay Law handles wrongful eviction, rent control violations, and landlord harassment cases across California. Learn what cases we take and whether you qualify.',
};

const caseTypes = [
  {
    title: 'Wrongful Eviction',
    body: 'The most common case we handle. A wrongful eviction happens when a landlord gets a tenant out through means that are not legally valid — a notice with no real basis, pressure tactics, or a buyout agreement that was coerced. If you left because of something your landlord did or said, you may have a claim even if you are no longer in the unit.',
    badge: 'Most valuable',
  },
  {
    title: 'Constructive Eviction',
    body: 'When a landlord makes a unit so uninhabitable — by ignoring repairs, cutting off utilities, or creating dangerous conditions — that you had no real choice but to leave. California law treats this as an eviction even if no formal notice was given.',
    badge: null,
  },
  {
    title: 'Unlawful Rent Increases',
    body: 'Many California cities cap how much a landlord can raise the rent each year. Violations of these limits can give rise to money damages, especially under local ordinances in San Francisco, Oakland, and Los Angeles which often allow treble (triple) damages.',
    badge: null,
  },
  {
    title: 'Landlord Harassment',
    body: 'Repeated unannounced entries, verbal abuse, threats, removal of services, or any pattern of conduct designed to pressure you out of your home can be actionable as harassment. This applies whether or not you have already moved out.',
    badge: null,
  },
  {
    title: 'Notice Violations',
    body: 'Landlords must follow strict rules when issuing notices to quit or terminating a tenancy. A notice that lacks proper legal cause, fails to give required notice periods, or contains false information may be defective — and acting on it may be wrongful eviction.',
    badge: null,
  },
];

const qualifyItems = [
  { label: 'Tenancy length', detail: 'At least 12 months — the longer, the stronger the case' },
  { label: 'Rent control', detail: 'Under a local ordinance (SF, Oakland, LA, Berkeley, San Jose, Santa Barbara) or the California Tenant Protection Act' },
  { label: 'Recent action', detail: "The landlord's wrongful act happened within the last 12 months" },
  { label: 'Money damages', detail: 'You are seeking financial compensation, not just to stay in the unit' },
];

export default function PracticeAreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white px-6 py-20 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <p className="text-brand-mid text-sm font-semibold uppercase tracking-wider mb-4">
            Practice Areas
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6 text-ink">
            California tenant law — what we handle
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Bowlay Law focuses exclusively on tenant-side cases across California. All cases are
            handled on contingency — you pay nothing unless we win.
          </p>
        </div>
      </section>

      {/* Case types */}
      <section className="bg-cream px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-10">Cases we handle</h2>
          <div className="space-y-5">
            {caseTypes.map(({ title, body, badge }) => (
              <div key={title} className="bg-white rounded-2xl p-7 shadow-sm border border-border">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-display text-xl font-semibold text-ink">{title}</h3>
                  {badge && (
                    <span className="shrink-0 text-xs font-semibold bg-brand-pale text-brand-mid px-3 py-1 rounded-full border border-brand-mid/20">
                      {badge}
                    </span>
                  )}
                </div>
                <p className="text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who qualifies */}
      <section className="bg-cream-dark px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-4">Do you qualify?</h2>
          <p className="text-muted mb-10 max-w-2xl">
            The most valuable cases share a few characteristics. You do not need to check every box,
            but the more that apply, the stronger your potential claim.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {qualifyItems.map(({ label, detail }) => (
              <div key={label} className="bg-white rounded-xl p-5 border border-border">
                <p className="text-xs font-semibold text-brand uppercase tracking-wider mb-1">{label}</p>
                <p className="text-ink leading-snug">{detail}</p>
              </div>
            ))}
          </div>

          {/* Local ordinances spotlight */}
          <div className="bg-brand-pale rounded-2xl p-7">
            <h3 className="font-display text-xl font-semibold text-ink mb-3">
              Local ordinances vs. state law
            </h3>
            <p className="text-ink/75 leading-relaxed mb-4">
              California's Tenant Protection Act (AB 1482) provides a statewide floor — but cities like
              San Francisco, Oakland, Los Angeles, Berkeley, San Jose, and Santa Barbara have local
              ordinances that go further. Local ordinances typically mean:
            </p>
            <ul className="space-y-2">
              {[
                'Stricter just-cause eviction requirements',
                'Higher damage caps (often treble damages)',
                "Mandatory attorney's fees if you win",
                'Fewer property exemptions',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-ink/80">
                  <span className="text-brand font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted mt-4">
              If you rent in one of these cities, your case may be worth significantly more.
            </p>
          </div>
        </div>
      </section>

      {/* Statute of limitations warning */}
      <section className="bg-gold-pale border-y border-gold/20 px-6 py-12">
        <div className="max-w-3xl mx-auto flex gap-4 items-start">
          <span className="text-2xl mt-0.5">⏰</span>
          <div>
            <h3 className="font-semibold text-ink mb-2">Time matters — act within a year</h3>
            <p className="text-ink/70 leading-relaxed">
              Most local rent ordinances have a statute of limitations of approximately one year. If your
              landlord's wrongful action happened more than 12 months ago, your options may be limited.
              If something happened recently, reach out now rather than later.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark text-white px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Not sure if your situation fits?</h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            The free screening call is the right place to start. Cody will listen to what happened
            and give you an honest read on whether there is a case worth pursuing.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold text-ink px-8 py-4 rounded-full font-semibold hover:bg-gold-light transition-colors"
          >
            Get a Free Case Review
          </Link>
        </div>
      </section>
    </>
  );
}
