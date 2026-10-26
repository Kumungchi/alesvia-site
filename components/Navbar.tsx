import Image from 'next/image';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenuToggle from './MobileMenuToggle';
import NavbarShell from './NavbarShell';
import ProjectNavigation from './ProjectNavigation';
import type { getDictionary, Locale } from '../dictionaries';
import { getPublicPath } from '../lib/routes';

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
export default function Navbar({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const nav = dict.nav;
  const projects = [
    { href: getPublicPath(lang, 'initiativeUnplugged'), label: dict.ecosystem.unplugged_title, status: dict.ecosystem.status_active },
    { href: getPublicPath(lang, 'initiativeAcademy'), label: dict.ecosystem.academy_title, status: dict.ecosystem.status_incubating },
    { href: getPublicPath(lang, 'initiativePractitioners'), label: dict.ecosystem.practitioners_title, status: dict.ecosystem.status_incubating },
    { href: getPublicPath(lang, 'initiativePolicyLab'), label: dict.ecosystem.policy_title, status: dict.ecosystem.status_incubating },
  ];
  const links = [
    { href: getPublicPath(lang, 'about'), label: nav.about },
    { href: getPublicPath(lang, 'initiatives'), label: nav.initiatives },
    ...projects,
    { href: getPublicPath(lang, 'research'), label: nav.research },
    { href: getPublicPath(lang, 'funding'), label: nav.funding },
    { href: getPublicPath(lang, 'contact'), label: nav.collaboration },
  ];
  return <NavbarShell>
    <Link className="brand-link" href={getPublicPath(lang, 'home')} aria-label={nav.brand}>
      <Image src="/brand/alesvia-lockup-horizontal.svg" width={560} height={148} priority alt="Alesvia" />
    </Link>
    <nav className="desktop-navigation" aria-label={nav.menu}>
      <Link href={getPublicPath(lang, 'about')}>{nav.about}</Link>
      <ProjectNavigation label={nav.initiatives} links={projects} />
      <Link href={getPublicPath(lang, 'contact')}>{nav.collaboration}</Link>
      <LanguageSwitcher currentLang={lang} />
      <Link href={getPublicPath(lang, 'contact')} className="button button-primary">{nav.partner}</Link>
    </nav>
    <MobileMenuToggle lang={lang} links={links} partnerLabel={nav.partner} contactHref={getPublicPath(lang, 'contact')} menuLabel={nav.menu} closeLabel={nav.close} />
  </NavbarShell>;
}
