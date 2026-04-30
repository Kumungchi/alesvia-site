import type { Metadata } from 'next';
import Link from 'next/link';
import { getDictionary, hasLocale, Locale } from '../../../../dictionaries';
import PageHeader from '../../../../components/PageHeader';
import SectionLabel from '../../../../components/SectionLabel';
import ScrollReveal from '../../../../components/ScrollReveal';
import CompassFlowchart from '../../../../components/CompassFlowchart';
import CompassForm from '../../../../components/CompassForm';
import { buildPageMetadata } from '../../../../lib/metadata';
import { getPublicPath } from '../../../../lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale = hasLocale(lang) ? lang : 'cs';
  const dict = await getDictionary(locale);
  return buildPageMetadata({
    locale,
    routeKey: 'initiativeCompass',
    title: dict.compass.metadata_title,
    description: dict.compass.metadata_description,
  });
}

export default async function CompassPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const d = dict.compass;

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <PageHeader label={d.label} title={d.title}>
        <div className="flex items-center gap-4 mt-4">
          <span className="text-xs font-medium text-alesvia-accent border border-alesvia-accent/30 px-3 py-1.5 rounded-full">{d.status}</span>
          <p className="text-lg text-alesvia-muted font-light">{d.subtitle}</p>
        </div>
        <p className="text-xl text-alesvia-muted font-light leading-relaxed max-w-2xl mt-6">{d.intro}</p>
      </PageHeader>

      <div className="space-y-20 pb-24">
        <ScrollReveal>
          <section className="bg-alesvia-surface/50 border border-alesvia-accent/20 rounded-2xl p-8 mb-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-alesvia-accent"></div>
            <h3 className="text-xl font-serif font-bold text-alesvia-text mb-4">{d.advantage_title}</h3>
            <div className="space-y-4 max-w-3xl">
              <p className="text-alesvia-muted leading-relaxed">{d.advantage_text1}</p>
              <p className="text-alesvia-text font-medium leading-relaxed">{d.advantage_text2}</p>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
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
        </ScrollReveal>

        <ScrollReveal>
          <section className="border-t border-alesvia-muted/10 pt-16">
            <CompassFlowchart dict={dict.compass_flowchart} />
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="border-t border-alesvia-muted/10 pt-16">
            <SectionLabel>{d.audiences_label}</SectionLabel>
            <ul className="space-y-4 mt-6 max-w-3xl">
              {d.audiences_items.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-alesvia-accent rounded-full mt-2.5 shrink-0"></span>
                  <span className="text-lg text-alesvia-text leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="border-t border-alesvia-muted/10 pt-16">
            <div className="max-w-4xl">
              <div className="mb-10">
                <SectionLabel>{d.cta_label}</SectionLabel>
                <p className="text-alesvia-muted text-lg leading-relaxed max-w-2xl mt-4">{d.cta_text}</p>
              </div>
              <CompassForm dict={dict.compass_form} />
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
