import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'San Francisco Ellis Act Eviction Attorney | Bowlay Law',
  description:
    'Facing an Ellis Act eviction in San Francisco? Bowlay Law represents tenants in fraudulent Ellis Act cases — relocation assistance, right of first refusal, treble damages. No fee unless we win.',
  keywords: [
    'San Francisco Ellis Act eviction attorney',
    'Ellis Act attorney SF',
    'Ellis Act abuse San Francisco',
    'SF Rent Ordinance 37.9A',
    'Ellis Act withdrawal tenant rights',
    'San Francisco tenant lawyer',
  ],
  openGraph: {
    type: 'article',
    url: 'https://bowlaylaw.com/locations/san-francisco/ellis-act',
    title: 'San Francisco Ellis Act Eviction Attorney | Bowlay Law',
    description:
      'A landlord can use the Ellis Act to exit the rental market — but only if they actually do it. Bowlay Law investigates fraudulent Ellis evictions and recovers for displaced tenants.',
  },
};

const landlordObligations = [
  {
    rule: 'Withdraw the entire building',
    detail:
      'The Ellis Act requires withdrawal of all rental units within the detached physical structure — and for buildings of 3 or fewer units, any other units on the same lot. A landlord cannot use Ellis to remove individual tenants selectively.',
  },
  {
    rule: 'File a notice of intent with the Rent Board',
    detail:
      'The landlord must file the notice with the Rent Board and comply fully with Admin Code § 37.9A, which governs the withdrawal process and sets timing requirements.',
  },
  {
    rule: 'Provide substantial relocation assistance',
    detail:
      'Amounts are set annually by the Rent Board. Current amounts vary by unit size and tenant circumstances. Additional amounts apply for tenants who are elderly, disabled, or have lived in the unit for 10+ years.',
  },
  {
    rule: 'Provide extended notice for protected tenants',
    detail:
      'Tenants who are 62 or older, or disabled, and have lived in the unit for at least one year are entitled to one year of advance notice rather than the standard 120 days.',
  },
  {
    rule: "Honor the tenant's right of first refusal",
    detail:
      'If any of the withdrawn units are re-rented within 10 years of withdrawal, the landlord must first offer the unit to the displaced tenant at the prior rent plus allowable increases.',
  },
  {
    rule: 'Comply with re-rental and re-use restrictions',
    detail:
      'After Ellis withdrawal, the property faces significant restrictions on re-rental, conversion, and demolition for years. Violating those restrictions is a separate legal exposure for the landlord.',
  },
];

const abusePatterns = [
  {
    pattern: 'Re-renting units after withdrawal',
    detail:
      'The landlord purports to exit the rental market but continues renting individual units through Airbnb, VRBO, or informal arrangements. This voids the Ellis withdrawal and may be grounds for a wrongful eviction claim.',
  },
  {
    pattern: 'TIC conversion immediately after Ellis',
    detail:
      'The building is quickly converted to tenancy-in-common (TIC) interests or condominiums after the Ellis evictions. If the real purpose was conversion — not exit from the rental business — the evictions may have been pretextual.',
  },
  {
    pattern: 'Selective or partial withdrawal',
    detail:
      "Landlord attempts to Ellis-evict only some tenants while keeping others, or uses Ellis on a subset of units in the building. That's not how the Ellis Act works — it requires full withdrawal.",
  },
  {
    pattern: 'Failure to pay required relocation assistance',
    detail:
      'Landlord serves a valid Ellis notice but fails to pay the required relocation assistance, or underpays — particularly for protected tenants who qualify for higher amounts.',
  },
  {
    pattern: 'Ignoring the right of first refusal',
    detail:
      'After the withdrawal period, the landlord re-rents units without notifying or offering them to displaced tenants. Each affected tenant has an independent claim.',
  },
];

export default function SFEllisActPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white px-6 py-20 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <p className="text-brand-mid text-sm font-semibold uppercase tracking-wider mb-4">
            San Francisco · Ellis Act
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6 text-ink">
            San Francisco Ellis Act Eviction Attorney
          </h1>
          <p className="text-muted text-lg leading-relaxed mb-8 max-w-2xl">
            The Ellis Act gives landlords the right to exit the rental business. But they have
            to actually do it — withdraw the entire building, pay substantial relocation
            assistance, and comply with years of restrictions afterward. When they don&rsquo;t,
            the evictions are wrongful.
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

      {/* What is Ellis */}
      <section className="bg-cream-dark px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-6">What is the Ellis Act?</h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              California&rsquo;s Ellis Act (Government Code § 7060 et seq.) gives a property owner
              the right to permanently withdraw all rental units in a building from the rental
              market. In San Francisco, it is implemented through Admin Code § 37.9A and
              requires full compliance with the Rent Board&rsquo;s withdrawal process.
            </p>
            <p>
              A genuine Ellis Act withdrawal means the landlord is exiting the rental business
              entirely for that building. It is not a tool for removing individual tenants while
              keeping others, and it is not a shortcut to condo conversion. The restrictions
              the owner faces after withdrawal — on re-renting, converting, or demolishing the
              property — are designed to ensure the withdrawal is real.
            </p>
          </div>
        </div>
      </section>

      {/* Landlord obligations */}
      <section className="bg-white px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-4">What a valid Ellis eviction requires</h2>
          <p className="text-muted leading-relaxed mb-8">
            These are the landlord&rsquo;s legal obligations — not optional steps. Failure to comply
            with any of them is a basis for a wrongful eviction claim.
          </p>
          <div className="space-y-3">
            {landlordObligations.map(({ rule, detail }) => (
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

      {/* Abuse patterns */}
      <section className="bg-cream-dark px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-4">How Ellis Act abuse happens</h2>
          <p className="text-muted leading-relaxed mb-8">
            Ellis Act abuse is more common than landlords admit. These are the patterns we see.
          </p>
          <div className="space-y-4">
            {abusePatterns.map(({ pattern, detail }) => (
              <div key={pattern} className="rounded-xl border border-border overflow-hidden">
                <div className="flex items-center gap-3 bg-white px-5 py-4">
                  <span className="text-red-400 font-bold shrink-0">!</span>
                  <p className="font-medium text-ink text-sm">{pattern}</p>
                </div>
                <div className="px-5 py-4 bg-cream-dark border-t border-border">
                  <p className="text-muted text-sm leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your rights */}
      <section className="bg-white px-6 py-16 border-b-4 border-cream-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-8">What you can recover</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-cream-dark rounded-xl p-6 border border-border sm:col-span-2">
              <p className="text-xs font-semibold text-brand-mid uppercase tracking-wider mb-2">If the Ellis withdrawal was fraudulent — § 37.9(f)</p>
              <p className="font-display text-3xl font-bold text-ink mb-2">3× actual damages</p>
              <p className="text-muted text-sm leading-relaxed">
                A fraudulent Ellis eviction — where the landlord did not actually withdraw
                the building from the rental market — is a wrongful eviction under § 37.9(f),
                subject to treble damages and attorney&rsquo;s fees. The rent differential between
                your controlled rent and current market rate, projected over the expected
                remaining tenancy, is the foundation of that damages calculation.
              </p>
            </div>
            {[
              {
                label: 'Relocation assistance (if unpaid)',
                body: 'If the landlord failed to pay or underpaid the required relocation assistance — including higher amounts for protected tenants — that amount is separately recoverable.',
              },
              {
                label: "Attorney's fees",
                body: "The prevailing party recovers attorney's fees by court order. Bowlay Law handles Ellis Act cases on contingency — no fee unless we win.",
              },
              {
                label: 'Right of first refusal',
                body: 'If units were re-rented without offering you the unit at the prior rent, the landlord violated the right of first refusal — a separate, enforceable right.',
              },
              {
                label: 'Injunctive relief',
                body: "If you haven't left yet and the withdrawal is defective, a court can halt the eviction. Call before you vacate.",
              },
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
            Received an Ellis Act notice?
          </h2>
          <p className="text-white/70 mb-4 leading-relaxed max-w-2xl mx-auto">
            Before you move, call. If the withdrawal is defective or pretextual, you may be
            able to stop it. If you&rsquo;ve already left and the building was re-rented or
            converted, you may have a wrongful eviction claim worth pursuing.
          </p>
          <p className="text-white/50 text-sm mb-8">
            No fee unless we win &middot; SF tenants only &middot; Free 15–20 minute screening call
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
