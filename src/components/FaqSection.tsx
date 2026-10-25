export type Faq = { q: string; a: string };

// Visible Q&A list plus matching FAQPage structured data, so Google and AI assistants
// can read the same plain-language answers visitors see.
export default function FaqSection({
  title,
  faqs,
  className = 'bg-cream-dark',
}: {
  title: string;
  faqs: Faq[];
  className?: string;
}) {
  const schema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  });

  return (
    <section className={`${className} px-6 py-16`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-2xl font-bold text-ink mb-8">{title}</h2>
        <div className="space-y-3">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-ink hover:text-brand transition-colors">
                <span>{q}</span>
                <span className="shrink-0 text-brand group-open:rotate-45 transition-transform text-xl font-light">+</span>
              </summary>
              <div className="px-6 pb-5 text-muted leading-relaxed border-t border-border/60 pt-4">{a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
