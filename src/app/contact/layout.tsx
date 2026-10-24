import type { Metadata } from 'next';

// page.tsx is a client component and can't export metadata, so it lives here.
export const metadata: Metadata = {
  alternates: { canonical: '/contact' },
  title: 'Free Case Review',
  description:
    'Tell Bowlay Law what happened with your landlord. Cody Bowlay-Williams will call you back, usually within one business day. No fee unless we win.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
