import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'San Francisco Wrongful Eviction Attorney | Bowlay Law',
  description:
    'Was your SF eviction unlawful? Bowlay Law represents San Francisco tenants in wrongful eviction cases under the Rent Ordinance — treble damages, attorney fees, relocation assistance. No fee unless we win.',
  keywords: [
    'San Francisco wrongful eviction attorney',
    'wrongful eviction SF',
    'SF Rent Ordinance violation',
    'owner move-in fraud San Francisco',
    'Ellis Act abuse attorney',
    'constructive eviction San Francisco',
    'San Francisco tenant lawyer',
  ],
  openGraph: {
    type: 'article',
    url: 'https://bowlaylaw.com/locations/san-francisco/wrongful-eviction',
    title: 'San Francisco Wrongful Eviction Attorney | Bowlay Law',
    description:
      'Bowlay Law represents SF tenants whose landlords violated the Rent Ordinance — through fraudulent OMI evictions, Ellis Act abuse, constructive eviction, and more.',
  },
};

const scenarios = [
  {
    label: 'Owner move-in fraud',
    description:
      'The landlord claimed they or a relative needed to move in — but never did, moved out within 36 months, or immediately re-rented the unit at a higher price. This is the most litigated wrongful eviction in SF.',
    signals: [
      'Unit re-listed on Craigslist or Zillow within months of the eviction',
      'Owner or relative never moved in',
      'Owner moved in but left before 36 continuous months',
      'Same unit offered at market rate shortly after you left',
    ],
  },
  {
    label: 'Ellis Act abuse',
    description:
      "The landlord claimed to be withdrawing the building from the rental market — but didn't actually go out of the rental business, re-rented units, or converted them to TICs or Airbnbs.",
    signals: [
      'Units were re-rented within the restricted period',
      'Building was converted but no actual demolition or ownership change',
      'Landlord retained and rented individual units in the building',
    ],
  },
  {
    label: 'Constructive eviction',
    description:
      "The landlord didn't serve a formal notice — instead, they made your home unlivable through neglect, harassment, or deliberate interference until you felt you had no choice but to leave.",
    signals: [
      'Heat, hot water, or essential utilities were cut off or not repaired',
      'Unit had persistent habitability issues the landlord refused to fix',
      'Repeated unannounced entries, threats, or intimidation',
      'Locks were changed or belongings were moved',
    ],
  },
  {
    label: 'Unlawful rent increase used to force a move-out',
    description:
      'The landlord imposed rent increases beyond what the Rent Ordinance allows — sometimes dramatically — making the unit unaffordable and effectively forcing the tenant out.',
    signals: [
      'Rent raised more than the allowable annual CPI-based amount',
      'Multiple increases in a single year',
      'Passthroughs imposed without Rent Board certification',
    ],
  },
  {
    label: 'Sham capital improvement eviction',
    description:
      'The landlord claimed the unit needed to be vacated for capital improvements or substantial rehabilitation — but the work was not necessary, was completed far faster than represented, or the unit was re-rented to a new tenant at market rate.',
    signals: [
      'Work was minimal but you were told to leave for months',
      'You were not offered the right to return at your prior rent',
      'New tenant moved in at a significantly higher rent soon after',
    ],
  },
  {
    label: 'No valid just cause in the notice',
    description:
      "The landlord served a termination notice without stating a valid just cause under § 37.9 — or stated a cause that wasn't actually the dominant reason for the eviction.",
    signals: [
      'Notice said "lease expired" or "end of tenancy" with no cause stated',
      "Stated cause doesn't match the facts (e.g., claimed nonpayment when rent was paid)",
      'Notice was served shortly after you complained about repairs or conditions',
    ],
  },
];

const recoveries = [
  {
    label: 'Actual damages',
    items: [
      'Difference between your controlled rent and what you now pay — for years',
      'Moving costs',
      'Temporary housing and relocation expenses',
      'Emotional distress',
      'Loss of a below-market tenancy you could have held for decades',
    ],
  },
  {
    label: 'Treble damages',
    highlight: '3× actual damages',
    description:
      'Available under § 37.9(f) for wrongful evictions in violation of the Rent Ordinance. This multiplier — on top of an already large actual damages number — is what makes SF wrongful eviction cases among the most valuable in California.',
  },
  {
    label: "Attorney's fees",
    description:
      'The prevailing party recovers reasonable attorney\'s fees and costs by court order. This means Bowlay Law can take your case on contingency — you pay nothing unless we win, and the landlord pays our fees when we do.',
  },
  {
    label: 'Relocation assistance',
    description:
      'For certain no-fault evictions (OMI, Ellis Act, capital improvements), the landlord was required to pay relocation assistance when they served the notice. If they failed to pay — or underpaid — that is a separate, additional violation.',
  },
  {
    label: 'Injunctive relief',
    description:
      "If you haven't left yet, a court can order the landlord to stop the eviction. This is most effective early — if you've received a notice and believe it's unlawful, acting quickly matters.",
  },
];

export default function SFWrongfulEvictionPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white px-6 py-20 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <p className="text-brand-mid text-sm font-semibold uppercase tracking-wider mb-4">
            San Francisco · Wrongful Eviction
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6 text-ink">
            San Francisco Wrongful Eviction Attorney
          </h1>
          <p className="text-muted text-lg leading-relaxed mb-8 max-w-2xl">
            San Francisco landlords have strong financial incentives to remove long-term
            tenants. When they do it illegally — through a fraudulent OMI, a sham Ellis Act,
            or by making your home unlivable — the Rent Ordinance gives you powerful remedies:
            treble damages, attorney fees, and relocation assistance on top.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-block bg-brand-dark text-white px-8 py-4 rounded-full font-semibold hover:bg-brand transition-colors"
            >
              Get a Free Case Review
            </Link>
            <Link
              href="/locations/san-francisco"
              className="inline-block border-2 border-brand-dark/25 text-brand-dark px-8 py-4 rounded-full font-semibold hover:bg-brand-dark/5 transition-colors"
            >
              SF Rent Ordinance Reference ↗
            </Link>
          </div>
        </div>
      </section>

      {/* What is a wrongful eviction */}
      <section className="bg-cream-dark px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-6">
            What makes an eviction wrongful in San Francisco?
          </h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              Under the SF Rent Ordinance (Admin Code § 37.9), a landlord cannot terminate a
              covered tenancy without one of 17 enumerated just causes — and the stated cause
              must be the actual, dominant reason for the eviction. An eviction is wrongful when:
            </p>
            <ul className="space-y-2 pl-1">
              {[
                'No valid just cause exists or was stated in the notice',
                'The stated just cause was pretextual — the real reason was to get the tenant out for profit',
                'The landlord failed to follow the required procedures for the just cause they claimed',
                'A no-fault eviction was initiated in bad faith (e.g., OMI where the owner never moved in)',
                'The landlord used harassment, neglect, or interference to constructively evict without serving notice',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted">
                  <span className="text-brand mt-1 shrink-0">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              The financial stakes are high on both sides. Long-term SF tenants are often paying
              hundreds or thousands less per month than current market rent. That gap — multiplied
              by years of expected tenancy, then trebled — is what determines the value of a
              wrongful eviction case.
            </p>
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="bg-white px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-4">
            Common wrongful eviction scenarios
          </h2>
          <p className="text-muted leading-relaxed mb-10">
            These are the patterns we see most often. If your situation resembles any of them,
            it is worth a conversation.
          </p>
          <div className="space-y-6">
            {scenarios.map(({ label, description, signals }) => (
              <div key={label} className="rounded-xl border border-border overflow-hidden">
                <div className="bg-cream-dark p-6">
                  <h3 className="font-display text-xl font-semibold text-ink mb-2">{label}</h3>
                  <p className="text-muted leading-relaxed">{description}</p>
                </div>
                <div className="bg-white p-5 border-t border-border">
                  <p className="text-xs font-semibold text-brand-mid uppercase tracking-wider mb-3">Signals to watch for:</p>
                  <ul className="space-y-1.5">
                    {signals.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-muted">
                        <span className="text-brand mt-0.5 shrink-0">·</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you can recover */}
      <section className="bg-white px-6 py-16 border-b-4 border-cream-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-4">
            What you can recover
          </h2>
          <p className="text-muted leading-relaxed mb-10">
            A wrongful eviction under the SF Rent Ordinance (§ 37.9(f)) entitles the tenant to
            all of the following in a civil action:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-cream-dark rounded-xl p-6 border border-border md:col-span-2">
              <div className="flex items-start gap-4">
                <div>
                  <p className="text-xs font-semibold text-brand-mid uppercase tracking-wider mb-1">Treble damages · § 37.9(f)</p>
                  <p className="font-display text-3xl font-bold text-ink mb-2">3× actual damages</p>
                  <p className="text-muted leading-relaxed">
                    The Rent Ordinance provides for damages of not less than three times actual
                    damages. For a tenant who was paying $2,000/month in a unit now worth
                    $5,000/month, the actual damages over just five years of expected tenancy
                    exceed $180,000 — trebled to over $540,000, before attorney fees. This is
                    what makes SF wrongful eviction cases among the most valuable in California.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-cream-dark rounded-xl p-6 border border-border">
              <p className="text-xs font-semibold text-brand-mid uppercase tracking-wider mb-2">Actual damages</p>
              <ul className="space-y-1.5">
                {recoveries[0].items!.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted">
                    <span className="text-brand mt-0.5 shrink-0">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-cream-dark rounded-xl p-6 border border-border">
              <p className="text-xs font-semibold text-brand-mid uppercase tracking-wider mb-2">Attorney&rsquo;s fees &amp; costs</p>
              <p className="text-muted text-sm leading-relaxed">
                The prevailing party recovers reasonable attorney&rsquo;s fees by court order.
                This is how Bowlay Law can take cases on contingency — you pay nothing upfront,
                and the landlord covers our fees when we win.
              </p>
            </div>

            <div className="bg-cream-dark rounded-xl p-6 border border-border">
              <p className="text-xs font-semibold text-brand-mid uppercase tracking-wider mb-2">Relocation assistance (if unpaid)</p>
              <p className="text-muted text-sm leading-relaxed">
                For OMI, Ellis Act, and capital improvement evictions, the landlord was required
                to pay relocation assistance when the notice was served. Failure to pay — or
                underpayment — is a separate, additional violation that adds to your recovery.
              </p>
            </div>

            <div className="bg-cream-dark rounded-xl p-6 border border-border">
              <p className="text-xs font-semibold text-brand-mid uppercase tracking-wider mb-2">Injunctive relief</p>
              <p className="text-muted text-sm leading-relaxed">
                If you haven&rsquo;t left yet, a court can order the landlord to stop the eviction
                and dismiss the case. Acting early matters — the sooner you call, the more
                options are available.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* How Bowlay Law evaluates a case */}
      <section className="bg-cream-dark px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-4">
            How we evaluate your case
          </h2>
          <p className="text-muted leading-relaxed mb-8">
            The free screening call is 15–20 minutes. Cody will ask about:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                q: 'How long have you lived there?',
                why: 'Longer tenancies mean lower controlled rent and higher actual damages — which directly drives case value.',
              },
              {
                q: 'What does the notice say?',
                why: 'The stated just cause determines the legal theory. OMI, Ellis Act, and capital improvement notices each have their own evidentiary requirements.',
              },
              {
                q: 'What is your current rent versus market rate?',
                why: 'The rent differential — multiplied over expected tenancy, then trebled — is the core of the damages calculation.',
              },
              {
                q: 'What has the landlord done since the notice?',
                why: "Whether the landlord followed through on the stated reason is often the clearest evidence of bad faith.",
              },
              {
                q: 'Have you received any relocation assistance?',
                why: 'Unpaid or underpaid relocation assistance is a standalone violation that adds to total recovery.',
              },
              {
                q: 'Has anything changed at the property?',
                why: 'Rapid re-listing, new tenants, or renovation activity can be the strongest evidence in the case.',
              },
            ].map(({ q, why }) => (
              <div key={q} className="bg-white rounded-xl p-5 border border-border">
                <p className="font-medium text-ink text-sm mb-2">{q}</p>
                <p className="text-muted text-sm leading-snug">{why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark text-white px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            Think your eviction was wrongful?
          </h2>
          <p className="text-white/70 mb-4 leading-relaxed max-w-2xl mx-auto">
            The sooner you call, the more options you have. If you are still in the unit, a
            court order can stop the eviction. If you have already left, you may still have
            years to bring a claim — but building the case starts now.
          </p>
          <p className="text-white/50 text-sm mb-8">
            No fee unless we win &middot; Free 15–20 minute screening call &middot; SF tenants only
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-brand-dark px-8 py-4 rounded-full font-semibold hover:bg-cream transition-colors"
          >
            Get a Free Case Review
          </Link>
        </div>
      </section>
    </>
  );
}
