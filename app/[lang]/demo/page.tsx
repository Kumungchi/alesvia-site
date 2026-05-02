import type { Metadata } from 'next';
import { getDictionary, hasLocale, Locale } from '../../../dictionaries';
import CompassSaaSDemo from '../../../components/CompassSaaSDemo';
import { buildPageMetadata } from '../../../lib/metadata';
import { getPublicPath } from '../../../lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale = hasLocale(lang) ? lang : 'cs';
  const dict = await getDictionary(locale);
  return buildPageMetadata({
    locale,
    routeKey: 'initiativeCompass',
    title: dict.saas_demo.metadata_title,
    description: dict.saas_demo.metadata_description,
  });
}

export default async function DemoPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const d = dict.saas_demo;

  return (
    <div className="min-h-screen bg-alesvia-bg text-alesvia-text selection:bg-alesvia-accent/30 flex flex-col items-center py-20 px-6">
      <div className="max-w-3xl text-center mb-16">
        <span className="text-sm font-bold text-alesvia-accent tracking-widest uppercase mb-4 block">Alesvia Compass</span>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-alesvia-text mb-6">
          {d.page_title}
        </h1>
        <p className="text-xl text-alesvia-muted font-light leading-relaxed">
          {d.page_subtitle}
        </p>
      </div>

      <div className="w-full max-w-5xl">
        <CompassSaaSDemo dict={d} contactHref={getPublicPath(lang, 'contact')} />
      </div>
    </div>
  );
}
