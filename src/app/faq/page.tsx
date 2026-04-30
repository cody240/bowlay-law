import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Answers to the most common questions about California tenant rights, wrongful eviction cases, rent control, and what to expect when working with Bowlay Law.',
};

const faqs = [
  {
    q: 'How much does it cost to hire Bowlay Law?',
    a: 'Nothing upfront — ever. Bowlay Law works exclusively on contingency, which means you only pay if we win your case. Our fee comes out of the settlement or judgment. If we do not win, you owe nothing.',
  },
  {
    q: 'What is a wrongful eviction?',
    a: 'A wrongful eviction happens when a landlord gets a tenant to leave through means that are not legally valid. This could mean issuing a notice that has no legitimate legal basis, misrepresenting the reason for the eviction, making the unit unlivable, or pressuring a tenant to leave without going through the proper legal process. You may have a wrongful eviction claim even if you already moved out.',
  },
  {
    q: 'Do I have to have moved out to have a case?',
    a: 'Not necessarily. Some claims arise while you are still in the unit — for example, if your landlord is harassing you, refusing to make repairs, or has raised your rent illegally. We can discuss your situation regardless of whether you are still living there.',
  },
  {
    q: 'What is the Tenant Protection Act?',
    a: "The Tenant Protection Act (AB 1482) is a California state law enacted in 2020 that limits rent increases and requires landlords to have a valid 'just cause' reason before evicting most long-term tenants. It applies to units that are at least 15 years old and not subject to a stricter local ordinance. It generally covers tenants who have lived in the same unit for more than 12 months.",
  },
  {
    q: 'How is local rent control different from state law?',
    a: 'Local rent control ordinances — in cities like San Francisco, Oakland, Los Angeles, Berkeley, San Jose, and Santa Barbara — often offer stronger protections than the state Tenant Protection Act. Local ordinances typically have stricter caps on rent increases, require just-cause for evictions with fewer exemptions, and may allow for treble (triple) damages and mandatory attorney\'s fees when a landlord violates the rules. If you live in one of these cities, your case may be significantly more valuable.',
  },
  {
    q: 'How long do I have to file a claim?',
    a: 'Most local rent ordinances have a statute of limitations of approximately one year from the date of the wrongful act. This means if your landlord wrongfully evicted you or violated rent control more than 12 months ago, your legal options may be very limited. If something happened recently, it is important to reach out as soon as possible.',
  },
  {
    q: 'What areas of California do you serve?',
    a: 'Bowlay Law is licensed in California and can represent tenants anywhere in the state, as long as the case is a strong fit. We handle cases in San Francisco, Oakland, Los Angeles, Berkeley, San Jose, Santa Barbara, and throughout California. The best cases tend to be in cities with strong local rent ordinances.',
  },
  {
    q: 'My tenancy is less than a year old. Can I still have a case?',
    a: "It depends. Shorter tenancies are generally harder to bring under the Tenant Protection Act, but local ordinances sometimes have different rules. There may also be other legal theories that apply depending on your situation. It is worth a conversation — reach out and describe what happened.",
  },
  {
    q: 'What should I bring to the consultation call?',
    a: 'Anything you have helps, but do not let a lack of documents stop you from reaching out. Useful things include: your lease or rental agreement, any notices you received from your landlord, text messages or emails with your landlord, a timeline of what happened, and photos of the unit if relevant. If you do not have all of this, we can still have a productive conversation.',
  },
  {
    q: 'What happens after I submit the contact form?',
    a: 'Cody will give you a call, typically within one business day. The call is free, low-pressure, and designed to help both of you understand whether the case is a good fit. If it is, Cody will explain next steps. Even if he cannot take your case, he will do his best to point you in a useful direction.',
  },
  {
    q: 'Do you only take cases you think you will win?',
    a: 'Yes. Because Bowlay Law works on contingency, we only take cases where we genuinely believe there is a strong chance of recovery. If Cody does not think the case is worth pursuing, he will tell you that honestly — and explain why.',
  },
];

const faqSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
});

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchema }}
      />
      {/* Hero */}
      <section className="bg-brand-dark text-white px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-brand-pale text-sm font-semibold uppercase tracking-wider mb-4">FAQ</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
            Common questions
          </h1>
          <p className="text-white/75 text-lg leading-relaxed">
            Answers to what most tenants ask before reaching out. If you do not see your question
            here, just call or fill out the form.
          </p>
        </div>
      </section>

      {/* FAQ list */}
      <section className="bg-cream px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details
                key={q}
                className="group bg-white rounded-2xl border border-border shadow-sm overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-7 py-5 cursor-pointer list-none font-semibold text-ink hover:text-brand transition-colors">
                  <span>{q}</span>
                  <span className="shrink-0 text-brand group-open:rotate-45 transition-transform text-xl font-light">
                    +
                  </span>
                </summary>
                <div className="px-7 pb-6 text-muted leading-relaxed border-t border-border/60 pt-4">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream-dark px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-ink mb-4">
            Still have questions?
          </h2>
          <p className="text-muted mb-8">
            The fastest way to get an answer is a free screening call. Cody is happy to talk through
            your situation and explain what he thinks — no commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-brand-dark text-white px-8 py-4 rounded-full font-semibold hover:bg-brand transition-colors"
            >
              Request a Free Case Review
            </Link>
            <a
              href="tel:+14159095920"
              className="border-2 border-brand-dark text-brand-dark px-8 py-4 rounded-full font-semibold hover:bg-brand-pale transition-colors"
            >
              Call (415) 909-5920
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
