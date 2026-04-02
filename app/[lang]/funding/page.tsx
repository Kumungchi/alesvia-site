import type { Metadata } from 'next';
import Link from 'next/link';
import { getDictionary, hasLocale, Locale } from '../../../dictionaries';
import PageHeader from '../../../components/PageHeader';
import SectionLabel from '../../../components/SectionLabel';
import { buildPageMetadata } from '../../../lib/metadata';
import { getPublicPath } from '../../../lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale = hasLocale(lang) ? lang : 'cs';
  const dict = await getDictionary(locale);
  return buildPageMetadata({
    locale,
    routeKey: 'funding',
    title: dict.funding.metadata_title,
    description: dict.funding.metadata_description,
  });
}

export default async function FundingPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const d = dict.funding;

  const sources = [
    { title: d.source_grants_title, desc: d.source_grants_desc },
    { title: d.source_philanthropy_title, desc: d.source_philanthropy_desc },
    { title: d.source_institutional_title, desc: d.source_institutional_desc },
    { title: d.source_advisory_title, desc: d.source_advisory_desc },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <PageHeader label={d.label} title={d.title} description={d.intro} />

      <div className="space-y-20 pb-24">
        <section>
          <SectionLabel>{d.model_label}</SectionLabel>
          <p className="text-lg text-alesvia-text leading-relaxed max-w-3xl">{d.model_text}</p>
        </section>

        <section className="border-t border-alesvia-muted/10 pt-16">
          <SectionLabel>{d.sources_label}</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {sources.map((source) => (
              <div key={source.title} className="bg-alesvia-surface/50 rounded-xl p-8 border border-alesvia-muted/10">
                <h4 className="font-serif text-xl font-bold text-alesvia-text mb-3">{source.title}</h4>
                <p className="text-alesvia-muted text-sm leading-relaxed">{source.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-alesvia-muted/10 pt-16">
          <SectionLabel>{d.partners_label}</SectionLabel>
          <p className="text-lg text-alesvia-muted leading-relaxed max-w-3xl italic">{d.partners_text}</p>
        </section>

        <section className="border-t border-alesvia-muted/10 pt-16">
          <SectionLabel>{d.transparency_label}</SectionLabel>
          <p className="text-lg text-alesvia-text leading-relaxed max-w-3xl">{d.transparency_text}</p>
        </section>

        <section>
          <div className="bg-[#0F2C59] text-alesvia-bg rounded-2xl p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-alesvia-accent/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
            <div className="relative z-10">
              <SectionLabel>{d.cta_label}</SectionLabel>
              <p className="text-alesvia-bg/80 text-lg leading-relaxed max-w-2xl mb-8">{d.cta_text}</p>
              <Link href={getPublicPath(lang, 'contact')} className="bg-alesvia-accent text-alesvia-text font-semibold px-8 py-4 rounded hover:bg-alesvia-accent/90 transition-transform hover:scale-105 shadow-md inline-block">
                {d.cta_label}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
