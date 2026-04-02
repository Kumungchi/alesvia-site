import type { Metadata } from 'next';
import { getPublicPath, getRouteAlternates, type RouteKey } from './routes';
import type { AppLocale } from '../content/research/slugs';
import { getAbsoluteUrl, getResearchAbsoluteUrl } from './site';

function getLocaleTag(locale: AppLocale) {
  return locale === 'cs' ? 'cs_CZ' : 'en_US';
}

export function buildPageMetadata({
  locale,
  routeKey,
  title,
  description,
  type = 'website',
}: {
  locale: AppLocale;
  routeKey: RouteKey;
  title: string;
  description: string;
  type?: 'website' | 'article';
}): Metadata {
  const publicPath = getPublicPath(locale, routeKey);
  const canonical = getAbsoluteUrl(publicPath);
  const alternates = getRouteAlternates(routeKey);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Alesvia',
      locale: getLocaleTag(locale),
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical,
      languages: {
        en: getAbsoluteUrl(alternates.en),
        cs: getAbsoluteUrl(alternates.cs),
      },
    },
  };
}

export function buildResearchPostMetadata({
  locale,
  slug,
  title,
  description,
  publishedTime,
}: {
  locale: AppLocale;
  slug: string;
  title: string;
  description: string;
  publishedTime: string;
}): Metadata {
  const canonical = getResearchAbsoluteUrl(locale, slug);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Alesvia',
      locale: getLocaleTag(locale),
      type: 'article',
      publishedTime,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical,
      languages: {
        en: getResearchAbsoluteUrl('en', slug),
        cs: getResearchAbsoluteUrl('cs', slug),
      },
    },
  };
}
