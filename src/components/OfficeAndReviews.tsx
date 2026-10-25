import { OFFICE } from '@/lib/contact';
import ReviewList from '@/components/ReviewList';

const mapQuery = encodeURIComponent(`125 12th Street, ${OFFICE.city}, ${OFFICE.region} ${OFFICE.postalCode}`);

// Oakland office (address, hours, map) beside client reviews from Google.
export default function OfficeAndReviews() {
  return (
    <section className="bg-cream-dark px-6 py-16 border-b border-border">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h2 className="font-display text-2xl font-bold text-ink mb-4">Our Oakland office</h2>
          <address className="not-italic text-ink leading-relaxed mb-2">
            Bowlay Law
            <br />
            {OFFICE.street}
            <br />
            {OFFICE.city}, {OFFICE.region} {OFFICE.postalCode}
          </address>
          <p className="text-muted text-sm mb-6">{OFFICE.hours}</p>
          <iframe
            title="Map of the Bowlay Law office in Oakland"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            className="w-full h-64 rounded-xl border border-border"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold text-ink mb-4">What clients say</h2>
          <ReviewList />
        </div>
      </div>
    </section>
  );
}
