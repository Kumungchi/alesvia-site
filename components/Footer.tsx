import Link from 'next/link';
import Image from 'next/image';
import type { Locale } from '../dictionaries';
import { getPublicPath } from '../lib/routes';

interface FooterDict {
  rights: string;
  col_initiatives: string;
  col_organization: string;
  col_legal: string;
  unplugged: string;
  academy: string;
  practitioners: string;
  policy_lab: string;
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
    <footer role="contentinfo" className="site-footer">
      <div >
        <div className="footer-grid">
          <div className="footer-brand">
            <Link className="brand-link" href={getPublicPath(lang, 'home')}><Image src="/brand/alesvia-lockup-horizontal.svg" width={560} height={148} alt="Alesvia" /></Link>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-alesvia-text mb-4">{dict.col_initiatives}</h4>
            <ul className="space-y-2 text-sm text-alesvia-muted">
              <li><Link href={getPublicPath(lang, 'initiativeUnplugged')} className="hover:text-alesvia-text transition-colors">{dict.unplugged}</Link></li>
              <li><Link href={getPublicPath(lang, 'initiativeAcademy')} className="hover:text-alesvia-text transition-colors">{dict.academy}</Link></li>
              <li><Link href={getPublicPath(lang, 'initiativePractitioners')} className="hover:text-alesvia-text transition-colors">{dict.practitioners}</Link></li>
              <li><Link href={getPublicPath(lang, 'initiativePolicyLab')} className="hover:text-alesvia-text transition-colors">{dict.policy_lab}</Link></li>
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

        <div className="footer-rights">
          <p>&copy; {new Date().getFullYear()} {dict.rights}</p>
        </div>
      </div>
    </footer>
  );
}
