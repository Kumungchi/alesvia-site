import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getDictionary, hasLocale, Locale } from '../../../../dictionaries';
import { getPostBySlug, getPostSlugs } from '../../../../content/research/posts';
import ScrollReveal from '../../../../components/ScrollReveal';
import { buildResearchPostMetadata } from '../../../../lib/metadata';
import { getPublicPath } from '../../../../lib/routes';

export async function generateStaticParams() {
  return getPostSlugs().flatMap((slug) => [
    { lang: 'en', slug },
    { lang: 'cs', slug },
  ]);
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = hasLocale(lang) ? lang : 'cs';
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Not Found' };

  const title = `${post.title[locale]} | Alesvia`;
  const description = post.excerpt[locale];
  return buildResearchPostMetadata({ locale, slug, title, description, publishedTime: post.date });
}

function renderMarkdown(text: string) {
  // Simple markdown-to-JSX: headings, bold, paragraphs, lists
  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={key++} className="font-serif text-2xl font-bold text-alesvia-text mt-10 mb-4">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(
        <p key={key++} className="font-semibold text-alesvia-text mt-6 mb-2">
          {line.slice(2, -2)}
        </p>
      );
    } else if (line.startsWith('- ')) {
      elements.push(
        <li key={key++} className="flex items-start gap-3 ml-4">
          <span className="w-1.5 h-1.5 bg-alesvia-accent rounded-full mt-2.5 shrink-0" />
          <span>{line.slice(2)}</span>
        </li>
      );
    } else if (line.trim() === '') {
      // skip
    } else {
      // Bold segments within text
      const parts = line.split(/(\*\*.*?\*\*)/g);
      const rendered = parts.map((part, j) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={j} className="text-alesvia-text font-semibold">{part.slice(2, -2)}</strong>;
        }
        return part;
      });
      elements.push(
        <p key={key++} className="text-alesvia-muted leading-relaxed mb-4">
          {rendered}
        </p>
      );
    }
  }

  return elements;
}

export default async function ResearchPostPage({ params }: { params: Promise<{ lang: Locale; slug: string }> }) {
  const { lang, slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const dict = await getDictionary(lang);
  const d = dict.research;

  return (
    <div className="max-w-4xl mx-auto px-6 md:px-12 pb-24">
      <div className="pt-16 mb-12">
        <Link
          href={getPublicPath(lang, 'research')}
          className="text-sm text-alesvia-muted hover:text-alesvia-accent transition-colors mb-8 inline-flex items-center gap-2"
        >
          &larr; {d.back}
        </Link>

        <ScrollReveal>
          <div className="mt-8">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <time className="text-sm text-alesvia-muted" dateTime={post.date}>
                {d.published}: {new Date(post.date).toLocaleDateString(lang === 'cs' ? 'cs-CZ' : 'en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span className="text-xs font-medium text-alesvia-accent bg-alesvia-accent/10 px-2.5 py-1 rounded-full capitalize">
                {post.initiative}
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl font-bold text-gradient leading-tight mb-6">
              {post.title[lang]}
            </h1>

            <p className="text-xl text-alesvia-muted font-light leading-relaxed">
              {post.excerpt[lang]}
            </p>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <article className="prose-alesvia">
          {renderMarkdown(post.body[lang])}
        </article>
      </ScrollReveal>

      <div className="mt-12 pt-8 border-t border-alesvia-muted/10">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs text-alesvia-muted/60 border border-alesvia-muted/10 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
