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
    { title: d.source_services_title, desc: d.source_services_desc },
    { title: d.source_grants_title, desc: d.source_grants_desc },
    { title: d.source_philanthropy_title, desc: d.source_philanthropy_desc },
    { title: d.source_infrastructure_title, desc: d.source_infrastructure_desc },
  ];

  return (
    <div className="site-page">
      <PageHeader label={d.label} title={d.title} description={d.intro} />

      <div className="space-y-20 pb-24">
        <section className="content-section">
          <SectionLabel>{d.model_label}</SectionLabel>
          <p className="text-lg text-alesvia-text leading-relaxed max-w-3xl">{d.model_text}</p>
        </section>

        <section className="content-section border-t border-alesvia-muted/10 pt-16">
          <SectionLabel>{d.sources_label}</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {sources.map((source) => (
              <div key={source.title} className="border-t border-alesvia-text/15 pt-6">
                <h3 className="font-serif text-xl font-bold text-alesvia-text mb-3">{source.title}</h3>
                <p className="text-alesvia-muted text-sm leading-relaxed">{source.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section border-t border-alesvia-muted/10 pt-16">
          <SectionLabel>{d.rules_label}</SectionLabel>
          <ul className="space-y-4 mt-6 max-w-3xl">
            {d.rules_items.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-alesvia-accent rounded-full mt-2.5 shrink-0"></span>
                <span className="text-lg text-alesvia-text leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-alesvia-muted text-sm italic mt-6 max-w-3xl">{d.rules_note}</p>
        </section>

        <section className="content-section border-t border-alesvia-muted/10 pt-16">
          <SectionLabel>{d.partners_label}</SectionLabel>
          <p className="text-lg text-alesvia-muted leading-relaxed max-w-3xl italic">{d.partners_text}</p>
        </section>

        <section className="content-section border-t border-alesvia-muted/10 pt-16">
          <SectionLabel>{d.transparency_label}</SectionLabel>
          <p className="text-lg text-alesvia-text leading-relaxed max-w-3xl">{d.transparency_text}</p>
        </section>

        <section className="content-section">
          <div className="on-dark bg-alesvia-trust text-alesvia-bg rounded-md px-8 py-12 md:px-16">
            <div className="relative z-10">
              <SectionLabel>{d.cta_label}</SectionLabel>
              <p className="text-alesvia-bg/80 text-lg leading-relaxed max-w-2xl mb-8">{d.cta_text}</p>
              <Link href={getPublicPath(lang, 'contact')} className="button button-gold">
                {d.cta_label}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
