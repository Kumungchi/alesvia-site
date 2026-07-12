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
    routeKey: 'team',
    title: dict.team.metadata_title,
    description: dict.team.metadata_description,
  });
}

export default async function TeamPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const d = dict.team;

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <PageHeader label={d.label} title={d.title} description={d.intro} />

      <div className="space-y-16 pb-24">
        <section>
          <SectionLabel>{d.board_label}</SectionLabel>
          <p className="text-alesvia-muted max-w-3xl">{d.board_text}</p>
        </section>
      </div>
    </div>
  );
}
