'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { trackEvent } from '@/lib/analytics';
import { locationLinks } from '@/lib/locations';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/practice-areas', label: 'Practice Areas' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

const resourceCities = [
  { href: '/resources/local-ordinances/san-francisco', label: 'San Francisco' },
  { href: '/resources/local-ordinances/oakland', label: 'Oakland' },
  { href: '/resources/local-ordinances/berkeley', label: 'Berkeley' },
  { href: '/resources/local-ordinances/los-angeles', label: 'Los Angeles' },
  { href: '/resources/local-ordinances/san-jose', label: 'San Jose' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [locOpen, setLocOpen] = useState(false);
  const [resOpen, setResOpen] = useState(false);

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="hover:opacity-75 transition-opacity">
          <img src="/logo-black.svg" alt="Bowlay Law" className="h-10 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition-colors ${pathname === href ? 'text-brand font-semibold' : 'text-ink/70 hover:text-ink'}`}
            >
              {label}
            </Link>
          ))}

          {/* Locations dropdown */}
          <div className="relative" onMouseEnter={() => setLocOpen(true)} onMouseLeave={() => setLocOpen(false)}>
            <Link href="/locations/california" className={`flex items-center gap-1 transition-colors ${pathname.startsWith('/locations') ? 'text-brand font-semibold' : 'text-ink/70 hover:text-ink'}`}>
              Locations
              <svg className={`w-3.5 h-3.5 transition-transform ${locOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </Link>
            {locOpen && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-border rounded-xl shadow-lg py-1 z-50">
                {locationLinks.map(({ href, city }) => (
                  <div key={href}>
                    <Link
                      href={href}
                      className="block px-4 py-2.5 text-sm text-ink/70 hover:text-ink hover:bg-cream-dark transition-colors"
                      onClick={() => setLocOpen(false)}
                    >
                      {city}
                    </Link>
                    {city === 'San Francisco' && (
                      <div className="pl-4 pb-1 border-b border-border">
                        {[
                          { href: '/locations/san-francisco/wrongful-eviction', label: 'Wrongful Eviction' },
                          { href: '/locations/san-francisco/omi-eviction', label: 'Owner Move-In (OMI)' },
                          { href: '/locations/san-francisco/ellis-act', label: 'Ellis Act' },
                          { href: '/locations/san-francisco/constructive-eviction', label: 'Constructive Eviction' },
                          { href: '/locations/san-francisco/rent-control', label: 'Rent Control Violations' },
                          { href: '/locations/san-francisco/tenant-harassment', label: 'Tenant Harassment' },
                          { href: '/locations/san-francisco/damages', label: 'Damages & Case Value' },
                        ].map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block px-3 py-1.5 text-xs text-ink/60 hover:text-ink hover:bg-cream-dark rounded transition-colors"
                            onClick={() => setLocOpen(false)}
                          >
                            → {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Resources dropdown */}
          <div className="relative" onMouseEnter={() => setResOpen(true)} onMouseLeave={() => setResOpen(false)}>
            <Link href="/resources/local-ordinances" className={`flex items-center gap-1 transition-colors ${pathname.startsWith('/resources') ? 'text-brand font-semibold' : 'text-ink/70 hover:text-ink'}`}>
              Resources
              <svg className={`w-3.5 h-3.5 transition-transform ${resOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </Link>
            {resOpen && (
              <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-border rounded-xl shadow-lg py-1 z-50">
                <div className="px-4 pt-2 pb-1">
                  <Link
                    href="/resources/local-ordinances"
                    className="block text-xs font-semibold text-muted hover:text-ink transition-colors mb-1"
                    onClick={() => setResOpen(false)}
                  >
                    Local Ordinances
                  </Link>
                  <div className="pl-2 mb-2">
                    {resourceCities.map(({ href, label }) => (
                      <Link
                        key={href}
                        href={href}
                        className="block px-2 py-1 text-xs text-ink/60 hover:text-ink hover:bg-cream-dark rounded transition-colors"
                        onClick={() => setResOpen(false)}
                      >
                        → {label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="border-t border-border px-4 py-2">
                  <Link
                    href="/resources/ab-1482"
                    className="block text-xs text-ink/60 hover:text-ink hover:bg-cream-dark rounded px-2 py-1 transition-colors"
                    onClick={() => setResOpen(false)}
                  >
                    AB 1482 (statewide)
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            onClick={() => trackEvent('cta_click', { location: 'header' })}
            className="ml-2 bg-brand-dark text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-brand transition-colors"
          >
            Free Case Review
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-ink focus:outline-none focus:ring-2 focus:ring-brand"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium transition-colors ${pathname === href ? 'text-brand font-semibold' : 'text-ink/70 hover:text-ink'}`}
              >
                {label}
              </Link>
            ))}
            <div>
              <Link href="/locations/california" onClick={() => setMobileOpen(false)} className="text-xs font-semibold text-muted uppercase tracking-wider mb-2 hover:text-brand transition-colors">Locations</Link>
              <div className="flex flex-col gap-1 pl-2">
                {locationLinks.map(({ href, city }) => (
                  <div key={href}>
                    <Link href={href} onClick={() => setMobileOpen(false)} className="block text-sm text-ink/70 hover:text-ink transition-colors py-1">
                      {city}
                    </Link>
                    {city === 'San Francisco' && (
                      <div className="pl-3 flex flex-col gap-0.5 mb-1">
                        {[
                          { href: '/locations/san-francisco/wrongful-eviction', label: 'Wrongful Eviction' },
                          { href: '/locations/san-francisco/omi-eviction', label: 'Owner Move-In' },
                          { href: '/locations/san-francisco/ellis-act', label: 'Ellis Act' },
                          { href: '/locations/san-francisco/constructive-eviction', label: 'Constructive Eviction' },
                          { href: '/locations/san-francisco/rent-control', label: 'Rent Control Violations' },
                          { href: '/locations/san-francisco/tenant-harassment', label: 'Tenant Harassment' },
                          { href: '/locations/san-francisco/damages', label: 'Damages & Case Value' },
                        ].map((sub) => (
                          <Link key={sub.href} href={sub.href} onClick={() => setMobileOpen(false)} className="text-xs text-ink/50 hover:text-ink transition-colors py-0.5">
                            → {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Link href="/resources/local-ordinances" onClick={() => setMobileOpen(false)} className="text-xs font-semibold text-muted tracking-wider mb-2 hover:text-brand transition-colors">Resources</Link>
              <div className="flex flex-col gap-1 pl-2 mt-1">
                <Link href="/resources/local-ordinances" onClick={() => setMobileOpen(false)} className="block text-sm text-ink/70 hover:text-ink transition-colors py-1">
                  Local Ordinances
                </Link>
                <div className="pl-3 flex flex-col gap-0.5">
                  {resourceCities.map(({ href, label }) => (
                    <Link key={href} href={href} onClick={() => setMobileOpen(false)} className="text-xs text-ink/50 hover:text-ink transition-colors py-0.5">
                      → {label}
                    </Link>
                  ))}
                </div>
                <Link href="/resources/ab-1482" onClick={() => setMobileOpen(false)} className="text-sm text-ink/70 hover:text-ink transition-colors py-1">
                  AB 1482 (statewide)
                </Link>
              </div>
            </div>
            <Link
              href="/contact"
              onClick={() => { setMobileOpen(false); trackEvent('cta_click', { location: 'mobile_menu' }); }}
              className="bg-brand-dark text-white px-4 py-2 rounded-full text-sm font-semibold text-center hover:bg-brand transition-colors mt-2"
            >
              Free Case Review
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
