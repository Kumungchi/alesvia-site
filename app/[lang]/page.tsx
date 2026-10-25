import { Newsreader } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { getDictionary, Locale } from '../../dictionaries';
import JsonLd from '../../components/JsonLd';
import CrisisSupport from '../../components/CrisisSupport';
import { getPublicPath, getPublicResearchPath } from '../../lib/routes';
import { getAllPosts } from '../../content/research/posts';
import styles from '../../components/home/home.module.css';

const newsreader = Newsreader({ subsets: ['latin', 'latin-ext'], weight: ['400', '500', '600'], display: 'swap', variable: '--font-newsreader' });

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const eco = dict.ecosystem;
  const planned = [
    { title: eco.academy_title, description: dict.academy.subtitle, route: 'initiativeAcademy' },
    { title: eco.practitioners_title, description: eco.practitioners_desc, route: 'initiativePractitioners' },
    { title: eco.policy_title, description: eco.policy_desc, route: 'initiativePolicyLab' },
  ] as const;

  return (
    <div className={`${newsreader.variable} ${styles.home}`} data-editorial-home>
      <section className={styles.hero} aria-labelledby="home-title">
        <h1 id="home-title">{dict.hero.title}</h1>
        <div className={styles.heroCopy}>
          <p>{dict.metadata.description}</p>
          <div className={styles.actions}>
            <Link className={styles.primary} href={getPublicPath(lang, 'thesis')}>{dict.hero.primary_link}</Link>
            <a className={styles.textLink} href="#initiatives">{dict.hero.secondary_link}</a>
          </div>
        </div>
      </section>

      <section id="initiatives" className={styles.initiatives} aria-labelledby="initiatives-title">
        <h2 id="initiatives-title" className={styles.sectionTitle}>{eco.title}</h2>
        <div className={styles.feature}>
          <div className={styles.featureCopy}>
            <h3>{eco.unplugged_title}</h3>
            <p className={styles.status}>{eco.status_active}</p>
            <p className={styles.featureDescription}>{eco.unplugged_desc}</p>
            <a className={styles.textLink} href="https://www.unplugged.cz">{eco.unplugged_link}</a>
          </div>
          <a href="https://www.unplugged.cz" className={styles.preview}>
            <Image src="/previews/unplugged-home.png" width={1280} height={680}
              sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1100px) 55vw, 640px"
              alt={dict.unplugged.preview_alt} />
          </a>
        </div>
        <ul className={styles.planned}>
          {planned.map(pillar => (
            <li key={pillar.route}>
              <div>
                <h3><Link href={getPublicPath(lang, pillar.route)}>{pillar.title}</Link></h3>
                <p className={styles.status}>{eco.status_incubating}</p>
              </div>
              <p>{pillar.description}</p>
              <Link className={styles.pillarLink} href={getPublicPath(lang, pillar.route)} aria-label={`${pillar.title}: ${dict.research.read_more}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6" /></svg>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.writing} aria-labelledby="writing-title">
        <div className={styles.sectionHeading}>
          <h2 id="writing-title" className={styles.sectionTitle}>{dict.research.label}</h2>
          <Link className={styles.textLink} href={getPublicPath(lang, 'research')}>{dict.research.all_posts}</Link>
        </div>
        <div className={styles.essays}>
          {getAllPosts().slice(0, 2).map(post => (
            <article key={post.slug}>
              <h3><Link href={getPublicResearchPath(lang, post.slug)}>{post.title[lang]}</Link></h3>
              <p>{post.excerpt[lang]}</p>
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString(lang === 'cs' ? 'cs-CZ' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
            </article>
          ))}
        </div>
      </section>

      <section id="funding" className={styles.funding} aria-labelledby="funding-title">
        <h2 id="funding-title" className={styles.sectionTitle}>{dict.financing.title}</h2>
        <div>
          <p>{dict.financing.description}</p>
          <div className={styles.actions}>
            <Link className={styles.primary} href={getPublicPath(lang, 'funding')}>{dict.financing.primary_link}</Link>
            <Link className={styles.textLink} href={getPublicPath(lang, 'contact')}>{dict.financing.secondary_link}</Link>
          </div>
        </div>
      </section>

      <section id="faq" className={styles.faq} aria-labelledby="faq-title">
        <h2 id="faq-title" className={styles.sectionTitle}>{dict.faq.label}</h2>
        <div>
          {dict.faq.items.map(item => (
            <details key={item.question}>
              <summary>{item.question}<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" aria-hidden="true"><path d="M4 7l6 6 6-6" /></svg></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <div className={styles.support}><CrisisSupport dict={dict.crisis_support} /></div>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: dict.faq.items.map(item => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) }} />
    </div>
  );
}
