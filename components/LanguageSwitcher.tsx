'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Locale } from '../dictionaries';
import { switchLocalePath } from '../lib/routes';

export default function LanguageSwitcher({ currentLang }: { currentLang: Locale }) {
  const pathname = usePathname();
  const currentPath = pathname ?? '/';

  return (
    <div className="flex space-x-2 pl-4 border-l border-alesvia-muted/20 items-center">
      <Link 
        href={switchLocalePath(currentPath, 'en')} 
        className={`hover:text-alesvia-text transition-colors text-xs font-semibold tracking-wider ${currentLang === 'en' ? 'text-alesvia-primary' : 'text-alesvia-muted'}`}
      >
        EN
      </Link>
      <span className="text-alesvia-muted/30 text-xs">|</span>
      <Link 
        href={switchLocalePath(currentPath, 'cs')} 
        className={`hover:text-alesvia-text transition-colors text-xs font-semibold tracking-wider ${currentLang === 'cs' ? 'text-alesvia-primary' : 'text-alesvia-muted'}`}
      >
        CS
      </Link>
    </div>
  );
}
