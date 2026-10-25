import Link from 'next/link';
import type { getDictionary, Locale } from '../dictionaries';
import { getPublicPath } from '../lib/routes';

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

type Pillar = {
  title: string;
  status: string;
  active: boolean;
  description: string;
  href: string;
  linkLabel: string;
  external?: boolean;
};

const linkClass = 'inline-block py-1 font-medium text-alesvia-primary underline underline-offset-4 hover:text-alesvia-trust';

// Unplugged links out to www.unplugged.cz on the homepage; on the initiatives
// index it links to its own pillar page like the others.
export default function PillarList({ lang, dict, unpluggedExternal = false }: { lang: Locale; dict: Dictionary; unpluggedExternal?: boolean }) {
  const eco = dict.ecosystem;
  const moreLabel = lang === 'cs' ? 'Více →' : 'Learn more →';

  const pillars: Pillar[] = [
    {
      title: eco.unplugged_title,
      status: eco.status_active,
      active: true,
      description: eco.unplugged_desc,
      href: unpluggedExternal ? 'https://www.unplugged.cz' : getPublicPath(lang, 'initiativeUnplugged'),
      linkLabel: unpluggedExternal ? eco.unplugged_link : moreLabel,
      external: unpluggedExternal,
    },
    {
      title: eco.academy_title,
      status: eco.status_incubating,
      active: false,
      description: eco.academy_desc,
      href: getPublicPath(lang, 'initiativeAcademy'),
      linkLabel: moreLabel,
    },
    {
      title: eco.practitioners_title,
      status: eco.status_incubating,
      active: false,
      description: eco.practitioners_desc,
      href: getPublicPath(lang, 'initiativePractitioners'),
      linkLabel: moreLabel,
    },
    {
      title: eco.policy_title,
      status: eco.status_incubating,
      active: false,
      description: eco.policy_desc,
      href: getPublicPath(lang, 'initiativePolicyLab'),
      linkLabel: moreLabel,
    },
  ];

  return (
    <ul className="border-b border-alesvia-text/15">
      {pillars.map((pillar) => (
        <li key={pillar.title} className="grid gap-4 md:grid-cols-12 md:gap-8 py-10 border-t border-alesvia-text/15">
          <div className="md:col-span-4">
            <h4 className={`font-serif font-bold text-alesvia-text ${pillar.active ? 'text-3xl' : 'text-2xl'}`}>
              {pillar.title}
            </h4>
            <p className={`mt-2 text-xs font-semibold uppercase tracking-widest ${pillar.active ? 'text-alesvia-primary' : 'text-alesvia-muted'}`}>
              {pillar.active && <span aria-hidden="true" className="inline-block w-1.5 h-1.5 mr-2 align-middle rounded-full bg-alesvia-accent" />}
              {pillar.status}
            </p>
          </div>
          <div className="md:col-span-6">
            <p className={`leading-relaxed ${pillar.active ? 'text-lg text-alesvia-text' : 'text-alesvia-muted'}`}>
              {pillar.description}
            </p>
          </div>
          <div className="md:col-span-2 md:text-right">
            {pillar.external ? (
              <a href={pillar.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {pillar.linkLabel}
              </a>
            ) : (
              <Link href={pillar.href} className={linkClass}>
                {pillar.linkLabel}
              </Link>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
