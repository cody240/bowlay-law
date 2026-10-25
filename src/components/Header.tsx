'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { trackEvent } from '@/lib/analytics';
import { locationLinks } from '@/lib/locations';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/practice-areas', label: 'Practice Areas' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

// Only guides that exist. Berkeley, LA and San Jose are under Locations until they get guides.
const resourceCities = [
  { href: '/resources/local-ordinances/san-francisco', label: 'San Francisco' },
  { href: '/resources/local-ordinances/oakland', label: 'Oakland' },
];

const sfTopics = [
  { href: '/locations/san-francisco/wrongful-eviction', label: 'Wrongful Eviction' },
  { href: '/locations/san-francisco/omi-eviction', label: 'Owner Move-In (OMI)' },
  { href: '/locations/san-francisco/ellis-act', label: 'Ellis Act' },
  { href: '/locations/san-francisco/constructive-eviction', label: 'Constructive Eviction' },
  { href: '/locations/san-francisco/rent-control', label: 'Rent Control Violations' },
  { href: '/locations/san-francisco/tenant-harassment', label: 'Tenant Harassment' },
  { href: '/locations/san-francisco/damages', label: 'Damages & Case Value' },
];

const chevron = (open: boolean) => (
  <svg className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
  </svg>
);

// Desktop dropdown. Opens on mouse hover, keyboard focus, or a tap (first tap on touch
// opens the menu instead of following the link). The menu's top padding bridges the gap
// below the label so the pointer can travel into it without the menu closing.
function NavDropdown({
  label,
  href,
  active,
  menuClassName,
  children,
}: {
  label: string;
  href: string;
  active: boolean;
  menuClassName: string;
  children: (close: () => void) => ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const tapOpensMenu = useRef(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative"
      onPointerEnter={(e) => e.pointerType === 'mouse' && setOpen(true)}
      onPointerLeave={(e) => e.pointerType === 'mouse' && setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!ref.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <Link
        href={href}
        aria-haspopup="true"
        aria-expanded={open}
        onPointerDown={(e) => {
          tapOpensMenu.current = e.pointerType !== 'mouse' && !open;
        }}
        onClick={(e) => {
          if (tapOpensMenu.current) {
            e.preventDefault();
            tapOpensMenu.current = false;
            setOpen(true);
          }
        }}
        className={`flex items-center gap-1 transition-colors ${active ? 'text-brand font-semibold' : 'text-ink/70 hover:text-ink'}`}
      >
        {label}
        {chevron(open)}
      </Link>
      {open && (
        <div className="absolute top-full left-0 pt-2 z-50">
          <div className={`bg-white border border-border rounded-xl shadow-lg py-1 ${menuClassName}`}>
            {children(close)}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="hover:opacity-75 transition-opacity">
          <img src="/logo-black.svg" alt="Bowlay Law" width={148} height={40} className="h-10 w-auto" />
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

          <NavDropdown
            label="Locations"
            href="/locations/california"
            active={pathname.startsWith('/locations')}
            menuClassName="w-64"
          >
            {(close) =>
              locationLinks.map(({ href, city }) => (
                <div key={href}>
                  <Link
                    href={href}
                    className="block px-4 py-2.5 text-sm text-ink/70 hover:text-ink hover:bg-cream-dark transition-colors"
                    onClick={close}
                  >
                    {city}
                  </Link>
                  {city === 'San Francisco' && (
                    <div className="pl-4 pb-1 border-b border-border">
                      {sfTopics.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-3 py-1.5 text-xs text-ink/60 hover:text-ink hover:bg-cream-dark rounded transition-colors"
                          onClick={close}
                        >
                          → {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))
            }
          </NavDropdown>

          <NavDropdown
            label="Resources"
            href="/resources/local-ordinances"
            active={pathname.startsWith('/resources')}
            menuClassName="w-56"
          >
            {(close) => (
              <>
                <div className="px-4 pt-2 pb-1">
                  <Link
                    href="/resources/local-ordinances"
                    className="block text-xs font-semibold text-muted hover:text-ink transition-colors mb-1"
                    onClick={close}
                  >
                    Local Ordinances
                  </Link>
                  <div className="pl-2 mb-2">
                    {resourceCities.map(({ href, label }) => (
                      <Link
                        key={href}
                        href={href}
                        className="block px-2 py-1 text-xs text-ink/60 hover:text-ink hover:bg-cream-dark rounded transition-colors"
                        onClick={close}
                      >
                        → {label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="border-t border-border px-4 py-2">
                  <Link
                    href="/locations/california"
                    className="block text-xs text-ink/60 hover:text-ink hover:bg-cream-dark rounded px-2 py-1 transition-colors"
                    onClick={close}
                  >
                    AB 1482 (statewide)
                  </Link>
                </div>
              </>
            )}
          </NavDropdown>

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
        // Scrolls on its own: the header is sticky, so a menu taller than the screen would
        // otherwise be cut off. Bottom padding clears the MobileCallBar.
        <div className="md:hidden bg-white border-t border-border max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain">
          <nav className="flex flex-col px-6 pt-4 pb-24 gap-4">
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
                        {sfTopics.map((sub) => (
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
                <Link href="/locations/california" onClick={() => setMobileOpen(false)} className="text-sm text-ink/70 hover:text-ink transition-colors py-1">
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
