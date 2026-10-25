'use client';

import { goToCaseReview } from '@/components/CaseReviewLinks';
import { trackEvent } from '@/lib/analytics';
import { CASE_REVIEW_ID, PHONE_SMS, PHONE_TEL } from '@/lib/contact';

// Sticky Call / Text / Free review bar, phones only (hidden from md up).
export default function MobileCallBar() {
  const item = 'flex-1 flex flex-col items-center justify-center py-2.5 text-xs font-semibold';
  return (
    <nav
      aria-label="Contact Bowlay Law"
      className="md:hidden fixed bottom-0 inset-x-0 z-50 flex bg-white border-t border-border shadow-[0_-2px_10px_rgba(0,0,0,0.06)] pb-[env(safe-area-inset-bottom)]"
    >
      <a
        href={PHONE_TEL}
        onClick={() => trackEvent('phone_click', { location: 'mobile_bar' })}
        className={`${item} text-brand-dark`}
      >
        <span aria-hidden className="text-lg leading-none mb-0.5">📞</span>
        Call
      </a>
      <a
        href={PHONE_SMS}
        onClick={() => trackEvent('text_click', { location: 'mobile_bar' })}
        className={`${item} text-brand-dark border-x border-border`}
      >
        <span aria-hidden className="text-lg leading-none mb-0.5">💬</span>
        Text
      </a>
      <a
        href={`/contact#${CASE_REVIEW_ID}`}
        onClick={(e) => goToCaseReview(e, 'mobile_bar')}
        className={`${item} bg-brand-dark text-white`}
      >
        <span aria-hidden className="text-lg leading-none mb-0.5">✓</span>
        Free case review
      </a>
    </nav>
  );
}
