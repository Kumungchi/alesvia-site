export type AppLocale = 'en' | 'cs';

export const researchPostSlugMap = {
  'why-this-interpretability-research-matters-for-ai-governance': {
    en: 'why-this-interpretability-research-matters-for-ai-governance',
    cs: 'proc-je-tento-interpretability-vyzkum-dulezity-pro-ai-governance',
  },
  'why-ai-literacy-matters-more-than-ai-regulation': {
    en: 'why-ai-literacy-matters-more-than-ai-regulation',
    cs: 'proc-je-ai-gramotnost-dulezitejsi-nez-regulace-ai',
  },
  'mental-health-professionals-and-ai-chatbots': {
    en: 'mental-health-professionals-and-ai-chatbots',
    cs: 'kdyz-se-pacienti-ptaji-terapeuta-na-ai-chatboty',
  },
  'czech-ai-ecosystem-mapping-2026': {
    en: 'czech-ai-ecosystem-mapping-2026',
    cs: 'mapovani-ceskeho-ai-ekosystemu-2026',
  },
  'why-human-autonomy-must-be-the-baseline-for-ai': {
    en: 'why-human-autonomy-must-be-the-baseline-for-ai',
    cs: 'proc-musi-byt-lidska-autonomie-zakladem-pro-ai',
  },
  'institutions-need-more-than-ai-principles': {
    en: 'institutions-need-more-than-ai-principles',
    cs: 'instituce-potrebuji-vic-nez-ai-principy',
  },
  'what-to-audit-before-deploying-conversational-ai': {
    en: 'what-to-audit-before-deploying-conversational-ai',
    cs: 'co-auditovat-pred-nasazenim-konverzacni-ai',
  },
} as const satisfies Record<string, Record<AppLocale, string>>;

export type CanonicalResearchSlug = keyof typeof researchPostSlugMap;

export function getCanonicalResearchSlug(slug: string): string {
  for (const [canonicalSlug, localizedSlugs] of Object.entries(researchPostSlugMap)) {
    if (localizedSlugs.en === slug || localizedSlugs.cs === slug || canonicalSlug === slug) {
      return canonicalSlug;
    }
  }

  return slug;
}

export function getLocalizedResearchSlug(slug: string, locale: AppLocale): string {
  const canonicalSlug = getCanonicalResearchSlug(slug) as CanonicalResearchSlug;
  return researchPostSlugMap[canonicalSlug]?.[locale] ?? slug;
}

export const researchPostSlugEntries = Object.entries(researchPostSlugMap).map(([canonicalSlug, localizedSlugs]) => ({
  canonicalSlug,
  localizedSlugs,
}));
