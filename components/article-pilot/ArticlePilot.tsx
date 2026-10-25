'use client';

import { useState, type ReactNode } from 'react';
import type { getDictionary } from '../../dictionaries';
import styles from './article-pilot.module.css';

type PilotDictionary = Awaited<ReturnType<typeof getDictionary>>['article_pilot'];

export default function ArticlePilot({ children, dict }: { children: ReactNode; dict: PilotDictionary }) {
  const [typeface, setTypeface] = useState('newsreader');

  return (
    <div className={styles.pilot} data-article-pilot data-typeface={typeface}>
      <div className={styles.tools}>
        <p className={styles.previewLabel}>{dict.preview_label}</p>
        <fieldset className={styles.fontOptions}>
          <legend className={styles.legend}>{dict.typeface_label}</legend>
          {[
            { value: 'current', label: dict.current_typeface },
            { value: 'newsreader', label: dict.newsreader_typeface },
          ].map(({ value, label }) => (
            <label key={value} className={styles.fontOption}>
              <input type="radio" name="article-typeface" value={value} checked={typeface === value} onChange={() => setTypeface(value)} />
              <span>{label}</span>
            </label>
          ))}
        </fieldset>
        <button type="button" className={styles.printButton} onClick={() => window.print()}>{dict.print}</button>
      </div>
      {children}
    </div>
  );
}
