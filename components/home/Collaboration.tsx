'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './home.module.css';

export default function Collaboration({ title, intro, label, paths }: { title: string; intro: string; label: string; paths: { label: string; text: string; action: string; href: string }[] }) {
  const [selected, setSelected] = useState(0);
  const path = paths[selected];
  return <section id="collaboration" className={styles.band} aria-labelledby="collaboration-title">
    <div className={styles.bandContent}>
      <h2 id="collaboration-title">{title}</h2>
      <p className={styles.bandIntro}>{intro}</p>
      <div className={styles.paths} role="group" aria-label={label}>
        {paths.map((item, index) => <button type="button" key={item.label} aria-pressed={index === selected} onClick={() => setSelected(index)}>{item.label}</button>)}
      </div>
      <div className={styles.pathContent} aria-live="polite">
        <p>{path.text}</p>
        <Link className="button button-gold" href={path.href}>{path.action}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6" /></svg></Link>
      </div>
    </div>
  </section>;
}
