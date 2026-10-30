import type { Metadata } from 'next';
import { getDictionary, hasLocale, Locale } from '../../../dictionaries';
import PageHeader from '../../../components/PageHeader';
import PillarList from '../../../components/PillarList';
import { buildPageMetadata } from '../../../lib/metadata';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale = hasLocale(lang) ? lang : 'cs';
  const dict = await getDictionary(locale);
  return buildPageMetadata({
    locale,
    routeKey: 'initiatives',
    title: dict.initiatives_index.metadata_title,
    description: dict.initiatives_index.metadata_description,
  });
}

export default async function InitiativesPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const d = dict.initiatives_index;

  return (
    <div className="site-page">
      <PageHeader label={d.label} title={d.title} description={d.intro} />

      <div className="pb-24">
        <PillarList lang={lang} dict={dict} />
      </div>
    </div>
  );
}
