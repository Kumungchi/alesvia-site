import type { Metadata } from 'next';
import { Newsreader } from 'next/font/google';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getDictionary, hasLocale } from '../../../../dictionaries';
import { getPostBySlug } from '../../../../content/research/posts';
import { getPublicPath, getPublicResearchPath } from '../../../../lib/routes';
import { getAbsoluteUrl } from '../../../../lib/site';
import ArticlePilot from '../../../../components/article-pilot/ArticlePilot';
import styles from '../../../../components/article-pilot/article-pilot.module.css';

const newsreader = Newsreader({ subsets: ['latin', 'latin-ext'], weight: ['400', '500', '600'], display: 'swap', variable: '--font-newsreader' });
const articleSlug = 'why-human-autonomy-must-be-the-baseline-for-ai';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const post = getPostBySlug(articleSlug);
  if (!post) notFound();
  return {
    title: `${post.title[lang]} | ${dict.article_pilot.preview_label}`,
    alternates: { canonical: getAbsoluteUrl(getPublicResearchPath(lang, articleSlug)) },
    robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  };
}

function inlineText(text: string) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) => part.startsWith('**') && part.endsWith('**') ? <strong key={index}>{part.slice(2, -2)}</strong> : part);
}

function articleBlocks(text: string) {
  return text.trim().split(/\n\s*\n/).map((block, index) => {
    if (block.startsWith('## ')) return <h2 key={index}>{block.slice(3)}</h2>;
    if (block.startsWith('- ')) return <ul key={index}>{block.split('\n').map((line, item) => <li key={item}>{inlineText(line.replace(/^- /, ''))}</li>)}</ul>;
    return <p key={index}>{inlineText(block)}</p>;
  });
}

export default async function ArticlePreviewPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang) || process.env.VERCEL_ENV === 'production') notFound();
  const dict = await getDictionary(lang);
  const post = getPostBySlug(articleSlug);
  if (!post) notFound();
  const d = dict.article_pilot;
  const sourcePath = getPublicResearchPath(lang, articleSlug);
  const [opening, ...body] = post.body[lang].trim().split(/\n\s*\n/);

  return (
    <div className={newsreader.variable}>
      <ArticlePilot dict={d}>
        <article>
          <header className={styles.header} data-article-header>
            <Link href={sourcePath} className={styles.backLink}>{d.source_link}</Link>
            <h1 className={styles.title}>{post.title[lang]}</h1>
            <p className={styles.deck}>{post.excerpt[lang]}</p>
            <div className={styles.metadata}>
              <span>{d.article_kind}</span>
              <span>Alesvia</span>
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString(lang === 'cs' ? 'cs-CZ' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
            </div>
          </header>
          <div className={styles.articleGrid}>
            <p className={styles.opening}>
              {inlineText(opening)}
              <sup><a id="note-reference" className={styles.reference} href="#editorial-note" aria-label={d.note_reference}>1</a></sup>
            </p>
            <aside id="editorial-note" className={styles.note} aria-labelledby="note-title" tabIndex={-1}>
              <h2 id="note-title" className={styles.noteTitle}>{d.note_title}</h2>
              <p>{d.note_text}</p>
              <a href={getAbsoluteUrl(getPublicPath(lang, 'thesis'))}>{d.thesis_link}</a>
              <a href="#note-reference" className={styles.noteBack}>{d.note_back}</a>
            </aside>
            <div className={styles.body}>{articleBlocks(body.join('\n\n'))}</div>
          </div>
          <div className={styles.ending}><Link href={getPublicPath(lang, 'research')}>{dict.research.back}</Link></div>
        </article>
      </ArticlePilot>
    </div>
  );
}
