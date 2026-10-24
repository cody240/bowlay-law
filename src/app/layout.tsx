import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

// Google Tag Manager container. GA4 (G-D4183W8T93), CallRail call/form tracking and the
// Conversion Linker are all configured inside GTM — do not hard-code them here.
const GTM_ID = 'GTM-KXHGFVMT';

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
    <html lang="en" className={`${nunito.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {/* dataLayer for GTM; trackEvent() pushes custom events here */}
        <Script id="gtm-datalayer" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];`}
        </Script>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-cream text-ink antialiased">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>

    </html>
  );
}
