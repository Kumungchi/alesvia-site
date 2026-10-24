import type { MetadataRoute } from 'next';
import { getAllPosts } from '../content/research/posts';
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
  'initiativeAcademy',
  'initiativePractitioners',
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

  for (const post of getAllPosts()) {
    for (const lang of locales) {
      entries.push({
        url: getResearchAbsoluteUrl(lang, post.slug),
        lastModified: new Date(post.date),
        changeFrequency: 'monthly',
        priority: 0.75,
        alternates: {
          languages: {
            en: getResearchAbsoluteUrl('en', post.slug),
            cs: getResearchAbsoluteUrl('cs', post.slug),
          },
        },
      });
    }
  }

  return entries;
}
