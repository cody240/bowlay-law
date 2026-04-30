import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap',
});

const GA_ID = 'G-D4183W8T93';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LegalService',
      '@id': 'https://bowlaylaw.com/#firm',
      name: 'Bowlay Law',
      url: 'https://bowlaylaw.com',
      telephone: '+14159095920',
      email: 'cody@bowlaylaw.com',
      description:
        'California tenant rights law firm representing tenants in wrongful eviction and rent control cases. No fee unless we win.',
      areaServed: {
        '@type': 'State',
        name: 'California',
      },
      serviceType: 'Tenant Rights Law',
      priceRange: 'Contingency — no fee unless we win',
      founder: { '@id': 'https://bowlaylaw.com/#cody' },
    },
    {
      '@type': 'Person',
      '@id': 'https://bowlaylaw.com/#cody',
      name: 'Cody Bowlay-Williams',
      jobTitle: 'Attorney',
      worksFor: { '@id': 'https://bowlaylaw.com/#firm' },
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'UC Berkeley School of Law',
      },
      knowsAbout: [
        'Tenant rights law',
        'Wrongful eviction',
        'California Tenant Protection Act',
        'Rent control',
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: {
    template: '%s | Bowlay Law',
    default: 'Bowlay Law — California Tenant Rights Attorney',
  },
  description:
    'Bowlay Law represents California tenants in wrongful eviction and rent control cases. Solo attorney Cody Bowlay-Williams. No fee unless we win.',
  keywords: [
    'California tenant rights attorney',
    'wrongful eviction lawyer',
    'rent control lawyer',
    'tenant protection act',
    'San Francisco tenant lawyer',
  ],
  metadataBase: new URL('https://bowlaylaw.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bowlaylaw.com',
    siteName: 'Bowlay Law',
    title: 'Bowlay Law — California Tenant Rights Attorney',
    description:
      'California tenant rights attorney. Wrongful eviction and rent control cases. No fee unless we win.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-ink antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </html>
  );
}
