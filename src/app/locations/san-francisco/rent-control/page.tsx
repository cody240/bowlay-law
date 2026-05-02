import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'San Francisco Unlawful Rent Increase Attorney | Bowlay Law',
  description:
    'Has your SF landlord raised your rent beyond what the Rent Ordinance allows? Bowlay Law represents tenants in unlawful rent increase cases — repayment, damages, attorney fees. No fee unless we win.',
  keywords: [
    'San Francisco unlawful rent increase attorney',
    'SF rent control violation lawyer',
    'illegal rent increase San Francisco',
    'rent overcharge San Francisco',
    'SF Rent Ordinance 37.3 violation',
    'San Francisco tenant lawyer',
  ],
  openGraph: {
    type: 'article',
    url: 'https://bowlaylaw.com/locations/san-francisco/rent-control',
    title: 'San Francisco Unlawful Rent Increase Attorney | Bowlay Law',
    description:
      'SF rent control limits what your landlord can charge — and exceeding those limits is a violation with real remedies. Bowlay Law recovers excess rent and damages for SF tenants.',
  },
};

const violationTypes = [
  {
    label: 'Increase above the annual allowable percentage',
    detail:
      'The Rent Board publishes the allowable annual increase each March 1 — 60% of the local CPI, capped at 7%. Any increase beyond that amount for a covered unit is unlawful. Even a fraction of a percent over the cap is a violation.',
  },
  {
    label: 'Multiple increases in a 12-month period',
    detail:
      'A landlord may impose only one rent increase per 12-month period on the tenant\'s anniversary date. A second increase within the same period — regardless of the percentage — is an independent violation.',
  },
  {
    label: 'Passthroughs imposed without Rent Board certification',
    detail:
      'Capital improvement, utility, water, and property tax passthroughs require Rent Board certification or approval before they can be imposed. A landlord who passes through costs without following the Board\'s process has imposed an unlawful increase.',
  },
  {
    label: 'Banked increase exceeding the accumulated allowable amount',
    detail:
      'Landlords may "bank" unused portions of allowable annual increases and apply them in future years — but the total cannot exceed the sum of prior unused allowable amounts. An increase that purports to apply banked amounts beyond what was actually accumulated is unlawful.',
  },
  {
    label: 'Increase imposed for adding a new occupant',
    detail:
      'A landlord may not impose a rent increase solely because a tenant has added an occupant to an existing tenancy — including a newborn child or a family member as defined in the Housing Code. Any lease provision that purports to allow this is void.',
  },
  {
    label: 'Rent reset through a "new lease" or "renewal"',
    detail:
      'A landlord cannot use a new lease agreement or a lease renewal to reset the rent above the lawful controlled amount. If the tenancy is continuous and covered by rent control, the controlled rent carries forward regardless of what a new document says.',
  },
  {
    label: 'Charges disguised as rent to inflate the effective rent',
    detail:
      'New fees for parking, storage, or services that were previously included in the rent — or new charges added without any change in services — may constitute unlawful rent increases if they function as additional rent for the same tenancy.',
  },
];

export default function SFRentControlPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white px-6 py-20 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <p className="text-brand-mid text-sm font-semibold uppercase tracking-wider mb-4">
            San Francisco · Rent Control Violations
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6 text-ink">
            SF Unlawful Rent Increase Attorney
          </h1>
          <p className="text-muted text-lg leading-relaxed mb-8 max-w-2xl">
            San Francisco&rsquo;s rent control limits what your landlord can charge — precisely and
            in writing. When landlords exceed those limits, they owe you back. When an unlawful
            increase is designed to make you leave, it may be the basis for a larger wrongful
            eviction claim.
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

      {/* The rule */}
      <section className="bg-cream-dark px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-6">The rule</h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              For covered units, SF Admin Code § 37.3 limits rent increases to the Rent
              Board&rsquo;s annual allowable amount — published each March 1, calculated as 60% of
              the increase in the San Francisco Consumer Price Index, with a hard cap of 7% in
              any given year.
            </p>
            <p>
              A landlord may impose this increase once per year on the tenant&rsquo;s anniversary
              date — and only if they have reported required information about their unit to the
              Rent Board under § 37.15. Any increase beyond the allowable amount, any second
              increase within a 12-month period, and any uncertified passthrough is a violation,
              regardless of what the lease says.
            </p>
          </div>
          <div className="mt-8 bg-white rounded-xl p-6 border border-border">
            <p className="text-xs font-semibold text-brand-mid uppercase tracking-wider mb-2">Annual allowable increases — recent years</p>
            <p className="text-muted text-sm leading-relaxed">
              The allowable percentage changes each year based on CPI. Check the{' '}
              <a
                href="https://sfrentboard.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand underline hover:text-brand-mid"
              >
                SF Rent Board website
              </a>
              {' '}for the current year&rsquo;s allowable increase and historical rates. If your
              landlord imposed an increase above the published rate for any year, you have
              been overcharged.
            </p>
          </div>
        </div>
      </section>

      {/* Violation types */}
      <section className="bg-white px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-4">Types of unlawful rent increases</h2>
          <p className="text-muted leading-relaxed mb-8">
            These are the violations we see most often. Some are obvious; others are buried in
            lease addenda or obscured by confusing passthrough notices.
          </p>
          <div className="space-y-3">
            {violationTypes.map(({ label, detail }) => (
              <div key={label} className="rounded-xl border border-border overflow-hidden">
                <div className="flex items-center gap-3 bg-cream-dark px-5 py-4 border-b border-border">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <p className="font-medium text-ink text-sm">{label}</p>
                </div>
                <div className="bg-white px-5 py-4">
                  <p className="text-muted text-sm leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unlawful increase + constructive eviction */}
      <section className="bg-cream-dark px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-6">
            When an unlawful increase is also a wrongful eviction
          </h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              An unlawful rent increase has its own remedies — repayment of the excess, plus
              interest and potentially attorney fees. But when a landlord imposes an unlawful
              increase specifically to make the unit unaffordable and pressure the tenant into
              leaving, the violation may also support a constructive eviction claim.
            </p>
            <p>
              In that case, the damages framework changes significantly: actual damages
              (including the rent differential between your controlled rent and what you now
              pay), trebled under § 37.9(f), plus attorney fees. If the increase was the
              mechanism for a forced departure, the landlord&rsquo;s exposure is much larger than
              the sum of excess rent paid.
            </p>
          </div>
        </div>
      </section>

      {/* What you can recover */}
      <section className="bg-white px-6 py-16 border-b-4 border-cream-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-8">What you can recover</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                label: 'Repayment of excess rent',
                body: 'The difference between what you paid and what the lawful controlled rent was — going back through the period of the violation. With interest.',
              },
              {
                label: 'Rent Board petition',
                body: 'Tenants can file a petition with the SF Rent Board to challenge unlawful increases and obtain a reduction back to the lawful rate. This is often the starting point.',
              },
              {
                label: "Attorney's fees",
                body: "For willful violations and civil claims, attorney's fees may be recoverable. Bowlay Law evaluates whether the violation warrants civil litigation.",
              },
              {
                label: 'Treble damages (if constructive eviction)',
                body: "If the unlawful increase was used to force you out of a rent-controlled unit, the claim may rise to wrongful eviction under § 37.9(f) — with 3× actual damages.",
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
            Think your rent increase was unlawful?
          </h2>
          <p className="text-white/70 mb-4 leading-relaxed max-w-2xl mx-auto">
            The free screening call takes 15–20 minutes. Cody will look at your rent history,
            the Rent Board&rsquo;s allowable increases for the relevant years, and any passthrough
            notices you received — and tell you honestly what he sees.
          </p>
          <p className="text-white/50 text-sm mb-8">
            No fee unless we win &middot; SF tenants only &middot; Free screening call
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
