import type { Metadata } from 'next';
import Link from 'next/link';
import { getDictionary, hasLocale, Locale } from '../../../../dictionaries';
import PageHeader from '../../../../components/PageHeader';
import SectionLabel from '../../../../components/SectionLabel';
import ScrollReveal from '../../../../components/ScrollReveal';
import IncidentDashboard from '../../../../components/IncidentDashboard';
import { buildPageMetadata } from '../../../../lib/metadata';
import { getPublicPath } from '../../../../lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale = hasLocale(lang) ? lang : 'cs';
  const dict = await getDictionary(locale);
  return buildPageMetadata({
    locale,
    routeKey: 'initiativeWatch',
    title: dict.watch.metadata_title,
    description: dict.watch.metadata_description,
  });
}

export default async function WatchPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const d = dict.watch;

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
          <section className="mb-8">
            <IncidentDashboard dict={dict.watch_dashboard} />
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section>
            <SectionLabel>{d.scope_label}</SectionLabel>
            <ul className="space-y-4 mt-6 max-w-3xl">
              {d.scope_items.map((item: string, i: number) => (
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
            <SectionLabel>{d.method_label}</SectionLabel>
            <p className="text-lg text-alesvia-text leading-relaxed max-w-3xl">{d.method_text}</p>
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
            <div className="bg-[#0F2C59] text-alesvia-bg rounded-2xl p-10 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-alesvia-accent/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
              <div className="relative z-10">
                <SectionLabel>{d.cta_label}</SectionLabel>
                <p className="text-alesvia-bg/80 text-lg leading-relaxed max-w-2xl mb-8">{d.cta_text}</p>
                <Link href={getPublicPath(lang, 'contact')} className="btn-primary bg-alesvia-accent text-alesvia-text font-semibold px-8 py-4 rounded-lg inline-block">
                  {d.cta_label}
                </Link>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
