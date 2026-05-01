import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'San Francisco Tenant Rights | SF Rent Ordinance (Chapter 37) | Bowlay Law',
  description:
    'Bowlay Law represents San Francisco tenants under the SF Rent Ordinance — rent control violations, wrongful evictions, and tenant harassment claims. No fee unless we win.',
  keywords: [
    'San Francisco tenant rights attorney',
    'SF Rent Ordinance',
    'San Francisco wrongful eviction lawyer',
    'owner move-in San Francisco',
    'Ellis Act attorney San Francisco',
    'San Francisco rent control lawyer',
    'tenant harassment attorney San Francisco',
  ],
  openGraph: {
    type: 'article',
    url: 'https://bowlaylaw.com/locations/san-francisco',
    title: 'San Francisco Tenant Rights | SF Rent Ordinance | Bowlay Law',
    description:
      'Rent control, just cause eviction protections, and tenant harassment law under the San Francisco Rent Ordinance (Administrative Code, Chapter 37).',
  },
};

const atGlance = [
  { label: 'Rent cap', value: '60% of CPI annually, hard cap 7% per year' },
  { label: 'Just cause required', value: 'Yes — 16 enumerated just causes' },
  { label: 'Relocation assistance', value: 'Yes — substantial for OMI and Ellis Act' },
  { label: 'Attorney fees', value: 'Yes — recoverable in wrongful eviction actions' },
  { label: 'Treble damages', value: 'Up to 3× actual damages for wrongful eviction' },
  { label: 'Established', value: '1979 — Administrative Code, Chapter 37' },
];

const atFaultCauses = [
  'Nonpayment of rent',
  'Breach of a material lease term after written notice to cure',
  'Maintaining or committing a nuisance after written notice',
  'Committing or permitting waste of the property',
  'Subletting or assigning the unit in violation of the lease without the owner\'s consent',
  'Refusing to permit the owner reasonable access after proper notice',
  'Using or permitting the unit to be used for an illegal purpose',
  'Criminal activity on the premises directed at the owner or other occupants',
  'An employee or service tenant whose right to occupy is tied to employment or service that has ended',
];

const noFaultCauses: { text: string; conditions?: string[] }[] = [
  {
    text: 'Owner or qualifying relative intends to occupy the unit as their primary residence (owner move-in / OMI)',
    conditions: [
      'Owner must actually move in and occupy the unit as their primary residence for at least 36 continuous months',
      'Does not apply if the owner or relative already occupies a comparable unit in the building',
      'Substantial relocation assistance required',
      'Displaced tenant has a right of first refusal to re-rent at the prior rent if the owner fails to move in, or moves out before completing 36 months of occupancy',
    ],
  },
  { text: 'Condominium conversion — tenant has a right of first refusal to purchase the unit' },
  { text: 'Demolition of the building' },
  { text: 'Capital improvements requiring temporary vacancy — tenant has a right to return at the prior rent' },
  { text: 'Substantial rehabilitation of the building' },
  {
    text: 'Ellis Act — permanent withdrawal of all units in the building from the rental market',
    conditions: [
      'Owner must withdraw the entire building, not just individual units',
      'Substantial relocation assistance required — amounts set annually by the Rent Board',
      'Displaced tenants have a right of first refusal to re-rent if units are re-rented within a specified period',
      'Owner faces restrictions on re-renting at market rate and on demolition or conversion for years after withdrawal',
    ],
  },
];

export default function SanFranciscoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white px-6 py-20 border-b border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-brand-mid text-sm font-semibold uppercase tracking-wider mb-4">
            San Francisco
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4 text-ink">
            San Francisco Tenant Rights Attorney
          </h1>
          <p className="text-muted text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
            One of the strongest tenant protection frameworks in the country.
          </p>
          <div className="inline-flex items-center gap-2 bg-cream-dark px-4 py-2 rounded-full text-sm text-muted">
            <span className="font-medium text-ink">San Francisco Rent Ordinance (Administrative Code, Chapter 37)</span>
            <span>·</span>
            <span>Est. 1979</span>
          </div>
        </div>
      </section>

      {/* At a glance */}
      <section className="bg-cream-dark px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-ink mb-6">At a glance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {atGlance.map(({ label, value }) => (
              <div key={label} className="bg-white rounded-xl p-5 border border-border shadow-sm">
                <p className="text-xs font-semibold text-brand-mid uppercase tracking-wider mb-1.5">{label}</p>
                <p className="text-ink font-medium leading-snug">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 1: OVERVIEW ── */}
      <section className="bg-white px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-6">Overview</h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              The San Francisco Rent Ordinance (Administrative Code, Chapter 37) has protected San
              Francisco tenants since 1979 and remains one of the most comprehensive local tenant
              protection laws in the United States. It covers rent control, just cause eviction
              protections, and anti-harassment requirements — each with distinct coverage rules,
              protections, and remedies.
            </p>
            <p>
              For long-term tenants, the gap between their controlled rent and current SF market
              rates is often the core of a wrongful eviction case. The ordinance provides for
              treble damages, attorney fees, and substantial relocation assistance — making SF
              wrongful eviction cases among the most valuable in California.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: RENT CONTROL ── */}
      <section className="bg-white px-6 py-16 border-b-4 border-cream-dark">
        <div className="max-w-6xl mx-auto">

          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 bg-brand-dark rounded-full" />
            <h2 className="font-display text-3xl font-bold text-ink">Rent Control</h2>
          </div>
          <p className="text-xs font-semibold text-brand-mid uppercase tracking-wider mb-2">
            Admin Code § 37.3
          </p>
          <a
            href="https://codelibrary.amlegal.com/codes/san_francisco/latest/sf_admin/0-0-0-23891"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs text-brand underline hover:text-brand-mid mb-10"
          >
            Read § 37.3 ↗
          </a>

          <div className="space-y-10">

            <div>
              <h3 className="font-display text-xl font-semibold text-ink mb-3">Covered units</h3>
              <p className="text-muted leading-relaxed mb-4">
                Rent control under the SF Rent Ordinance applies to residential rental units in
                buildings of two or more units that received a certificate of occupancy on or
                before June 13, 1979, or that have been certified by the Rent Board as having
                undergone substantial rehabilitation. This covers the large majority of San
                Francisco's older multi-unit rental housing stock.
              </p>
              <p className="text-muted leading-relaxed mb-6">
                Units built after June 13, 1979 are generally not subject to rent control under
                the Ordinance, though they may have just cause protections under AB 1482 (TPA)
                depending on the age of the building.
              </p>

              <div className="bg-cream-dark rounded-xl p-5 border border-border">
                <p className="text-sm font-semibold text-ink mb-3">Separately alienable units (§ 37.3(d)(1)) — Costa-Hawkins</p>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  A unit that is alienable separate from the title to any other dwelling unit —
                  such as a condominium or a subdivided interest — is generally <strong className="text-ink">not subject to rent control</strong>.
                  The owner may set the initial and all subsequent rental rates freely. However,
                  rent control continues to apply in the following circumstances:
                </p>
                <ul className="space-y-3">
                  {[
                    'The unit is a condominium that has not yet been sold separately by the subdivider to a bona fide purchaser for value (exception: if all other units in the project have been sold and the subdivider has occupied the last unsold unit as their primary residence for at least one year)',
                    'The preceding tenancy was terminated by the owner using a no-fault notice under Civil Code § 1946.1, or terminated upon a change in lease terms noticed under Civil Code § 827 — in those cases, rent control continues to apply for the duration of the new tenancy',
                    'The unit contains serious health, safety, fire, or building code violations (not caused by a disaster) for which a citation has been issued and which has remained unabated for six months or longer before the vacancy',
                    'The unit is a new dwelling unit created under § 37.2(r)(4)(D)',
                    'The tenancy was in effect on December 31, 1995 — those tenancies remain subject to rent control regardless',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted text-sm">
                      <span className="text-brand mt-0.5 shrink-0">·</span>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-ink mb-3">Annual allowable increase</h3>
              <div className="bg-cream-dark rounded-xl p-6 border border-border mb-4">
                <p className="text-2xl font-bold text-ink mb-1">60% of CPI</p>
                <p className="text-muted text-sm">Published each March 1 by the Rent Board · Hard cap of 7% per year</p>
              </div>
              <p className="text-muted leading-relaxed">
                On March 1 of each year, the{' '}
                <a href="https://sfrentboard.org" target="_blank" rel="noopener noreferrer" className="text-brand underline hover:text-brand-mid">Rent Board</a>
                {' '}publishes the allowable annual increase
                based on 60% of the increase in the San Francisco Consumer Price Index (CPI) for
                the preceding 12 months. In no event may the allowable annual increase exceed 7%.
                A landlord who has reported required information about their rental unit to the
                Rent Board (§ 37.15) may impose this increase once per year on the tenant's
                anniversary date.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-ink mb-3">Banking</h3>
              <p className="text-muted leading-relaxed">
                A landlord who refrains from imposing an annual increase — or imposes only a
                portion of it — may accumulate the unused amount and apply it on subsequent
                rent increase anniversary dates.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-ink mb-3">Additional passthroughs</h3>
              <p className="text-muted leading-relaxed mb-4">
                Beyond the annual allowable increase, landlords may petition the Rent Board to
                pass through certain additional costs to tenants. These require Board certification
                or approval and are subject to their own caps and procedures:
              </p>
              <ul className="space-y-2">
                {[
                  'Capital improvements, rehabilitation, energy conservation, and renewable energy improvements (certified by the Board under §§ 37.7 and 37.8B; capped at 10% in any 12-month period for seismic work)',
                  'Utility costs (gas and electricity) as provided under § 37.2(q)',
                  'Water bill charges attributable to excess use penalties or rate increases from the Water System Improvement Revenue Bonds (November 2002 election) — up to 50% passthrough',
                  'Property tax increases from eligible general obligation bonds of the City, SF Unified School District, or SF Community College District — up to 50–100% passthrough depending on the bond',
                  'RAP loan amortization for properties in areas designated under the City\'s rehabilitation program',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted text-sm">
                    <span className="text-brand mt-0.5 shrink-0">·</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-ink mb-3">No increase for additional occupants</h3>
              <p className="text-muted leading-relaxed">
                A landlord may not impose a rent increase solely because a tenant has added an
                occupant to an existing tenancy — including a newborn child or a family member
                as defined in the Housing Code. This prohibition applies even if the lease
                contains a provision purporting to permit such an increase.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-ink mb-3">Vacancy decontrol (Costa-Hawkins)</h3>
              <p className="text-muted leading-relaxed">
                Consistent with California's Costa-Hawkins Rental Housing Act, landlords may
                set the initial rent at any amount when a new tenancy begins — the prior
                tenant's controlled rent does not carry over to the new tenancy. However,
                once a tenancy is established, the annual rent control limits apply for
                the duration of that tenancy. Landlords may not use a notice of termination
                or forced change of lease terms to artificially reset the rent.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 3: JUST CAUSE ── */}
      <section className="bg-white px-6 py-16 border-b-4 border-cream-dark">
        <div className="max-w-6xl mx-auto">

          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 bg-brand-mid rounded-full" />
            <h2 className="font-display text-3xl font-bold text-ink">Just Cause for Eviction</h2>
          </div>
          <p className="text-xs font-semibold text-brand-mid uppercase tracking-wider mb-2">
            Admin Code § 37.9
          </p>
          <a
            href="https://codelibrary.amlegal.com/codes/san_francisco/latest/sf_admin/0-0-0-24063"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs text-brand underline hover:text-brand-mid mb-10"
          >
            Read § 37.9 ↗
          </a>

          <div className="space-y-10">

            <div>
              <h3 className="font-display text-xl font-semibold text-ink mb-3">Covered tenancies</h3>
              <p className="text-muted leading-relaxed">
                Just cause eviction protections under § 37.9 apply broadly to residential
                tenancies in San Francisco — including some units not covered by rent control.
                Unlike the rent control provisions, just cause coverage is not limited strictly
                to pre-1979 buildings. A landlord may not terminate a covered tenancy without
                one of the 16 enumerated just causes stated in the termination notice.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-ink mb-4">Valid just causes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-cream-dark rounded-xl p-5 border border-border">
                  <p className="text-xs font-semibold text-brand-mid uppercase tracking-wider mb-3">At-fault</p>
                  <ul className="space-y-2">
                    {atFaultCauses.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm text-muted">
                        <span className="text-brand mt-0.5 shrink-0">·</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-cream-dark rounded-xl p-5 border border-border">
                  <p className="text-xs font-semibold text-brand-mid uppercase tracking-wider mb-3">No-fault</p>
                  <ul className="space-y-3">
                    {noFaultCauses.map(({ text, conditions }) => (
                      <li key={text} className="flex items-start gap-2 text-sm text-muted">
                        <span className="text-brand mt-0.5 shrink-0">·</span>
                        <span>
                          {text}
                          {conditions && (
                            <ul className="mt-2 space-y-1.5 pl-3 border-l-2 border-border">
                              {conditions.map((cond) => (
                                <li key={cond} className="text-xs text-muted/80 leading-snug">{cond}</li>
                              ))}
                            </ul>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-muted/70 mt-4 italic">
                    No-fault evictions require substantial relocation assistance in most cases.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-ink mb-3">Relocation assistance</h3>
              <p className="text-muted leading-relaxed">
                San Francisco requires substantial relocation payments for no-fault evictions.
                For owner move-in and Ellis Act evictions, the amounts are set by the Rent Board
                and adjusted annually — generally ranging from several months' to over a year's
                rent, with higher amounts for long-term tenants, elderly tenants, and tenants
                with disabilities. Relocation assistance is in addition to any damages available
                in a wrongful eviction lawsuit.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-ink mb-3">Remedies</h3>
              <p className="text-muted text-sm mb-5">
                A tenant who is wrongfully evicted in violation of the SF Rent Ordinance may
                recover all of the following:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-cream-dark rounded-xl p-5 border border-border">
                  <p className="text-xs font-semibold text-brand-mid uppercase tracking-wider mb-2">Actual Damages</p>
                  <ul className="space-y-1.5">
                    {[
                      'Lost rental value of the rent-controlled unit',
                      'Moving costs',
                      'Emotional distress',
                      'Other consequential losses',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted">
                        <span className="text-brand mt-0.5 shrink-0">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-cream-dark rounded-xl p-5 border border-border">
                  <p className="text-xs font-semibold text-brand-mid uppercase tracking-wider mb-2">Attorney&rsquo;s Fees &amp; Costs</p>
                  <p className="text-muted text-sm leading-relaxed">
                    Recoverable in successful wrongful eviction actions under the SF Rent Ordinance.
                  </p>
                </div>
                <div className="bg-cream-dark rounded-xl p-5 border border-border sm:col-span-2">
                  <p className="text-xs font-semibold text-brand-mid uppercase tracking-wider mb-2">Treble Damages</p>
                  <p className="text-ink font-semibold text-lg mb-1">Up to 3× actual damages</p>
                  <p className="text-muted text-sm leading-relaxed">
                    Available for wrongful eviction in violation of the Rent Ordinance, making SF
                    cases among the most valuable wrongful eviction cases in California.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 4: TENANT HARASSMENT ── */}
      <section className="bg-white px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">

          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 bg-brand rounded-full" />
            <h2 className="font-display text-3xl font-bold text-ink">Tenant Harassment</h2>
          </div>
          <p className="text-xs font-semibold text-brand-mid uppercase tracking-wider mb-2">
            Admin Code § 37.10B
          </p>
          <a
            href="https://codelibrary.amlegal.com/codes/san_francisco/latest/sf_admin/0-0-0-24134"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs text-brand underline hover:text-brand-mid mb-10"
          >
            Read § 37.10B ↗
          </a>

          <div className="space-y-10">

            <div>
              <h3 className="font-display text-xl font-semibold text-ink mb-3">Covered units</h3>
              <p className="text-muted leading-relaxed">
                The tenant harassment provisions of § 37.10B apply broadly to residential
                tenancies in San Francisco — the coverage is not limited to rent-controlled
                units. Any landlord of a residential rental unit in SF may be liable for
                engaging in prohibited harassment of a tenant.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-ink mb-3">Prohibited conduct</h3>
              <p className="text-muted leading-relaxed mb-4">
                The statutory details of § 37.10B will be added here. Contact Bowlay Law to
                discuss a potential tenant harassment claim under the SF Rent Ordinance.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-ink mb-3">Remedies</h3>
              <p className="text-muted leading-relaxed">
                The statutory remedy details for § 37.10B will be added here.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark text-white px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            San Francisco tenant? Let&rsquo;s talk.
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            If your landlord has violated the SF Rent Ordinance — through an unlawful rent
            increase, a wrongful eviction, or harassment — you may have a case worth
            pursuing. The free screening call is 15–20 minutes and costs nothing.
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
