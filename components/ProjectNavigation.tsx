'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function ProjectNavigation({ label, links }: { label: string; links: { href: string; label: string; status: string }[] }) {
  const details = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const dismiss = (event: PointerEvent) => { if (!details.current?.contains(event.target as Node)) details.current?.removeAttribute('open'); };
    document.addEventListener('pointerdown', dismiss);
    return () => document.removeEventListener('pointerdown', dismiss);
  }, []);
  return <details ref={details} className="project-navigation" onKeyDown={event => { if (event.key === 'Escape') { details.current?.removeAttribute('open'); details.current?.querySelector('summary')?.focus(); } }}>
    <summary>{label}</summary>
    <div className="project-navigation-panel">
      {links.map(link => <Link href={link.href} key={link.href} onClick={() => details.current?.removeAttribute('open')}><strong>{link.label}</strong><span>{link.status}</span></Link>)}
    </div>
  </details>;
}
