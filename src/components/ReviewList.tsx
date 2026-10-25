import { GOOGLE_REVIEWS_URL, reviews } from '@/lib/reviews';

// Google reviews (from lib/reviews.ts) with a link to Google and the results disclaimer.
// Used on the homepage and the Oakland page.
export default function ReviewList({ gridClassName = 'space-y-4' }: { gridClassName?: string }) {
  return (
    <>
      <div className={gridClassName}>
        {reviews.map(({ name, rating, text }) => (
          <figure key={name} className="bg-white rounded-xl p-6 border border-border">
            <p className="text-amber-500 mb-2" aria-label={`${rating} out of 5 stars`}>
              {'★'.repeat(rating)}
            </p>
            <blockquote className="text-muted text-sm leading-relaxed">{text}</blockquote>
            <figcaption className="mt-3 text-sm font-semibold text-ink">{name}, Google review</figcaption>
          </figure>
        ))}
      </div>
      <a
        href={GOOGLE_REVIEWS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-sm text-brand underline hover:text-brand-mid"
      >
        See all reviews on Google ↗
      </a>
      <p className="mt-4 text-xs text-muted leading-relaxed">
        Reviews describe individual experiences. Every case depends on its own facts, and past
        results do not guarantee or predict the outcome of any other matter.
      </p>
    </>
  );
}
