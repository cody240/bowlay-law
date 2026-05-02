import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'San Francisco Constructive Eviction Attorney | Bowlay Law',
  description:
    "Your landlord doesn't need to serve you a notice to wrongfully evict you. Bowlay Law represents SF tenants forced out by habitability failures, harassment, and utility shutoffs. No fee unless we win.",
  keywords: [
    'San Francisco constructive eviction attorney',
    'constructive eviction SF',
    'landlord harassment San Francisco',
    'habitability violations San Francisco',
    'landlord making unit unlivable SF',
    'quiet enjoyment violation San Francisco',
  ],
  openGraph: {
    type: 'article',
    url: 'https://bowlaylaw.com/locations/san-francisco/constructive-eviction',
    title: 'San Francisco Constructive Eviction Attorney | Bowlay Law',
    description:
      "No formal notice required. If your landlord made your home unlivable and you felt you had no choice but to leave, that may be a wrongful eviction under the SF Rent Ordinance.",
  },
};

const causes = [
  {
    heading: 'Habitability failures',
    examples: [
      'Rat, mouse, or cockroach infestation the landlord knew about and refused to address',
      'Mold — especially where it affected your health or your family\'s health',
      'No heat or insufficient heat during cold months',
      'No hot water for extended periods',
      'Sewage backups or chronic plumbing failures',
      'Roof leaks left unrepaired through multiple rainy seasons',
      'Broken windows, doors, or locks creating a security risk',
    ],
  },
  {
    heading: 'Utility interference',
    examples: [
      'Gas or electricity shut off — even temporarily — without legitimate repair justification',
      'Internet or cable service unilaterally disconnected',
      'Water shutoffs beyond what any repair reasonably required',
    ],
  },
  {
    heading: 'Harassment and intimidation',
    examples: [
      'Repeated unannounced entries without proper notice',
      'Verbal threats, intimidation, or menacing behavior by the landlord or their agents',
      'Landlord installed cameras pointed at private living areas',
      'Contractors sent to the unit without notice to perform unnecessary or disruptive work',
      'Loud construction at unreasonable hours specifically intended to drive you out',
      'Threatening communications — texts, emails, or in-person',
    ],
  },
  {
    heading: 'Removal of housing services',
    examples: [
      'Parking space or garage taken away without lawful process',
      'Laundry room closed or padlocked',
      'Storage space removed',
      'Access to a yard, roof deck, or common area cut off',
    ],
    note: 'Housing services — including parking, storage, and access to common areas — are part of your tenancy under § 37.2(r). Wrongfully removing them is a Rent Ordinance violation independent of whether you were formally evicted.',
  },
];

export default function SFConstructiveEvictionPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white px-6 py-20 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <p className="text-brand-mid text-sm font-semibold uppercase tracking-wider mb-4">
            San Francisco · Constructive Eviction
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6 text-ink">
            San Francisco Constructive Eviction Attorney
          </h1>
          <p className="text-muted text-lg leading-relaxed mb-8 max-w-2xl">
            A landlord doesn&rsquo;t need to serve you a notice to wrongfully evict you. When a
            landlord makes your home unlivable — through neglect, harassment, or deliberate
            interference — and you are forced to leave, that is a constructive eviction. The
            Rent Ordinance treats it the same as a fraudulent formal notice.
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

      {/* Critical callout */}
      <section className="bg-brand-dark px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="text-white/60 text-2xl shrink-0 mt-0.5">!</div>
            <div>
              <p className="text-white font-semibold text-lg mb-2">
                Do not leave without talking to a lawyer first.
              </p>
              <p className="text-white/70 leading-relaxed">
                Once you vacate, your leverage changes. If you are being constructively evicted
                right now — habitability issues, harassment, utility shutoffs — call before you
                leave. An attorney can document the conditions, advise you on preserving the
                claim, and potentially obtain a court order without you having to move.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is constructive eviction */}
      <section className="bg-cream-dark px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-6">What is constructive eviction?</h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              A constructive eviction occurs when a landlord — without serving a formal
              termination notice — makes a rental unit so unlivable, or so interferes with a
              tenant&rsquo;s right to quiet enjoyment, that the tenant is effectively forced to leave.
            </p>
            <p>
              California courts look at whether the landlord&rsquo;s conduct substantially interfered
              with the tenant&rsquo;s use and enjoyment of the unit — and whether a reasonable person
              in the tenant&rsquo;s position would have felt compelled to vacate. A single severe
              incident can be enough. A sustained pattern of neglect or harassment almost always
              qualifies.
            </p>
            <p>
              Under SF Admin Code § 37.9(f), a landlord who wrongfully severs or substantially
              reduces a housing service supplied in connection with the tenancy is liable for
              the same damages as a landlord who wrongfully evicts through a formal notice:
              treble damages, attorney fees, and injunctive relief.
            </p>
          </div>
        </div>
      </section>

      {/* Causes */}
      <section className="bg-white px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-4">How constructive evictions happen</h2>
          <p className="text-muted leading-relaxed mb-10">
            These are the most common patterns. If your situation resembles any of them, it is
            worth a conversation — even if you haven&rsquo;t left yet.
          </p>
          <div className="space-y-6">
            {causes.map(({ heading, examples, note }) => (
              <div key={heading} className="rounded-xl border border-border overflow-hidden">
                <div className="bg-cream-dark px-6 py-4 border-b border-border">
                  <h3 className="font-display text-xl font-semibold text-ink">{heading}</h3>
                </div>
                <div className="bg-white p-6">
                  <ul className="space-y-2 mb-4">
                    {examples.map((ex) => (
                      <li key={ex} className="flex items-start gap-2 text-sm text-muted">
                        <span className="text-brand mt-0.5 shrink-0">·</span>
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                  {note && (
                    <p className="text-xs text-muted/80 leading-snug border-l-2 border-border pl-3 mt-4">
                      {note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evidence */}
      <section className="bg-cream-dark px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-4">Evidence to preserve now</h2>
          <p className="text-muted leading-relaxed mb-8">
            Constructive eviction cases live or die on documentation. Start preserving now —
            before you leave.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Photos and video', body: 'Document conditions in detail — every affected area, every date. Timestamps matter.' },
              { label: 'Written repair requests', body: 'Every request you made, when you made it, and how the landlord responded (or didn\'t). Text and email are better than verbal.' },
              { label: 'Medical records', body: 'If conditions affected your health — respiratory issues from mold, illness from contamination — records connecting the condition to the unit are powerful.' },
              { label: 'Communications', body: 'Save everything from the landlord. Screenshots of texts. Forwarded emails. Notes from in-person conversations with dates and what was said.' },
              { label: 'Rent payment history', body: 'Proof of your tenancy duration and payment history establishes the rent differential — the foundation of damages.' },
              { label: 'Any buyout offers', body: 'If the landlord offered you money to leave, preserve every communication about it. That context matters enormously.' },
            ].map(({ label, body }) => (
              <div key={label} className="bg-white rounded-xl p-5 border border-border">
                <p className="font-medium text-ink text-sm mb-2">{label}</p>
                <p className="text-muted text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you can recover */}
      <section className="bg-white px-6 py-16 border-b-4 border-cream-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-8">What you can recover</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-cream-dark rounded-xl p-6 border border-border sm:col-span-2">
              <p className="text-xs font-semibold text-brand-mid uppercase tracking-wider mb-2">§ 37.9(f) — Same remedies as a formal wrongful eviction</p>
              <p className="font-display text-3xl font-bold text-ink mb-2">3× actual damages</p>
              <p className="text-muted text-sm leading-relaxed">
                The SF Rent Ordinance explicitly covers wrongful severing or substantial
                reduction of housing services — not only formal evictions. The damages
                framework is identical: actual damages (rent differential, moving costs,
                emotional distress), trebled, plus attorney&rsquo;s fees and injunctive relief.
              </p>
            </div>
            {[
              { label: 'Actual damages', body: 'The rent differential between your controlled unit and current market rates, projected over your expected remaining tenancy. Plus moving costs, temporary housing, and emotional distress.' },
              { label: "Attorney's fees", body: "Recoverable by the prevailing party by court order. Bowlay Law handles these cases on contingency — no upfront cost." },
              { label: 'Injunctive relief', body: "If you are still in the unit, a court can order the landlord to make required repairs, restore services, and stop the harassing conduct — without you having to leave." },
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
            Being pushed out without a notice?
          </h2>
          <p className="text-white/70 mb-4 leading-relaxed max-w-2xl mx-auto">
            Call before you leave. The options available to you while you&rsquo;re still in the
            unit — injunctive relief, documented conditions, negotiating position — are
            different from the options you have after you vacate. The free screening call is
            15–20 minutes.
          </p>
          <p className="text-white/50 text-sm mb-8">
            No fee unless we win &middot; SF tenants only &middot; Contingency fee
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
