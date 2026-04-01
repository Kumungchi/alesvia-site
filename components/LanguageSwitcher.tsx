'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Locale } from '../dictionaries';

export default function LanguageSwitcher({ currentLang }: { currentLang: Locale }) {
  const pathname = usePathname();

  const switchLanguage = (newLang: string) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    if (segments.length > 1 && (segments[1] === 'en' || segments[1] === 'cs')) {
      segments[1] = newLang;
      return segments.join('/');
    }
    return `/${newLang}${pathname === '/' ? '' : pathname}`;
  };

  return (
    <div className="flex space-x-2 pl-4 border-l border-statera-muted/20 items-center">
      <Link 
        href={switchLanguage('en')} 
        className={`hover:text-statera-text transition-colors text-xs font-semibold tracking-wider ${currentLang === 'en' ? 'text-statera-primary' : 'text-statera-muted'}`}
      >
        EN
      </Link>
      <span className="text-statera-muted/30 text-xs">|</span>
      <Link 
        href={switchLanguage('cs')} 
        className={`hover:text-statera-text transition-colors text-xs font-semibold tracking-wider ${currentLang === 'cs' ? 'text-statera-primary' : 'text-statera-muted'}`}
      >
        CS
      </Link>
    </div>
  );
}
