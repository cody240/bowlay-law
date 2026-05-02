import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SF Wrongful Eviction Damages — How Cases Are Valued | Bowlay Law',
  description:
    "How much is an SF wrongful eviction case worth? Bowlay Law explains the rent differential approach, treble damages, attorney's fees, and what drives case value up or down.",
  keywords: [
    'San Francisco wrongful eviction damages',
    'SF wrongful eviction case value',
    'how much is wrongful eviction worth SF',
    'treble damages San Francisco tenant',
    'SF Rent Ordinance damages calculation',
    'San Francisco wrongful eviction settlement',
  ],
  openGraph: {
    type: 'article',
    url: 'https://bowlaylaw.com/locations/san-francisco/damages',
    title: 'SF Wrongful Eviction Damages — How Cases Are Valued | Bowlay Law',
    description:
      'The rent differential, the treble damages multiplier, and attorney fees make SF wrongful eviction cases among the most valuable in California. Here is how the math works.',
  },
};

const factorsUp = [
  { label: 'Long tenancy', detail: 'The longer you lived there, the lower your controlled rent relative to market — and the more years of expected remaining tenancy the damages calculation projects.' },
  { label: 'High rent differential', detail: 'The gap between your controlled rent and current market rate is the core of actual damages. In high-demand SF neighborhoods, that gap can exceed $3,000/month.' },
  { label: 'Clear bad faith by the landlord', detail: 'Smoking-gun evidence — a Zillow listing posted days after you left, statements of occupancy not filed, the owner never moving in — strengthens the treble damages argument and the settlement position.' },
  { label: 'Unpaid or underpaid relocation assistance', detail: 'Every dollar of required relocation assistance the landlord failed to pay is added on top of the wrongful eviction damages.' },
  { label: 'Protected tenant status', detail: 'Senior, disabled, or low-income tenants who were illegally targeted despite statutory protections present stronger cases — and more sympathetic juries.' },
  { label: 'Strong documentary evidence', detail: 'Photos, texts, re-listing records, and Rent Board filings that build a timeline of the landlord\'s conduct make the case easier to prove and harder to settle cheaply.' },
];

const factorsDown = [
  { label: 'Weak evidence of wrongfulness', detail: "If the landlord actually moved in — even if briefly — the claim is harder. Evidence needs to affirmatively establish the eviction was pretextual, not just suspicious." },
  { label: 'Short tenancy', detail: 'A tenant who has lived in a unit for two years has a smaller rent differential and fewer years of expected remaining tenancy than a ten-year tenant. Damages are proportionally smaller.' },
  { label: 'Unit not covered by rent control', detail: "If the unit isn't rent-controlled, there's still a just cause claim — but without a rent differential to drive actual damages, the value is lower." },
  { label: 'Tenant was already planning to leave', detail: 'Evidence that the tenant was looking for other housing independently reduces the persuasiveness of the damages projection.' },
  { label: 'Statute of limitations issues', detail: "For most wrongful eviction claims, the 3-year California statute applies. OMI cases have a 5-year window. Cases outside those windows may be time-barred regardless of merit." },
];

export default function SFDamagesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white px-6 py-20 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <p className="text-brand-mid text-sm font-semibold uppercase tracking-wider mb-4">
            San Francisco · Case Value &amp; Damages
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6 text-ink">
            SF Wrongful Eviction Damages — How Cases Are Valued
          </h1>
          <p className="text-muted text-lg leading-relaxed mb-8 max-w-2xl">
            SF wrongful eviction cases are among the most valuable in California — because of
            rent control. Here is how the math works, what drives case value up, and what
            drives it down.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-block bg-brand-dark text-white px-8 py-4 rounded-full font-semibold hover:bg-brand transition-colors"
            >
              Get a Free Case Review
            </Link>
            <Link
              href="/locations/san-francisco/wrongful-eviction"
              className="inline-block border-2 border-brand-dark/25 text-brand-dark px-8 py-4 rounded-full font-semibold hover:bg-brand-dark/5 transition-colors"
            >
              Wrongful Eviction Overview ↗
            </Link>
          </div>
        </div>
      </section>

      {/* The core: rent differential */}
      <section className="bg-cream-dark px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-6">
            The rent differential is the foundation
          </h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              In most personal injury cases, damages are tied to what actually happened — medical
              bills, lost wages, pain and suffering. In SF wrongful eviction cases, the biggest
              number is the rent differential: the gap between what you were paying under rent
              control and what you now have to pay on the open market.
            </p>
            <p>
              That gap, projected over the expected remaining duration of your tenancy, becomes
              actual damages. For a long-term tenant in a desirable neighborhood, the number
              is often six figures before any multiplier is applied.
            </p>
          </div>

          {/* Example */}
          <div className="mt-10 rounded-xl border border-border overflow-hidden">
            <div className="bg-brand-dark text-white px-6 py-4">
              <p className="text-sm font-semibold uppercase tracking-wider text-white/70">Example calculation</p>
            </div>
            <div className="bg-white p-6">
              <div className="space-y-3 mb-6">
                {[
                  { label: 'Your monthly rent (controlled)', value: '$1,900' },
                  { label: 'Current market rent for a comparable unit', value: '$5,200' },
                  { label: 'Monthly differential', value: '$3,300' },
                  { label: 'Expected remaining tenancy (conservative)', value: '5 years' },
                  { label: 'Actual damages from rent differential', value: '$3,300 × 60 months = $198,000' },
                  { label: 'Moving costs, temporary housing, emotional distress', value: '+ $30,000 (est.)' },
                  { label: 'Total actual damages', value: '~$228,000' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-baseline border-b border-border pb-2">
                    <span className="text-sm text-muted">{label}</span>
                    <span className="text-sm font-medium text-ink ml-4 text-right">{value}</span>
                  </div>
                ))}
              </div>
              <div className="bg-cream-dark rounded-xl p-5 border border-border">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-sm font-semibold text-ink">Treble damages (3× actual) · § 37.9(f)</span>
                  <span className="font-display text-2xl font-bold text-ink">~$684,000</span>
                </div>
                <p className="text-muted text-xs leading-snug">
                  Plus attorney&rsquo;s fees and costs recovered by court order. This is a hypothetical
                  illustration — actual case value depends on the specific facts, evidence, and
                  how the case is litigated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The multiplier */}
      <section className="bg-white px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-6">The treble damages multiplier</h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              SF Admin Code § 37.9(f) provides for damages of <em>not less than</em> three times
              actual damages for a wrongful eviction in violation of the Rent Ordinance. This is
              not discretionary — it is a mandatory minimum multiplier once wrongful eviction is
              established.
            </p>
            <p>
              There is one important nuance: emotional distress damages are trebled only if the
              trier of fact finds that the landlord acted in knowing violation of or in reckless
              disregard of § 37.9. In practice, most landlords who commit wrongful evictions do
              so knowingly — but the standard matters at trial and in settlement negotiations.
            </p>
            <p>
              Attorney&rsquo;s fees are separate from the treble damages and are recovered
              additionally by the prevailing party. This means the landlord&rsquo;s total exposure
              is the trebled damages amount plus whatever Bowlay Law&rsquo;s fees are by the
              time the case resolves.
            </p>
          </div>
        </div>
      </section>

      {/* What drives value */}
      <section className="bg-cream-dark px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-10">What moves case value</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-4">Factors that increase value</p>
              <div className="space-y-3">
                {factorsUp.map(({ label, detail }) => (
                  <div key={label} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-border">
                    <span className="text-emerald-600 font-bold mt-0.5 shrink-0">↑</span>
                    <div>
                      <p className="font-medium text-ink text-sm mb-1">{label}</p>
                      <p className="text-muted text-xs leading-snug">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-red-500 uppercase tracking-wider mb-4">Factors that decrease value</p>
              <div className="space-y-3">
                {factorsDown.map(({ label, detail }) => (
                  <div key={label} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-border">
                    <span className="text-red-400 font-bold mt-0.5 shrink-0">↓</span>
                    <div>
                      <p className="font-medium text-ink text-sm mb-1">{label}</p>
                      <p className="text-muted text-xs leading-snug">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How cases resolve */}
      <section className="bg-white px-6 py-16 border-b-4 border-cream-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-6">How SF wrongful eviction cases typically resolve</h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              Most SF wrongful eviction cases settle before trial. Once a landlord and their
              counsel understand the damages exposure — actual damages trebled, plus attorney
              fees accruing — the calculus for settling is strong. Cases with clear liability
              and documented rent differentials often settle in the $200,000–$600,000 range,
              depending on the facts.
            </p>
            <p>
              Cases that go to trial are rarer, but jury verdicts in SF wrongful eviction cases
              have reached seven figures. The combination of sympathetic facts (long-term tenant,
              clear landlord bad faith), a mandatory trebling provision, and attorney fee shifting
              creates significant leverage for the tenant from the outset.
            </p>
            <p>
              Timeline: most cases are resolved by settlement within 8–18 months of engagement,
              depending on how contested the liability is and how quickly the parties reach a
              negotiated resolution.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark text-white px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            Want to know what your case might be worth?
          </h2>
          <p className="text-white/70 mb-4 leading-relaxed max-w-2xl mx-auto">
            The free screening call is 15–20 minutes. Cody will ask about your rent, your
            tenancy, what happened, and what you know about the unit now — and give you an
            honest read on whether there&rsquo;s a case and what it might look like.
          </p>
          <p className="text-white/50 text-sm mb-8">
            No fee unless we win &middot; Contingency fee &middot; SF tenants only
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
