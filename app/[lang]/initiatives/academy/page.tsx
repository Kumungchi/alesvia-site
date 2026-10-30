import type { Metadata } from 'next';
import { getDictionary, hasLocale, Locale } from '../../../../dictionaries';
import PageHeader from '../../../../components/PageHeader';
import SectionLabel from '../../../../components/SectionLabel';
import AcademyForm from '../../../../components/AcademyForm';
import { buildPageMetadata } from '../../../../lib/metadata';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale = hasLocale(lang) ? lang : 'cs';
  const dict = await getDictionary(locale);
  return buildPageMetadata({
    locale,
    routeKey: 'initiativeAcademy',
    title: dict.academy.metadata_title,
    description: dict.academy.metadata_description,
  });
}

export default async function AcademyPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const d = dict.academy;

  return (
    <div className="site-page">
      <PageHeader label={d.label} title={d.title}>
        <div className="flex items-center gap-4 mt-4">
          <span className="text-xs font-medium text-alesvia-muted border border-alesvia-muted/20 px-3 py-1.5 rounded">{d.status}</span>
          <p className="text-lg text-alesvia-muted font-light">{d.subtitle}</p>
        </div>
        <p className="text-xl text-alesvia-muted font-light leading-relaxed max-w-2xl mt-6">{d.intro}</p>
      </PageHeader>

      <div className="space-y-20 pb-24">
        <section className="content-section">
          <SectionLabel>{d.vision_label}</SectionLabel>
          <p className="text-lg text-alesvia-text leading-relaxed max-w-3xl">{d.vision_text}</p>
        </section>

        <section className="content-section border-t border-alesvia-muted/10 pt-16">
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

        <section className="content-section border-t border-alesvia-muted/10 pt-16">
          <SectionLabel>{d.future_label}</SectionLabel>
          <p className="text-lg text-alesvia-text leading-relaxed max-w-3xl">{d.future_text}</p>
        </section>

        <section className="content-section border-t border-alesvia-muted/10 pt-16">
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

        <section className="content-section border-t border-alesvia-muted/10 pt-16">
          <div className="max-w-4xl">
            <div className="mb-10">
              <SectionLabel>{d.cta_label}</SectionLabel>
              <p className="text-alesvia-muted text-lg leading-relaxed max-w-2xl mt-4">{d.cta_text}</p>
            </div>
            <AcademyForm dict={dict.academy_form} privacy={dict.contact.form_privacy} lang={lang} />
          </div>
        </section>
      </div>
    </div>
  );
}
