import Image from 'next/image';
import Link from 'next/link';
import { getDictionary, Locale } from '../../dictionaries';
import JsonLd from '../../components/JsonLd';
import CrisisSupport from '../../components/CrisisSupport';
import Collaboration from '../../components/home/Collaboration';
import { getPublicPath, getPublicResearchPath } from '../../lib/routes';
import { getAllPosts } from '../../content/research/posts';
import styles from '../../components/home/home.module.css';

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const d = dict.homepage;
  const planned = [
    { title: dict.ecosystem.academy_title, route: 'initiativeAcademy' },
    { title: dict.ecosystem.practitioners_title, route: 'initiativePractitioners' },
    { title: dict.ecosystem.policy_title, route: 'initiativePolicyLab' },
  ] as const;
  const destinations = [getPublicPath(lang, 'contact'), 'https://www.unplugged.cz', getPublicPath(lang, 'funding')];
  return <div className={styles.home}>
    <section className={styles.hero} aria-labelledby="home-title">
      <h1 id="home-title" aria-label={dict.hero.title}>{d.motto_lines.map((line, index) => <span key={index}><span>{line}</span></span>)}</h1>
      <div className={styles.heroCopy}>
        <p>{d.description}</p>
        <div className={styles.actions}>
          <a href="#collaboration" className="button button-primary">{d.primary}</a>
          <a href="#initiatives" className="button button-secondary">{d.secondary}</a>
        </div>
      </div>
      <a className={styles.cue} href="#themes">{d.continue}</a>
    </section>
    <section id="themes" className={styles.section} aria-labelledby="themes-title">
      <h2 id="themes-title">{d.themes_title}</h2>
      <div className={styles.themes}>{d.themes.map(theme => <article key={theme.label}>
        <p className={styles.themeLabel}>{theme.label}</p><h3>{theme.title}</h3><p>{theme.text}</p>
      </article>)}</div>
    </section>
    <section id="initiatives" className={styles.section} aria-labelledby="initiatives-title">
      <h2 id="initiatives-title">{d.projects_title}</h2>
      <p className={styles.sectionIntro}>{d.projects_intro}</p>
      <div className={styles.feature}>
        <div>
          <p className={styles.status}>{dict.ecosystem.status_active}</p><h3>{dict.ecosystem.unplugged_title}</h3>
          <p className={styles.claim}>{d.unplugged_claim}</p><p className={styles.description}>{d.unplugged_description}</p>
          <div className={styles.actions}><a className="button button-primary" href="https://www.unplugged.cz">{d.unplugged_link}</a></div>
        </div>
        <a href="https://www.unplugged.cz" className={styles.preview}>
          <figure><Image src="/previews/unplugged-home.png" width={1280} height={680} sizes="(max-width: 767px) calc(100vw - 40px), 55vw" alt={dict.unplugged.preview_alt} />
          <figcaption><span>{d.preview_caption}</span><span>unplugged.cz</span></figcaption></figure>
        </a>
      </div>
      <ul className={styles.planned}>{planned.map((pillar,index) => <li key={pillar.route}>
        <h3><Link href={getPublicPath(lang,pillar.route)}>{pillar.title}</Link></h3>
        <span className={styles.status}>{dict.ecosystem.status_incubating}</span><p>{d.planned[index]}</p>
      </li>)}</ul>
    </section>
    <section className={styles.section} aria-labelledby="writing-title">
      <div className={styles.researchHeading}><h2 id="writing-title">{d.writing_title}</h2><Link className="text-link" href={getPublicPath(lang,'research')}>{dict.research.all_posts}</Link></div>
      <div className={styles.posts}>{getAllPosts().slice(0,3).map(post => <article key={post.slug}><Link href={getPublicResearchPath(lang,post.slug)}>
        <time dateTime={post.date}>{new Date(post.date).toLocaleDateString(lang==='cs'?'cs-CZ':'en-US',{day:'numeric',month:'long',year:'numeric'})}</time>
        <h3>{post.title[lang]}</h3><p>{post.excerpt[lang]}</p>
      </Link></article>)}</div>
    </section>
    <Collaboration title={d.collaboration_title} intro={d.collaboration_intro} label={d.paths_label} paths={d.paths.map((path,index)=>({...path,href:destinations[index]}))} />
    <section className={styles.section} aria-labelledby="faq-title">
      <h2 id="faq-title">{d.faq_title}</h2><div className={styles.faq}>{dict.faq.items.map((item,index)=><details key={item.question} open={index===0}>
        <summary>{item.question}<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" aria-hidden="true"><path d="M10 3v14M3 10h14"/></svg></summary><p>{item.answer}</p>
      </details>)}</div>
    </section>
    <div className={styles.section}><CrisisSupport dict={dict.crisis_support} /></div>
    <JsonLd data={{'@context':'https://schema.org','@type':'FAQPage',mainEntity:dict.faq.items.map(item=>({'@type':'Question',name:item.question,acceptedAnswer:{'@type':'Answer',text:item.answer}}))}} />
  </div>;
}
