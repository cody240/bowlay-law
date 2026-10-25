import type { ReactNode } from 'react';
import CaseReviewLinks from '@/components/CaseReviewLinks';
import IntakeForm from '@/components/IntakeForm';
import { CASE_REVIEW_ID } from '@/lib/contact';

// Bottom-of-page section with the full intake form built in, so visitors can
// request a case review without leaving the page. Pages pass their own heading/copy.
export default function CaseReviewSection({
  location,
  title,
  children,
}: {
  location: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section id={CASE_REVIEW_ID} className="bg-brand-dark text-white px-6 py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <h2 className="font-display text-3xl font-bold mb-4">{title}</h2>
          <div className="text-white/80 leading-relaxed space-y-4 mb-8">
            {children ?? (
              <p>
                Tell Cody what happened. He reviews it and calls you back, usually within one
                business day. The call is free and takes 15&ndash;20 minutes.
              </p>
            )}
            <p className="text-white/70 text-sm">No fee unless we win &middot; California tenants only</p>
          </div>
          <p className="text-sm font-semibold text-white/80 mb-3">Rather talk now?</p>
          <CaseReviewLinks location={location} variant="dark" showReviewButton={false} />
        </div>
        <div className="lg:col-span-3 bg-white text-ink rounded-2xl p-6 md:p-8">
          <IntakeForm location={location} />
          <p className="text-xs text-muted text-center leading-relaxed mt-4">
            Submitting this form does not create an attorney-client relationship. No legal advice
            is given until a formal engagement is established.
          </p>
        </div>
      </div>
    </section>
  );
}
