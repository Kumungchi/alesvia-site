import { getDictionary, Locale } from '../../dictionaries';
import SectionLabel from '../../components/SectionLabel';
import JsonLd from '../../components/JsonLd';
import Link from 'next/link';
import CrisisSupport from '../../components/CrisisSupport';
import { getPublicPath } from '../../lib/routes';

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const moreLabel = lang === 'cs' ? 'Více →' : 'Learn more →';

  const pillars: {
    title: string;
    status: string;
    active: boolean;
    description: string;
    points?: string[];
    href: string;
    linkLabel: string;
    external?: boolean;
  }[] = [
    {
      title: dict.ecosystem.unplugged_title,
      status: dict.ecosystem.status_active,
      active: true,
      description: dict.ecosystem.unplugged_desc,
      points: dict.ecosystem.unplugged_points,
      href: 'https://www.unplugged.cz',
      linkLabel: dict.ecosystem.unplugged_link,
      external: true,
    },
    {
      title: dict.ecosystem.academy_title,
      status: dict.ecosystem.status_incubating,
      active: false,
      description: dict.ecosystem.academy_desc,
      href: getPublicPath(lang, 'initiativeAcademy'),
      linkLabel: moreLabel,
    },
    {
      title: dict.ecosystem.practitioners_title,
      status: dict.ecosystem.status_incubating,
      active: false,
      description: dict.ecosystem.practitioners_desc,
      href: getPublicPath(lang, 'initiativePractitioners'),
      linkLabel: moreLabel,
    },
    {
      title: dict.ecosystem.policy_title,
      status: dict.ecosystem.status_incubating,
      active: false,
      description: dict.ecosystem.policy_desc,
      href: getPublicPath(lang, 'initiativePolicyLab'),
      linkLabel: moreLabel,
    },
  ];

  const linkClass = 'inline-block py-1 font-medium text-alesvia-primary underline underline-offset-4 hover:text-alesvia-trust';

  return (
    <div className="bg-alesvia-bg text-alesvia-text selection:bg-alesvia-accent/30 font-sans">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* ── Hero ── */}
        <section className="pt-24 pb-20 md:pt-36 md:pb-28 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-alesvia-primary leading-[1.05] mb-8">
            {dict.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-alesvia-muted leading-relaxed mb-12 max-w-2xl">
            {dict.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <Link
              href={getPublicPath(lang, 'thesis')}
              className="bg-alesvia-primary text-alesvia-bg px-7 py-3.5 rounded-md font-medium text-lg text-center hover:bg-alesvia-trust transition-colors"
            >
              {dict.hero.primary_link}
            </Link>
            <Link
              href={getPublicPath(lang, 'initiatives')}
              className="py-2 font-medium text-lg text-alesvia-text underline decoration-alesvia-accent decoration-2 underline-offset-8 hover:text-alesvia-primary"
            >
              {dict.hero.secondary_link}
            </Link>
          </div>
        </section>

        {/* ── Pillars ── */}
        <section id="initiatives" className="py-20 border-t border-alesvia-text/15">
          <div className="max-w-2xl mb-12">
            <SectionLabel>{dict.ecosystem.label}</SectionLabel>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-alesvia-text leading-tight">
              {dict.ecosystem.title}
            </h3>
          </div>

          <ol className="border-b border-alesvia-text/15">
            {pillars.map((pillar, i) => (
              <li key={pillar.title} className="grid gap-4 md:grid-cols-12 md:gap-8 py-10 border-t border-alesvia-text/15">
                <span aria-hidden="true" className="md:col-span-1 font-serif text-lg text-alesvia-muted tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="md:col-span-3">
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
                  {pillar.points && (
                    <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-alesvia-muted">
                      {pillar.points.map((point) => (
                        <li key={point}>— {point}</li>
                      ))}
                    </ul>
                  )}
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
          </ol>
        </section>

        {/* ── Financing ── */}
        <section id="funding" className="py-20">
          <div className="bg-alesvia-trust text-alesvia-bg rounded-md px-8 py-12 md:px-16 md:py-16">
            <div className="max-w-3xl">
              <SectionLabel>{dict.financing.label}</SectionLabel>
              <h3 className="font-serif text-3xl md:text-5xl font-bold mb-6">
                {dict.financing.title}
              </h3>
              <p className="text-alesvia-white/85 text-lg md:text-xl leading-relaxed mb-10">
                {dict.financing.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={getPublicPath(lang, 'funding')} className="bg-alesvia-accent text-alesvia-text font-semibold px-7 py-3.5 rounded-md text-center hover:bg-alesvia-white transition-colors">
                  {dict.financing.primary_link}
                </Link>
                <Link href={getPublicPath(lang, 'contact')} className="border border-alesvia-white/30 text-alesvia-white font-medium px-7 py-3.5 rounded-md hover:bg-alesvia-white/10 transition-colors text-center">
                  {dict.financing.secondary_link}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ (GEO-optimized) ── */}
        <section id="faq" className="py-20 border-t border-alesvia-text/15">
          <SectionLabel>{dict.faq.label}</SectionLabel>
          <div className="mt-6 max-w-3xl border-b border-alesvia-text/15">
            {dict.faq.items.map((item: { question: string; answer: string }) => (
              <details key={item.question} className="border-t border-alesvia-text/15">
                <summary className="cursor-pointer py-6 font-serif text-lg font-bold text-alesvia-text flex justify-between items-center gap-4 hover:text-alesvia-primary">
                  {item.question}
                  <span aria-hidden="true" className="faq-icon text-alesvia-accent text-2xl shrink-0 font-sans font-light">+</span>
                </summary>
                <div className="pb-6 text-alesvia-muted leading-relaxed">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        <CrisisSupport dict={dict.crisis_support} />

        {/* JSON-LD: FAQPage schema for GEO */}
        <JsonLd data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: dict.faq.items.map((item: { question: string; answer: string }) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }} />

      </div>
    </div>
  );
}
