import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Oakland Rent Adjustment Ordinance Reference (OMC Chapter 8.22) | Bowlay Law',
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
              href="/contact"
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

      {/* ── RENT CONTROL (Article I) — placeholder ── */}
      <section id="rent-control" className="bg-cream-dark px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-1 bg-brand-dark rounded-full" />
            <h2 className="font-display text-3xl font-bold text-ink">Rent Control</h2>
          </div>
          <p className="text-xs font-semibold text-brand-mid tracking-wider mb-2">
            OMC Chapter 8.22, Article I — Rent Adjustment Ordinance
          </p>
          <div className="bg-white rounded-xl p-6 border border-border">
            <p className="text-muted text-sm leading-relaxed">
              Allowable rent increases, passthrough petitions, and the Rent Adjustment Program
              procedures for covered units. This section is in progress.
            </p>
          </div>
        </div>
      </section>

      {/* ── JUST CAUSE (Article II) — placeholder ── */}
      <section id="just-cause" className="bg-white px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-1 bg-brand-mid rounded-full" />
            <h2 className="font-display text-3xl font-bold text-ink">Just Cause for Eviction</h2>
          </div>
          <p className="text-xs font-semibold text-brand-mid tracking-wider mb-2">
            OMC Chapter 8.22, Article II — Just Cause for Eviction Ordinance
          </p>
          <div className="bg-cream-dark rounded-xl p-6 border border-border">
            <p className="text-muted text-sm leading-relaxed">
              Enumerated just causes, notice requirements, relocation assistance, and remedies.
              Note: Article II has different exemptions than Article I — a unit exempt from rent
              control may still be subject to just cause eviction protections. This section is in progress.
            </p>
          </div>
        </div>
      </section>

      {/* ── ELLIS ACT (Article III) — placeholder ── */}
      <section id="ellis-act" className="bg-cream-dark px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-1 bg-brand rounded-full" />
            <h2 className="font-display text-3xl font-bold text-ink">Ellis Act</h2>
          </div>
          <p className="text-xs font-semibold text-brand-mid tracking-wider mb-2">
            OMC Chapter 8.22, Article III — Ellis Act Ordinance (§ 8.22.400 et seq.)
          </p>
          <div className="bg-white rounded-xl p-6 border border-border">
            <p className="text-muted text-sm leading-relaxed">
              Withdrawal requirements, relocation assistance, right of first refusal, and
              restrictions on re-rental. Note: Article III has different exemptions than
              Article I. This section is in progress.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-white px-6 py-12 border-b border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-ink font-medium mb-1">Representing Oakland tenants under Chapter 8.22</p>
            <p className="text-muted text-sm">
              Contingency only — no fee unless we win.{' '}
              <Link href="/locations/oakland" className="text-brand underline hover:text-brand-mid">
                See the Oakland tenant law page →
              </Link>
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-brand-dark text-white px-6 py-3 rounded-full font-semibold hover:bg-brand transition-colors"
          >
            Free Case Review
          </Link>
        </div>
      </section>

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
