import { getDictionary, Locale } from '../../dictionaries';
import SectionLabel from '../../components/SectionLabel';
import JsonLd from '../../components/JsonLd';
import Link from 'next/link';
import CrisisSupport from '../../components/CrisisSupport';
import PillarList from '../../components/PillarList';
import { getPublicPath } from '../../lib/routes';

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
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

          <PillarList lang={lang} dict={dict} unpluggedExternal />
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
