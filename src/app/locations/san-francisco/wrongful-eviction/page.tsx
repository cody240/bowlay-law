import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'San Francisco Wrongful Eviction Attorney | Bowlay Law',
  description:
    'Was your SF eviction unlawful? Bowlay Law represents San Francisco tenants in wrongful eviction cases under the Rent Ordinance — treble damages, attorney fees, relocation assistance. No fee unless we win.',
  keywords: [
    'San Francisco wrongful eviction attorney',
    'wrongful eviction SF',
    'SF Rent Ordinance § 37.9',
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
      'Bowlay Law represents SF tenants whose landlords violated the Rent Ordinance — through fraudulent OMI evictions, Ellis Act abuse, constructive eviction, and more. Treble damages. No fee unless we win.',
  },
};

const scenarios = [
  {
    label: 'Owner move-in fraud',
    description:
      'The landlord claimed they or a qualifying relative needed to occupy the unit as their principal residence — but never moved in, moved out before 36 continuous months, or re-rented the unit at market rate. This is the most litigated wrongful eviction type in SF.',
    signals: [
      'Unit re-listed on Craigslist, Zillow, or MLS within months of the eviction',
      'Owner or relative never moved in within 3 months of recovering possession',
      'Owner moved in but vacated before completing 36 continuous months',
      'Landlord failed to file required statements of occupancy with the Rent Board',
      'Same unit re-rented at market rate shortly after you left',
    ],
  },
  {
    label: 'Ellis Act abuse',
    description:
      "The landlord withdrew the building from the rental market under the Ellis Act — but didn't genuinely go out of the rental business, re-rented units within the restricted period, converted to TICs or short-term rentals, or selectively withdrew only some units.",
    signals: [
      'Units were re-rented within the statutory restricted period',
      'Building was listed on Airbnb or similar platforms after withdrawal',
      'TIC conversion or sale happened unusually quickly after Ellis filing',
      'Not all units in the building were withdrawn — landlord retained some',
    ],
  },
  {
    label: 'Constructive eviction',
    description:
      "The landlord didn't serve a formal notice. Instead, they made the unit unlivable — through neglect, harassment, or deliberate interference with housing services — until you felt you had no real choice but to leave.",
    signals: [
      'Heat, hot water, or utilities were cut off or left unrepaired for extended periods',
      'Persistent habitability conditions (mold, pest infestation, structural hazards) that the landlord refused to fix',
      'Repeated unannounced entries, contractor access without proper notice, or intimidation',
      'Amenities that were part of the tenancy — parking, storage, laundry — were removed',
    ],
  },
  {
    label: 'Unlawful rent increase to force a move-out',
    description:
      'The landlord imposed rent increases far beyond what the Rent Ordinance allows — making the unit unaffordable and effectively forcing the tenant out without a formal notice.',
    signals: [
      'Rent raised above the allowable annual CPI-based amount for the relevant year',
      'Multiple increases imposed within a single 12-month period',
      'Passthroughs imposed without Rent Board certification',
      'Large rent increase followed closely after an attempt to negotiate a buyout',
    ],
  },
  {
    label: 'Sham capital improvement eviction',
    description:
      'The landlord claimed the unit needed to be vacated for capital improvements or substantial rehabilitation — but the work was not actually necessary, was completed far faster than represented, or the unit was re-rented to a new tenant at market rate without giving the displaced tenant the right to return.',
    signals: [
      'Work described in the notice was minimal or not undertaken at all',
      'You were not given the required right-to-return disclosure',
      'New tenant moved in at a significantly higher rent shortly after the supposed work',
      'Permits obtained were inconsistent with the scope of work described',
    ],
  },
  {
    label: 'Notice with no valid just cause',
    description:
      "The landlord served a termination notice without stating a valid just cause under § 37.9 — or stated a cause that wasn't actually the dominant motive for the eviction.",
    signals: [
      'Notice stated "lease expired," "month-to-month termination," or no cause at all',
      'Stated cause doesn\'t match the facts — claimed nonpayment when rent was current',
      'Notice was served shortly after you complained about repairs, filed a Rent Board petition, or exercised another tenant right',
      'Required Rent Board information form was not attached to the notice',
    ],
  },
];

const evidence = [
  {
    label: 'Preserve the notice',
    body: 'Keep every version of any termination notice you received. Photograph it the day it is served. Defects in the notice — missing Rent Board form, no just cause stated, wrong lawful rent amount — can be the basis for defeating the eviction.',
  },
  {
    label: 'Document the unit\'s condition',
    body: 'Photograph and video the unit on or close to the date you vacate. Timestamp everything. This establishes baseline conditions for a constructive eviction or habitability claim, and rebuts any landlord claim that conditions were your fault.',
  },
  {
    label: 'Monitor the property after you leave',
    body: 'Check Craigslist, Zillow, and MLS periodically. Screenshot any new listings of your former unit. For OMI cases, check whether the landlord filed the required statements of occupancy with the Rent Board — these are public records.',
  },
  {
    label: 'Save all landlord communications',
    body: 'Texts, emails, letters — everything. Forward emails to a personal account. Screenshot texts. Write contemporaneous notes of any in-person conversations, including the date, what was said, and who was present.',
  },
  {
    label: 'Gather your rent history',
    body: 'Pull together rent checks, bank records, or receipts showing what you paid each month and for how long. The rent differential — your controlled rent versus current market rent — is the foundation of your damages calculation.',
  },
  {
    label: 'Note relocation assistance payments',
    body: 'For OMI, Ellis Act, demolition, and capital improvement evictions, the landlord was required to pay relocation assistance. Document exactly what was paid, when, and by what method. Any shortfall is a standalone violation.',
  },
];

export default function SFWrongfulEvictionPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white px-6 py-20 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <p className="text-brand-mid text-sm font-semibold tracking-wider mb-4">
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
              href="/resources/local-ordinances/san-francisco#just-cause"
              className="inline-block border-2 border-brand-dark/25 text-brand-dark px-8 py-4 rounded-full font-semibold hover:bg-brand-dark/5 transition-colors"
            >
              Full § 37.9 Reference ↗
            </Link>
          </div>
        </div>
      </section>

      {/* What makes an eviction wrongful */}
      <section className="bg-cream-dark px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-6">
            What makes an eviction wrongful in San Francisco?
          </h2>
          <div className="space-y-4 text-muted leading-relaxed max-w-3xl">
            <p>
              Under SF Admin Code § 37.9, a landlord cannot terminate a covered tenancy without
              one of 17 enumerated just causes — and the stated cause must be the actual, dominant
              reason for the eviction. An eviction is wrongful when:
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
            {[
              'No valid just cause exists or was stated in the notice',
              'The stated cause was pretextual — the real reason was to remove a long-term rent-controlled tenant',
              'The landlord failed to follow the required procedures for the just cause claimed',
              'A no-fault eviction was initiated in bad faith (e.g., OMI where the owner never moved in)',
              'The landlord used harassment or neglect to constructively evict without serving notice',
              'The landlord imposed unlawful rent increases designed to make the unit unaffordable',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-border">
                <span className="text-brand font-bold shrink-0 mt-0.5">·</span>
                <span className="text-muted text-sm leading-snug">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-muted text-sm leading-relaxed max-w-3xl">
            The financial stakes are high on both sides. Long-term SF tenants are often paying
            hundreds or thousands less per month than current market rent. That gap — multiplied
            by years of expected tenancy, then trebled under § 37.9(f) — is what determines
            case value.
          </p>
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
          <div className="space-y-5">
            {scenarios.map(({ label, description, signals }) => (
              <div key={label} className="rounded-xl border border-border overflow-hidden">
                <div className="bg-cream-dark p-6 border-b border-border">
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">{label}</h3>
                  <p className="text-muted text-sm leading-relaxed">{description}</p>
                </div>
                <div className="bg-white p-5">
                  <p className="text-xs font-semibold text-brand-mid tracking-wider mb-3">Signals to watch for</p>
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

      {/* Damages */}
      <section className="bg-cream-dark px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-4">What you can recover</h2>
          <p className="text-muted leading-relaxed mb-10">
            A wrongful eviction under § 37.9(f) entitles the tenant to all of the following
            in a civil proceeding.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Treble damages — full width */}
            <div className="md:col-span-2 rounded-xl border border-border overflow-hidden">
              <div className="bg-white p-6 border-b border-border">
                <p className="text-xs font-semibold text-brand-mid tracking-wider mb-1">§ 37.9(f) · Mandatory minimum</p>
                <p className="font-display text-2xl font-bold text-ink">Treble damages — not less than 3× actual damages</p>
              </div>
              <div className="bg-white p-6">
                <p className="text-muted text-sm leading-relaxed mb-6">
                  The Rent Ordinance requires damages of not less than three times actual damages
                  for a wrongful eviction. This is not discretionary — it is a mandatory minimum
                  once wrongful eviction is established. Emotional distress damages are trebled
                  only where the landlord acted in knowing violation of or in reckless disregard
                  of § 37.9.
                </p>
                <div className="bg-cream-dark rounded-xl overflow-hidden border border-border">
                  <div className="px-5 py-3 border-b border-border">
                    <p className="text-xs font-semibold text-ink">Example damages calculation</p>
                  </div>
                  <div className="p-5 space-y-2">
                    {[
                      { label: 'Your monthly rent (controlled)', value: '$1,900' },
                      { label: 'Current market rent for comparable unit', value: '$5,200' },
                      { label: 'Monthly rent differential', value: '$3,300' },
                      { label: 'Expected remaining tenancy (conservative)', value: '5 years' },
                      { label: 'Actual damages from rent differential', value: '$198,000' },
                      { label: 'Moving costs, temporary housing, emotional distress', value: '+ ~$30,000' },
                      { label: 'Total actual damages', value: '~$228,000' },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex justify-between items-baseline border-b border-border pb-2 last:border-0 last:pb-0">
                        <span className="text-sm text-muted">{label}</span>
                        <span className="text-sm font-medium text-ink ml-4 shrink-0">{value}</span>
                      </div>
                    ))}
                    <div className="mt-3 pt-3 border-t-2 border-border flex justify-between items-baseline">
                      <span className="font-semibold text-ink">Treble damages (3× actual)</span>
                      <span className="font-display text-2xl font-bold text-ink">~$684,000</span>
                    </div>
                    <p className="text-xs text-muted pt-1">Plus attorney&rsquo;s fees recovered by court order. Hypothetical illustration — actual value depends on specific facts.</p>
                  </div>
                </div>
              </div>
            </div>

            {[
              {
                label: "Actual damages",
                body: "The rent differential between your controlled unit and comparable market housing, projected over your expected remaining tenancy. Plus moving costs, temporary housing, and emotional distress."
              },
              {
                label: "Attorney's fees & costs",
                body: "The prevailing party recovers reasonable attorney's fees by court order. This is how Bowlay Law can take cases on contingency — you pay nothing upfront, and the landlord pays our fees when we win."
              },
              {
                label: "Relocation assistance (if unpaid)",
                body: "For OMI, Ellis Act, demolition, and capital improvement evictions, relocation assistance was required at the time of the notice. Failure to pay — or underpayment — is a separate violation added to your recovery."
              },
              {
                label: "Injunctive relief",
                body: "If you haven't left yet, a court can order the landlord to stop the eviction. Acting early matters — the sooner you call, the more options remain available."
              },
            ].map(({ label, body }) => (
              <div key={label} className="bg-white rounded-xl p-6 border border-border">
                <p className="text-xs font-semibold text-brand-mid tracking-wider mb-2">{label}</p>
                <p className="text-muted text-sm leading-relaxed">{body}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Statute of limitations */}
      <section className="bg-white px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-4">Statute of limitations</h2>
          <p className="text-muted leading-relaxed mb-8">
            Wrongful eviction claims are time-limited. The clock starts running from the date
            of the eviction — or, for some claims, when the wrongful conduct is discovered.
            Missing the deadline can bar an otherwise meritorious claim entirely.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              {
                type: 'General wrongful eviction',
                limit: '3 years',
                note: 'California statute of limitations for most § 37.9 claims. Runs from the date the tenant vacated.',
              },
              {
                type: 'Owner move-in (OMI)',
                limit: '5 years',
                note: 'Runs from the earlier of: (1) 3 months after possession is recovered, or (2) the date of the landlord\'s first statement of occupancy filing with the Rent Board.',
              },
              {
                type: 'Constructive eviction',
                limit: '3 years',
                note: 'Runs from the date of departure. The clock does not start until the tenant actually leaves.',
              },
            ].map(({ type, limit, note }) => (
              <div key={type} className="bg-cream-dark rounded-xl p-5 border border-border">
                <p className="text-xs font-semibold text-brand-mid tracking-wider mb-1">{type}</p>
                <p className="font-display text-3xl font-bold text-ink mb-2">{limit}</p>
                <p className="text-muted text-sm leading-snug">{note}</p>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="text-sm font-semibold text-amber-900 mb-1">Don&rsquo;t wait to find out if you still have time.</p>
            <p className="text-amber-800 text-sm leading-relaxed">
              The 15–20 minute screening call is free. If the deadline is approaching, the sooner
              Cody can evaluate the claim, the more time there is to build the case properly.
            </p>
          </div>
        </div>
      </section>

      {/* Evidence to preserve */}
      <section className="bg-cream-dark px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-4">Evidence to preserve</h2>
          <p className="text-muted leading-relaxed mb-8">
            Wrongful eviction cases are built on documentation. Start preserving evidence
            from the moment you receive a notice — or suspect your landlord is pushing you out.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {evidence.map(({ label, body }) => (
              <div key={label} className="bg-white rounded-xl p-5 border border-border">
                <p className="font-medium text-ink text-sm mb-2">{label}</p>
                <p className="text-muted text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we evaluate */}
      <section className="bg-white px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-4">How we evaluate your case</h2>
          <p className="text-muted leading-relaxed mb-8">
            The free screening call is 15–20 minutes. These are the questions Cody will focus on:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                q: 'How long have you lived there?',
                why: 'Longer tenancies mean a larger rent differential and more years of projected remaining tenancy — both of which drive damages up.',
              },
              {
                q: 'What does the notice say?',
                why: 'The stated just cause determines the legal theory and the evidentiary checklist. OMI, Ellis Act, and capital improvement notices each have specific requirements that must be met.',
              },
              {
                q: 'What is your rent versus current market rate?',
                why: 'The rent differential — multiplied over expected remaining tenancy, then trebled — is the core of the damages calculation.',
              },
              {
                q: 'What has the landlord done since the notice?',
                why: "Whether the landlord followed through on the stated reason is often the most direct evidence of bad faith. A Zillow posting three months after an OMI can be worth more than any argument.",
              },
              {
                q: 'Have you received relocation assistance?',
                why: 'Required for most no-fault evictions. Unpaid or underpaid relocation assistance is a separate violation that adds to the total recovery.',
              },
              {
                q: 'Has anything changed at the property?',
                why: 'New tenants, new listings, renovation activity inconsistent with the stated purpose — all of this is evidence.',
              },
            ].map(({ q, why }) => (
              <div key={q} className="bg-cream-dark rounded-xl p-5 border border-border">
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
