'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import type { Locale } from '../dictionaries';

interface MobileMenuProps {
  lang: Locale;
  links: { href: string; label: string }[];
  partnerLabel: string;
  contactHref: string;
  menuLabel: string;
  closeLabel: string;
}

export default function MobileMenuToggle({ lang, links, partnerLabel, contactHref, menuLabel, closeLabel }: MobileMenuProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const close = () => dialog.current?.close();
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const media = window.matchMedia('(min-width: 64rem)');
    const resize = () => { if (media.matches) dialog.current?.close(); };
    media.addEventListener('change', resize);
    return () => { document.body.style.overflow = previous; media.removeEventListener('change', resize); };
  }, [open]);
  return <div className="mobile-navigation">
    <button ref={trigger} type="button" className="menu-trigger" aria-haspopup="dialog" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => { dialog.current?.showModal(); setOpen(true); }}>{menuLabel}</button>
    <dialog ref={dialog} id="mobile-navigation" className="navigation-dialog" aria-label={menuLabel} onClose={() => { setOpen(false); trigger.current?.focus(); }} onClick={event => {
      if (event.target !== event.currentTarget) return;
      const rect = event.currentTarget.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) close();
    }}>
      <button type="button" className="dialog-close" onClick={close} autoFocus>{closeLabel}</button>
      <nav aria-label={menuLabel}>
        {links.map(link => <Link key={link.href} href={link.href} onClick={close}>{link.label}</Link>)}
        <Link className="button button-primary" href={contactHref} onClick={close}>{partnerLabel}</Link>
      </nav>
      <LanguageSwitcher currentLang={lang} onClick={close} />
    </dialog>
  </div>;
}
