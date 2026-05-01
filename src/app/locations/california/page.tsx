import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'California Tenant Protection Act (AB 1482) | Tenant Rights Attorney',
  description:
    'AB 1482 gives California tenants statewide just cause eviction and rent control protections. Learn what is covered, what is exempt, and what remedies are available. Bowlay Law handles TPA wrongful eviction cases on contingency.',
  keywords: [
    'California Tenant Protection Act',
    'AB 1482',
    'AB 1482 attorney',
    'California wrongful eviction attorney',
    'California rent control lawyer',
    'just cause eviction California',
    'California tenant rights attorney',
    'TPA wrongful eviction',
  ],
  openGraph: {
    type: 'article',
    url: 'https://bowlaylaw.com/locations/california',
    title: 'California Tenant Protection Act (AB 1482) | Bowlay Law',
    description:
      'AB 1482 gives California tenants statewide just cause eviction and rent control protections. Learn what is covered, what is exempt, and what remedies are available.',
  },
};

const atFaultCauses = [
  'Nonpayment of rent',
  'Breach of a material lease term after written notice to cure',
  'Maintaining or committing a nuisance',
  'Committing waste of the property',
  'Criminal activity on the premises or directed at the owner or their agent',
  'Assigning or subletting the premises in violation of the tenant\'s lease',
  'Refusing to allow the owner lawful entry after proper notice',
  'Using the property for an unlawful purpose',
  'Refusing to renew a written lease after the owner\'s written request, where the renewal is for a similar duration and similar provisions',
  'Failing to vacate after giving the owner written notice of intent to terminate the tenancy, or after a written offer to surrender that the owner accepted in writing',
  'An employee or licensee whose right to occupy is tied to employment that has ended',
];

const noFaultCauses: { text: string; conditions?: string[] }[] = [
  {
    text: 'Owner or qualifying family member intends to occupy the unit as their primary residence for at least 12 continuous months',
    conditions: [
      'Qualifying relatives: spouse, domestic partner, children, grandchildren, parents, or grandparents',
      'For leases signed on or after July 1, 2020: applies only if the lease contains a provision permitting owner move-in, or the tenant agrees in writing',
      'Does not apply if a similar vacant unit already exists on the property, or if the intended occupant already lives there',
      'Intended occupant must move in within 90 days of the tenant vacating',
      'If the owner fails to follow through (no move-in within 90 days, or less than 12 months of occupancy): must re-offer the unit to the displaced tenant at the same rent and reimburse excess moving costs',
      '"Owner" means a natural person with at least 25% recorded ownership interest, or any recorded interest in a 100% family-owned property',
    ],
  },
  { text: 'Owner withdraws the unit from the rental market entirely (Ellis Act)' },
  {
    text: 'Owner intends to demolish or substantially remodel the unit',
    conditions: [
      '"Substantially remodel" means replacement or substantial modification of any structural, electrical, plumbing, or mechanical system requiring a permit — or abatement of hazardous materials (lead paint, mold, asbestos) — that cannot be safely done with the tenant in place and requires vacancy for at least 30 consecutive days',
      'Cosmetic improvements alone (painting, decorating, minor repairs, or work that can be done safely without vacancy) do not qualify',
      'Notice must include: a description of the work, expected duration, copies of required permits (or contractor contract for hazardous material abatement not requiring a permit), and notification of the tenant\'s right to re-occupy',
      'Right to return: if the remodel is not commenced or completed, the owner must offer the unit back to the displaced tenant at the same rent and terms',
    ],
  },
  { text: 'Government order or local ordinance requiring vacancy' },
];

const rentControlExemptions: { text: string; notice?: string }[] = [
  {
    text: 'Housing already subject to a local rent ordinance or price control that restricts annual increases to less than the TPA cap — meaning the local ordinance provides equal or stronger rent control protection',
  },
  {
    text: 'Housing issued a certificate of occupancy within the previous 15 years (the 15-year exemption does not apply to mobilehomes)',
  },
  {
    text: 'Residential property alienable separate from any other dwelling unit (including mobilehomes) where the owner is not a REIT, corporation, LLC with at least one corporate member, or mobilehome park management — AND the tenant received a written exemption notice. For tenancies started or renewed on or after July 1, 2020 (July 1, 2022 for mobilehome tenancies), this notice must appear in the rental agreement.',
    notice: '"This property is not subject to the rent limits imposed by Section 1947.12 of the Civil Code and is not subject to the just cause requirements of Section 1946.2 of the Civil Code. This property meets the requirements of Sections 1947.12 (d)(5) and 1946.2 (e)(8) of the Civil Code and the owner is not any of the following: (1) a real estate investment trust, as defined by Section 856 of the Internal Revenue Code; (2) a corporation; or (3) a limited liability company in which at least one member is a corporation."',
  },
  {
    text: 'A property containing two separate dwelling units within a single structure where the owner occupied one unit as their principal residence at the start of the tenancy, continues to live there, and neither unit is an ADU or JADU',
  },
];

const justCauseExemptions = [
  'Housing where the tenant shares a bathroom or kitchen with an owner who maintains their principal residence at the property',
  'Single-family owner-occupied residences — including where the owner-occupant rents no more than two units or bedrooms (including an ADU or JADU), and including mobilehomes',
  'A two-unit property in a single structure where the owner occupied one unit as their principal residence at the start of the tenancy, continues to live there, and neither unit is an ADU or JADU',
  'Housing issued a certificate of occupancy within the previous 15 years (the 15-year exemption does not apply to mobilehomes)',
  'Separately alienable residential property (including mobilehomes) where the owner is not a REIT, corporation, LLC with at least one corporate member, or mobilehome park management — AND the tenant received the required written exemption notice. For tenancies started or renewed on or after July 1, 2020, this notice must appear in the rental agreement itself',
];

const faq = [
  {
    q: 'Do the just cause and rent control protections have the same exemptions?',
    a: 'No. The just cause protections (Civil Code § 1946.2) and the rent control provisions (Civil Code § 1947.12) are separate statutory sections with their own coverage rules and exemptions. A unit can be covered by one but not the other.',
  },
  {
    q: 'I moved in over a year ago, but my roommate was added recently. Are we covered by just cause?',
    a: 'It depends on timing. If a new adult tenant was added before the original tenant reached 24 months of residency, just cause protection only begins once either all tenants have been there 12 months, or one tenant has been there 24 months.',
  },
  {
    q: 'My landlord gave me an exemption notice. Does that mean I have no rights?',
    a: 'Not necessarily. The exemption notice only removes TPA protections for qualifying properties where proper notice was given at the right time. You may still have rights under a local ordinance, and if the notice was defective — wrong language, wrong timing — it may not be valid. Bowlay Law can evaluate your situation.',
  },
  {
    q: 'Can I recover attorney fees and treble damages under the TPA?',
    a: 'Yes — in certain circumstances. An owner who attempts to recover possession in material violation of the just cause provisions is liable for actual damages, attorney\'s fees and costs at the court\'s discretion, and up to three times actual damages upon a showing of willful, oppressive, fraudulent, or malicious conduct.',
  },
  {
    q: 'My landlord raised my rent above 10%. What can I do?',
    a: 'If your unit is covered by the TPA rent control provisions and your tenancy qualifies, an increase above the annual cap (5% + local CPI, never more than 10%) may be unlawful. Bowlay Law can evaluate whether the increase violated the law and whether you have a claim.',
  },
];

const faqSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
});

const breadcrumbSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bowlaylaw.com' },
    { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://bowlaylaw.com/locations/california' },
    { '@type': 'ListItem', position: 3, name: 'California Tenant Protection Act', item: 'https://bowlaylaw.com/locations/california' },
  ],
});

export default function CaliforniaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />

      {/* Hero */}
      <section className="bg-white px-6 py-20 border-b border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-brand-mid text-sm font-semibold uppercase tracking-wider mb-4">
            California Statewide
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4 text-ink">
            California Tenant Protection Act (AB 1482)
          </h1>
          <p className="text-muted text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
            AB 1482 established the first statewide rent control and just cause eviction protections
            in California history. California tenants facing wrongful eviction or unlawful rent
            increases may have claims under this law. It has two distinct parts — each with its own
            coverage rules and exemptions.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 bg-cream-dark px-4 py-2 rounded-full text-sm text-muted">
              <span className="font-medium text-ink">Civil Code §§ 1946.2 &amp; 1947.12</span>
              <span>·</span>
              <span>Effective January 1, 2020</span>
            </div>
            <a
              href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1946.2.&lawCode=CIV"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-brand underline hover:text-brand-mid"
            >
              Read the statute ↗
            </a>
          </div>
        </div>
      </section>

      {/* At a glance */}
      <section className="bg-cream-dark px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-ink mb-6">At a glance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: 'Just cause required', value: 'Yes — for covered units, after tenancy qualifies (generally 12 months)' },
              { label: 'Rent cap', value: '5% + local CPI, never more than 10% per year' },
              { label: 'Relocation assistance', value: '1 month\'s rent for no-fault evictions' },
              { label: 'Attorney fees', value: 'At court\'s discretion for material violations' },
              { label: 'Treble damages', value: 'Up to 3× actual damages for willful, oppressive, fraudulent, or malicious conduct' },
              { label: 'Effective date', value: 'January 1, 2020' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white rounded-xl p-5 border border-border shadow-sm">
                <p className="text-xs font-semibold text-brand-mid uppercase tracking-wider mb-1.5">{label}</p>
                <p className="text-ink font-medium leading-snug">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 1: JUST CAUSE ── */}
      <section className="bg-white px-6 py-16 border-b-4 border-cream-dark">
        <div className="max-w-6xl mx-auto">

          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 bg-brand-dark rounded-full" />
            <h2 className="font-display text-3xl font-bold text-ink">
              Part 1 — Just Cause for Eviction
            </h2>
          </div>
          <p className="text-xs font-semibold text-brand-mid uppercase tracking-wider mb-2">
            Civil Code § 1946.2
          </p>
          <a
            href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1946.2.&lawCode=CIV"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs text-brand underline hover:text-brand-mid mb-8"
          >
            Read Civil Code § 1946.2 ↗
          </a>

          <div className="space-y-10">

            <div>
              <h3 className="font-display text-xl font-bold text-ink mb-3">Overview</h3>
              <p className="text-muted leading-relaxed">
                Civil Code § 1946.2 prohibits landlords from terminating covered tenancies without a
                valid just cause reason — which must be stated in the termination notice. California
                tenants who are wrongfully evicted in violation of AB 1482 may have a claim for
                actual damages, attorney&rsquo;s fees, and treble damages. This protection applies to both
                at-fault and no-fault situations, and landlords must follow strict procedural
                requirements for each.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-ink mb-3">Covered tenancy</h3>
              <p className="text-muted leading-relaxed mb-3">
                Just cause protection generally begins after a tenant has lived in the unit for
                12 months. However, if new adult tenants were added to the household before the
                original tenant reached 24 months, protection only begins when either:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-center gap-2 text-muted">
                  <span className="text-brand shrink-0">→</span>
                  <span>All tenants in the household have been there at least 12 months, <em>or</em></span>
                </li>
                <li className="flex items-center gap-2 text-muted">
                  <span className="text-brand shrink-0">→</span>
                  <span>At least one tenant has been there for at least 24 months</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-ink mb-3">Covered units</h3>
              <p className="text-muted leading-relaxed mb-5">
                Not every residential rental qualifies. § 1946.2 applies to units that are not
                exempt under § 1946.2(e). Even if the unit is covered, the tenancy itself must
                qualify separately.
              </p>
              <div className="bg-cream-dark rounded-xl p-5 border border-border">
                <p className="text-sm font-semibold text-ink mb-3">
                  Some of the more common exemptions under § 1946.2(e):
                </p>
                <ul className="space-y-3">
                  {justCauseExemptions.map((e) => (
                    <li key={e} className="flex items-start gap-3 text-muted text-sm">
                      <span className="text-red-400 mt-0.5 shrink-0 font-bold">✕</span>
                      <span className="leading-snug">{e}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-ink mb-4">Valid just causes</h3>
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
                    No-fault evictions require payment of one month&rsquo;s rent as relocation assistance.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-ink mb-2">Remedies</h3>
              <p className="text-muted text-sm mb-5">
                An owner who attempts to recover possession in material violation of § 1946.2 is
                liable to the tenant for all of the following (Civil Code § 1946.2(h)(1)):
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="bg-cream-dark rounded-xl p-5 border border-border">
                  <p className="text-xs font-semibold text-brand-mid uppercase tracking-wider mb-2">A — Actual Damages</p>
                  <p className="text-ink font-semibold mb-3">Recoverable losses include:</p>
                  <ul className="space-y-1.5">
                    {[
                      'Lost rental value of the rent-controlled unit',
                      'Moving costs',
                      'Emotional distress',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted">
                        <span className="text-brand mt-0.5 shrink-0">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                    <li className="flex items-start gap-2 text-sm text-muted italic">
                      <span className="text-brand mt-0.5 shrink-0">·</span>
                      <span>Among others, depending on the circumstances</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-cream-dark rounded-xl p-5 border border-border">
                  <p className="text-xs font-semibold text-brand-mid uppercase tracking-wider mb-2">B — Attorney&rsquo;s Fees &amp; Costs</p>
                  <p className="text-ink font-semibold mb-1">At the court&rsquo;s discretion</p>
                  <p className="text-muted text-sm leading-relaxed">
                    Reasonable attorney&rsquo;s fees and litigation costs may be awarded against the
                    landlord. For tenants represented on contingency, this effectively increases
                    the total settlement or judgment amount.
                  </p>
                </div>
              </div>
              <div className="bg-cream-dark rounded-xl p-5 border border-border">
                <p className="text-xs font-semibold text-brand-mid uppercase tracking-wider mb-2">C — Treble Damages</p>
                <p className="text-ink font-semibold text-lg mb-1">Up to 3× actual damages</p>
                <p className="text-muted text-sm leading-relaxed">
                  Upon a showing that the owner acted <strong className="text-ink">willfully</strong> or
                  with <strong className="text-ink">oppression, fraud, or malice</strong>, the court may
                  award up to three times the actual damages.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 2: RENT CONTROL ── */}
      <section className="bg-white px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">

          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 bg-brand-mid rounded-full" />
            <h2 className="font-display text-3xl font-bold text-ink">
              Part 2 — Rent Control
            </h2>
          </div>
          <p className="text-xs font-semibold text-brand-mid uppercase tracking-wider mb-2">
            Civil Code § 1947.12
          </p>
          <a
            href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1947.12.&lawCode=CIV"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs text-brand underline hover:text-brand-mid mb-8"
          >
            Read Civil Code § 1947.12 ↗
          </a>

          <div className="space-y-10">

            <div>
              <h3 className="font-display text-xl font-bold text-ink mb-3">Overview</h3>
              <p className="text-muted leading-relaxed">
                Civil Code § 1947.12 limits how much a landlord can raise rent in any 12-month
                period for covered residential rental units. California tenants who have received
                an unlawful rent increase under AB 1482 may have a claim for the excess amount
                charged. The just cause protections and rent control provisions are separate — a
                unit can be covered by one but not the other, and each has its own exemptions.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-ink mb-3">Rent cap</h3>
              <div className="bg-cream-dark rounded-xl p-6 border border-border">
                <p className="text-2xl font-bold text-ink mb-1">5% + local CPI</p>
                <p className="text-muted text-sm">Never more than 10% per year regardless of CPI</p>
                <p className="text-muted text-sm mt-2">Only one rent increase is permitted per 12-month period.</p>
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-ink mb-3">Covered units</h3>
              <p className="text-muted leading-relaxed mb-5">
                The rent control provisions have their own separate exemptions under § 1947.12(d) —
                distinct from the just cause exemptions under § 1946.2(e). A unit may be exempt from
                one but not the other.
              </p>
              <div className="bg-cream-dark rounded-xl p-5 border border-border">
                <p className="text-sm font-semibold text-ink mb-3">
                  Exemptions under § 1947.12(d)(3)–(6):
                </p>
                <ul className="space-y-4">
                  {rentControlExemptions.map(({ text, notice }) => (
                    <li key={text} className="flex items-start gap-3 text-muted text-sm">
                      <span className="text-red-400 mt-0.5 shrink-0 font-bold">✕</span>
                      <span className="leading-snug">
                        {text}
                        {notice && (
                          <span className="block mt-2 pl-3 border-l-2 border-border text-xs text-muted/70 italic leading-relaxed">
                            Required notice language: {notice}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted/60 mt-4">
                  Note: § 1947.12(d)(1)–(2) (affordable housing and dormitories) are omitted here as they rarely arise in practice.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-ink mb-2">Remedies</h3>
              <p className="text-muted text-sm mb-5">
                An owner who demands, accepts, receives, or retains rent in excess of the maximum
                allowed by § 1947.12 is liable to the tenant for all of the following
                (Civil Code § 1947.12(k)(1)):
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="bg-cream-dark rounded-xl p-5 border border-border">
                  <p className="text-xs font-semibold text-brand-mid uppercase tracking-wider mb-2">A — Injunctive Relief</p>
                  <p className="text-muted text-sm leading-relaxed">
                    A court can order the landlord to stop the unlawful rent increase — preventing
                    further overcharges while the case is pending.
                  </p>
                </div>
                <div className="bg-cream-dark rounded-xl p-5 border border-border">
                  <p className="text-xs font-semibold text-brand-mid uppercase tracking-wider mb-2">B — Excess Rent Damages</p>
                  <p className="text-muted text-sm leading-relaxed">
                    The full amount by which any payment demanded, accepted, received, or retained
                    exceeds the maximum allowable rent.
                  </p>
                </div>
                <div className="bg-cream-dark rounded-xl p-5 border border-border">
                  <p className="text-xs font-semibold text-brand-mid uppercase tracking-wider mb-2">C — Attorney&rsquo;s Fees &amp; Costs</p>
                  <p className="text-ink font-semibold mb-1">At the court&rsquo;s discretion</p>
                  <p className="text-muted text-sm leading-relaxed">
                    Reasonable attorney&rsquo;s fees and litigation costs may be awarded against the landlord.
                  </p>
                </div>
              </div>
              <div className="bg-cream-dark rounded-xl p-5 border border-border">
                <p className="text-xs font-semibold text-brand-mid uppercase tracking-wider mb-2">D — Treble Damages</p>
                <p className="text-ink font-semibold text-lg mb-1">Up to 3× the excess rent</p>
                <p className="text-muted text-sm leading-relaxed">
                  Upon a showing that the owner acted <strong className="text-ink">willfully</strong> or
                  with <strong className="text-ink">oppression, fraud, or malice</strong>, the court may
                  award up to three times the amount overcharged.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interaction note */}
      <section className="bg-cream-dark px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-7 border border-border">
            <h2 className="font-display text-xl font-bold text-ink mb-3">
              How the TPA interacts with local rent ordinances
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Local rent ordinances in cities like San Francisco, Oakland, Berkeley, Los Angeles,
              and Antioch generally provide stronger protections than the TPA — with lower rent caps,
              more robust just cause requirements, mandatory attorney fees, and treble damages. The
              TPA acts as a statewide floor: it does not preempt local ordinances that go further.
            </p>
            <p className="text-muted leading-relaxed">
              Where both the TPA and a local ordinance apply to the same tenancy, the analysis can
              be complex. The protections operate somewhat independently, and determining which law
              governs a specific aspect of your situation requires case-by-case evaluation.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {[
                { city: 'San Francisco', slug: 'san-francisco' },
                { city: 'Oakland', slug: 'oakland' },
                { city: 'Berkeley', slug: 'berkeley' },
                { city: 'Los Angeles', slug: 'los-angeles' },
                { city: 'Antioch', slug: 'antioch' },
              ].map(({ city, slug }) => (
                <Link
                  key={slug}
                  href={`/locations/${slug}`}
                  className="px-3 py-1.5 rounded-full border border-brand/30 text-sm text-brand hover:bg-brand hover:text-white transition-colors"
                >
                  {city} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-ink mb-8">Common questions</h2>
          <div className="space-y-3">
            {faq.map(({ q, a }) => (
              <details key={q} className="group bg-cream-dark rounded-2xl border border-border overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-ink hover:text-brand transition-colors">
                  <span>{q}</span>
                  <span className="shrink-0 text-brand group-open:rotate-45 transition-transform text-xl font-light">+</span>
                </summary>
                <div className="px-6 pb-5 text-muted leading-relaxed border-t border-border/60 pt-4">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark text-white px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            Think the TPA applies to your situation?
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Determining whether a tenancy and unit are covered — and which protections apply — is
            often the first and most important question in a TPA case. Bowlay Law offers a free
            screening call to walk through your situation.
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
