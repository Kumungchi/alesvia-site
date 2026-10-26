'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Locale } from '../dictionaries';
import { switchLocalePath } from '../lib/routes';

export default function LanguageSwitcher({ currentLang, onClick, className }: { currentLang: Locale; onClick?: () => void; className?: string }) {
  const pathname = usePathname();
  const currentPath = pathname ?? '/';

  return (
    <div
      role="group"
      aria-label={currentLang === 'cs' ? 'Přepínač jazyka' : 'Language switcher'}
      className={className || "language-switcher"}
    >
      <Link 
        href={switchLocalePath(currentPath, 'en')} 
        onClick={onClick}
        aria-current={currentLang === 'en' ? 'page' : undefined}
      >
        EN
      </Link>
      <span aria-hidden="true">·</span>
      <Link 
        href={switchLocalePath(currentPath, 'cs')} 
        onClick={onClick}
        aria-current={currentLang === 'cs' ? 'page' : undefined}
      >
        CS
      </Link>
    </div>
  );
}
