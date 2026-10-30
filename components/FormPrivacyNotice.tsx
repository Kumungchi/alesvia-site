import Link from 'next/link';
import { getPublicPath } from '../lib/routes';

export interface FormPrivacyCopy {
  text: string;
  link_label: string;
}

export default function FormPrivacyNotice({ copy, lang }: { copy: FormPrivacyCopy; lang: string }) {
  return (
    <p className="text-xs text-alesvia-muted leading-relaxed max-w-md">
      {copy.text}{' '}
      <Link href={getPublicPath(lang === 'cs' ? 'cs' : 'en', 'legalPrivacy')} className="text-alesvia-accent-ink hover:text-alesvia-primary transition-colors font-medium underline underline-offset-4">
        {copy.link_label}
      </Link>
    </p>
  );
}
