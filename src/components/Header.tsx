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
        <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
          <svg viewBox="0 0 48 48" className="w-8 h-8 shrink-0" aria-hidden="true">
            <rect x="4" y="16" width="40" height="28" rx="1" fill="white"/>
            <rect x="2" y="12" width="44" height="5" rx="1" fill="#D97706"/>
            <rect x="9" y="21" width="6" height="6" rx="0.5" fill="#1B4332"/>
            <rect x="21" y="21" width="6" height="6" rx="0.5" fill="#1B4332"/>
            <rect x="33" y="21" width="6" height="6" rx="0.5" fill="#1B4332"/>
            <rect x="9" y="30" width="6" height="6" rx="0.5" fill="#1B4332"/>
            <rect x="21" y="30" width="6" height="6" rx="0.5" fill="#1B4332"/>
            <rect x="33" y="30" width="6" height="6" rx="0.5" fill="#1B4332"/>
            <rect x="19" y="36" width="10" height="8" rx="1" fill="#D97706"/>
          </svg>
          <span className="font-display text-xl font-semibold tracking-tight text-white">Bowlay Law</span>
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
