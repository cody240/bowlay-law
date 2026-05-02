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


export default function SanFranciscoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white px-6 py-20 border-b border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-brand-mid text-sm font-semibold tracking-wider mb-4">
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

      {/* SF sub-page navigation */}
      <section className="bg-cream-dark border-b border-border px-6 py-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold text-muted tracking-wider mb-3">SF tenant law topics</p>
          <div className="flex flex-wrap gap-2">
            {[
              { href: '/locations/san-francisco/wrongful-eviction', label: 'Wrongful Eviction' },
              { href: '/locations/san-francisco/omi-eviction', label: 'Owner Move-In (OMI)' },
              { href: '/locations/san-francisco/ellis-act', label: 'Ellis Act' },
              { href: '/locations/san-francisco/constructive-eviction', label: 'Constructive Eviction' },
              { href: '/locations/san-francisco/rent-control', label: 'Rent Control Violations' },
              { href: '/locations/san-francisco/tenant-harassment', label: 'Tenant Harassment' },
              { href: '/locations/san-francisco/damages', label: 'Damages & Case Value' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="px-4 py-1.5 rounded-full bg-white border border-border text-sm text-ink font-medium hover:bg-brand-dark hover:text-white hover:border-brand-dark transition-colors"
              >
                {label}
              </Link>
            ))}
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
                <p className="text-xs font-semibold text-brand-mid tracking-wider mb-1.5">{label}</p>
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

      {/* ── WHAT IS A RENTAL UNIT ── */}
      <section id="rental-unit" className="bg-cream-dark px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">

          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 bg-brand-dark rounded-full" />
            <h2 className="font-display text-3xl font-bold text-ink">What Is a Rental Unit?</h2>
          </div>
          <p className="text-xs font-semibold text-brand-mid tracking-wider mb-2">
            Admin Code § 37.2(r)
          </p>

          <p className="text-muted leading-relaxed mb-10">
            The definition of &ldquo;rental unit&rdquo; under § 37.2(r) is the threshold question for all
            three protections under the Rent Ordinance — rent control (§ 37.3), just cause for
            eviction (§ 37.9), and tenant harassment (§ 37.10B). Coverage under each provision
            is analyzed independently: a unit may qualify as a rental unit but still be exempt
            from rent control, while retaining full just cause eviction and harassment protections.
          </p>

          <div className="flex items-start gap-3 bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-6">
            <span className="text-emerald-600 font-bold mt-0.5 shrink-0">✓</span>
            <div>
              <p className="font-semibold text-ink text-sm mb-2">General rule — if you&rsquo;re renting a home in San Francisco, you&rsquo;re almost certainly covered</p>
              <p className="text-muted text-sm leading-relaxed mb-3">
                The Rent Ordinance covers any residential space you rent in San Francisco —
                apartments, flats, rooms, and even commercial or live/work spaces where your
                landlord knows you&rsquo;re living there and allows it. Crucially, the ordinance
                protects not just the physical space but everything that comes with your
                tenancy: parking, storage, laundry access, and any other services or
                facilities your landlord provides as part of your living arrangement.
              </p>
              <p className="text-muted/70 text-xs leading-relaxed border-l-2 border-emerald-200 pl-3">
                In the words of the ordinance: &ldquo;all residential dwelling units in the City,
                together with the land and appurtenant buildings, and all housing services,
                privileges, furnishings, and facilities supplied in connection with the use
                or occupancy thereof, including garage and parking facilities.&rdquo;
              </p>
            </div>
          </div>

          <p className="text-sm font-semibold text-ink mb-4">Four categories excluded from the definition:</p>
          <div className="space-y-4">

            <div className="rounded-xl overflow-hidden border border-border">
              <div className="flex items-start gap-3 bg-white p-5">
                <span className="text-red-400 font-bold mt-0.5 shrink-0">✕</span>
                <div>
                  <p className="text-xs font-semibold text-brand-mid tracking-wider mb-1">§ 37.2(r)(1)</p>
                  <p className="font-medium text-ink text-sm mb-1.5">Residential hotels — less than 32 days of continuous occupancy</p>
                  <p className="text-muted text-sm leading-relaxed">
                    Hotels, motels, inns, tourist houses, rooming and boarding houses. A
                    landlord cannot evict a tenant to avoid triggering the 32-day threshold
                    — any such eviction is treated as an action to avoid the ordinance.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-amber-50 border-t border-amber-100 p-4">
                <span className="text-amber-500 font-bold mt-0.5 shrink-0">↩</span>
                <p className="text-amber-900 text-sm">
                  <span className="font-medium">Carve-back:</span>{' '}
                  Once continuous occupancy reaches 32 days, the accommodation becomes a
                  rental unit subject to the ordinance.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white border border-border rounded-xl p-5">
              <span className="text-red-400 font-bold mt-0.5 shrink-0">✕</span>
              <div>
                <p className="text-xs font-semibold text-brand-mid tracking-wider mb-1">§ 37.2(r)(2)</p>
                <p className="font-medium text-ink text-sm mb-1.5">Nonprofit cooperatives</p>
                <p className="text-muted text-sm leading-relaxed">
                  Dwelling units in nonprofit cooperatives owned, occupied, and controlled
                  by a majority of the residents; and units solely owned by a nonprofit
                  public benefit corporation governed by a board the majority of which are
                  residents and where rent increases must be approved by a majority of
                  residents under the corporate by-laws.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white border border-border rounded-xl p-5">
              <span className="text-red-400 font-bold mt-0.5 shrink-0">✕</span>
              <div>
                <p className="text-xs font-semibold text-brand-mid tracking-wider mb-1">§ 37.2(r)(3)</p>
                <p className="font-medium text-ink text-sm mb-1.5">Institutional housing</p>
                <p className="text-muted text-sm leading-relaxed">
                  Hospitals, convents, monasteries, extended care facilities, asylums,
                  licensed residential care or adult day health care facilities for the
                  elderly, and dormitories owned and operated by an institution of higher
                  education, a high school, or an elementary school.
                </p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-border">
              <div className="flex items-start gap-3 bg-white p-5">
                <span className="text-red-400 font-bold mt-0.5 shrink-0">✕</span>
                <div>
                  <p className="text-xs font-semibold text-brand-mid tracking-wider mb-1">§ 37.2(r)(4)</p>
                  <p className="font-medium text-ink text-sm mb-1.5">Government-regulated housing</p>
                  <p className="text-muted text-sm leading-relaxed">
                    Dwelling units whose rents are controlled or regulated by any government
                    unit, agency, or authority. Subsidized HUD housing projects are excluded;
                    unsubsidized or unassisted units merely insured by HUD remain covered.
                  </p>
                </div>
              </div>
              <div className="bg-amber-50 border-t border-amber-100 p-5">
                <p className="text-sm font-semibold text-amber-900 mb-4">↩ Four carve-backs that restore coverage:</p>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 border border-amber-100">
                    <p className="text-xs font-semibold text-amber-700 tracking-wider mb-1.5">§ 37.2(r)(4)(A) — Tenant-based assistance (e.g., Housing Choice Vouchers)</p>
                    <p className="text-amber-900 text-sm leading-relaxed">
                      Programs where the tenant&rsquo;s share is not a fixed percentage of
                      income — Housing Choice Vouchers, Over-FMR, and HOPWA — remain covered,
                      including for rent increase limitations under § 37.3(a)(10)(A). Programs
                      where the tenant&rsquo;s share is a fixed percentage of income (e.g., the
                      Section 8 Certificate Program) are not covered by those rent increase
                      limitations.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-amber-100">
                    <p className="text-xs font-semibold text-amber-700 tracking-wider mb-1.5">§ 37.2(r)(4)(C) — LIHTC and bond-financed units</p>
                    <p className="text-amber-900 text-sm leading-relaxed">
                      Units in buildings receiving Low-Income Housing Tax Credits (26 U.S.C.
                      § 42) or tax-exempt multifamily revenue bonds (26 U.S.C. § 142(d))
                      remain covered if they were already tenant-occupied and subject to the
                      Rent Ordinance when the regulatory agreement was recorded — subject to
                      specific base-rent calculation rules and a one-time tenant opt-out.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-amber-100">
                    <p className="text-xs font-semibold text-amber-700 tracking-wider mb-1.5">§ 37.2(r)(4)(D) — ADUs and similar newly-created units</p>
                    <p className="text-amber-900 text-sm leading-relaxed">
                      ADUs constructed under Planning Code § 207.1 with density or other
                      waivers from the Zoning Administrator; units funded under Admin Code
                      Chapter 85; units created under Planning Code density exceptions or the
                      HOME-SF Program; and any unit subject to a Regulatory Agreement imposing
                      rent increase limitations, including Replacement Units — all remain
                      covered despite being subject to government regulatory schemes.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-amber-100">
                    <p className="text-xs font-semibold text-amber-700 tracking-wider mb-1.5">§ 37.2(r)(4) — Seismically retrofitted unreinforced masonry buildings</p>
                    <p className="text-amber-900 text-sm leading-relaxed">
                      Units in unreinforced masonry buildings that have undergone seismic
                      strengthening under Existing Building Code Chapters 5B and 5C remain
                      subject to the Rent Ordinance to the extent it does not conflict with
                      the seismic strengthening bond program.
                    </p>
                  </div>
                </div>
              </div>
            </div>

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
          <p className="text-xs font-semibold text-brand-mid tracking-wider mb-2">
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

            {/* Overview */}
            <div>
              <p className="text-muted leading-relaxed mb-8">
                Whether you have rent control turns on two questions. First, whether your unit
                qualifies as a &ldquo;rental unit&rdquo; under § 37.2(r) — covered in the{' '}
                <a href="#rental-unit" className="text-brand underline hover:text-brand-mid">What Is a Rental Unit?</a>
                {' '}section above. Second, whether your unit is exempt from rent control under
                § 37.3. If it qualifies and is not exempt, the annual rent control limits apply
                for the entire duration of your tenancy.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch gap-3">
                <div className="flex-1 bg-cream-dark border border-border rounded-xl p-5 text-center">
                  <p className="text-xs font-semibold text-brand-mid tracking-wider mb-2">Step 1 · § 37.2(r)</p>
                  <p className="text-ink font-medium text-sm mb-1.5">Is it a &ldquo;rental unit&rdquo;?</p>
                  <p className="text-muted text-xs">→ See above</p>
                </div>
                <div className="hidden sm:flex items-center text-muted text-xl shrink-0 select-none">→</div>
                <div className="flex-1 bg-cream-dark border border-border rounded-xl p-5 text-center">
                  <p className="text-xs font-semibold text-brand-mid tracking-wider mb-2">Step 2 · § 37.3</p>
                  <p className="text-ink font-medium text-sm">Is it exempt from rent control?</p>
                </div>
                <div className="hidden sm:flex items-center text-muted text-xl shrink-0 select-none">→</div>
                <div className="flex-1 bg-brand-dark text-white rounded-xl p-5 text-center">
                  <p className="text-xs font-semibold text-white/60 tracking-wider mb-2">Result</p>
                  <p className="font-medium text-sm">Yes to (1) + No to (2): covered by rent control</p>
                </div>
              </div>
            </div>

            {/* Part 1: Exemptions from Rent Control */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex w-8 h-8 rounded-full bg-brand-dark text-white items-center justify-center text-sm font-bold shrink-0">1</span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">Exemptions from Rent Control</h3>
                  <p className="text-xs text-brand-mid font-semibold tracking-wider">§ 37.3</p>
                </div>
              </div>
              <p className="text-muted leading-relaxed mb-6">
                Even where a unit qualifies as a &ldquo;rental unit,&rdquo; it may be exempt from the
                rent increase limitations under § 37.3. There are two principal exemptions.
              </p>

              {/* Exemption A: New Construction */}
              <div className="rounded-xl overflow-hidden border border-border mb-6">
                <div className="flex items-start gap-3 bg-cream-dark p-6 border-b border-border">
                  <span className="text-red-400 font-bold text-lg mt-0.5 shrink-0">✕</span>
                  <div>
                    <p className="text-xs font-semibold text-brand-mid tracking-wider mb-1">§ 37.3(g)(1) · Exemption A</p>
                    <p className="font-semibold text-ink mb-2">New Construction &amp; Substantial Rehabilitation</p>
                    <p className="text-muted text-sm leading-relaxed">
                      A residential unit newly constructed and first receiving a certificate of
                      occupancy after June 13, 1979 — or certified by the Rent Board as
                      substantially rehabilitated — is exempt from rent control. The owner may
                      set the initial and all subsequent rental rates. The{' '}
                      <a href="https://recorder.sfgov.org/#!/disclaimer" target="_blank" rel="noopener noreferrer" className="text-brand underline hover:text-brand-mid">
                        Assessor&rsquo;s database
                      </a>
                      {' '}shows when a building was constructed, giving the approximate certificate
                      of occupancy date.
                    </p>
                  </div>
                </div>
                <div className="bg-amber-50 p-6">
                  <p className="text-sm font-semibold text-amber-900 mb-4">↩ Three limits on this exemption:</p>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 border border-amber-100">
                      <p className="text-sm font-medium text-ink mb-1">Illegal units</p>
                      <p className="text-amber-900 text-sm leading-relaxed">
                        Illegal units have no certificate of occupancy and cannot qualify for the
                        new construction exemption. They are covered by rent control unless exempt
                        for another reason.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-amber-100">
                      <p className="text-sm font-medium text-ink mb-1">Pre-1979 unauthorized units later legalized</p>
                      <p className="text-amber-900 text-sm leading-relaxed">
                        A unit that existed before June 13, 1979 but was unauthorized and later
                        brought up to code is not &ldquo;newly constructed.&rdquo; The exemption does not
                        apply regardless of when the certificate of occupancy issued — these units
                        have full rent control.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-amber-100">
                      <p className="text-sm font-medium text-ink mb-1">§ 37.3(g)(1)(C) — Units expressly denied the exemption</p>
                      <p className="text-amber-900 text-sm leading-relaxed">
                        ADUs under Planning Code § 207.1 with density or other waivers; Chapter 85
                        units; units created under Planning Code density exceptions or the HOME-SF
                        Program; and units subject to a Regulatory Agreement, including Replacement
                        Units — get full rent control even though they post-date June 13, 1979.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Exemption B: Costa-Hawkins */}
              <div className="rounded-xl overflow-hidden border border-border">
                <div className="flex items-start gap-3 bg-cream-dark p-6 border-b border-border">
                  <span className="text-red-400 font-bold text-lg mt-0.5 shrink-0">✕</span>
                  <div>
                    <p className="text-xs font-semibold text-brand-mid tracking-wider mb-1">§ 37.3(d) · Exemption B</p>
                    <p className="font-semibold text-ink mb-2">Single-Family Homes &amp; Condominiums (Costa-Hawkins)</p>
                    <p className="text-muted text-sm leading-relaxed mb-4">
                      California&rsquo;s Costa-Hawkins Act permits an owner to set the initial and
                      subsequent rental rates for a dwelling or unit that is &ldquo;alienable separate
                      from the title to any other dwelling unit&rdquo; — meaning the entire
                      single-family home or condominium rented as a whole. Applies to tenancies
                      created on or after January 1, 1996; tenancies in effect on December 31,
                      1995 remain covered regardless.
                    </p>
                    <div className="bg-white rounded-lg p-4 border border-border">
                      <p className="text-xs font-semibold text-ink tracking-wider mb-3">What is NOT separately alienable — still covered:</p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2 text-sm text-muted">
                          <span className="text-emerald-600 mt-0.5 shrink-0 font-bold">✓</span>
                          <span>
                            A single-family home with an illegal in-law unit — counts as a
                            two-unit building, not separately alienable
                          </span>
                        </div>
                        <div className="flex items-start gap-2 text-sm text-muted">
                          <span className="text-emerald-600 mt-0.5 shrink-0 font-bold">✓</span>
                          <span>
                            Individual bedrooms rented separately — a bedroom cannot be conveyed
                            separately from title to the rest of the house
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 border-b border-amber-100 p-6">
                  <p className="text-sm font-semibold text-amber-900 mb-4">↩ Three exceptions that restore full rent control:</p>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 border border-amber-100">
                      <p className="text-sm font-medium text-ink mb-1">Exception 1 — No-fault eviction of the prior tenant (§ 37.3(f))</p>
                      <p className="text-amber-900 text-sm leading-relaxed">
                        Where the previous tenancy was terminated by a no-fault notice under Civil
                        Code § 1946.1 — such as Ellis Act, owner move-in, demolition, or other
                        no-fault grounds under §§ 37.9(a)(8), (9), (10), (11), (14), or (17) —
                        or by a change in terms under Civil Code § 827, the new tenancy&rsquo;s base
                        rent cannot exceed the prior controlled rent plus allowable increases for
                        five years from termination. Check the Rent Board or California Superior
                        Court records for prior eviction history.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-amber-100">
                      <p className="text-sm font-medium text-ink mb-1">Exception 2 — Uncorrected code violations (§ 37.3(d)(1)(C))</p>
                      <p className="text-amber-900 text-sm leading-relaxed">
                        Where the unit had serious health, safety, fire, or building code
                        violations that remained unabated for six months or longer before the
                        vacancy, the owner cannot set a new initial rent under Costa-Hawkins. A
                        similar rule applies to sublet/assignment scenarios where citations were
                        issued at least 60 days before the vacancy and remained unabated
                        (§ 37.3(d)(2)(A)). Check the Department of Building Inspection&rsquo;s
                        website for code violation history.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-amber-100">
                      <p className="text-sm font-medium text-ink mb-1">Exception 3 — Unsold condos held by the subdivider (§ 37.3(d)(1)(A)(i))</p>
                      <p className="text-amber-900 text-sm leading-relaxed">
                        The Costa-Hawkins exemption does not apply to a condominium that has not
                        been sold separately by the subdivider to a bona fide purchaser for value
                        — unless it is the last unsold unit, all other condos in the building have
                        been sold, and the subdivider has occupied it as their principal residence
                        for at least one year after subdivision.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm font-semibold text-ink mb-4">Additional Costa-Hawkins limits:</p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-sm text-muted">
                      <span className="text-brand mt-0.5 shrink-0">·</span>
                      <span>
                        <span className="font-medium text-ink">Change-in-terms termination (§§ 37.3(d)(1)(A)(ii), 37.3(f)(2)):</span>
                        {' '}Where the previous tenancy ended because the landlord changed the terms
                        under Civil Code § 827 (other than a lawful rent change), full rent control
                        applies for five years.
                      </span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-muted">
                      <span className="text-brand mt-0.5 shrink-0">·</span>
                      <span>
                        <span className="font-medium text-ink">Government rent-limitation contract terminated (§§ 37.3(d)(3), 37.3(f)(3)):</span>
                        {' '}Where the landlord terminates or fails to renew a contract or recorded
                        agreement with a government agency that limited rent for a qualified tenant,
                        no new initial rent may be set for three years. Any new tenancy during that
                        period must be at the prior contract rate plus allowable increases.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>


            {/* PART 2: How Much Can My Rent Be Increased? */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex w-8 h-8 rounded-full bg-brand-dark text-white items-center justify-center text-sm font-bold shrink-0">2</span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">How Much Can My Rent Be Increased?</h3>
                  <p className="text-xs text-brand-mid font-semibold tracking-wider">§ 37.3</p>
                </div>
              </div>
              <p className="text-muted leading-relaxed mb-8">
                For a covered unit, rent may only be increased in specific circumstances and by
                specific amounts — each governed by its own rules and procedures. All increases
                beyond the annual allowable amount require Rent Board certification or approval.
              </p>

              <div className="space-y-4">

                {/* Annual Allowable Increase */}
                <div className="rounded-xl border border-border overflow-hidden">
                  <div className="bg-cream-dark px-5 py-4 border-b border-border">
                    <p className="text-xs font-semibold text-brand-mid tracking-wider mb-0.5">§ 37.3(a)(1)</p>
                    <p className="font-semibold text-ink">Annual Allowable Increase</p>
                  </div>
                  <div className="p-5">
                    <div className="bg-cream-dark rounded-xl p-4 border border-border mb-4">
                      <p className="text-2xl font-bold text-ink mb-0.5">60% of CPI</p>
                      <p className="text-muted text-sm">Published each March 1 · Hard cap of 7% per year</p>
                    </div>
                    <p className="text-muted text-sm leading-relaxed">
                      The{' '}
                      <a href="https://sfrentboard.org" target="_blank" rel="noopener noreferrer" className="text-brand underline hover:text-brand-mid">Rent Board</a>
                      {' '}publishes the allowable annual increase each March 1 — 60% of the increase
                      in the SF Consumer Price Index for the preceding 12 months, with a hard cap of
                      7%. A landlord may impose this increase once per year on the tenant&rsquo;s
                      anniversary date, provided they have reported required information about their
                      unit to the Rent Board under § 37.15.
                    </p>
                  </div>
                </div>

                {/* Banked Increases */}
                <div className="rounded-xl border border-border overflow-hidden">
                  <div className="bg-cream-dark px-5 py-4 border-b border-border">
                    <p className="text-xs font-semibold text-brand-mid tracking-wider mb-0.5">§ 37.3(a)(1)</p>
                    <p className="font-semibold text-ink">Banked Increases</p>
                  </div>
                  <div className="p-5">
                    <p className="text-muted text-sm leading-relaxed">
                      A landlord who refrains from imposing an annual increase — or imposes only a
                      portion of it — may accumulate the unused amount and apply it on subsequent
                      rent increase anniversary dates. There is no limit on how long increases may
                      be banked, but the total accumulated amount cannot exceed the sum of prior
                      unused allowable annual increases.
                    </p>
                  </div>
                </div>

                {/* Capital Improvement Passthroughs */}
                <div className="rounded-xl border border-border overflow-hidden">
                  <div className="bg-cream-dark px-5 py-4 border-b border-border">
                    <p className="text-xs font-semibold text-brand-mid tracking-wider mb-0.5">§§ 37.7, 37.8B</p>
                    <p className="font-semibold text-ink">Capital Improvement Passthroughs</p>
                  </div>
                  <div className="p-5">
                    <p className="text-muted text-sm leading-relaxed mb-3">
                      A landlord may petition the Rent Board to pass through costs for capital
                      improvements, rehabilitation, energy conservation, and renewable energy
                      improvements. These require Board certification under § 37.7 (or § 37.8B
                      for renewable energy and energy conservation measures) and are subject to
                      their own caps and amortization schedules.
                    </p>
                    <ul className="space-y-1.5">
                      {[
                        'Seismic work: capped at 10% in any 12-month period',
                        'Other capital improvements: amortized over a period set by the Board',
                        'Renewable energy and energy conservation: governed by § 37.8B with its own procedures',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted">
                          <span className="text-brand mt-0.5 shrink-0">·</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Utilities */}
                <div className="rounded-xl border border-border overflow-hidden">
                  <div className="bg-cream-dark px-5 py-4 border-b border-border">
                    <p className="text-xs font-semibold text-brand-mid tracking-wider mb-0.5">§ 37.2(q)</p>
                    <p className="font-semibold text-ink">Utility Costs — Gas &amp; Electricity</p>
                  </div>
                  <div className="p-5">
                    <p className="text-muted text-sm leading-relaxed">
                      Where the landlord pays gas and electricity costs for the unit, increased
                      utility costs may be passed through to tenants as provided under § 37.2(q).
                      The procedures and limitations are governed by Rent Board rules.
                    </p>
                  </div>
                </div>

                {/* Water */}
                <div className="rounded-xl border border-border overflow-hidden">
                  <div className="bg-cream-dark px-5 py-4 border-b border-border">
                    <p className="text-xs font-semibold text-brand-mid tracking-wider mb-0.5">§ 37.3(a)</p>
                    <p className="font-semibold text-ink">Water Bill Charges</p>
                  </div>
                  <div className="p-5">
                    <p className="text-muted text-sm leading-relaxed">
                      Landlords may pass through up to 50% of water bill charge increases
                      attributable to excess use penalties or rate increases resulting from the
                      Water System Improvement Revenue Bonds approved by voters in November 2002.
                    </p>
                  </div>
                </div>

                {/* Property Tax */}
                <div className="rounded-xl border border-border overflow-hidden">
                  <div className="bg-cream-dark px-5 py-4 border-b border-border">
                    <p className="text-xs font-semibold text-brand-mid tracking-wider mb-0.5">§ 37.3(a)</p>
                    <p className="font-semibold text-ink">Property Tax Increases</p>
                  </div>
                  <div className="p-5">
                    <p className="text-muted text-sm leading-relaxed">
                      Property tax increases attributable to eligible general obligation bonds of
                      the City and County of San Francisco, the SF Unified School District, or the
                      SF Community College District may be passed through to tenants — up to 50–100%
                      of the increase depending on which bond measure is at issue. Each bond has its
                      own passthrough rules.
                    </p>
                  </div>
                </div>

                {/* RAP Loans */}
                <div className="rounded-xl border border-border overflow-hidden">
                  <div className="bg-cream-dark px-5 py-4 border-b border-border">
                    <p className="text-xs font-semibold text-brand-mid tracking-wider mb-0.5">§ 37.2(m)</p>
                    <p className="font-semibold text-ink">RAP Loan Amortization</p>
                  </div>
                  <div className="p-5">
                    <p className="text-muted text-sm leading-relaxed">
                      Costs associated with amortization of a Rehabilitation Assistance Program
                      (RAP) loan — for properties in areas designated under the City&rsquo;s
                      rehabilitation program — may be passed through as provided under § 37.2(m).
                    </p>
                  </div>
                </div>

                {/* Lead Hazard Abatement */}
                <div className="rounded-xl border border-border overflow-hidden">
                  <div className="bg-cream-dark px-5 py-4 border-b border-border">
                    <p className="text-xs font-semibold text-brand-mid tracking-wider mb-0.5">§ 37.3(a)</p>
                    <p className="font-semibold text-ink">Lead Hazard Abatement</p>
                  </div>
                  <div className="p-5">
                    <p className="text-muted text-sm leading-relaxed">
                      Costs of lead hazard reduction work required under applicable health and
                      safety laws may be petitioned as a passthrough under the Rent Board&rsquo;s
                      capital improvement procedures. The passthrough is subject to Board
                      certification and applicable caps.
                    </p>
                  </div>
                </div>

                {/* Tenant-Based Rental Assistance */}
                <div className="rounded-xl border border-border overflow-hidden">
                  <div className="bg-cream-dark px-5 py-4 border-b border-border">
                    <p className="text-xs font-semibold text-brand-mid tracking-wider mb-0.5">§ 37.3(a)(10)</p>
                    <p className="font-semibold text-ink">Tenant-Based Rental Assistance</p>
                  </div>
                  <div className="p-5">
                    <p className="text-muted text-sm leading-relaxed mb-3">
                      Special rules apply where a tenant receives tenant-based rental assistance.
                    </p>
                    <div className="space-y-3">
                      <div className="bg-cream-dark rounded-lg p-4 border border-border">
                        <p className="text-xs font-semibold text-ink tracking-wider mb-1.5">§ 37.3(a)(10)(A) — Non-fixed-percentage programs (e.g., Housing Choice Vouchers)</p>
                        <p className="text-muted text-sm leading-relaxed">
                          Where the tenant&rsquo;s share of rent is not a fixed percentage of income —
                          such as Housing Choice Vouchers, Over-FMR, and HOPWA — the rent increase
                          limitations under § 37.3(a)(10)(A) apply. Annual increases are governed by
                          the allowable rate for the unit, not the program&rsquo;s payment standards.
                        </p>
                      </div>
                      <div className="bg-cream-dark rounded-lg p-4 border border-border">
                        <p className="text-xs font-semibold text-ink tracking-wider mb-1.5">§ 37.3(a)(10)(B) — Fixed-percentage programs (e.g., Section 8 Certificate)</p>
                        <p className="text-muted text-sm leading-relaxed">
                          Where the tenant&rsquo;s share is a fixed percentage of income, the rent
                          increase limitations in § 37.3(a)(10)(A) do not apply. The landlord and
                          the program negotiate rent adjustments directly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Occupants */}
                <div className="rounded-xl border border-border overflow-hidden">
                  <div className="bg-cream-dark px-5 py-4 border-b border-border">
                    <p className="text-xs font-semibold text-brand-mid tracking-wider mb-0.5">§ 37.3(b)</p>
                    <p className="font-semibold text-ink">No Increase for Additional Occupants</p>
                  </div>
                  <div className="p-5">
                    <p className="text-muted text-sm leading-relaxed">
                      A landlord may not impose a rent increase solely because a tenant has added
                      an occupant to an existing tenancy — including a newborn child or a family
                      member as defined in the Housing Code. This prohibition applies even if the
                      lease contains a provision purporting to permit such an increase; any such
                      provision is void.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* PART 3: Notice of Rent Increase */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex w-8 h-8 rounded-full bg-brand-dark text-white items-center justify-center text-sm font-bold shrink-0">3</span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">Notice of Rent Increase</h3>
                  <p className="text-xs text-brand-mid font-semibold tracking-wider">Cal. Civ. Code § 827 · § 37.3</p>
                </div>
              </div>
              <p className="text-muted leading-relaxed mb-6">
                Before imposing any rent increase, the landlord must serve proper written notice.
                The required notice period depends on the size of the increase.
              </p>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 bg-cream-dark rounded-xl p-5 border border-border">
                    <p className="text-xs font-semibold text-brand-mid tracking-wider mb-2">Increases of 10% or less</p>
                    <p className="font-display text-2xl font-bold text-ink mb-1">30 days</p>
                    <p className="text-muted text-sm">Written notice required before the increase takes effect</p>
                  </div>
                  <div className="flex-1 bg-cream-dark rounded-xl p-5 border border-border">
                    <p className="text-xs font-semibold text-brand-mid tracking-wider mb-2">Increases of more than 10%</p>
                    <p className="font-display text-2xl font-bold text-ink mb-1">90 days</p>
                    <p className="text-muted text-sm">Written notice required before the increase takes effect</p>
                  </div>
                </div>
                <div className="bg-cream-dark rounded-xl p-5 border border-border">
                  <p className="text-sm font-semibold text-ink mb-3">What the notice must include:</p>
                  <ul className="space-y-1.5">
                    {[
                      'The new rent amount and the date it takes effect',
                      'For passthroughs: the specific basis for the increase and the Rent Board certification or decision authorizing it',
                      'For banked increases: the years being applied and the amounts accumulated',
                      'The notice must be in writing — verbal notice is not sufficient',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted">
                        <span className="text-brand mt-0.5 shrink-0">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-muted text-sm leading-relaxed">
                  A rent increase that does not comply with the notice requirements — or that
                  exceeds the allowable amount — is unlawful and may be challenged at the Rent
                  Board. Excess rent paid as a result of an unlawful increase may be recoverable
                  with interest.
                </p>
              </div>
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
          <p className="text-xs font-semibold text-brand-mid tracking-wider mb-2">
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

            {/* Overview */}
            <div>
              <p className="text-muted leading-relaxed mb-8">
                Section 37.9 applies — as of August 24, 1980 — to all landlords and tenants
                of rental units as defined in § 37.2(r). Unlike rent control, just cause
                protection is not limited to pre-1979 buildings. A landlord cannot serve a
                termination notice without one of the 17 enumerated just causes, and the
                stated cause must be the dominant motive for the eviction.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch gap-3">
                <div className="flex-1 bg-red-50 border border-red-200 rounded-xl p-5">
                  <p className="text-xs font-semibold text-red-700 tracking-wider mb-2">At-Fault · §§ 37.9(a)(1)–(7)</p>
                  <p className="text-ink font-medium text-sm">The tenant has done something wrong. A written warning and 10-day cure opportunity is required before serving the eviction notice.</p>
                </div>
                <div className="hidden sm:flex items-center text-muted text-xl shrink-0 select-none px-1">|</div>
                <div className="flex-1 bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <p className="text-xs font-semibold text-amber-700 tracking-wider mb-2">No-Fault · §§ 37.9(a)(8)–(17)</p>
                  <p className="text-ink font-medium text-sm">The landlord is acting for their own reasons. Substantial relocation assistance is required in most cases. Senior, disabled, and school-year protections apply.</p>
                </div>
              </div>
            </div>

            {/* Part 1: At-Fault */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex w-8 h-8 rounded-full bg-brand-dark text-white items-center justify-center text-sm font-bold shrink-0">1</span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">At-Fault Just Causes</h3>
                  <p className="text-xs text-brand-mid font-semibold tracking-wider">§§ 37.9(a)(1)–(7)</p>
                </div>
              </div>
              <p className="text-muted text-sm leading-relaxed mb-6">
                For grounds (1) through (6), the landlord must first serve a written warning
                describing the violation and giving the tenant at least 10 days to cure before
                serving a notice to vacate (§ 37.9(o)).
              </p>
              <div className="space-y-4">

                <div className="rounded-xl overflow-hidden border border-border">
                  <div className="flex items-start gap-3 bg-cream-dark p-5">
                    <span className="inline-flex w-6 h-6 rounded-full bg-red-100 text-red-600 items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                    <div>
                      <p className="text-xs font-semibold text-brand-mid tracking-wider mb-1">§ 37.9(a)(1)</p>
                      <p className="font-medium text-ink text-sm mb-1.5">Nonpayment of rent</p>
                      <p className="text-muted text-sm leading-relaxed">
                        Failure to pay rent lawfully owed, habitual late payment, or frequently
                        returned checks. Rent means the amount to which the landlord is lawfully
                        entitled — not charges prohibited by Police Code § 919.1.
                      </p>
                    </div>
                  </div>
                  <div className="bg-amber-50 border-t border-amber-100 p-5">
                    <p className="text-sm font-semibold text-amber-900 mb-3">Key tenant protections:</p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 text-sm text-amber-900">
                        <span className="text-emerald-600 mt-0.5 shrink-0 font-bold">✓</span>
                        <span><span className="font-medium">COVID-19 protection (March 16, 2020 – Sept 30, 2020):</span> No eviction for nonpayment if the tenant shows the failure arose from a COVID-related substantial decrease in household income, documented by bank statements, pay stubs, termination notices, proof of unemployment filing, or sworn affidavit.</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm text-amber-900">
                        <span className="text-emerald-600 mt-0.5 shrink-0 font-bold">✓</span>
                        <span><span className="font-medium">Extended COVID protection (July 1, 2022 – 60 days after end of COVID emergency):</span> Same showing applies for rent that came due during this period.</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm text-amber-900">
                        <span className="text-emerald-600 mt-0.5 shrink-0 font-bold">✓</span>
                        <span><span className="font-medium">Capital improvement passthrough moratorium:</span> No eviction for nonpayment of capital improvement passthroughs certified after April 10, 2000 if the petition was filed before August 10, 2001 (covering August 10, 2001 – February 10, 2003).</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-border">
                  <div className="flex items-start gap-3 bg-cream-dark p-5">
                    <span className="inline-flex w-6 h-6 rounded-full bg-red-100 text-red-600 items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                    <div>
                      <p className="text-xs font-semibold text-brand-mid tracking-wider mb-1">§ 37.9(a)(2)</p>
                      <p className="font-medium text-ink text-sm mb-1.5">Violation of a lawful lease obligation</p>
                      <p className="text-muted text-sm leading-relaxed">
                        The tenant has violated a lawful obligation or covenant of tenancy, the
                        violation was substantial, and the tenant fails to cure after written notice.
                        Does not apply to an obligation to surrender possession, or to pay a charge
                        prohibited by Police Code § 919.1.
                      </p>
                    </div>
                  </div>
                  <div className="bg-amber-50 border-t border-amber-100 p-5">
                    <p className="text-sm font-semibold text-amber-900 mb-3">Key tenant protections:</p>
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-4 border border-amber-100">
                        <p className="text-sm font-medium text-ink mb-1">Subletting — one-for-one replacement (§ 37.9(a)(2)(A))</p>
                        <p className="text-amber-900 text-sm leading-relaxed">
                          A landlord cannot evict for subletting if the landlord unreasonably
                          withheld consent to a one-for-one replacement of a departing tenant and
                          the original tenant continues to reside in the unit. If the landlord fails
                          to respond in writing with reasons within 14 days of the tenant&rsquo;s written
                          request, approval is deemed granted.
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-amber-100">
                        <p className="text-sm font-medium text-ink mb-1">Addition of family members (§ 37.9(a)(2)(B))</p>
                        <p className="text-amber-900 text-sm leading-relaxed">
                          A landlord cannot evict for adding a child, parent, grandchild,
                          grandparent, brother or sister, spouse or domestic partner of such
                          relatives, or the tenant&rsquo;s own spouse or domestic partner — if the
                          landlord unreasonably refused a written request and occupancy limits are
                          not exceeded. A landlord may not base refusal on creditworthiness if the
                          proposed occupant will not be legally obligated to pay rent. 14-day
                          response window applies.
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-amber-100">
                        <p className="text-sm font-medium text-ink mb-1">General occupancy additions (§ 37.9(a)(2)(C))</p>
                        <p className="text-amber-900 text-sm leading-relaxed">
                          Landlords cannot evict for adding occupants so long as total occupancy
                          does not exceed the lesser of: (i) 2 persons (studio), 3 (1BR), 4 (2BR),
                          6 (3BR), or 8 (4BR); or (ii) the maximum permitted under state and local
                          codes. Landlord may not base refusal on the number of occupants in the
                          lease or the proposed occupant&rsquo;s creditworthiness if they won&rsquo;t pay
                          rent. 14-day response window applies.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-border">
                  <div className="flex items-start gap-3 bg-cream-dark p-5">
                    <span className="inline-flex w-6 h-6 rounded-full bg-red-100 text-red-600 items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                    <div>
                      <p className="text-xs font-semibold text-brand-mid tracking-wider mb-1">§ 37.9(a)(3)</p>
                      <p className="font-medium text-ink text-sm mb-1.5">Nuisance, waste, or interference</p>
                      <p className="text-muted text-sm leading-relaxed">
                        Committing or permitting a nuisance, causing substantial damage to the unit,
                        or creating substantial interference with the comfort, safety, or enjoyment
                        of the landlord or other tenants. The activities must be severe, continuing,
                        or recurring in nature.
                      </p>
                    </div>
                  </div>
                  <div className="bg-amber-50 border-t border-amber-100 p-5">
                    <div className="flex items-start gap-2 text-sm text-amber-900">
                      <span className="text-emerald-600 mt-0.5 shrink-0 font-bold">✓</span>
                      <span>
                        <span className="font-medium">Domestic violence / sexual assault / stalking defense (§ 37.9(a)(3.1)):</span>
                        {' '}It is a defense to a nuisance eviction if the tenant or a household
                        member is a victim of domestic violence, sexual assault, or stalking, and
                        the notice to vacate is substantially based on those acts — including
                        evictions based on noise, disturbances, or repeated police presence.
                        Supported by a TRO, police report, or written documentation from a
                        qualified third party.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-border">
                  <div className="flex items-start gap-3 bg-cream-dark p-5">
                    <span className="inline-flex w-6 h-6 rounded-full bg-red-100 text-red-600 items-center justify-center text-xs font-bold shrink-0 mt-0.5">4</span>
                    <div>
                      <p className="text-xs font-semibold text-brand-mid tracking-wider mb-1">§ 37.9(a)(4)</p>
                      <p className="font-medium text-ink text-sm mb-1.5">Illegal use of the unit</p>
                      <p className="text-muted text-sm leading-relaxed">
                        Using or permitting the unit to be used for any illegal purpose.
                      </p>
                    </div>
                  </div>
                  <div className="bg-amber-50 border-t border-amber-100 p-5">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 text-sm text-amber-900">
                        <span className="text-emerald-600 mt-0.5 shrink-0 font-bold">✓</span>
                        <span>A landlord cannot evict solely for a first short-term rental (Chapter 41A) violation that is cured within 30 days of written notice.</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm text-amber-900">
                        <span className="text-emerald-600 mt-0.5 shrink-0 font-bold">✓</span>
                        <span>Residential occupancy of a unit not authorized for residential use is not grounds under (a)(4) — only potentially under (a)(8) or (a)(10).</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-cream-dark border border-border rounded-xl p-5">
                  <span className="inline-flex w-6 h-6 rounded-full bg-red-100 text-red-600 items-center justify-center text-xs font-bold shrink-0 mt-0.5">5</span>
                  <div>
                    <p className="text-xs font-semibold text-brand-mid tracking-wider mb-1">§ 37.9(a)(5)</p>
                    <p className="font-medium text-ink text-sm mb-1.5">Refusal to sign a renewal on materially the same terms</p>
                    <p className="text-muted text-sm leading-relaxed">
                      The tenant had an oral or written agreement that has terminated and refuses,
                      after written request, to execute a written renewal for a further term of
                      like duration under materially the same terms — provided such terms do not
                      conflict with Chapter 37.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-cream-dark border border-border rounded-xl p-5">
                  <span className="inline-flex w-6 h-6 rounded-full bg-red-100 text-red-600 items-center justify-center text-xs font-bold shrink-0 mt-0.5">6</span>
                  <div>
                    <p className="text-xs font-semibold text-brand-mid tracking-wider mb-1">§ 37.9(a)(6)</p>
                    <p className="font-medium text-ink text-sm mb-1.5">Refusal of landlord access</p>
                    <p className="text-muted text-sm leading-relaxed">
                      After written notice to cease, the tenant has refused the landlord access
                      to the unit as required by state or local law.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-cream-dark border border-border rounded-xl p-5">
                  <span className="inline-flex w-6 h-6 rounded-full bg-red-100 text-red-600 items-center justify-center text-xs font-bold shrink-0 mt-0.5">7</span>
                  <div>
                    <p className="text-xs font-semibold text-brand-mid tracking-wider mb-1">§ 37.9(a)(7)</p>
                    <p className="font-medium text-ink text-sm mb-1.5">Unapproved subtenant holding at end of term</p>
                    <p className="text-muted text-sm leading-relaxed">
                      The person holding possession at the end of the oral or written agreement
                      is a subtenant not approved by the landlord.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Part 2: No-Fault */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex w-8 h-8 rounded-full bg-brand-dark text-white items-center justify-center text-sm font-bold shrink-0">2</span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">No-Fault Just Causes</h3>
                  <p className="text-xs text-brand-mid font-semibold tracking-wider">§§ 37.9(a)(8)–(17)</p>
                </div>
              </div>
              <p className="text-muted text-sm leading-relaxed mb-6">
                No-fault evictions are not caused by anything the tenant did. Substantial
                relocation assistance is required for most no-fault grounds. The senior/disabled
                protection and school-year defense — described in Part 3 — apply to many of
                these causes.
              </p>
              <div className="space-y-4">

                <div className="rounded-xl overflow-hidden border border-border">
                  <div className="flex items-start gap-3 bg-cream-dark p-5">
                    <span className="inline-flex w-7 h-6 rounded-full bg-amber-100 text-amber-700 items-center justify-center text-xs font-bold shrink-0 mt-0.5">8</span>
                    <div>
                      <p className="text-xs font-semibold text-brand-mid tracking-wider mb-1">§ 37.9(a)(8) · Owner / Relative Move-In (OMI)</p>
                      <p className="font-medium text-ink text-sm mb-1.5">Owner or qualifying relative intends to occupy as principal residence</p>
                      <p className="text-muted text-sm leading-relaxed">
                        The landlord seeks in good faith to recover the unit for the landlord&rsquo;s
                        own use or for use by a qualifying relative (grandparent, grandchild,
                        parent, child, brother, sister, or their spouse/domestic partner) as their
                        principal residence for at least 36 continuous months. The landlord must
                        hold at least 25% ownership interest (or 10% for owners who became owners
                        on or before February 21, 1991).
                      </p>
                    </div>
                  </div>
                  <div className="bg-amber-50 border-t border-amber-100 p-5">
                    <p className="text-sm font-semibold text-amber-900 mb-3">Key requirements and tenant protections:</p>
                    <div className="space-y-2">
                      {[
                        'A landlord may not use OMI if a comparable unit in the building is already vacant or becomes vacant before possession is recovered — and must offer the tenant any non-comparable unit that becomes available at a proportionally adjusted rent.',
                        'The notice must attach a Rent Board address-change form and a declaration under penalty of perjury stating the good faith intent and the name and relation of the intended occupant.',
                        'The landlord must file statements of occupancy with the Rent Board: within 90 days of service, every 90 days until possession is recovered, then annually for 5 years after recovery. Failure to file triggers administrative penalties.',
                        'Only one unit per building may ever be used for owner occupancy under § 37.9(a)(8)(i) — once used, all future owner occupancies must be of that same unit.',
                        'If the landlord or relative fails to move in within 3 months, fails to occupy for 36 months, or re-rents the unit above the prior rent-controlled rate, the eviction is presumptively wrongful.',
                        'The displaced tenant has a right of first refusal to re-rent at the prior controlled rent if the owner does not occupy as required.',
                        'Wrongful OMI actions have a 5-year statute of limitations from the earlier of: (1) 3 months after recovery of possession, or (2) the date of the landlord\'s first statement of occupancy filing.',
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-2 text-sm text-amber-900">
                          <span className="text-emerald-600 mt-0.5 shrink-0 font-bold">✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-cream-dark border border-border rounded-xl p-5">
                  <span className="inline-flex w-7 h-6 rounded-full bg-amber-100 text-amber-700 items-center justify-center text-xs font-bold shrink-0 mt-0.5">9</span>
                  <div>
                    <p className="text-xs font-semibold text-brand-mid tracking-wider mb-1">§ 37.9(a)(9) · Condominium Conversion</p>
                    <p className="font-medium text-ink text-sm mb-1.5">Sale of unit pursuant to an approved condominium conversion</p>
                    <p className="text-muted text-sm leading-relaxed">
                      The landlord seeks in good faith to recover the unit to sell it in
                      accordance with a condominium conversion approved under the SF subdivision
                      ordinance. The tenant has a right of first refusal to purchase the unit.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-cream-dark border border-border rounded-xl p-5">
                  <span className="inline-flex w-7 h-6 rounded-full bg-amber-100 text-amber-700 items-center justify-center text-xs font-bold shrink-0 mt-0.5">10</span>
                  <div>
                    <p className="text-xs font-semibold text-brand-mid tracking-wider mb-1">§ 37.9(a)(10) · Demolition (Individual Units)</p>
                    <p className="font-medium text-ink text-sm mb-1.5">Permanent removal of individual unit(s) from housing use</p>
                    <p className="text-muted text-sm leading-relaxed">
                      The landlord seeks in good faith to permanently demolish or remove
                      individual rental units (not all units in the building) from housing use,
                      and has obtained all necessary permits on or before the date the notice is
                      given. Relocation assistance required under § 37.9C.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-border">
                  <div className="flex items-start gap-3 bg-cream-dark p-5">
                    <span className="inline-flex w-7 h-6 rounded-full bg-amber-100 text-amber-700 items-center justify-center text-xs font-bold shrink-0 mt-0.5">11</span>
                    <div>
                      <p className="text-xs font-semibold text-brand-mid tracking-wider mb-1">§ 37.9(a)(11) · Capital Improvements (Temporary)</p>
                      <p className="font-medium text-ink text-sm mb-1.5">Temporary vacancy for capital improvements or rehabilitation work</p>
                      <p className="text-muted text-sm leading-relaxed">
                        The landlord seeks in good faith to temporarily recover the unit for
                        capital improvements or rehabilitation that would make the unit hazardous,
                        unhealthy, or uninhabitable while work is in progress. All permits must be
                        obtained on or before the date the notice is given.
                      </p>
                    </div>
                  </div>
                  <div className="bg-amber-50 border-t border-amber-100 p-5">
                    <div className="space-y-2">
                      {[
                        'Right to return at the prior rent adjusted in accordance with Chapter 37.',
                        'Maximum 3-month displacement — Rent Board may extend only upon showing that all work is reasonable and necessary to meet safety or habitability requirements.',
                        'Landlord must provide: written notice of where permit plans are on file, a right-to-return disclosure form, and an address-change form.',
                        'Lower-income tenants displaced beyond 3 months are entitled to additional monthly relocation assistance equal to the difference between their rent and the SF Housing Authority Payment Standard for that unit size (or actual interim housing cost, whichever is less), for up to 39 months.',
                        'Relocation assistance required under § 37.9C.',
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-2 text-sm text-amber-900">
                          <span className="text-emerald-600 mt-0.5 shrink-0 font-bold">✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-cream-dark border border-border rounded-xl p-5">
                  <span className="inline-flex w-7 h-6 rounded-full bg-amber-100 text-amber-700 items-center justify-center text-xs font-bold shrink-0 mt-0.5">12</span>
                  <div>
                    <p className="text-xs font-semibold text-brand-mid tracking-wider mb-1">§ 37.9(a)(12) · Substantial Rehabilitation</p>
                    <p className="font-medium text-ink text-sm mb-1.5">Permanent vacancy for substantial rehabilitation (§ 37.2(s))</p>
                    <p className="text-muted text-sm leading-relaxed">
                      The landlord seeks in good faith to carry out substantial rehabilitation as
                      defined in § 37.2(s) and has obtained all necessary permits before the
                      notice. Relocation assistance required under § 37.9C.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-border">
                  <div className="flex items-start gap-3 bg-cream-dark p-5">
                    <span className="inline-flex w-7 h-6 rounded-full bg-amber-100 text-amber-700 items-center justify-center text-xs font-bold shrink-0 mt-0.5">13</span>
                    <div>
                      <p className="text-xs font-semibold text-brand-mid tracking-wider mb-1">§ 37.9(a)(13) · Ellis Act Withdrawal</p>
                      <p className="font-medium text-ink text-sm mb-1.5">Permanent withdrawal of all units in the building from the rental market</p>
                      <p className="text-muted text-sm leading-relaxed">
                        The landlord withdraws all rental units within the detached physical
                        structure from rent or lease (and, for buildings with 3 or fewer units,
                        any other units on the same lot), in full compliance with § 37.9A.
                        Residential hotel guestrooms with a pre-January 1, 1990 permit of
                        occupancy that did not file a notice of intent to withdraw before
                        January 1, 2004 may not be withdrawn.
                      </p>
                    </div>
                  </div>
                  <div className="bg-amber-50 border-t border-amber-100 p-5">
                    <div className="space-y-2">
                      {[
                        'All units in the building must be withdrawn — the landlord cannot selectively remove individual units.',
                        'Substantial relocation assistance required — amounts set annually by the Rent Board.',
                        'Displaced tenants have a right of first refusal to re-rent if units are re-rented within the specified statutory period.',
                        'Owner faces restrictions on re-renting at market rate and on demolition or conversion for years after withdrawal.',
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-2 text-sm text-amber-900">
                          <span className="text-emerald-600 mt-0.5 shrink-0 font-bold">✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-cream-dark border border-border rounded-xl p-5">
                  <span className="inline-flex w-7 h-6 rounded-full bg-amber-100 text-amber-700 items-center justify-center text-xs font-bold shrink-0 mt-0.5">14</span>
                  <div>
                    <p className="text-xs font-semibold text-brand-mid tracking-wider mb-1">§ 37.9(a)(14) · Lead Remediation</p>
                    <p className="font-medium text-ink text-sm mb-1.5">Temporary recovery for required lead remediation or abatement</p>
                    <p className="text-muted text-sm leading-relaxed">
                      The landlord seeks in good faith to temporarily recover the unit solely for
                      lead remediation or abatement required by SF Health Code Articles 11 or 26.
                      Tenant vacates only for the minimum time required. Relocation rights and
                      financial assistance under Admin Code Chapter 72 apply.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-cream-dark border border-border rounded-xl p-5">
                  <span className="inline-flex w-7 h-6 rounded-full bg-amber-100 text-amber-700 items-center justify-center text-xs font-bold shrink-0 mt-0.5">15</span>
                  <div>
                    <p className="text-xs font-semibold text-brand-mid tracking-wider mb-1">§ 37.9(a)(15) · Development Agreement Demolition</p>
                    <p className="font-medium text-ink text-sm mb-1.5">Demolition pursuant to a City development agreement (Admin Code Chapter 56)</p>
                    <p className="text-muted text-sm leading-relaxed">
                      The landlord seeks in good faith to demolish or permanently remove the unit
                      from housing use in accordance with a development agreement entered into by
                      the City under Admin Code Chapter 56.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-cream-dark border border-border rounded-xl p-5">
                  <span className="inline-flex w-7 h-6 rounded-full bg-amber-100 text-amber-700 items-center justify-center text-xs font-bold shrink-0 mt-0.5">16</span>
                  <div>
                    <p className="text-xs font-semibold text-brand-mid tracking-wider mb-1">§ 37.9(a)(16) · Good Samaritan Status Expiration</p>
                    <p className="font-medium text-ink text-sm mb-1.5">Expiration of a Good Samaritan tenancy (§ 37.2(a)(1)(D))</p>
                    <p className="text-muted text-sm leading-relaxed">
                      The tenant&rsquo;s Good Samaritan Status has expired and the landlord serves a
                      notice of termination within 60 days after expiration.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-border">
                  <div className="flex items-start gap-3 bg-cream-dark p-5">
                    <span className="inline-flex w-7 h-6 rounded-full bg-amber-100 text-amber-700 items-center justify-center text-xs font-bold shrink-0 mt-0.5">17</span>
                    <div>
                      <p className="text-xs font-semibold text-brand-mid tracking-wider mb-1">§ 37.9(a)(17) · Planning Code § 317 Residential Demolition</p>
                      <p className="font-medium text-ink text-sm mb-1.5">Development project requiring residential demolition under Planning Code § 317</p>
                      <p className="text-muted text-sm leading-relaxed">
                        The landlord seeks in good faith to complete a development project
                        requiring a Residential Demolition under Planning Code § 317 and has all
                        necessary permits before the notice. The effective date of the notice may
                        not fall more than 6 months before construction start for above-low-income
                        tenants, or more than 3 months for lower-income households.
                      </p>
                    </div>
                  </div>
                  <div className="bg-amber-50 border-t border-amber-100 p-4">
                    <div className="flex items-start gap-2 text-sm text-amber-900">
                      <span className="text-emerald-600 mt-0.5 shrink-0 font-bold">✓</span>
                      <span>If the landlord does not proceed with demolition and re-rents any units, the displaced tenant has the right to return at a rent no greater than what would have applied had they remained in continuous occupancy.</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Part 3: Additional Protections */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex w-8 h-8 rounded-full bg-brand-dark text-white items-center justify-center text-sm font-bold shrink-0">3</span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">Additional Protections &amp; Defenses</h3>
                  <p className="text-xs text-brand-mid font-semibold tracking-wider">§§ 37.9(d), (i), (j), (a)(3.1)</p>
                </div>
              </div>
              <div className="space-y-4">

                <div className="rounded-xl overflow-hidden border border-border">
                  <div className="bg-emerald-50 p-5 border-b border-emerald-100">
                    <p className="text-xs font-semibold text-emerald-700 tracking-wider mb-1">§ 37.9(i) · Applies to OMI only</p>
                    <p className="font-semibold text-ink text-sm mb-3">Senior and disabled tenant protection</p>
                    <p className="text-emerald-900 text-sm leading-relaxed mb-3">
                      A landlord may not use owner/relative move-in against a tenant who is:
                    </p>
                    <div className="space-y-1.5 mb-4">
                      {[
                        '60 years of age or older and has resided in the unit for 10 or more years; or',
                        'Disabled (as defined by SSI/SSP standards) and has resided in the unit for 10 or more years; or',
                        'Catastrophically ill (disabled plus a life-threatening illness certified by a primary care physician) and has resided in the unit for 5 or more years.',
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-2 text-sm text-emerald-900">
                          <span className="font-bold shrink-0 mt-0.5">·</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-emerald-800 leading-snug">
                      Exception: does not apply where the landlord owns only one unit in the
                      building, or where all other units in the building are occupied by
                      similarly protected tenants and the qualifying relative moving in is 60 or
                      older. A tenant claiming this protection must submit supporting evidence
                      within 30 days of the landlord&rsquo;s written request.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-border">
                  <div className="bg-emerald-50 p-5">
                    <p className="text-xs font-semibold text-emerald-700 tracking-wider mb-1">§ 37.9(j) · Applies to OMI, condo conversion, demolition (10), capital improvements, substantial rehab, and Planning Code § 317</p>
                    <p className="font-semibold text-ink text-sm mb-3">School-year defense</p>
                    <p className="text-emerald-900 text-sm leading-relaxed mb-3">
                      It is a defense to eviction under those no-fault grounds if all of the
                      following apply:
                    </p>
                    <div className="space-y-1.5 mb-4">
                      {[
                        'A child under 18 or an educator resides in the unit;',
                        'The child or educator is a tenant, or has a custodial or family relationship with a tenant;',
                        'The tenant has resided in the unit for 12 or more months; and',
                        'The effective date of the notice of termination falls during the school year (first day of Fall Semester through last day of Spring Semester, per the SFUSD calendar).',
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-2 text-sm text-emerald-900">
                          <span className="font-bold shrink-0 mt-0.5">·</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-emerald-800 leading-snug">
                      &ldquo;Educator&rdquo; includes teachers, aides, administrators, counselors, social
                      workers, nurses, custodians, security guards, cafeteria workers, and other
                      school employees or contractors at any state-licensed child care center,
                      family day care, or K-12 school. A tenant claiming this protection must
                      submit supporting evidence within 30 days of the landlord&rsquo;s written
                      request.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-border">
                  <div className="bg-emerald-50 p-5">
                    <p className="text-xs font-semibold text-emerald-700 tracking-wider mb-1">§ 37.9(d)</p>
                    <p className="font-semibold text-ink text-sm mb-2">Retaliation defense</p>
                    <p className="text-emerald-900 text-sm leading-relaxed">
                      A landlord may not evict, threaten to evict, decrease services, increase
                      rent, or take any action where the dominant motive is retaliation for the
                      tenant exercising rights under the law. Retaliation is a complete defense
                      to an eviction action. If the tenant exercised a legal right within 6
                      months before the alleged act of retaliation, a rebuttable presumption
                      arises that the landlord&rsquo;s act was retaliatory.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Notice Requirements */}
            <div>
              <h3 className="font-display text-xl font-semibold text-ink mb-2">Notice Requirements</h3>
              <p className="text-xs font-semibold text-brand-mid tracking-wider mb-6">§§ 37.9(c), 37.9(o)</p>
              <div className="bg-cream-dark rounded-xl p-5 border border-border">
                <ul className="space-y-3">
                  {[
                    'For at-fault grounds (1)–(6): Before serving a notice to vacate, the landlord must first provide a written warning describing the violation and giving the tenant at least 10 days to cure (§ 37.9(o)).',
                    'The notice to vacate must state the just cause as the dominant motive in writing on or before the date of service.',
                    'For OMI, condo conversion, demolition, capital improvements, lead remediation, and Planning Code § 317 evictions, the notice must also state the lawful rent at the time it is issued.',
                    'A Rent Board information form (available in English, Chinese, Spanish, Vietnamese, Tagalog, and Russian) must be attached to the notice in the tenant\'s primary language.',
                    'A copy of all notices to vacate (except three-day pay-or-quit notices) must be filed with the Rent Board within 10 days of service.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted">
                      <span className="text-brand mt-0.5 shrink-0">·</span>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Remedies */}
            <div>
              <h3 className="font-display text-xl font-semibold text-ink mb-2">Remedies</h3>
              <p className="text-xs font-semibold text-brand-mid tracking-wider mb-5">§ 37.9(f)</p>
              <p className="text-muted text-sm mb-5">
                A tenant who is wrongfully evicted — or whose housing services are wrongfully
                severed — may institute a civil proceeding for all of the following:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-cream-dark rounded-xl p-5 border border-border">
                  <p className="text-xs font-semibold text-brand-mid tracking-wider mb-2">Actual Damages</p>
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
                  <p className="text-xs font-semibold text-brand-mid tracking-wider mb-2">Injunctive Relief</p>
                  <p className="text-muted text-sm leading-relaxed">
                    A court may order the landlord to stop the eviction, restore possession, or
                    restore severed housing services.
                  </p>
                </div>
                <div className="bg-cream-dark rounded-xl p-5 border border-border">
                  <p className="text-xs font-semibold text-brand-mid tracking-wider mb-2">Attorney&rsquo;s Fees &amp; Costs</p>
                  <p className="text-muted text-sm leading-relaxed">
                    The prevailing party is entitled to reasonable attorney&rsquo;s fees and costs
                    by court order.
                  </p>
                </div>
                <div className="bg-cream-dark rounded-xl p-5 border border-border">
                  <p className="text-xs font-semibold text-brand-mid tracking-wider mb-2">Treble Damages</p>
                  <p className="text-ink font-semibold text-lg mb-1">Not less than 3× actual damages</p>
                  <p className="text-muted text-sm leading-relaxed">
                    Emotional distress damages are trebled only if the landlord acted in knowing
                    violation of or in reckless disregard of § 37.9. For OMI cases, the action
                    must be brought within 5 years — from the earlier of (1) 3 months after
                    recovery of possession, or (2) the date of the landlord&rsquo;s first statement
                    of occupancy filing.
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
          <p className="text-xs font-semibold text-brand-mid tracking-wider mb-2">
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

            {/* Overview */}
            <div>
              <p className="text-muted leading-relaxed mb-6">
                Section 37.10B applies to all residential tenancies in San Francisco — not
                just rent-controlled units. Any landlord, and any agent, contractor,
                subcontractor, or employee of the landlord, may be liable. All prohibited
                conduct must be done <em>in bad faith, with ulterior motive, or without
                honest intent.</em>
              </p>
              <div className="bg-cream-dark rounded-xl p-5 border border-border">
                <p className="text-sm font-medium text-ink">
                  Unlike a wrongful eviction claim, § 37.10B does not require you to have
                  left your unit. You can bring a harassment claim while still in possession
                  — and use it as a defense if an eviction action is later filed against you.
                </p>
              </div>
            </div>

            {/* Part 1: Prohibited Conduct */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex w-8 h-8 rounded-full bg-brand-dark text-white items-center justify-center text-sm font-bold shrink-0">1</span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">Prohibited Conduct</h3>
                  <p className="text-xs text-brand-mid font-semibold tracking-wider">§ 37.10B(a)</p>
                </div>
              </div>
              <div className="space-y-4">

                <div className="rounded-xl border border-border overflow-hidden">
                  <div className="bg-cream-dark px-5 py-3 border-b border-border">
                    <p className="text-xs font-semibold text-brand-mid tracking-wider">§§ 37.10B(a)(1)–(3) · Housing Services &amp; Maintenance</p>
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="flex items-start gap-3 text-sm text-muted">
                      <span className="text-red-400 font-bold shrink-0 mt-0.5">(1)</span>
                      <span>Interrupt, terminate, or fail to provide housing services required by contract or by state, county, or local housing, health, or safety laws.</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-muted">
                      <span className="text-red-400 font-bold shrink-0 mt-0.5">(2)</span>
                      <span>Fail to perform repairs and maintenance required by contract or by state, county, or local housing, health, or safety laws.</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-muted">
                      <span className="text-red-400 font-bold shrink-0 mt-0.5">(3)</span>
                      <span>Fail to exercise due diligence in completing repairs and maintenance once undertaken, or fail to follow appropriate industry repair, containment, or remediation protocols designed to minimize exposure to noise, dust, lead paint, mold, asbestos, or other building materials with potentially harmful health impacts.</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border overflow-hidden">
                  <div className="bg-cream-dark px-5 py-3 border-b border-border">
                    <p className="text-xs font-semibold text-brand-mid tracking-wider">§ 37.10B(a)(4) · Right of Access</p>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start gap-3 text-sm text-muted">
                      <span className="text-red-400 font-bold shrink-0 mt-0.5">(4)</span>
                      <span>Abuse the landlord&rsquo;s right of access into a rental housing unit as that right is provided by law. California Civil Code § 1954 requires advance written notice and limits the permissible purposes and frequency of entry.</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border overflow-hidden">
                  <div className="bg-cream-dark px-5 py-3 border-b border-border">
                    <p className="text-xs font-semibold text-brand-mid tracking-wider">§§ 37.10B(a)(5)–(7) · Coercion to Vacate</p>
                  </div>
                  <div className="p-5 space-y-4">
                    <div className="flex items-start gap-3 text-sm text-muted">
                      <span className="text-red-400 font-bold shrink-0 mt-0.5">(5)</span>
                      <div>
                        <span>Influence or attempt to influence a tenant to vacate through fraud, intimidation, or coercion.</span>
                        <div className="mt-2 bg-cream-dark rounded-lg p-3 border border-border text-xs leading-snug">
                          <span className="font-medium text-ink">Example expressly covered:</span> Imposing a rent increase on a unit exempt from rent control (§ 37.3(d) or § 37.3(g)) with intent to defraud, intimidate, or coerce the tenant into vacating in circumvention of § 37.9(a), § 37.9A, § 37.9B, or § 37.9C. Evidence of bad faith includes: (1) the increase was substantially in excess of market rates for comparable units; (2) the increase came within six months after an attempt to recover possession.
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-muted">
                      <span className="text-red-400 font-bold shrink-0 mt-0.5">(6)</span>
                      <span>Attempt to coerce the tenant to vacate with offers of payment to vacate that are accompanied by threats or intimidation.</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-muted">
                      <span className="text-red-400 font-bold shrink-0 mt-0.5">(7)</span>
                      <span>Continue to offer payments to vacate after the tenant has notified the landlord in writing that they no longer wish to receive further offers.</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border overflow-hidden">
                  <div className="bg-cream-dark px-5 py-3 border-b border-border">
                    <p className="text-xs font-semibold text-brand-mid tracking-wider">§§ 37.10B(a)(8)–(9) · Threats &amp; Discrimination</p>
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="flex items-start gap-3 text-sm text-muted">
                      <span className="text-red-400 font-bold shrink-0 mt-0.5">(8)</span>
                      <span>Threaten the tenant, by word or gesture, with physical harm.</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-muted">
                      <span className="text-red-400 font-bold shrink-0 mt-0.5">(9)</span>
                      <span>Violate any law prohibiting discrimination based on actual or perceived race, gender, sexual preference, sexual orientation, ethnic background, nationality, place of birth, immigration or citizenship status, religion, age, parenthood, marriage, pregnancy, disability, AIDS, or occupancy by a minor child.</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border overflow-hidden">
                  <div className="bg-cream-dark px-5 py-3 border-b border-border">
                    <p className="text-xs font-semibold text-brand-mid tracking-wider">§§ 37.10B(a)(10), (13)–(14) · Quiet Enjoyment &amp; Privacy</p>
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="flex items-start gap-3 text-sm text-muted">
                      <span className="text-red-400 font-bold shrink-0 mt-0.5">(10)</span>
                      <span>Interfere with a tenant&rsquo;s right to quiet use and enjoyment of a rental housing unit as that right is defined by California law.</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-muted">
                      <span className="text-red-400 font-bold shrink-0 mt-0.5">(13)</span>
                      <span>Interfere with a tenant&rsquo;s right to privacy.</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-muted">
                      <span className="text-red-400 font-bold shrink-0 mt-0.5">(14)</span>
                      <span>Request information that violates a tenant&rsquo;s right to privacy, including but not limited to residence or citizenship status or social security number.</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border overflow-hidden">
                  <div className="bg-cream-dark px-5 py-3 border-b border-border">
                    <p className="text-xs font-semibold text-brand-mid tracking-wider">§§ 37.10B(a)(11)–(12) · Rent Payment</p>
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="flex items-start gap-3 text-sm text-muted">
                      <span className="text-red-400 font-bold shrink-0 mt-0.5">(11)</span>
                      <span>Refuse to accept or acknowledge receipt of a tenant&rsquo;s lawful rent payment.</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-muted">
                      <span className="text-red-400 font-bold shrink-0 mt-0.5">(12)</span>
                      <span>Refuse to cash a rent check for over 30 days.</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border overflow-hidden">
                  <div className="bg-cream-dark px-5 py-3 border-b border-border">
                    <p className="text-xs font-semibold text-brand-mid tracking-wider">§ 37.10B(a)(15) · Catch-All</p>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start gap-3 text-sm text-muted">
                      <span className="text-red-400 font-bold shrink-0 mt-0.5">(15)</span>
                      <span>Other repeated acts or omissions of such significance as to substantially interfere with or disturb the comfort, repose, peace, or quiet of any person lawfully entitled to occupancy — and that cause, are likely to cause, or are intended to cause such person to vacate the unit or surrender or waive any rights in relation to their occupancy.</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Part 2: Enforcement & Remedies */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex w-8 h-8 rounded-full bg-brand-dark text-white items-center justify-center text-sm font-bold shrink-0">2</span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">Enforcement &amp; Remedies</h3>
                  <p className="text-xs text-brand-mid font-semibold tracking-wider">§ 37.10B(c)</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div className="bg-cream-dark rounded-xl p-5 border border-border sm:col-span-2">
                  <p className="text-xs font-semibold text-brand-mid tracking-wider mb-2">§ 37.10B(c)(5) · Damages</p>
                  <p className="font-display text-2xl font-bold text-ink mb-2">3× actual damages or $1,000 — whichever is greater</p>
                  <p className="text-muted text-sm leading-relaxed">
                    Any person who violates § 37.10B is liable for money damages of not less
                    than three times actual damages suffered (including damages for mental or
                    emotional distress), or statutory damages of $1,000 — whichever is
                    greater. Mental and emotional distress damages are trebled only where the
                    trier of fact finds the landlord acted in knowing violation of or in
                    reckless disregard of § 37.9, § 37.10A, or § 37.10B.
                  </p>
                </div>

                <div className="bg-cream-dark rounded-xl p-5 border border-border">
                  <p className="text-xs font-semibold text-brand-mid tracking-wider mb-2">§ 37.10B(c)(5) · Attorney&rsquo;s Fees &amp; Punitive Damages</p>
                  <p className="text-muted text-sm leading-relaxed">
                    A prevailing plaintiff is entitled to reasonable attorney&rsquo;s fees and
                    costs. The trier of fact may also award punitive damages in a proper case
                    as defined by Civil Code § 3294. These remedies are in addition to any
                    other existing remedies.
                  </p>
                </div>

                <div className="bg-cream-dark rounded-xl p-5 border border-border">
                  <p className="text-xs font-semibold text-brand-mid tracking-wider mb-2">§ 37.10B(c)(4) · Injunction</p>
                  <p className="text-muted text-sm leading-relaxed">
                    Any aggrieved person, the City Attorney, or any person or entity who will
                    fairly and adequately represent the interest of a protected class may seek
                    an injunction to stop ongoing or threatened violations.
                  </p>
                </div>

                <div className="bg-cream-dark rounded-xl p-5 border border-border">
                  <p className="text-xs font-semibold text-brand-mid tracking-wider mb-2">§ 37.10B(c)(1) · Rent Board</p>
                  <p className="text-muted text-sm leading-relaxed">
                    A violation of § 37.10B constitutes a substantial and significant
                    decrease in services under § 37.2(g). Tenants may file a petition with
                    the Rent Board for a reduction in rent — a separate avenue from civil
                    litigation.
                  </p>
                </div>

                <div className="bg-cream-dark rounded-xl p-5 border border-border">
                  <p className="text-xs font-semibold text-brand-mid tracking-wider mb-2">§ 37.10B(c)(6) · Defending an Eviction</p>
                  <p className="text-muted text-sm leading-relaxed">
                    In any unlawful detainer action subject to this Chapter (other than
                    § 37.9(b) same-unit landlord cases), if the tenant is the prevailing
                    party, the court shall award the tenant reasonable attorney&rsquo;s fees and
                    costs. A § 37.10B violation may also be raised as an affirmative defense
                    in an unlawful detainer.
                  </p>
                </div>

                <div className="bg-cream-dark rounded-xl p-5 border border-border">
                  <p className="text-xs font-semibold text-brand-mid tracking-wider mb-2">§ 37.10B(c)(2)–(3) · Criminal &amp; Civil</p>
                  <p className="text-muted text-sm leading-relaxed">
                    Violations are a misdemeanor — fine up to $1,000 or up to six months in
                    county jail. Any person, including the City, may bring a civil enforcement
                    action. The burden of proof is preponderance of the evidence.
                  </p>
                </div>

              </div>
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
