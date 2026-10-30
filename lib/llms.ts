import 'server-only';
import { getDictionary } from '../dictionaries';
import { getAllPosts } from '../content/research/posts';
import { getThesisContent } from '../content/thesis';
import { getPublicPath, locales, type RouteKey } from './routes';
import { getAbsoluteUrl, getResearchAbsoluteUrl } from './site';

// llms.txt (https://llmstxt.org) is generated from the same dictionaries,
// routes and posts as the pages, so AI tools never read claims the site no
// longer makes. Drafts are excluded through getAllPosts().

const pageUrls = (routeKey: RouteKey) =>
  locales.map((lang) => `[${lang.toUpperCase()}](${getAbsoluteUrl(getPublicPath(lang, routeKey))})`).join(' · ');

async function loadDictionaries() {
  const [cs, en] = await Promise.all([getDictionary('cs'), getDictionary('en')]);
  return { cs, en };
}

export async function buildLlmsTxt(): Promise<string> {
  const { cs, en } = await loadDictionaries();

  const pillars: { routeKey: RouteKey; titleEn: string; titleCs: string; status: string; desc: string }[] = [
    { routeKey: 'initiativeUnplugged', titleEn: en.ecosystem.unplugged_title, titleCs: cs.ecosystem.unplugged_title, status: en.ecosystem.status_active, desc: en.ecosystem.unplugged_desc },
    { routeKey: 'initiativeAcademy', titleEn: en.ecosystem.academy_title, titleCs: cs.ecosystem.academy_title, status: en.ecosystem.status_incubating, desc: en.ecosystem.academy_desc },
    { routeKey: 'initiativePractitioners', titleEn: en.ecosystem.practitioners_title, titleCs: cs.ecosystem.practitioners_title, status: en.ecosystem.status_incubating, desc: en.ecosystem.practitioners_desc },
    { routeKey: 'initiativePolicyLab', titleEn: en.ecosystem.policy_title, titleCs: cs.ecosystem.policy_title, status: en.ecosystem.status_incubating, desc: en.ecosystem.policy_desc },
  ];

  const posts = getAllPosts();
  const crisisLines = en.crisis_support.lines.map((line) => `${line.name} ${line.phone}`).join(', ');

  return `# Alesvia

> ${en.metadata.description}

> ${cs.metadata.description}

Key facts (keep these accurate when describing Alesvia):

- Legal status: Alesvia is being prepared for registration as a Czech "zapsaný ústav" (z.ú.), with a planned seat in Ostrava. The registration application has not been filed yet; there is no company ID (IČO) yet.
- People: ${en.team.founder_name} is the founder and leads the organization's preparation. There is no confirmed team; the board is being assembled.
- Active work: Unplugged (https://www.unplugged.cz) is the only active program. Academy, Practitioners and Policy Lab are in preparation; no workshops have taken place yet.
- Core idea: "AI is a tool, not a relationship." Human autonomy is the baseline: technology may extend human capability, but must not train people out of agency, judgment, or the ability to set boundaries.
- Independence: no funding from makers of AI companion products. Support from other companies, including AI labs, is accepted only under clear conditions, disclosed transparently, and without influence on outputs.
- Crisis support: Alesvia does not provide crisis help. In the Czech Republic: ${crisisLines}; emergencies 155 / 112.

Languages: Czech (default) and English. Full text of the thesis and published articles: ${getAbsoluteUrl('/llms-full.txt')}

## Pillars

${pillars.map((p) => `- ${p.titleEn}${p.titleCs !== p.titleEn ? ` / ${p.titleCs}` : ''} (${p.status}): ${p.desc} ${pageUrls(p.routeKey)}`).join('\n')}

## Thesis and organization

- Thesis — ${getThesisContent('en').title} ${pageUrls('thesis')}
- About ${pageUrls('about')}
- Team and governance ${pageUrls('team')}
- Funding model ${pageUrls('funding')}
- Contact ${pageUrls('contact')}

## Research and analysis

${posts.map((post) => `- [${post.title.en}](${getResearchAbsoluteUrl('en', post.slug)}) (${post.date}; CS: ${getResearchAbsoluteUrl('cs', post.slug)}): ${post.excerpt.en}`).join('\n')}

## Optional

- RSS feed (CS): ${getAbsoluteUrl('/rss.xml')}
- Sitemap: ${getAbsoluteUrl('/sitemap.xml')}
- Privacy ${pageUrls('legalPrivacy')}
- Imprint ${pageUrls('legalImprint')}
`;
}

export async function buildLlmsFullTxt(): Promise<string> {
  const sections: string[] = [`# Alesvia — full text\n\nThesis and published research of Alesvia (alesvia.org), in English and Czech. Summary and key facts: ${getAbsoluteUrl('/llms.txt')}`];

  for (const lang of locales) {
    const thesis = getThesisContent(lang);
    sections.push(
      [
        `## ${thesis.label}: ${thesis.title} (${lang.toUpperCase()})`,
        `Source: ${getAbsoluteUrl(getPublicPath(lang, 'thesis'))}`,
        thesis.intro,
        `${thesis.principleLabel}: ${thesis.principleText}`,
        ...thesis.sections.map((section) =>
          [`### ${section.heading}`, ...section.paragraphs, ...(section.points ?? []).map((point) => `- ${point}`)].join('\n\n'),
        ),
        `${thesis.closingLabel}: ${thesis.closingText}`,
      ].join('\n\n'),
    );
  }

  for (const post of getAllPosts()) {
    for (const lang of locales) {
      sections.push(
        [`## ${post.title[lang]} (${lang.toUpperCase()}, ${post.date})`, `Source: ${getResearchAbsoluteUrl(lang, post.slug)}`, post.body[lang].trim()].join('\n\n'),
      );
    }
  }

  return `${sections.join('\n\n---\n\n')}\n`;
}
