import type { Metadata } from 'next';
import Link from 'next/link';
import { getDictionary, hasLocale, Locale } from '../../../../dictionaries';
import PageHeader from '../../../../components/PageHeader';
import SectionLabel from '../../../../components/SectionLabel';
import AdvisoryForm from '../../../../components/AdvisoryForm';
import { buildPageMetadata } from '../../../../lib/metadata';
import { getPublicPath } from '../../../../lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale = hasLocale(lang) ? lang : 'cs';
  const dict = await getDictionary(locale);
  return buildPageMetadata({
    locale,
    routeKey: 'initiativeAdvisory',
    title: dict.advisory.metadata_title,
    description: dict.advisory.metadata_description,
  });
}

export default async function AdvisoryPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const d = dict.advisory;

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <PageHeader label={d.label} title={d.title}>
        <div className="flex items-center gap-4 mt-4">
          <span className="text-xs font-medium text-alesvia-muted border border-alesvia-muted/20 px-3 py-1.5 rounded">{d.status}</span>
          <p className="text-lg text-alesvia-muted font-light">{d.subtitle}</p>
        </div>
        <p className="text-xl text-alesvia-muted font-light leading-relaxed max-w-2xl mt-6">{d.intro}</p>
      </PageHeader>

      <div className="space-y-20 pb-24">
        <section>
          <SectionLabel>{d.services_label}</SectionLabel>
          <ul className="space-y-4 mt-6 max-w-3xl">
            {d.services_items.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-alesvia-accent rounded-full mt-2.5 shrink-0"></span>
                <span className="text-lg text-alesvia-text leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-alesvia-muted/10 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-alesvia-surface/50 rounded-xl p-8 border border-alesvia-muted/10">
              <h3 className="font-serif text-xl font-bold text-alesvia-text mb-4">{d.investors_label}</h3>
              <p className="text-alesvia-muted leading-relaxed">{d.investors_text}</p>
            </div>
            <div className="bg-alesvia-surface/50 rounded-xl p-8 border border-alesvia-muted/10">
              <h3 className="font-serif text-xl font-bold text-alesvia-text mb-4">{d.startups_label}</h3>
              <p className="text-alesvia-muted leading-relaxed">{d.startups_text}</p>
            </div>
          </div>
        </section>

        <section className="border-t border-alesvia-muted/10 pt-16">
          <div className="max-w-4xl">
            <div className="mb-10">
              <SectionLabel>{d.cta_label}</SectionLabel>
              <p className="text-alesvia-muted text-lg leading-relaxed max-w-2xl mt-4">{d.cta_text}</p>
            </div>
            <AdvisoryForm dict={dict.advisory_form} lang={lang} />
          </div>
        </section>
      </div>
    </div>
  );
}
