'use client';

import type { MouseEvent } from 'react';
import { trackEvent } from '@/lib/analytics';
import { CASE_REVIEW_ID, PHONE_DISPLAY, PHONE_SMS, PHONE_TEL } from '@/lib/contact';

// Scrolls to the on-page intake form when the page has one; otherwise goes to /contact.
export function goToCaseReview(event: MouseEvent<HTMLAnchorElement>, location: string) {
  trackEvent('cta_click', { location });
  const form = document.getElementById(CASE_REVIEW_ID);
  if (form) {
    event.preventDefault();
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

type Variant = 'light' | 'dark';

const styles: Record<Variant, { primary: string; secondary: string }> = {
  light: {
    primary: 'bg-brand-dark text-white hover:bg-brand',
    secondary: 'border-2 border-brand-dark/25 text-brand-dark hover:bg-brand-dark/5',
  },
  dark: {
    primary: 'bg-white text-brand-dark hover:bg-cream',
    secondary: 'border-2 border-white/40 text-white hover:bg-white/10',
  },
};

// Call / Text / Start-a-review button row shared by the mid-page CTA and bottom form section.
export default function CaseReviewLinks({
  location,
  variant = 'light',
  showReviewButton = true,
}: {
  location: string;
  variant?: Variant;
  showReviewButton?: boolean;
}) {
  const s = styles[variant];
  const button = 'inline-flex items-center justify-center px-6 py-3.5 rounded-full font-semibold transition-colors';
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-3">
      {showReviewButton && (
        <a
          href={`/contact#${CASE_REVIEW_ID}`}
          onClick={(e) => goToCaseReview(e, location)}
          className={`${button} ${s.primary}`}
        >
          Start your free case review
        </a>
      )}
      <a
        href={PHONE_TEL}
        onClick={() => trackEvent('phone_click', { location })}
        className={`${button} ${showReviewButton ? s.secondary : s.primary}`}
      >
        Call {PHONE_DISPLAY}
      </a>
      <a
        href={PHONE_SMS}
        onClick={() => trackEvent('text_click', { location })}
        className={`${button} ${s.secondary}`}
      >
        Text us
      </a>
    </div>
  );
}
