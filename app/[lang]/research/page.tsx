import type { Metadata } from 'next';
import Link from 'next/link';
import { getDictionary, hasLocale, Locale } from '../../../dictionaries';
import { getAllPosts } from '../../../content/research/posts';
import PageHeader from '../../../components/PageHeader';
import { buildPageMetadata } from '../../../lib/metadata';
import { getPublicResearchPath } from '../../../lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale = hasLocale(lang) ? lang : 'cs';
  const dict = await getDictionary(locale);
  return buildPageMetadata({
    locale,
    routeKey: 'research',
    title: dict.research.metadata_title,
    description: dict.research.metadata_description,
  });
}

export default async function ResearchPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const d = dict.research;
  const posts = getAllPosts();

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <PageHeader label={d.label} title={d.title} description={d.intro} />

      <div className="pb-24 max-w-4xl border-b border-alesvia-text/15">
        {posts.map((post) => (
          <article key={post.slug} className="py-10 border-t border-alesvia-text/15">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <time className="text-xs text-alesvia-muted" dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString(lang === 'cs' ? 'cs-CZ' : 'en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span className="text-xs font-semibold uppercase tracking-widest text-alesvia-primary">
                  {post.initiative}
                </span>
              </div>

              <h2 className="font-serif text-2xl font-bold text-alesvia-text mb-3 hover:text-alesvia-primary">
                <Link href={getPublicResearchPath(lang, post.slug)}>
                  {post.title[lang]}
                </Link>
              </h2>

              <p className="text-alesvia-muted leading-relaxed mb-4">
                {post.excerpt[lang]}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs text-alesvia-muted/60 border border-alesvia-muted/10 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={getPublicResearchPath(lang, post.slug)}
                  className="text-sm font-medium text-alesvia-primary underline underline-offset-4 hover:text-alesvia-trust"
                >
                  {d.read_more} &rarr;
                </Link>
              </div>
            </article>
        ))}
      </div>
    </div>
  );
}
