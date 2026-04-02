import type { Metadata } from 'next';
import { getDictionary, hasLocale, Locale } from '../../../dictionaries';
import PageHeader from '../../../components/PageHeader';
import SectionLabel from '../../../components/SectionLabel';
import { buildPageMetadata } from '../../../lib/metadata';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale = hasLocale(lang) ? lang : 'cs';
  const dict = await getDictionary(locale);
  return buildPageMetadata({
    locale,
    routeKey: 'about',
    title: dict.about.metadata_title,
    description: dict.about.metadata_description,
  });
}

export default async function AboutPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const d = dict.about;

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <PageHeader label={d.label} title={d.title} description={d.intro} />

      <div className="space-y-20 pb-24">
        <section>
          <SectionLabel>{d.mission_label}</SectionLabel>
          <p className="text-lg text-alesvia-text leading-relaxed max-w-3xl">{d.mission_text}</p>
        </section>

        <section className="border-t border-alesvia-muted/10 pt-16">
          <SectionLabel>{d.philosophy_label}</SectionLabel>
          <p className="text-lg text-alesvia-text leading-relaxed max-w-3xl">{d.philosophy_text}</p>
        </section>

        <section className="border-t border-alesvia-muted/10 pt-16">
          <SectionLabel>{d.origin_label}</SectionLabel>
          <p className="text-lg text-alesvia-text leading-relaxed max-w-3xl">{d.origin_text}</p>
        </section>

        <section className="border-t border-alesvia-muted/10 pt-16">
          <SectionLabel>{d.structure_label}</SectionLabel>
          <p className="text-lg text-alesvia-text leading-relaxed max-w-3xl">{d.structure_text}</p>
        </section>
      </div>
    </div>
  );
}
