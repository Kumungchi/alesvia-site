'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getPublicPath } from '../../lib/routes';

const copy = {
  cs: {
    title: 'Mimo síť.',
    text: 'Tato stránka neexistuje — což je, ironicky, přesně ten druh hranice, který prosazujeme.',
    subtext: 'Některé věci je lepší nenacházet.',
    home: 'Zpět na základ',
    unplugged: 'Prozkoumat Unplugged',
  },
  en: {
    title: 'Off the grid.',
    text: "This page doesn't exist — which, ironically, is exactly the kind of boundary we advocate for.",
    subtext: 'Some things are better left unfound.',
    home: 'Return to baseline',
    unplugged: 'Explore Unplugged',
  },
} as const;

export default function NotFound() {
  const pathname = usePathname();
  const lang = pathname?.split('/')[1] === 'en' ? 'en' : 'cs';
  const t = copy[lang];

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-lg relative">
        {/* Floating 404 background */}
        <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none" aria-hidden="true">
          <span className="text-[12rem] md:text-[16rem] font-serif font-bold text-alesvia-primary/[0.04] select-none leading-none">
            404
          </span>
        </div>

        <h1 className="font-serif text-4xl md:text-5xl font-bold text-alesvia-primary mb-4">
          {t.title}
        </h1>
        <p className="text-lg text-alesvia-muted mb-2">
          {t.text}
        </p>
        <p className="text-sm text-alesvia-muted mb-10">
          {t.subtext}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={getPublicPath(lang, 'home')}
            className="bg-alesvia-primary text-alesvia-bg px-8 py-4 rounded-md font-medium hover:bg-alesvia-trust transition-colors text-center"
          >
            {t.home}
          </Link>
          <Link
            href={getPublicPath(lang, 'initiativeUnplugged')}
            className="border border-alesvia-text/20 px-8 py-4 rounded-md font-medium text-alesvia-text hover:border-alesvia-primary transition-colors text-center"
          >
            {t.unplugged}
          </Link>
        </div>
      </div>
    </div>
  );
}
