'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getPublicPath } from '../lib/routes';

interface MobileMenuProps {
  lang: string;
  links: { href: string; label: string }[];
  partnerLabel: string;
}

export default function MobileMenuToggle({ lang, links, partnerLabel }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="text-alesvia-text p-2"
        aria-label={lang === 'cs' ? 'Přepnout navigační menu' : 'Toggle navigation menu'}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-haspopup="menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {open && (
        <div
          id="mobile-navigation"
          role="group"
          aria-label={lang === 'cs' ? 'Mobilní navigace' : 'Mobile navigation'}
          className="absolute top-full left-0 right-0 bg-alesvia-bg/95 backdrop-blur-md border-b border-alesvia-muted/10 px-6 py-6 space-y-4"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-alesvia-muted hover:text-alesvia-text transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={getPublicPath(lang === 'cs' ? 'cs' : 'en', 'contact')}
            onClick={() => setOpen(false)}
            className="block text-sm font-semibold bg-alesvia-primary text-alesvia-bg px-5 py-2.5 rounded text-center"
          >
            {partnerLabel}
          </Link>
        </div>
      )}
    </div>
  );
}
