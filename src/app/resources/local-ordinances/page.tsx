import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'California Local Tenant Ordinances | Bowlay Law',
  description:
    "Plain-language reference guides to California's strongest local tenant ordinances — San Francisco, Oakland, Berkeley, Los Angeles, and San Jose. Rent control, just cause eviction, and tenant harassment law.",
  keywords: [
    'California local tenant ordinances',
    'San Francisco Rent Ordinance Chapter 37',
    'Oakland tenant protection ordinance',
    'Berkeley rent control',
    'California tenant rights attorney',
    'AB 1482 California tenant protection',
  ],
  openGraph: {
    type: 'website',
    url: 'https://bowlaylaw.com/resources/local-ordinances',
    title: 'California Local Tenant Ordinances | Bowlay Law',
    description:
      "Plain-language reference guides to California's strongest local tenant ordinances — SF, Oakland, Berkeley, LA, and San Jose.",
  },
};

const cities = [
  {
    city: 'San Francisco',
    ordinance: 'SF Rent Ordinance · Admin Code Chapter 37',
    description:
      "One of the most comprehensive local tenant protection laws in the country. Rent control since 1979, 17 enumerated just causes for eviction, mandatory treble damages and attorney's fees for wrongful evictions, and a standalone tenant harassment ordinance (§ 37.10B) enforceable while you're still in your home.",
    href: '/resources/local-ordinances/san-francisco',
    available: true,
  },
  {
    city: 'Oakland',
    ordinance: 'Oakland Just Cause for Eviction Ordinance · OMC Chapter 8.22',
    description:
      'Covers most rental units in Oakland regardless of building age. Just cause required for eviction, rent control for pre-1983 buildings, and substantial relocation assistance for no-fault evictions.',
    href: '/resources/local-ordinances/oakland',
    available: false,
  },
  {
    city: 'Berkeley',
    ordinance: 'Berkeley Rent Stabilization Ordinance · BMC Chapter 13.76',
    description:
      'One of the oldest rent control programs in California, covering most pre-1980 multi-unit buildings. Just cause required for eviction, strict relocation assistance requirements, and an active Rent Stabilization Board.',
    href: '/resources/local-ordinances/berkeley',
    available: false,
  },
  {
    city: 'Los Angeles',
    ordinance: 'LA Rent Stabilization Ordinance (RSO) · LAMC Chapter XV',
    description:
      'Covers most multi-unit residential buildings built before October 1, 1978. Just cause required for eviction, annual allowable rent increases, and relocation assistance for no-fault evictions.',
    href: '/resources/local-ordinances/los-angeles',
    available: false,
  },
  {
    city: 'San Jose',
    ordinance: 'San Jose Apartment Rent Ordinance · SJMC Chapter 17.23',
    description:
      'Covers multi-unit residential properties built before September 7, 1979. Annual rent increase limitations, a formal Rent Arbitration Program, and tenant petition rights for unlawful increases.',
    href: '/resources/local-ordinances/san-jose',
    available: false,
  },
];

export default function LocalOrdinancesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white px-6 py-20 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <p className="text-brand-mid text-sm font-semibold tracking-wider mb-4">
            Resources · Local Ordinances
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6 text-ink">
            California Local Tenant Ordinances
          </h1>
          <p className="text-muted text-lg leading-relaxed max-w-2xl">
            Plain-language reference guides to the rent and eviction ordinances in
            California&rsquo;s strongest tenant-protection cities.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-cream-dark px-6 py-12 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <p className="text-muted leading-relaxed max-w-3xl">
            California&rsquo;s Tenant Protection Act (AB 1482) sets a statewide floor, but cities
            like San Francisco, Oakland, Berkeley, Los Angeles, and San Jose have local
            ordinances that go significantly further — stricter just-cause rules, lower rent
            caps, treble damages, mandatory attorney&rsquo;s fees. These pages walk through each
            ordinance in detail, with statutory citations and the carve-backs that matter
            in practice.
          </p>
        </div>
      </section>

      {/* City cards */}
      <section className="bg-white px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cities.map(({ city, ordinance, description, href, available }) => (
              <div
                key={city}
                className={`rounded-xl border border-border overflow-hidden ${!available ? 'opacity-75' : ''}`}
              >
                <div className="bg-cream-dark px-6 py-4 border-b border-border flex items-center justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">{city}</h3>
                    <p className="text-xs text-brand-mid font-semibold tracking-wider mt-0.5">{ordinance}</p>
                  </div>
                  {!available && (
                    <span className="shrink-0 text-xs text-muted bg-white border border-border px-2 py-1 rounded-full">
                      Coming soon
                    </span>
                  )}
                </div>
                <div className="bg-white p-6">
                  <p className="text-muted text-sm leading-relaxed mb-4">{description}</p>
                  {available ? (
                    <Link
                      href={href}
                      className="inline-block text-sm font-semibold text-brand-dark hover:text-brand transition-colors"
                    >
                      Read the {city} ordinance reference →
                    </Link>
                  ) : (
                    <p className="text-xs text-muted">Reference guide in progress</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark text-white px-6 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-2xl font-bold mb-4">
            Need help with a case?
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed max-w-xl mx-auto">
            I represent California tenants under these ordinances. The free case review is
            15–20 minutes and costs nothing.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-brand-dark px-8 py-4 rounded-full font-semibold hover:bg-cream transition-colors"
          >
            Free Case Review →
          </Link>
        </div>
      </section>
    </>
  );
}
