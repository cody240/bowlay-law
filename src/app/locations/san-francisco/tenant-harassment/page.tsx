import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'San Francisco Tenant Harassment Attorney | Bowlay Law',
  description:
    'SF Admin Code § 37.10B makes landlord harassment a standalone civil claim — you can sue while still in your unit. Bowlay Law represents tenants facing harassment campaigns. No fee unless we win.',
  keywords: [
    'San Francisco tenant harassment attorney',
    'landlord harassment SF',
    'SF Rent Ordinance 37.10B',
    'tenant harassment lawyer San Francisco',
    'landlord intimidation attorney SF',
    'quiet enjoyment violation San Francisco',
  ],
  openGraph: {
    type: 'article',
    url: 'https://bowlaylaw.com/locations/san-francisco/tenant-harassment',
    title: 'San Francisco Tenant Harassment Attorney | Bowlay Law',
    description:
      "You don't have to wait for an eviction notice. Under § 37.10B, SF landlords can be held liable for harassment while you're still in your home.",
  },
};

const prohibitedConduct = [
  {
    category: 'Interference with housing services',
    items: [
      'Interrupting, terminating, or failing to provide housing services — including heat, hot water, utilities, and access to common areas',
      'Failing to perform required repairs and maintenance after written notice',
      'Removing amenities (parking, storage, laundry) that were part of the tenancy',
    ],
  },
  {
    category: 'Abuse of entry rights',
    items: [
      'Entering the unit without proper advance notice (24 hours written notice required under California Civil Code § 1954)',
      'Entering with excessive frequency — even with notice — in a manner designed to harass',
      'Sending contractors or inspectors to the unit without legitimate purpose or adequate notice',
    ],
  },
  {
    category: 'Threats and intimidation',
    items: [
      'Threatening a tenant with physical harm',
      'Misrepresenting to the tenant that they are required to vacate — when they are not',
      'Threatening eviction without a legal basis, or misrepresenting the landlord\'s legal rights',
      'Interfering with the tenant\'s right to quiet enjoyment through intimidation or coercion',
    ],
  },
  {
    category: 'Improper buyout conduct',
    items: [
      'Offering payment to vacate without first advising the tenant in writing of their right to refuse and their right to consult an attorney',
      'Misrepresenting the value of the tenancy or the tenant\'s legal rights in the context of a buyout discussion',
    ],
  },
  {
    category: 'Retaliation',
    items: [
      'Retaliating against a tenant for complaining about habitability conditions',
      'Retaliating against a tenant for contacting the Rent Board or another government agency',
      'Retaliating against a tenant for participating in tenant organizing',
      'Refusing to accept rent as a pressure tactic',
    ],
  },
];

export default function SFTenantHarassmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white px-6 py-20 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <p className="text-brand-mid text-sm font-semibold uppercase tracking-wider mb-4">
            San Francisco · Tenant Harassment
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6 text-ink">
            San Francisco Tenant Harassment Attorney
          </h1>
          <p className="text-muted text-lg leading-relaxed mb-8 max-w-2xl">
            SF Admin Code § 37.10B makes landlord harassment a standalone civil claim. You
            don&rsquo;t have to wait for a formal eviction notice — and you don&rsquo;t have to leave.
            If your landlord is making your life in your home miserable on purpose, that is a
            Rent Ordinance violation with real remedies.
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

      {/* What makes it different */}
      <section className="bg-cream-dark px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-6">
            What makes § 37.10B different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                heading: 'You can sue while still in the unit',
                body: 'Unlike constructive eviction — which requires you to have left — § 37.10B lets you bring a harassment claim while you are still a tenant. You do not have to be forced out to have a cause of action.',
              },
              {
                heading: 'No eviction notice required',
                body: 'The claim does not depend on a formal termination notice. The prohibited conduct is the violation — whether or not the landlord has moved toward a formal eviction.',
              },
              {
                heading: 'Covers all SF residential tenants',
                body: 'Unlike rent control, § 37.10B applies broadly to residential tenancies in San Francisco — it is not limited to pre-1979 units or otherwise covered buildings.',
              },
            ].map(({ heading, body }) => (
              <div key={heading} className="bg-white rounded-xl p-6 border border-border">
                <h3 className="font-display text-lg font-semibold text-ink mb-3">{heading}</h3>
                <p className="text-muted text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prohibited conduct */}
      <section className="bg-white px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-4">What § 37.10B prohibits</h2>
          <p className="text-muted leading-relaxed mb-8">
            The ordinance lists specific categories of prohibited conduct. These are not
            limited to dramatic incidents — a sustained pattern of lower-level conduct can
            also qualify.
          </p>
          <div className="space-y-6">
            {prohibitedConduct.map(({ category, items }) => (
              <div key={category} className="rounded-xl border border-border overflow-hidden">
                <div className="bg-cream-dark px-6 py-4 border-b border-border">
                  <h3 className="font-display text-lg font-semibold text-ink">{category}</h3>
                </div>
                <div className="bg-white p-6">
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted">
                        <span className="text-brand mt-0.5 shrink-0">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Harassment + wrongful eviction */}
      <section className="bg-cream-dark px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-6">
            When harassment is part of a wrongful eviction scheme
          </h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              Landlords often use harassment as a precursor to a formal eviction — or as a
              substitute for one, hoping to push the tenant out voluntarily. When that pattern
              is clear, the claim is not just under § 37.10B. It is also a constructive eviction
              under § 37.9(f), with the full damages framework that entails: treble damages on
              actual losses (including the rent differential), attorney fees, and injunctive relief.
            </p>
            <p>
              A harassment campaign that causes a tenant to vacate — even without a formal
              notice — is treated the same as a wrongful OMI or fraudulent Ellis Act eviction
              under California courts&rsquo; application of § 37.9(f).
            </p>
          </div>
        </div>
      </section>

      {/* Document */}
      <section className="bg-white px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-4">Document everything</h2>
          <p className="text-muted leading-relaxed mb-8">
            Harassment cases require a paper trail. Build yours from the first incident.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Log every entry', body: 'Date, time, who arrived, what they claimed to be doing, how much notice you received (if any). Keep this running from the first incident.' },
              { label: 'Save all communications', body: 'Screenshot texts. Forward emails to yourself. Write contemporaneous notes of in-person conversations with the landlord or their agents.' },
              { label: 'Photograph and video', body: 'Document any physical changes to the unit, removal of amenities, or conditions the landlord is ignoring. Timestamps on photos matter.' },
              { label: 'Preserve buyout communications', body: 'Any offer to pay you to leave should be preserved in full — including how it was framed and whether you were told about your right to refuse.' },
              { label: 'Get neighbors\' contact info', body: 'Neighbors who witnessed incidents or patterns are important witnesses. Introduce yourself and ask if they noticed anything.' },
              { label: 'Medical records', body: 'If the harassment caused physical or psychological harm, records connecting the symptoms to the landlord\'s conduct strengthen the damages claim.' },
            ].map(({ label, body }) => (
              <div key={label} className="bg-cream-dark rounded-xl p-5 border border-border">
                <p className="font-medium text-ink text-sm mb-2">{label}</p>
                <p className="text-muted text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Remedies */}
      <section className="bg-white px-6 py-16 border-b-4 border-cream-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-8">Remedies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Actual damages', body: 'Emotional distress, out-of-pocket losses, and — if the harassment caused you to vacate — the full rent differential between your unit and current market rates.' },
              { label: 'Punitive damages', body: 'Available for willful or malicious conduct. Harassment campaigns designed to push out rent-controlled tenants are precisely the conduct courts view most seriously.' },
              { label: "Attorney's fees", body: 'Recoverable in successful tenant harassment claims. Bowlay Law handles these cases on contingency.' },
              { label: 'Injunctive relief', body: 'A court can order the landlord to stop the harassing conduct, restore severed services, and make required repairs — while you remain in the unit.' },
              { label: 'Treble damages (if wrongful eviction)', body: 'If the harassment campaign caused you to vacate, the claim may rise to a § 37.9(f) wrongful eviction with 3× actual damages.' },
              { label: 'Rent Board hearing', body: 'Under § 37.9(l), you can file a harassment report with the Rent Board. If the Board determines the harassment is ongoing or severe, it can schedule a formal investigative hearing before an ALJ.' },
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
            Is your landlord making your home unlivable?
          </h2>
          <p className="text-white/70 mb-4 leading-relaxed max-w-2xl mx-auto">
            You do not have to wait for a formal eviction notice to call a lawyer. The sooner
            you document the conduct and get advice, the more options you have — including
            stopping it before you feel forced to leave.
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
