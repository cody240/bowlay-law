'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { trackEvent } from '@/lib/analytics';

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

  return (
    <header className="bg-brand-dark text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="font-display text-xl font-semibold tracking-tight text-white hover:text-brand-pale transition-colors">
          Bowlay Law
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`hover:text-brand-pale transition-colors ${pathname === href ? 'text-brand-pale' : 'text-white/80'}`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => trackEvent('cta_click', { location: 'header' })}
            className="ml-2 bg-gold text-ink px-4 py-2 rounded-full text-sm font-semibold hover:bg-gold-light transition-colors"
          >
            Free Case Review
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-pale"
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
        <div className="md:hidden bg-brand border-t border-brand-mid">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium hover:text-brand-pale transition-colors ${pathname === href ? 'text-brand-pale' : 'text-white/80'}`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => { setMobileOpen(false); trackEvent('cta_click', { location: 'mobile_menu' }); }}
              className="bg-gold text-ink px-4 py-2 rounded-full text-sm font-semibold text-center hover:bg-gold-light transition-colors mt-2"
            >
              Free Case Review
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
