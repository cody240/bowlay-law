import type { Metadata } from 'next';
import Link from 'next/link';
import CaseReviewLinks from '@/components/CaseReviewLinks';
import NotFoundTracker from '@/components/NotFoundTracker';

// Next.js adds noindex to 404 responses itself.
export const metadata: Metadata = {
  title: 'Page not found',
};

const POPULAR = [
  { href: '/locations/san-francisco', label: 'San Francisco tenant rights' },
  { href: '/locations/oakland', label: 'Oakland tenant rights' },
  { href: '/locations/berkeley', label: 'Berkeley tenant rights' },
  { href: '/locations/los-angeles', label: 'Los Angeles tenant rights' },
  { href: '/locations/san-jose', label: 'San Jose tenant rights' },
  { href: '/locations/california', label: 'AB 1482 (statewide rent cap and just cause)' },
  { href: '/faq', label: 'Frequently asked questions' },
];

// Shown for any URL that doesn't exist. Keeps the visitor with a way to reach Cody
// and logs a page_not_found event (with the bad path) so broken links show up in GA4.
export default function NotFound() {
  return (
    <section className="bg-white px-6 py-16 md:py-24">
      <NotFoundTracker />
      <div className="max-w-3xl mx-auto">
        <p className="text-brand-mid text-sm font-semibold uppercase tracking-wider mb-4">Page not found</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6 text-ink">
          That page has moved or doesn&rsquo;t exist.
        </h1>
        <p className="text-muted text-lg leading-relaxed mb-8">
          If you&rsquo;re dealing with an eviction, a rent increase, or a landlord problem, you can
          still talk to Cody today. The case review is free, and there&rsquo;s no fee unless we win.
        </p>
        <CaseReviewLinks location="not_found" />
        <div className="border-t border-border mt-12 pt-8">
          <h2 className="font-semibold text-ink mb-4">Popular pages</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {POPULAR.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="text-brand hover:text-brand-mid font-medium transition-colors">
                  {label} &rarr;
                </Link>
              </li>
            ))}
            <li>
              <Link href="/" className="text-brand hover:text-brand-mid font-medium transition-colors">
                Home &rarr;
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
