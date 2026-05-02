import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'San Francisco Owner Move-In Eviction Attorney | Bowlay Law',
  description:
    'Facing an owner move-in eviction in San Francisco? Bowlay Law represents tenants in fraudulent OMI cases — treble damages, attorney fees, 5-year statute of limitations. No fee unless we win.',
  keywords: [
    'San Francisco owner move-in eviction attorney',
    'OMI eviction SF',
    'fraudulent owner move-in San Francisco',
    'SF Rent Ordinance 37.9(a)(8)',
    'owner move-in fraud attorney',
    'San Francisco tenant lawyer',
  ],
  openGraph: {
    type: 'article',
    url: 'https://bowlaylaw.com/locations/san-francisco/omi-eviction',
    title: 'San Francisco Owner Move-In Eviction Attorney | Bowlay Law',
    description:
      'Owner move-in is the most commonly abused eviction ground in SF. Bowlay Law investigates fraudulent OMIs and recovers treble damages for displaced tenants.',
  },
};

const requirements = [
  {
    rule: 'Good faith intent',
    detail:
      'The landlord must genuinely intend for the owner or qualifying relative to occupy the unit — not use the notice as a pretext to re-rent at market rate.',
  },
  {
    rule: 'Qualifying relative',
    detail:
      'Only the owner, grandparent, grandchild, parent, child, brother, sister, or the spouse or domestic partner of such relatives qualifies. The relative must occupy the same building (for non-owner relatives).',
  },
  {
    rule: 'Minimum ownership interest',
    detail:
      'The owner must hold at least 25% interest in the property — or 10% if they became an owner of record on or before February 21, 1991.',
  },
  {
    rule: 'No comparable vacant unit',
    detail:
      'The landlord may not use OMI if a comparable vacant unit exists in the building, or if one becomes available before possession is recovered. If a comparable unit does become available, the landlord must rescind the notice.',
  },
  {
    rule: 'Declaration under penalty of perjury',
    detail:
      'The notice must attach a Rent Board form and a signed declaration stating the good faith intent, the intended occupant\'s name, and their relationship to the owner.',
  },
  {
    rule: '36-month occupancy',
    detail:
      'The owner or relative must actually move in within 3 months of recovering possession and occupy the unit as their principal residence for at least 36 continuous months.',
  },
  {
    rule: 'Statements of occupancy',
    detail:
      'The landlord must file sworn statements of occupancy with the Rent Board — within 90 days of service, every 90 days until possession is recovered, then annually for 5 years after recovery. Failure to file triggers administrative penalties.',
  },
  {
    rule: 'One OMI unit per building (owner occupancy)',
    detail:
      'Once a unit in a building has been used for owner occupancy under § 37.9(a)(8)(i), all future owner occupancies must be in that same unit — no other unit in the building can ever be used for that purpose.',
  },
];

const redFlags = [
  'The unit was re-listed on Craigslist, Zillow, or Airbnb within months of your departure',
  'The owner or relative named in the notice never moved into the unit',
  'The owner or relative moved in briefly then vacated before completing 36 months',
  'You were offered a cash payment to leave before a formal notice was served',
  'The building was listed for sale, converted to TICs, or permitted for condo conversion shortly after the eviction',
  'The landlord owns multiple units and the claimed "need" for your specific unit was implausible',
  'The notice lacked the required Rent Board form or declaration under perjury',
  'Statements of occupancy were not filed with the Rent Board as required',
];

export default function SFOMIPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white px-6 py-20 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <p className="text-brand-mid text-sm font-semibold uppercase tracking-wider mb-4">
            San Francisco · Owner Move-In Eviction
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6 text-ink">
            San Francisco Owner Move-In Eviction Attorney
          </h1>
          <p className="text-muted text-lg leading-relaxed mb-8 max-w-2xl">
            Owner move-in is the most commonly abused eviction ground in San Francisco. The
            ordinance allows it — but it comes with strict requirements the landlord must
            actually satisfy. When they don&rsquo;t, the eviction is wrongful and the remedies
            are significant.
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

      {/* What is OMI */}
      <section className="bg-cream-dark px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-6">What is an owner move-in eviction?</h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              Under SF Admin Code § 37.9(a)(8), a landlord may evict a tenant if the owner or
              a qualifying relative genuinely intends to occupy the unit as their principal
              residence for at least 36 continuous months. It is a no-fault just cause —
              meaning you can be evicted even if you have done nothing wrong.
            </p>
            <p>
              In theory, it is legitimate. In practice, it is the most frequently abused
              eviction tool in the city. Landlords use it to clear long-term, rent-controlled
              tenants and re-rent units at two or three times the prior rent. The financial
              incentive is enormous — and the ordinance&rsquo;s requirements are designed to
              catch that abuse.
            </p>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-white px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-4">
            What the landlord must actually do
          </h2>
          <p className="text-muted leading-relaxed mb-8">
            These are not suggestions — they are legal requirements under § 37.9(a)(8). A
            landlord who fails any of them has not completed a valid OMI eviction.
          </p>
          <div className="space-y-3">
            {requirements.map(({ rule, detail }) => (
              <div key={rule} className="flex items-start gap-4 bg-cream-dark rounded-xl p-5 border border-border">
                <span className="text-emerald-600 font-bold mt-0.5 shrink-0">✓</span>
                <div>
                  <p className="font-medium text-ink text-sm mb-1">{rule}</p>
                  <p className="text-muted text-sm leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protections */}
      <section className="bg-cream-dark px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-8">Additional tenant protections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
              <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-2">§ 37.9(i) — Senior &amp; disabled protection</p>
              <p className="text-ink font-medium text-sm mb-3">Complete bar on OMI eviction</p>
              <p className="text-emerald-900 text-sm leading-relaxed">
                A landlord cannot use OMI against a tenant who is 60 or older and has lived in
                the unit for 10 or more years, disabled (per SSI/SSP standards) and lived there
                10+ years, or catastrophically ill and lived there 5+ years.
              </p>
            </div>
            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
              <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-2">§ 37.9(j) — School-year defense</p>
              <p className="text-ink font-medium text-sm mb-3">Notice cannot be effective during the school year</p>
              <p className="text-emerald-900 text-sm leading-relaxed">
                If a child under 18 or an educator lives in the unit, has a custodial or family
                relationship with a tenant, and the tenant has been there 12+ months — the
                effective date of a termination notice cannot fall during the school year.
              </p>
            </div>
            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
              <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-2">Right of first refusal</p>
              <p className="text-ink font-medium text-sm mb-3">If the owner doesn&rsquo;t follow through</p>
              <p className="text-emerald-900 text-sm leading-relaxed">
                If the owner or relative fails to move in, vacates before completing 36 months,
                or re-rents the unit, the displaced tenant has the right to re-occupy at the
                prior controlled rent.
              </p>
            </div>
            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
              <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-2">5-year statute of limitations</p>
              <p className="text-ink font-medium text-sm mb-3">You have time — but not unlimited time</p>
              <p className="text-emerald-900 text-sm leading-relaxed">
                A wrongful OMI claim must be brought within 5 years — running from the earlier
                of 3 months after possession was recovered or the date of the landlord&rsquo;s first
                statement of occupancy filing. Don&rsquo;t wait to find out what happened to your unit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Red flags */}
      <section className="bg-white px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-4">Red flags that an OMI was fraudulent</h2>
          <p className="text-muted leading-relaxed mb-8">
            You may not know what happened to your unit after you left. But these are signals
            that the eviction was pretextual — and that you may have a case.
          </p>
          <div className="space-y-3">
            {redFlags.map((flag) => (
              <div key={flag} className="flex items-start gap-3 bg-cream-dark rounded-xl px-5 py-4 border border-border">
                <span className="text-red-400 font-bold mt-0.5 shrink-0">!</span>
                <p className="text-muted text-sm leading-snug">{flag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you can recover */}
      <section className="bg-white px-6 py-16 border-b-4 border-cream-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-8">What you can recover</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-cream-dark rounded-xl p-6 border border-border sm:col-span-2">
              <p className="text-xs font-semibold text-brand-mid uppercase tracking-wider mb-2">Treble damages · § 37.9(f)</p>
              <p className="font-display text-3xl font-bold text-ink mb-2">3× actual damages</p>
              <p className="text-muted text-sm leading-relaxed">
                The rent differential between your controlled rent and current market rate —
                projected over the expected remaining tenancy — is the core of actual damages.
                That number, trebled, is what makes SF wrongful OMI cases among the highest-value
                wrongful eviction claims in California.
              </p>
            </div>
            {[
              { label: 'Actual damages', body: 'Rent differential, moving costs, temporary housing, emotional distress, and loss of a below-market tenancy you could have held for years.' },
              { label: "Attorney's fees", body: 'The prevailing party recovers attorney\'s fees by court order. Bowlay Law takes OMI cases on contingency — you pay nothing until we win.' },
              { label: 'Unpaid relocation assistance', body: 'If the landlord failed to pay or underpaid the required relocation assistance when the notice was served, that amount is added to your recovery.' },
              { label: 'Injunctive relief', body: "If you haven't left yet, a court can order the landlord to dismiss the eviction proceeding. Acting early matters." },
            ].map(({ label, body }) => (
              <div key={label} className="bg-cream-dark rounded-xl p-5 border border-border">
                <p className="text-xs font-semibold text-brand-mid uppercase tracking-wider mb-2">{label}</p>
                <p className="text-muted text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark text-white px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            Received an owner move-in notice?
          </h2>
          <p className="text-white/70 mb-4 leading-relaxed max-w-2xl mx-auto">
            The free screening call is 15–20 minutes. Cody will ask about your tenancy, the
            notice, and what you know about what&rsquo;s happened to the unit. If there&rsquo;s a case,
            he will tell you — and if there isn&rsquo;t, he will tell you that too.
          </p>
          <p className="text-white/50 text-sm mb-8">
            No fee unless we win &middot; SF tenants only &middot; Contingency fee
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
