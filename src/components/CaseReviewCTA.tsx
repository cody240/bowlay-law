import CaseReviewLinks from '@/components/CaseReviewLinks';

// Mid-page "talk to a lawyer" block. Sits between content sections so readers
// don't have to reach the bottom of the page (or /contact) to act.
export default function CaseReviewCTA({
  location,
  title = 'Talk to a tenant lawyer. Free.',
  body = 'A 15–20 minute call with Cody. No fee unless we win, and no pressure either way.',
}: {
  location: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-white px-6 py-12 border-b border-border">
      <div className="max-w-6xl mx-auto bg-brand-pale/40 rounded-2xl border border-border p-7 md:p-9 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl font-bold text-ink mb-2">{title}</h2>
          <p className="text-muted leading-relaxed">{body}</p>
        </div>
        <CaseReviewLinks location={location} />
      </div>
    </section>
  );
}
