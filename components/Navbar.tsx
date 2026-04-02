import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenuToggle from './MobileMenuToggle';
import NavbarShell from './NavbarShell';
import type { Locale } from '../dictionaries';
import { getPublicPath } from '../lib/routes';

interface NavDict {
  brand: string;
  about: string;
  initiatives: string;
  funding: string;
  research: string;
  contact: string;
  partner: string;
}

export default function Navbar({ dict, lang }: { dict: NavDict; lang: Locale }) {
  const links = [
    { href: getPublicPath(lang, 'about'), label: dict.about },
    { href: getPublicPath(lang, 'initiatives'), label: dict.initiatives },
    { href: getPublicPath(lang, 'funding'), label: dict.funding },
    { href: getPublicPath(lang, 'research'), label: dict.research },
    { href: getPublicPath(lang, 'contact'), label: dict.contact },
  ];

  return (
    <NavbarShell>
      <Link href={getPublicPath(lang, 'home')} className="font-serif text-2xl font-bold tracking-tight text-alesvia-primary">
        {dict.brand}
      </Link>
      <div className="hidden md:flex space-x-8 text-sm font-medium text-alesvia-muted items-center">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="link-animated hover:text-alesvia-text transition-colors">
            {link.label}
          </Link>
        ))}
        <LanguageSwitcher currentLang={lang} />
      </div>
      <Link
        href={getPublicPath(lang, 'contact')}
        className="hidden md:block text-sm font-semibold bg-alesvia-primary text-alesvia-bg px-5 py-2.5 rounded-lg btn-primary"
      >
        {dict.partner}
      </Link>
      <MobileMenuToggle lang={lang} links={links} partnerLabel={dict.partner} />
    </NavbarShell>
  );
}
