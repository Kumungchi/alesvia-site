import Link from 'next/link';
import { BrandLogo } from './BrandMark';
import type { Locale } from '../dictionaries';
import { getPublicPath } from '../lib/routes';

interface FooterDict {
  rights: string;
  col_initiatives: string;
  col_organization: string;
  col_legal: string;
  unplugged: string;
  policy_lab: string;
  education: string;
  advisory: string;
  mind: string;
  proof: string;
  compass: string;
  watch: string;
  thesis: string;
  about: string;
  team: string;
  funding: string;
  research: string;
  contact: string;
  privacy: string;
  terms: string;
  imprint: string;
}

export default function Footer({ dict, lang }: { dict: FooterDict; lang: Locale }) {
  return (
    <footer role="contentinfo" aria-label="Site footer" className="border-t border-alesvia-muted/10 py-16 mt-12 bg-alesvia-surface/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <BrandLogo
              className="inline-flex items-center gap-3"
              markClassName="w-8 h-8 shrink-0"
              textClassName="font-serif text-xl font-bold tracking-tight"
              title="Alesvia"
            />
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-alesvia-text mb-4">{dict.col_initiatives}</h4>
            <ul className="space-y-2 text-sm text-alesvia-muted">
              <li><Link href={getPublicPath(lang, 'initiativeUnplugged')} className="hover:text-alesvia-text transition-colors">{dict.unplugged}</Link></li>
              <li><Link href={getPublicPath(lang, 'initiativePolicyLab')} className="hover:text-alesvia-text transition-colors">{dict.policy_lab}</Link></li>
              <li><Link href={getPublicPath(lang, 'initiativeEducation')} className="hover:text-alesvia-text transition-colors">{dict.education}</Link></li>
              <li><Link href={getPublicPath(lang, 'initiativeAdvisory')} className="hover:text-alesvia-text transition-colors">{dict.advisory}</Link></li>
              <li><Link href={getPublicPath(lang, 'initiativeMind')} className="hover:text-alesvia-text transition-colors">{dict.mind}</Link></li>
              <li><Link href={getPublicPath(lang, 'initiativeProof')} className="hover:text-alesvia-text transition-colors">{dict.proof}</Link></li>
              <li><Link href={getPublicPath(lang, 'initiativeCompass')} className="hover:text-alesvia-text transition-colors">{dict.compass}</Link></li>
              <li><Link href={getPublicPath(lang, 'initiativeWatch')} className="hover:text-alesvia-text transition-colors">{dict.watch}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-alesvia-text mb-4">{dict.col_organization}</h4>
            <ul className="space-y-2 text-sm text-alesvia-muted">
              <li><Link href={getPublicPath(lang, 'thesis')} className="hover:text-alesvia-text transition-colors">{dict.thesis}</Link></li>
              <li><Link href={getPublicPath(lang, 'about')} className="hover:text-alesvia-text transition-colors">{dict.about}</Link></li>
              <li><Link href={getPublicPath(lang, 'team')} className="hover:text-alesvia-text transition-colors">{dict.team}</Link></li>
              <li><Link href={getPublicPath(lang, 'funding')} className="hover:text-alesvia-text transition-colors">{dict.funding}</Link></li>
              <li><Link href={getPublicPath(lang, 'research')} className="hover:text-alesvia-text transition-colors">{dict.research}</Link></li>
              <li><Link href={getPublicPath(lang, 'contact')} className="hover:text-alesvia-text transition-colors">{dict.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-alesvia-text mb-4">{dict.col_legal}</h4>
            <ul className="space-y-2 text-sm text-alesvia-muted">
              <li><Link href={getPublicPath(lang, 'legalPrivacy')} className="hover:text-alesvia-text transition-colors">{dict.privacy}</Link></li>
              <li><Link href={getPublicPath(lang, 'legalTerms')} className="hover:text-alesvia-text transition-colors">{dict.terms}</Link></li>
              <li><Link href={getPublicPath(lang, 'legalImprint')} className="hover:text-alesvia-text transition-colors">{dict.imprint}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-alesvia-muted/10 pt-8 text-sm text-alesvia-muted">
          <p>&copy; {new Date().getFullYear()} {dict.rights}</p>
        </div>
      </div>
    </footer>
  );
}
