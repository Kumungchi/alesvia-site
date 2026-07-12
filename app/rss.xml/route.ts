import { getAllPosts } from '../../content/research/posts';
import { getAbsoluteUrl, getResearchAbsoluteUrl } from '../../lib/site';

// RSS feed for the research section. Czech is the site's default locale,
// so items use CS titles/excerpts and link to CS post URLs.
export async function GET() {
  const posts = [...getAllPosts()].sort((a, b) => b.date.localeCompare(a.date));

  const escape = (value: string) =>
    value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');

  const items = posts
    .map((post) => {
      const url = getResearchAbsoluteUrl('cs', post.slug);
      return `    <item>
      <title>${escape(post.title.cs)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escape(post.excerpt.cs)}</description>
      ${post.tags.map((tag) => `<category>${escape(tag)}</category>`).join('\n      ')}
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Alesvia — Výzkum a analýzy</title>
    <link>${getAbsoluteUrl('/cs/vyzkum')}</link>
    <atom:link href="${getAbsoluteUrl('/rss.xml')}" rel="self" type="application/rss+xml"/>
    <description>Briefy, zprávy a eseje o lidské autonomii, správě AI a zodpovědných technologiích.</description>
    <language>cs</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
