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

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [locOpen, setLocOpen] = useState(false);

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
            <button className={`flex items-center gap-1 transition-colors ${pathname.startsWith('/locations') ? 'text-brand font-semibold' : 'text-ink/70 hover:text-ink'}`}>
              Locations
              <svg className={`w-3.5 h-3.5 transition-transform ${locOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            {locOpen && (
              <div className="absolute top-full left-0 mt-1 w-52 bg-white border border-border rounded-xl shadow-lg py-1 z-50">
                {locationLinks.map(({ href, city }) => (
                  <Link
                    key={href}
                    href={href}
                    className="block px-4 py-2.5 text-sm text-ink/70 hover:text-ink hover:bg-cream-dark transition-colors"
                    onClick={() => setLocOpen(false)}
                  >
                    {city}
                  </Link>
                ))}
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
              <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Locations</p>
              <div className="flex flex-col gap-2 pl-2">
                {locationLinks.map(({ href, city }) => (
                  <Link key={href} href={href} onClick={() => setMobileOpen(false)} className="text-sm text-ink/70 hover:text-ink transition-colors">
                    {city}
                  </Link>
                ))}
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
