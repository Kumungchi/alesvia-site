import { getLocalizedResearchSlug, researchPostSlugEntries, type AppLocale } from '../content/research/slugs';

export type RouteKey =
  | 'home'
  | 'thesis'
  | 'about'
  | 'team'
  | 'initiatives'
  | 'initiativeUnplugged'
  | 'initiativePolicyLab'
  | 'initiativeAcademy'
  | 'initiativePractitioners'
  | 'funding'
  | 'research'
  | 'contact'
  | 'legalPrivacy'
  | 'legalTerms'
  | 'legalImprint';

type RouteDefinition = {
  internal: string;
  publicPath: Record<AppLocale, string>;
};

export const locales = ['en', 'cs'] as const satisfies readonly AppLocale[];

export const routeDefinitions: Record<RouteKey, RouteDefinition> = {
  home: {
    internal: '',
    publicPath: { en: '', cs: '' },
  },
  thesis: {
    internal: 'thesis',
    publicPath: { en: 'thesis', cs: 'teze' },
  },
  about: {
    internal: 'about',
    publicPath: { en: 'about', cs: 'o-nas' },
  },
  team: {
    internal: 'team',
    publicPath: { en: 'team', cs: 'tym' },
  },
  initiatives: {
    internal: 'initiatives',
    publicPath: { en: 'initiatives', cs: 'iniciativy' },
  },
  initiativeUnplugged: {
    internal: 'initiatives/unplugged',
    publicPath: { en: 'initiatives/unplugged', cs: 'iniciativy/unplugged' },
  },
  initiativePolicyLab: {
    internal: 'initiatives/policy-lab',
    publicPath: { en: 'initiatives/policy-lab', cs: 'iniciativy/policy-lab' },
  },
  initiativeAcademy: {
    internal: 'initiatives/academy',
    publicPath: { en: 'initiatives/academy', cs: 'iniciativy/akademie' },
  },
  initiativePractitioners: {
    internal: 'initiatives/practitioners',
    publicPath: { en: 'initiatives/practitioners', cs: 'iniciativy/praktici' },
  },
  funding: {
    internal: 'funding',
    publicPath: { en: 'funding', cs: 'financovani' },
  },
  research: {
    internal: 'research',
    publicPath: { en: 'research', cs: 'vyzkum' },
  },
  contact: {
    internal: 'contact',
    publicPath: { en: 'contact', cs: 'kontakt' },
  },
  legalPrivacy: {
    internal: 'legal/privacy',
    publicPath: { en: 'legal/privacy', cs: 'pravni/ochrana-udaju' },
  },
  legalTerms: {
    internal: 'legal/terms',
    publicPath: { en: 'legal/terms', cs: 'pravni/podminky' },
  },
  legalImprint: {
    internal: 'legal/imprint',
    publicPath: { en: 'legal/imprint', cs: 'pravni/impressum' },
  },
};

function normalizePath(pathname: string): string {
  if (pathname === '/') return '';
  return pathname.replace(/^\/+|\/+$/g, '');
}

export function getPublicPath(locale: AppLocale, routeKey: RouteKey): string {
  const path = routeDefinitions[routeKey].publicPath[locale];
  return path ? `/${locale}/${path}` : `/${locale}`;
}

export function getInternalPath(locale: AppLocale, routeKey: RouteKey): string {
  const path = routeDefinitions[routeKey].internal;
  return path ? `/${locale}/${path}` : `/${locale}`;
}

export function getRouteAlternates(routeKey: RouteKey): Record<AppLocale, string> {
  return {
    en: getPublicPath('en', routeKey),
    cs: getPublicPath('cs', routeKey),
  };
}

export function getPublicResearchPath(locale: AppLocale, slug?: string): string {
  const basePath = getPublicPath(locale, 'research');
  return slug ? `${basePath}/${getLocalizedResearchSlug(slug, locale)}` : basePath;
}

const publicLookup = locales.reduce<Record<AppLocale, Record<string, RouteKey>>>(
  (acc, locale) => {
    acc[locale] = Object.entries(routeDefinitions).reduce<Record<string, RouteKey>>((map, [routeKey, definition]) => {
      map[normalizePath(definition.publicPath[locale])] = routeKey as RouteKey;
      return map;
    }, {});
    return acc;
  },
  { en: {}, cs: {} }
);

const internalLookup = locales.reduce<Record<AppLocale, Record<string, RouteKey>>>(
  (acc, locale) => {
    acc[locale] = Object.entries(routeDefinitions).reduce<Record<string, RouteKey>>((map, [routeKey, definition]) => {
      map[normalizePath(definition.internal)] = routeKey as RouteKey;
      return map;
    }, {});
    return acc;
  },
  { en: {}, cs: {} }
);

export function switchLocalePath(pathname: string, targetLocale: AppLocale): string {
  const normalizedPath = pathname.replace(/\/+$/, '') || '/';
  const segments = normalizedPath.split('/');
  const currentLocale = segments[1];

  if (currentLocale !== 'en' && currentLocale !== 'cs') {
    return `/${targetLocale}${normalizedPath === '/' ? '' : normalizedPath}`;
  }

  const rest = normalizePath(segments.slice(2).join('/'));
  const exactRouteKey = publicLookup[currentLocale][rest] ?? internalLookup[currentLocale][rest];

  if (exactRouteKey) {
    return getPublicPath(targetLocale, exactRouteKey);
  }

  const researchBaseCandidates = new Set([
    normalizePath(routeDefinitions.research.publicPath[currentLocale]),
    normalizePath(routeDefinitions.research.internal),
  ]);

  for (const researchBase of researchBaseCandidates) {
    if (researchBase && rest.startsWith(`${researchBase}/`)) {
      const slug = rest.slice(researchBase.length + 1);
      return getPublicResearchPath(targetLocale, slug);
    }
  }

  return `/${targetLocale}${rest ? `/${rest}` : ''}`;
}

// Legacy initiative URLs (pre-consolidation into four pillars) → their pillar page.
const legacyInitiativeRedirects: Array<{ oldSegment: Record<AppLocale, string>; target: RouteKey }> = [
  { oldSegment: { en: 'initiatives/education', cs: 'iniciativy/vzdelavani' }, target: 'initiativeAcademy' },
  { oldSegment: { en: 'initiatives/advisory', cs: 'iniciativy/advisory' }, target: 'initiativeAcademy' },
  { oldSegment: { en: 'initiatives/compass', cs: 'iniciativy/compass' }, target: 'initiativeAcademy' },
  { oldSegment: { en: 'initiatives/mind', cs: 'iniciativy/mind' }, target: 'initiativePractitioners' },
  { oldSegment: { en: 'initiatives/proof', cs: 'iniciativy/proof' }, target: 'initiativePolicyLab' },
  { oldSegment: { en: 'initiatives/watch', cs: 'iniciativy/watch' }, target: 'initiativePolicyLab' },
];

export function getLegacyRedirectRules() {
  return locales.flatMap((locale) =>
    legacyInitiativeRedirects.flatMap(({ oldSegment, target }) => {
      const sources = new Set([
        `/${locale}/${oldSegment[locale]}`,
        // Internal (English-folder) path variant, reachable in both locales.
        `/${locale}/${oldSegment.en}`,
      ]);
      return [...sources].map((source) => ({
        source,
        destination: getPublicPath(locale, target),
        permanent: true,
      }));
    })
  );
}

export function getLocalizedRewriteRules() {
  const routeRules = locales.flatMap((locale) =>
    Object.values(routeDefinitions)
      .filter((definition) => definition.publicPath[locale] !== definition.internal)
      .map((definition) => ({
        source: `/${locale}/${definition.publicPath[locale]}`,
        destination: `/${locale}/${definition.internal}`,
      }))
  );

  const researchRules = researchPostSlugEntries.flatMap(({ canonicalSlug, localizedSlugs }) =>
    locales
      .filter((locale) => localizedSlugs[locale] !== canonicalSlug || routeDefinitions.research.publicPath[locale] !== routeDefinitions.research.internal)
      .map((locale) => ({
        source: `${getPublicPath(locale, 'research')}/${localizedSlugs[locale]}`,
        destination: `${getInternalPath(locale, 'research')}/${canonicalSlug}`,
      }))
  );

  return [...routeRules, ...researchRules];
}
