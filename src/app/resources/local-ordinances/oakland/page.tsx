import type { Metadata } from 'next';
import Link from 'next/link';
import CaseReviewCTA from '@/components/CaseReviewCTA';
import CaseReviewSection from '@/components/CaseReviewSection';

export const metadata: Metadata = {
  alternates: { canonical: '/resources/local-ordinances/oakland' },
  title: 'Oakland Rent Adjustment Ordinance Reference (OMC Chapter 8.22)',
  description:
    'Plain-language reference for Oakland Municipal Code Chapter 8.22 — covered unit definition, rent control exemptions, just cause for eviction, and Ellis Act protections.',
  keywords: [
    'Oakland Rent Adjustment Ordinance',
    'Oakland just cause eviction',
    'Oakland rent control exemptions',
    'OMC 8.22 covered unit',
    'Oakland tenant rights attorney',
    'Oakland wrongful eviction lawyer',
  ],
  openGraph: {
    images: '/opengraph-image',
    type: 'article',
    url: 'https://bowlaylaw.com/resources/local-ordinances/oakland',
    title: 'Oakland Rent Adjustment Ordinance Reference (OMC Chapter 8.22) | Bowlay Law',
    description:
      'Plain-language reference for Oakland Municipal Code Chapter 8.22 — covered unit definition, rent control, just cause eviction, and Ellis Act protections.',
  },
};

export default function OaklandOrdinanceReferencePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <p className="text-brand-mid text-sm font-semibold tracking-wider mb-4">
            Resources · Local Ordinances · Oakland
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4 text-ink">
            Oakland Rent Adjustment Ordinance
            <br />
            <span className="text-brand-mid">Chapter 8.22 Reference</span>
          </h1>
          <p className="text-muted text-lg leading-relaxed mb-8 max-w-2xl">
            Plain-language reference for Oakland Municipal Code Chapter 8.22 — the Rent
            Adjustment Ordinance (Article I), the Just Cause for Eviction Ordinance
            (Article II), and the Ellis Act Ordinance (Article III). Statutory citations,
            exemptions, and the carve-backs that matter in practice.
          </p>

          {/* Conversion banner */}
          <div className="bg-brand-dark/5 border border-brand-dark/20 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-ink font-medium text-sm leading-relaxed">
                I represent Oakland tenants under Chapter 8.22. If your landlord violated
                this ordinance, the free case review is 15–20 minutes.
              </p>
            </div>
            <Link
              href="#case-review"
              className="shrink-0 bg-brand-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand transition-colors"
            >
              Free Case Review →
            </Link>
          </div>
        </div>
      </section>

      {/* Jump links */}
      <section className="bg-cream-dark border-b border-border px-6 py-4">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-3 text-sm">
          <span className="text-muted font-medium">Jump to:</span>
          <a href="#covered-unit" className="text-brand hover:text-brand-mid underline">What Is a Covered Unit?</a>
          <a href="#rent-control" className="text-brand hover:text-brand-mid underline">Rent Control (Article I)</a>
          <a href="#just-cause" className="text-brand hover:text-brand-mid underline">Just Cause (Article II)</a>
          <a href="#ellis-act" className="text-brand hover:text-brand-mid underline">Ellis Act (Article III)</a>
        </div>
      </section>

      {/* ── COVERED UNIT ── */}
      <section id="covered-unit" className="bg-white px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 bg-brand-dark rounded-full" />
            <h2 className="font-display text-3xl font-bold text-ink">What Is a Covered Unit?</h2>
          </div>
          <p className="text-xs font-semibold text-brand-mid tracking-wider mb-6">
            OMC § 8.22.010
          </p>

          <p className="text-muted leading-relaxed mb-8 max-w-3xl">
            The definition of &ldquo;covered unit&rdquo; is the threshold question for all protections
            under Chapter 8.22. Coverage under the Rent Adjustment Ordinance (Article I),
            the Just Cause for Eviction Ordinance (Article II), and the Ellis Act Ordinance
            (Article III) is analyzed separately — each article has its own exemptions.
          </p>

          {/* General rule */}
          <div className="flex items-start gap-3 bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-8">
            <span className="text-emerald-600 font-bold mt-0.5 shrink-0">✓</span>
            <div>
              <p className="font-semibold text-ink text-sm mb-2">General rule — most rental housing in Oakland is covered</p>
              <p className="text-muted text-sm leading-relaxed mb-3">
                A &ldquo;covered unit&rdquo; is any dwelling unit — including joint living and work quarters
                — located in Oakland and used or occupied in consideration of payment of rent,
                along with all housing services associated with it. The definition expressly
                includes vehicular residential facilities rented or offered for rent for living
                or dwelling purposes, whether rent is paid for the recreational vehicle and the
                lot, or for the lot alone.
              </p>
              <p className="text-muted/70 text-xs leading-relaxed border-l-2 border-emerald-200 pl-3">
                A vehicular residential facility is defined in Oakland Planning Code § 17.10.700.
                Coverage attaches whether rent is paid for the vehicle and lot together, or
                for the lot alone — making clear the ordinance applies to RV park tenancies.
              </p>
            </div>
          </div>

          {/* Article I exemptions */}
          <div className="mb-2">
            <p className="font-semibold text-ink mb-1">Exemptions from the Rent Adjustment Ordinance (Article I only)</p>
            <p className="text-muted text-sm leading-relaxed mb-6">
              The following exemptions apply to <strong>Article I only</strong> (rent control). The Just
              Cause for Eviction Ordinance (Article II) and the Ellis Act Ordinance (Article III)
              have different exemptions — a unit exempt from rent control may still be subject
              to just cause eviction protections.
            </p>
          </div>

          <div className="space-y-4">

            {/* Exempt 1: Government-regulated */}
            <div className="rounded-xl overflow-hidden border border-border">
              <div className="flex items-start gap-3 bg-cream-dark p-5">
                <span className="text-red-400 font-bold mt-0.5 shrink-0">✕</span>
                <div>
                  <p className="text-xs font-semibold text-brand-mid tracking-wider mb-1">§ 8.22.030(A)(1)</p>
                  <p className="font-medium text-ink text-sm mb-1.5">Government-controlled, regulated, or subsidized units</p>
                  <p className="text-muted text-sm leading-relaxed">
                    Dwelling units whose rents are controlled, regulated (other than by Chapter
                    8.22), or subsidized by any governmental unit, agency, or authority.
                  </p>
                </div>
              </div>
              <div className="bg-amber-50 border-t border-amber-100 p-5">
                <p className="text-xs font-semibold text-amber-800 mb-2">↩ Carve-back — exemption is not permanent:</p>
                <p className="text-amber-900 text-sm leading-relaxed">
                  Once the unit is no longer controlled, regulated, or subsidized by the
                  governmental agency, the exemption ceases and the unit becomes a covered unit
                  subject to Article I. The owner must file a notice with the Rent Adjustment
                  Program within 30 days after the unit loses its governmental status
                  (§ 8.22.030(C)).
                </p>
              </div>
            </div>

            {/* Exempt 2: Hotels/motels */}
            <div className="rounded-xl overflow-hidden border border-border">
              <div className="flex items-start gap-3 bg-cream-dark p-5">
                <span className="text-red-400 font-bold mt-0.5 shrink-0">✕</span>
                <div>
                  <p className="text-xs font-semibold text-brand-mid tracking-wider mb-1">§ 8.22.030(A)(2)</p>
                  <p className="font-medium text-ink text-sm mb-1.5">Hotels, motels, inns, rooming and boarding houses — less than 30 days continuous occupancy</p>
                  <p className="text-muted text-sm leading-relaxed">
                    Accommodations in motels, hotels, inns, tourist houses, rooming houses, and
                    boarding houses where the same tenant has not occupied the accommodation for
                    30 or more continuous days.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-amber-50 border-t border-amber-100 p-4">
                <span className="text-amber-500 font-bold mt-0.5 shrink-0">↩</span>
                <p className="text-amber-900 text-sm">
                  <span className="font-medium">Carve-back:</span>{' '}
                  Once the same tenant has occupied the accommodation for 30 or more continuous
                  days, the exemption no longer applies and the unit becomes covered.
                </p>
              </div>
            </div>

            {/* Exempt 3: Institutional */}
            <div className="flex items-start gap-3 bg-cream-dark border border-border rounded-xl p-5">
              <span className="text-red-400 font-bold mt-0.5 shrink-0">✕</span>
              <div>
                <p className="text-xs font-semibold text-brand-mid tracking-wider mb-1">§ 8.22.030(A)(3)</p>
                <p className="font-medium text-ink text-sm mb-1.5">Institutional housing</p>
                <p className="text-muted text-sm leading-relaxed">
                  Housing accommodations in any hospital, convent, monastery, extended care
                  facility, convalescent home, nonprofit home for the aged, or dormitory owned
                  and operated by an educational institution.
                </p>
              </div>
            </div>

            {/* Exempt 4: Nonprofit cooperatives */}
            <div className="flex items-start gap-3 bg-cream-dark border border-border rounded-xl p-5">
              <span className="text-red-400 font-bold mt-0.5 shrink-0">✕</span>
              <div>
                <p className="text-xs font-semibold text-brand-mid tracking-wider mb-1">§ 8.22.030(A)(4)</p>
                <p className="font-medium text-ink text-sm mb-1.5">Nonprofit cooperatives</p>
                <p className="text-muted text-sm leading-relaxed">
                  Dwelling units in a nonprofit cooperative owned, occupied, and controlled by
                  a majority of the residents.
                </p>
              </div>
            </div>

            {/* Exempt 5: New construction */}
            <div className="rounded-xl overflow-hidden border border-border">
              <div className="flex items-start gap-3 bg-cream-dark p-5">
                <span className="text-red-400 font-bold mt-0.5 shrink-0">✕</span>
                <div>
                  <p className="text-xs font-semibold text-brand-mid tracking-wider mb-1">§ 8.22.030(A)(5)</p>
                  <p className="font-medium text-ink text-sm mb-1.5">New construction — certificate of occupancy on or after January 1, 1983</p>
                  <p className="text-muted text-sm leading-relaxed mb-3">
                    Dwelling units that were newly constructed and received a certificate of
                    occupancy on or after January 1, 1983. To qualify, the unit must be entirely
                    newly constructed or created from space that was formerly entirely nonresidential.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-border">
                    <p className="text-xs font-semibold text-ink mb-2">What does NOT qualify as &ldquo;newly constructed&rdquo;:</p>
                    <div className="space-y-1.5">
                      {[
                        'Units converted from residential to residential — the original space must have been entirely nonresidential',
                        'Units that are partially new construction — the entire unit must be newly constructed',
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-2 text-sm text-muted">
                          <span className="text-red-400 mt-0.5 shrink-0 font-bold">✕</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-amber-50 border-t border-amber-100 p-5">
                <p className="text-xs font-semibold text-amber-800 mb-3">↩ Two express limits — these units are NOT exempt:</p>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 border border-amber-100">
                    <p className="text-xs font-semibold text-amber-700 tracking-wider mb-1.5">Vehicular residential facilities</p>
                    <p className="text-amber-900 text-sm leading-relaxed">
                      The new construction exemption does not apply to a vehicular residential
                      facility regardless of when it was constructed.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-amber-100">
                    <p className="text-xs font-semibold text-amber-700 tracking-wider mb-1.5">Units replacing withdrawn covered units (Ellis Act)</p>
                    <p className="text-amber-900 text-sm leading-relaxed">
                      Newly constructed dwelling units that replace covered units withdrawn
                      from the rental market under the Ellis Act Ordinance (OMC § 8.22.400
                      et seq.) are not exempt from rent control — even if they received a
                      certificate of occupancy after January 1, 1983.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Exempt 6: Substantially Rehabilitated */}
            <div className="rounded-xl overflow-hidden border border-border">
              <div className="flex items-start gap-3 bg-cream-dark p-5">
                <span className="text-red-400 font-bold mt-0.5 shrink-0">✕</span>
                <div>
                  <p className="text-xs font-semibold text-brand-mid tracking-wider mb-1">§ 8.22.030(A)(6)</p>
                  <p className="font-medium text-ink text-sm mb-1.5">Substantially rehabilitated buildings</p>
                  <p className="text-muted text-sm leading-relaxed">
                    Buildings that have been substantially rehabilitated and issued a certificate
                    of exemption from the Rent Adjustment Program.
                  </p>
                </div>
              </div>
              <div className="bg-amber-50 border-t border-amber-100 p-5">
                <p className="text-xs font-semibold text-amber-800 mb-2">↩ Critical limitation — closed to new applications:</p>
                <p className="text-amber-900 text-sm leading-relaxed">
                  This exemption applies only to buildings where the rental property owner
                  submitted an application for a certification of exemption to the Rent
                  Adjustment Program <strong>prior to October 20, 2017</strong>, and which
                  were issued a certificate of exemption. No new substantially rehabilitated
                  building exemptions are available under this section.
                </p>
              </div>
            </div>

            {/* Exempt 7: Costa-Hawkins */}
            <div className="flex items-start gap-3 bg-cream-dark border border-border rounded-xl p-5">
              <span className="text-red-400 font-bold mt-0.5 shrink-0">✕</span>
              <div>
                <p className="text-xs font-semibold text-brand-mid tracking-wider mb-1">§ 8.22.030(A)(7)</p>
                <p className="font-medium text-ink text-sm mb-1.5">Units exempt under Costa-Hawkins (Cal. Civ. Code § 1954.52)</p>
                <p className="text-muted text-sm leading-relaxed">
                  Dwelling units exempt pursuant to the Costa-Hawkins Rental Housing Act —
                  primarily single-family homes and condominiums that are separately alienable
                  from any other dwelling unit. See the{' '}
                  <Link href="/resources/local-ordinances/san-francisco#rent-control" className="text-brand underline hover:text-brand-mid">
                    SF Rent Ordinance reference
                  </Link>
                  {' '}for a detailed breakdown of Costa-Hawkins exemptions and their exceptions,
                  which apply similarly in Oakland.
                </p>
              </div>
            </div>

          </div>

          {/* Exemption procedures */}
          <div className="mt-8">
            <h3 className="font-display text-xl font-semibold text-ink mb-4">Exemption procedures</h3>
            <p className="text-xs font-semibold text-brand-mid tracking-wider mb-6">§ 8.22.030(B)–(C)</p>
            <div className="space-y-3">

              <div className="rounded-xl border border-border overflow-hidden">
                <div className="bg-white px-5 py-4 border-b border-border">
                  <p className="font-semibold text-ink text-sm">§ 8.22.030(B)(1) — Certificate of exemption</p>
                </div>
                <div className="bg-cream-dark p-5 space-y-3">
                  {[
                    { sub: '(a)', text: 'A certificate of exemption is a determination by the Rent Adjustment Program that a unit qualifies for an exemption and is not a covered unit. For units exempt as new construction or by state law (Costa-Hawkins), an owner may obtain a certificate by claiming and proving an exemption in response to a tenant petition, or by petitioning the Program directly. Certificates may only be granted for units that are permanently exempt — new construction or Costa-Hawkins.' },
                    { sub: '(b)', text: 'The burden of proving and producing evidence for the exemption is on the owner. A certificate of exemption is a final determination absent fraud, mistake, or a change in law or circumstances.' },
                    { sub: '(c)', text: 'Timely submission of a previously granted certificate of exemption in response to a petition results in dismissal of the petition, absent proof of fraud or mistake. The burden of proving fraud, mistake, or change in circumstances is on the tenant.' },
                  ].map(({ sub, text }) => (
                    <div key={sub} className="flex items-start gap-3">
                      <span className="text-xs font-semibold text-brand-mid shrink-0 mt-0.5">{sub}</span>
                      <p className="text-muted text-sm leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-border overflow-hidden">
                <div className="bg-white px-5 py-4 border-b border-border">
                  <p className="font-semibold text-ink text-sm">§ 8.22.030(C) — Government-regulated units: notice requirement</p>
                </div>
                <div className="bg-cream-dark p-5">
                  <p className="text-muted text-sm leading-relaxed">
                    The owner of a unit exempt under § 8.22.030(A)(1) because it is
                    controlled, regulated, or subsidized by a governmental agency must file a
                    notice with the Rent Adjustment Program within <strong>30 days</strong> after
                    the unit is no longer controlled, regulated, or subsidized. Once governmental
                    status ends, the exemption ceases and the unit becomes a covered unit subject
                    to Article I. The notice must be on a form prescribed by the Rent Adjustment
                    Program.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      <CaseReviewCTA location="oakland_ordinance_mid" />

      {/* ── RENT CONTROL (Article I) ── */}
      <section id="rent-control" className="bg-cream-dark px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-1 bg-brand-dark rounded-full" />
            <h2 className="font-display text-3xl font-bold text-ink">Rent Control</h2>
          </div>
          <p className="text-xs font-semibold text-brand-mid tracking-wider mb-2">
            OMC Chapter 8.22, Article I — Rent Adjustment Ordinance
          </p>
          <div className="space-y-4">
            <p className="text-muted leading-relaxed">
              Oakland&rsquo;s Rent Adjustment Ordinance limits how much, and how often, a landlord can raise the rent on a covered unit: generally units whose certificate of occupancy was issued before January 1, 1983, including owner-occupied duplexes and triplexes. Most single-family homes, condos, and government-subsidized units are not covered (see &ldquo;What Is a Covered Unit?&rdquo; above). The City&rsquo;s Rent Adjustment Program (RAP) sets the yearly allowance and decides disputes.
            </p>
            <p className="text-muted leading-relaxed">
              For increases taking effect <strong className="text-ink">August 1, 2026 through July 31, 2027, the allowable annual increase is 2.3%</strong>. Since 2022 the City has set it at 60% of the change in the regional Consumer Price Index, capped at 3%. Landlords can &ldquo;bank&rdquo; increases they skipped in past years, but a single increase cannot exceed three times the current figure (6.9% this year). Starting January 1, 2026, banked increases expire after five years instead of ten, and they are lost when the property is sold (with a narrow exception for inheritance). Anything above that, such as capital improvements, uninsured repairs, higher operating costs, or &ldquo;fair return,&rdquo; requires a RAP petition first. Even then, no increase may exceed the state cap in one year (8.8% for the same period) or 30% over five years, except a fair-return increase. (OMC § 8.22.070)
            </p>
            <p className="text-muted leading-relaxed">
              When a tenant moves out voluntarily or is evicted for cause, state law (Costa-Hawkins) generally lets the landlord set a new starting rent. That reset is not available in some cases, for example where the unit was cited for serious code violations at least 60 days before the vacancy and they were never fixed, or where special re-rental limits apply after an owner move-in or Ellis Act withdrawal. (OMC § 8.22.080; Civ. Code § 1954.53)
            </p>
            <p className="text-muted leading-relaxed">
              A tenant can challenge an unlawful increase by petitioning RAP <strong className="text-ink">within 180 days</strong> (extended from 90 days on December 24, 2024), and can petition for a rent reduction when housing services are cut or code violations go unrepaired. The ordinance also allows an aggrieved tenant to sue for damages or a court order. (OMC § 8.22.150)
            </p>
          <div className="bg-white rounded-xl p-6 border border-border mt-6">
            <p className="text-sm font-semibold text-ink mb-3">A lawful increase requires:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                <span className="text-brand font-bold shrink-0">·</span>
                <span>No more than one increase in any 12 months, and none in the first 12 months of the tenancy</span>
              </li>
              <li className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                <span className="text-brand font-bold shrink-0">·</span>
                <span>At least 30 days&rsquo; written notice, with the City&rsquo;s RAP Notice attached (OMC § 8.22.060)</span>
              </li>
              <li className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                <span className="text-brand font-bold shrink-0">·</span>
                <span>No increase until at least six months after the tenant first received the RAP Notice</span>
              </li>
              <li className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                <span className="text-brand font-bold shrink-0">·</span>
                <span>The unit must be registered with RAP</span>
              </li>
              <li className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                <span className="text-brand font-bold shrink-0">·</span>
                <span>A current business tax certificate (required if the increase includes banked amounts; for a CPI-only increase, a payment plan for back business taxes also works)</span>
              </li>
              <li className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                <span className="text-brand font-bold shrink-0">·</span>
                <span>On a fixed-term lease, waiting until the lease ends unless the lease allows mid-term increases</span>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </section>

      {/* ── JUST CAUSE (Article II) ── */}
      <section id="just-cause" className="bg-white px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-1 bg-brand-mid rounded-full" />
            <h2 className="font-display text-3xl font-bold text-ink">Just Cause for Eviction</h2>
          </div>
          <p className="text-xs font-semibold text-brand-mid tracking-wider mb-2">
            OMC Chapter 8.22, Article II — Just Cause for Eviction Ordinance
          </p>
          <div className="space-y-4">
            <p className="text-muted leading-relaxed">
              Oakland&rsquo;s Just Cause for Eviction Ordinance, adopted by voters as Measure EE in 2002, means a landlord can end a tenancy only for one of the reasons the ordinance lists, and must state that reason in the notice (OMC § 8.22.360). Its coverage is much broader than rent control. Measure Y (effective December 21, 2018) added owner-occupied duplexes and triplexes, and Measure V (effective December 30, 2022) extended protection to units built after 1995 and to rented RVs and tiny homes on wheels. The main exceptions are ground-up new construction with a certificate of occupancy issued in the last 10 years, rooms where the owner lives in the unit and shares a kitchen or bathroom with the tenant, and certain hospital, treatment, and transitional-housing facilities (OMC § 8.22.350).
            </p>
            <p className="text-muted leading-relaxed">
              The end of a lease, a sale or foreclosure, a condo conversion, and a change in a unit&rsquo;s Section 8 status are <strong className="text-ink">not</strong> just causes. Every termination notice must state the cause, must say that advice is available from RAP, and must be filed with RAP within 10 days of service.
            </p>
            <p className="text-muted leading-relaxed">
              If a landlord, or anyone acting for them, evicts or tries to evict without a valid just cause, the tenant can sue for a court order and for <strong className="text-ink">not less than three times actual damages</strong>. Emotional distress damages are tripled only if the landlord knowingly or recklessly violated the ordinance. A tenant who wins is entitled to reasonable attorney&rsquo;s fees and costs (OMC § 8.22.370), and lease clauses that waive these rights are void (OMC § 8.22.380).
            </p>
          <div className="bg-cream-dark rounded-xl p-6 border border-border mt-6">
            <p className="text-sm font-semibold text-ink mb-3">Owner move-in evictions carry extra conditions:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                <span className="text-brand font-bold shrink-0">·</span>
                <span>The owner, or the owner&rsquo;s spouse, domestic partner, child, parent, or grandparent, must intend in good faith to live there as a principal residence for at least 36 months</span>
              </li>
              <li className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                <span className="text-brand font-bold shrink-0">·</span>
                <span>The person must move in within three months and file certifications with RAP</span>
              </li>
              <li className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                <span className="text-brand font-bold shrink-0">·</span>
                <span>Tenants who have lived in the unit five years or more and are 60 or older, disabled, or catastrophically ill are generally protected from owner move-in eviction</span>
              </li>
              <li className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                <span className="text-brand font-bold shrink-0">·</span>
                <span>A no-fault eviction cannot take effect during the Oakland Unified School District school year if a school-age child or an educator lives in the unit and the tenant has been there at least 90 days</span>
              </li>
              <li className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                <span className="text-brand font-bold shrink-0">·</span>
                <span>No-fault notices must include a copy of the owner&rsquo;s current business tax certificate</span>
              </li>
              <li className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                <span className="text-brand font-bold shrink-0">·</span>
                <span>The owner must pay relocation under OMC § 8.22.850</span>
              </li>
            </ul>
          </div>
          <div className="bg-cream-dark rounded-xl p-6 border border-border mt-6">
            <p className="text-sm font-semibold text-ink mb-3">The listed just causes (OMC § 8.22.360(A)):</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                <span className="text-brand font-bold shrink-0">·</span>
                <span>Nonpayment of rent, where the amount owed is at least one month of HUD fair market rent for a comparable unit</span>
              </li>
              <li className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                <span className="text-brand font-bold shrink-0">·</span>
                <span>Continuing a substantial violation of a material lease term after a written notice to stop</span>
              </li>
              <li className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                <span className="text-brand font-bold shrink-0">·</span>
                <span>Willfully causing substantial damage and refusing to stop or repair it after written notice</span>
              </li>
              <li className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                <span className="text-brand font-bold shrink-0">·</span>
                <span>Continuing to disturb other tenants&rsquo; peace and quiet after written notice</span>
              </li>
              <li className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                <span className="text-brand font-bold shrink-0">·</span>
                <span>Using the unit for an illegal purpose</span>
              </li>
              <li className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                <span className="text-brand font-bold shrink-0">·</span>
                <span>Continuing to deny lawful access after written notice</span>
              </li>
              <li className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                <span className="text-brand font-bold shrink-0">·</span>
                <span>The owner returning to a unit that was their prior residence, when the written rental agreement reserves that right</span>
              </li>
              <li className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                <span className="text-brand font-bold shrink-0">·</span>
                <span>Owner or qualifying-relative move-in (conditions above)</span>
              </li>
              <li className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                <span className="text-brand font-bold shrink-0">·</span>
                <span>Substantial repairs needed for health and safety code compliance that cannot be done with the tenant in place: permits must be pulled before the notice, displacement is limited to three months unless the Rent Board extends it, and the tenant has the right to return at the same rent</span>
              </li>
              <li className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                <span className="text-brand font-bold shrink-0">·</span>
                <span>Withdrawal of the building from the rental market under the Ellis Act</span>
              </li>
              <li className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                <span className="text-brand font-bold shrink-0">·</span>
                <span>Refusing to sign a new lease is no longer a just cause (removed by Measure V)</span>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </section>

      {/* ── ELLIS ACT (Article III) ── */}
      <section id="ellis-act" className="bg-cream-dark px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-1 bg-brand rounded-full" />
            <h2 className="font-display text-3xl font-bold text-ink">Ellis Act</h2>
          </div>
          <p className="text-xs font-semibold text-brand-mid tracking-wider mb-2">
            OMC Chapter 8.22, Article III — Ellis Act Ordinance (§ 8.22.400 et seq.)
          </p>
          <div className="space-y-4">
            <p className="text-muted leading-relaxed">
              The state Ellis Act lets an owner go out of the rental business; Oakland&rsquo;s Ellis Act Ordinance sets the rules. An owner has to withdraw <strong className="text-ink">every</strong> unit in the building, or for buildings of three or fewer units, every rental unit on the parcel (OMC § 8.22.420). The owner files a notice of intent with RAP, records a notice with the County, and pays a per-unit fee, and the withdrawal generally takes effect 120 days after filing (OMC § 8.22.430). Tenants who are 62 or older, or disabled, and have lived in the unit at least a year can extend that to one year by notifying the owner in writing within 60 days (OMC § 8.22.440).
            </p>
            <p className="text-muted leading-relaxed">
              Tenants are entitled to relocation payments on the City&rsquo;s schedule. For July 1, 2026 through June 30, 2027 that is <strong className="text-ink">$8,293.13</strong> (studio or 1-bedroom), <strong className="text-ink">$10,206.93</strong> (2-bedroom), or <strong className="text-ink">$12,599.18</strong> (3 or more bedrooms), half when the termination notice is served and half when the tenant moves out. Households with a lower-income, elderly, or disabled tenant, or a minor child, get one additional <strong className="text-ink">$2,500</strong> payment (OMC § 8.22.450).
            </p>
            <p className="text-muted leading-relaxed">
              The withdrawal restrictions stay with the property, including after a sale. A displaced tenant who wants a chance to return should notify the owner in writing within 30 days of moving out and keep the owner updated with a current address.
            </p>
          <div className="bg-white rounded-xl p-6 border border-border mt-6">
            <p className="text-sm font-semibold text-ink mb-3">Re-rental rules after a withdrawal (OMC § 8.22.460; Gov. Code § 7060.2):</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                <span className="text-brand font-bold shrink-0">·</span>
                <span><strong className="text-ink">Within 2 years:</strong> the owner is liable to displaced tenants for actual and punitive damages; the suit must be filed within three years of the withdrawal notice</span>
              </li>
              <li className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                <span className="text-brand font-bold shrink-0">·</span>
                <span><strong className="text-ink">Within 5 years:</strong> the unit must be offered at no more than the prior lawful rent plus allowable annual increases</span>
              </li>
              <li className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                <span className="text-brand font-bold shrink-0">·</span>
                <span><strong className="text-ink">Within 10 years:</strong> the owner must first offer the unit back to the displaced tenant, and failing to do so can bring punitive damages of up to six months&rsquo; rent</span>
              </li>
              <li className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                <span className="text-brand font-bold shrink-0">·</span>
                <span><strong className="text-ink">Demolished and rebuilt within 5 years:</strong> the new units are subject to rent control even though they are new construction</span>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </section>

      {/* Case review — intake form built in */}
      <CaseReviewSection location="oakland_ordinance_form" title="Representing Oakland tenants under Chapter 8.22">
        <p>
          Contingency only — no fee unless we win.{' '}
          <Link href="/locations/oakland" className="underline hover:text-white transition-colors">
            See the Oakland tenant law page →
          </Link>
        </p>
      </CaseReviewSection>

      <section className="bg-cream-dark px-6 py-6">
        <div className="max-w-6xl mx-auto">
          <Link href="/resources/local-ordinances" className="text-sm text-brand hover:text-brand-mid underline">
            ← Back to Local Ordinances
          </Link>
        </div>
      </section>
    </>
  );
}
