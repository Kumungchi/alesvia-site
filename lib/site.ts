import { getPublicResearchPath } from './routes';
import type { AppLocale } from '../content/research/slugs';

const defaultSiteOrigin = 'https://alesvia.org';

function normalizeOrigin(value: string | undefined, fallback: string): string {
  if (!value) return fallback;

  try {
    const normalized = value.startsWith('http://') || value.startsWith('https://') ? value : `https://${value}`;
    return new URL(normalized).origin;
  } catch {
    return fallback;
  }
}

export function getSiteOrigin(): string {
  return normalizeOrigin(
    process.env.NEXT_PUBLIC_SITE_URL,
    normalizeOrigin(
      process.env.VERCEL_PROJECT_PRODUCTION_URL,
      normalizeOrigin(process.env.VERCEL_URL, defaultSiteOrigin)
    )
  );
}

export function getResearchOrigin(): string {
  return normalizeOrigin(process.env.NEXT_PUBLIC_RESEARCH_SITE_URL, getSiteOrigin());
}

export function hasDedicatedResearchOrigin(): boolean {
  return getResearchOrigin() !== getSiteOrigin();
}

export function getAbsoluteUrl(path: string, origin = getSiteOrigin()): string {
  return new URL(path, `${origin}/`).toString();
}

function getResearchHostPath(locale: AppLocale, slug?: string): string {
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}

export function getResearchAbsoluteUrl(locale: AppLocale, slug?: string): string {
  if (hasDedicatedResearchOrigin()) {
    return getAbsoluteUrl(getResearchHostPath(locale, slug), getResearchOrigin());
  }

  return getAbsoluteUrl(getPublicResearchPath(locale, slug), getSiteOrigin());
}
