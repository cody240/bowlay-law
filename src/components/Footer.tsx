'use client';

import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/practice-areas', label: 'Practice Areas' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <p className="font-display text-xl font-semibold mb-2">Bowlay Law</p>
            <p className="text-white/60 text-sm leading-relaxed">
              California tenant rights attorney.<br />
              No fee unless we win.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-3">Navigate</p>
            <nav className="flex flex-col gap-2">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-3">Contact</p>
            <div className="flex flex-col gap-2">
              <a
                href="tel:+14159095920"
                className="text-sm text-white/60 hover:text-white transition-colors"
                onClick={() => trackEvent('phone_click', { location: 'footer' })}
              >
                (415) 909-5920
              </a>
              <a
                href="mailto:cody@bowlaylaw.com"
                className="text-sm text-white/60 hover:text-white transition-colors"
                onClick={() => trackEvent('email_click', { location: 'footer' })}
              >
                cody@bowlaylaw.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Bowlay Law. All rights reserved.</p>
          <p className="max-w-md text-right">
            This website is for informational purposes only and does not constitute legal advice.
            No attorney-client relationship is formed by visiting this site.
          </p>
        </div>
      </div>
    </footer>
  );
}
