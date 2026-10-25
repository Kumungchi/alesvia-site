import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getDictionary, hasLocale, Locale } from '../../../../dictionaries';
import { getPostBySlug, getPostSlugs } from '../../../../content/research/posts';
import JsonLd from '../../../../components/JsonLd';
import { getResearchAbsoluteUrl, getSiteOrigin } from '../../../../lib/site';
import { buildResearchPostMetadata } from '../../../../lib/metadata';
import { getPublicPath } from '../../../../lib/routes';
import styles from '../../../../components/research/article.module.css';

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
  if (!post) notFound();

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
        <h2 key={key++}>
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(
        <p key={key++}>
          <strong>{line.slice(2, -2)}</strong>
        </p>
      );
    } else if (line.startsWith('- ')) {
      const items: string[] = [line.slice(2)];
      while (i + 1 < lines.length && lines[i + 1].startsWith('- ')) items.push(lines[++i].slice(2));
      elements.push(
        <ul key={key++}>{items.map((item, index) => <li key={index}>{item}</li>)}</ul>
      );
    } else if (line.trim() === '') {
      // skip
    } else {
      // Bold segments within text
      const parts = line.split(/(\*\*.*?\*\*)/g);
      const rendered = parts.map((part, j) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={j}>{part.slice(2, -2)}</strong>;
        }
        return part;
      });
      elements.push(
        <p key={key++}>
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
    <article className={styles.article} data-research-article>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title[lang],
        description: post.excerpt[lang],
        datePublished: post.date,
        inLanguage: lang === 'cs' ? 'cs-CZ' : 'en-US',
        url: getResearchAbsoluteUrl(lang, slug),
        keywords: post.tags.join(', '),
        author: {
          '@type': 'Organization',
          name: 'Alesvia',
          url: getSiteOrigin(),
        },
        publisher: {
          '@type': 'Organization',
          name: 'Alesvia',
          url: getSiteOrigin(),
        },
      }} />
      <header className={styles.header} data-article-header>
        <Link
          href={getPublicPath(lang, 'research')}
          className={styles.back}
        >
          &larr; {d.back}
        </Link>

          <div>
            <h1 className={styles.title}>{post.title[lang]}</h1>
            <p className={styles.deck}>{post.excerpt[lang]}</p>
            <div className={styles.metadata}>
              <time className="text-sm text-alesvia-muted" dateTime={post.date}>
                {d.published}: {new Date(post.date).toLocaleDateString(lang === 'cs' ? 'cs-CZ' : 'en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span>
                {post.initiative}
              </span>
            </div>

          </div>
      </header>

        <div className={styles.body}>
          {renderMarkdown(post.body[lang])}
        </div>

      <div className={styles.tags}>
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs text-alesvia-muted">
              {tag}
            </span>
          ))}
      </div>
    </article>
  );
}
