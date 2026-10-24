import type { Metadata } from 'next';
import Link from 'next/link';
import { getDictionary, hasLocale, Locale } from '../../../../dictionaries';
import PageHeader from '../../../../components/PageHeader';
import SectionLabel from '../../../../components/SectionLabel';
import ScrollReveal from '../../../../components/ScrollReveal';
import { buildPageMetadata } from '../../../../lib/metadata';
import { getPublicPath } from '../../../../lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale = hasLocale(lang) ? lang : 'cs';
  const dict = await getDictionary(locale);
  return buildPageMetadata({
    locale,
    routeKey: 'initiativePractitioners',
    title: dict.practitioners.metadata_title,
    description: dict.practitioners.metadata_description,
  });
}

export default async function PractitionersPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const d = dict.practitioners;

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
          <section>
            <SectionLabel>{d.problem_label}</SectionLabel>
            <p className="text-lg text-alesvia-text leading-relaxed max-w-3xl">{d.problem_text}</p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed">
              <a href={d.problem_source_url} className="underline underline-offset-4 hover:text-alesvia-accent">{d.problem_source_label}</a>
            </p>
            {d.evidence_items.map((item) => (
              <div key={item.source_url} className="mt-8 max-w-3xl">
                <p className="text-lg text-alesvia-text leading-relaxed">{item.text}</p>
                <p className="mt-3 text-sm leading-relaxed">
                  <a href={item.source_url} className="underline underline-offset-4 hover:text-alesvia-accent">{item.source_label}</a>
                </p>
              </div>
            ))}
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="border-t border-alesvia-muted/10 pt-16">
            <SectionLabel>{d.programs_label}</SectionLabel>
            <ul className="space-y-4 mt-6 max-w-3xl">
              {d.programs_items.map((item: string, i: number) => (
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
            <div className="bg-alesvia-primary text-alesvia-bg rounded-2xl p-10 md:p-16">
              <SectionLabel>{d.cta_label}</SectionLabel>
              <p className="text-alesvia-bg/80 text-lg leading-relaxed max-w-2xl mb-8">{d.cta_text}</p>
              <Link href={getPublicPath(lang, 'contact')} className="btn-primary bg-alesvia-accent text-alesvia-text font-semibold px-8 py-4 rounded-lg inline-block">
                {d.cta_label}
              </Link>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
