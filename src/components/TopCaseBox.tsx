'use client';

import Link from 'next/link';
import { goToCaseReview } from '@/components/CaseReviewLinks';
import { CASE_REVIEW_ID } from '@/lib/contact';

// Short "you may be owed money" box shown above the fold on high-intent pages.
export default function TopCaseBox({
  location,
  lead,
  body,
}: {
  location: string;
  lead: string;
  body: string;
}) {
  return (
    <div className="mb-8 rounded-2xl border border-brand-light bg-brand-pale/40 p-5 md:p-6">
      <p className="text-ink leading-relaxed">
        <strong>{lead}</strong> {body}{' '}
        <a
          href={`/contact#${CASE_REVIEW_ID}`}
          onClick={(e) => goToCaseReview(e, location)}
          className="font-semibold text-brand underline hover:text-brand-mid whitespace-nowrap"
        >
          Free case review →
        </a>
      </p>
      <p className="mt-2 text-sm text-muted">
        Already moved out?{' '}
        <Link href="/locations/san-francisco/wrongful-eviction" className="text-brand underline hover:text-brand-mid">
          How SF wrongful eviction cases work →
        </Link>
      </p>
    </div>
  );
}
