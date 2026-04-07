import type { MetadataRoute } from 'next';
import { getPostSlugs } from '../content/research/posts';
import { getPublicPath, locales } from '../lib/routes';
import { getAbsoluteUrl, getResearchAbsoluteUrl } from '../lib/site';

const routeKeys = [
  'home',
  'thesis',
  'about',
  'team',
  'contact',
  'funding',
  'initiatives',
  'initiativeUnplugged',
  'initiativePolicyLab',
  'initiativeEducation',
  'initiativeAdvisory',
  'initiativeMind',
  'initiativeProof',
  'initiativeCompass',
  'initiativeWatch',
  'research',
  'legalPrivacy',
  'legalTerms',
  'legalImprint',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const routeKey of routeKeys) {
    for (const lang of locales) {
      const publicPath = getPublicPath(lang, routeKey);
      entries.push({
        url: getAbsoluteUrl(publicPath),
        lastModified: new Date(),
        changeFrequency: routeKey === 'home' ? 'weekly' : 'monthly',
        priority: routeKey === 'home' ? 1.0 : routeKey === 'initiativeUnplugged' ? 0.9 : 0.7,
        alternates: {
          languages: {
            en: getAbsoluteUrl(getPublicPath('en', routeKey)),
            cs: getAbsoluteUrl(getPublicPath('cs', routeKey)),
          },
        },
      });
    }
  }

  for (const slug of getPostSlugs()) {
    for (const lang of locales) {
      entries.push({
        url: getResearchAbsoluteUrl(lang, slug),
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.75,
        alternates: {
          languages: {
            en: getResearchAbsoluteUrl('en', slug),
            cs: getResearchAbsoluteUrl('cs', slug),
          },
        },
      });
    }
  }

  return entries;
}
