import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

// The contact page is a client component, so its metadata and schema live here.
export const metadata: Metadata = {
  alternates: { canonical: '/contact' },
  title: 'Free Case Review: Talk to a Tenant Rights Attorney',
  description:
    'Tell Cody what happened and get a free, no-pressure case review from a California tenant rights attorney, usually within one business day. No fee unless we win.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema trail={[{ name: 'Free Case Review', path: '/contact' }]} />
      {children}
    </>
  );
}
