import type { Metadata } from 'next';
import Link from 'next/link';
import { getDictionary, hasLocale, Locale } from '../../../dictionaries';
import { getAllPosts } from '../../../content/research/posts';
import PageHeader from '../../../components/PageHeader';
import ScrollReveal from '../../../components/ScrollReveal';
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

      <div className="space-y-8 pb-24 max-w-4xl">
        {posts.map((post, i) => (
          <ScrollReveal key={post.slug} delay={i < 4 ? ((i + 1) as 1 | 2 | 3 | 4) : 0}>
            <article className="group glass rounded-xl p-8 border border-alesvia-muted/10 hover:border-alesvia-accent/20 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <time className="text-xs text-alesvia-muted" dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString(lang === 'cs' ? 'cs-CZ' : 'en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span className="text-xs font-medium text-alesvia-accent bg-alesvia-accent/10 px-2.5 py-0.5 rounded-full capitalize">
                  {post.initiative}
                </span>
              </div>

              <h2 className="font-serif text-2xl font-bold text-alesvia-text mb-3 group-hover:text-alesvia-primary transition-colors">
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
                  className="link-animated text-sm font-medium text-alesvia-accent hover:text-alesvia-primary transition-colors"
                >
                  {d.read_more} &rarr;
                </Link>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
