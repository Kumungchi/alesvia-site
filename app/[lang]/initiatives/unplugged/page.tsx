import type { Metadata } from 'next';
import Link from 'next/link';
import { getDictionary, hasLocale, Locale } from '../../../../dictionaries';
import PageHeader from '../../../../components/PageHeader';
import SectionLabel from '../../../../components/SectionLabel';
import { buildPageMetadata } from '../../../../lib/metadata';
import { getPublicPath } from '../../../../lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale = hasLocale(lang) ? lang : 'cs';
  const dict = await getDictionary(locale);
  return buildPageMetadata({
    locale,
    routeKey: 'initiativeUnplugged',
    title: dict.unplugged.metadata_title,
    description: dict.unplugged.metadata_description,
  });
}

export default async function UnpluggedPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const d = dict.unplugged;

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <PageHeader label={d.label} title={d.title}>
        <div className="flex items-center gap-4 mt-4">
          <span className="text-xs font-semibold bg-alesvia-accent/10 text-alesvia-accent px-3 py-1.5 rounded">{d.status}</span>
          <p className="text-lg text-alesvia-muted font-light">{d.subtitle}</p>
        </div>
        <p className="text-xl text-alesvia-muted font-light leading-relaxed max-w-2xl mt-6">{d.intro}</p>
      </PageHeader>

      <div className="space-y-20 pb-24">
        <section>
          <SectionLabel>{d.problem_label}</SectionLabel>
          <p className="text-lg text-alesvia-text leading-relaxed max-w-3xl">{d.problem_text}</p>
        </section>

        <section className="border-t border-alesvia-muted/10 pt-16">
          <SectionLabel>{d.approach_label}</SectionLabel>
          <p className="text-lg text-alesvia-text leading-relaxed max-w-3xl">{d.approach_text}</p>
        </section>

        <section className="border-t border-alesvia-muted/10 pt-16">
          <SectionLabel>{d.principles_label}</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-alesvia-surface/50 rounded-xl p-8 border border-alesvia-muted/10">
              <h4 className="font-serif text-xl font-bold text-alesvia-text mb-3">{d.principle_friction_title}</h4>
              <p className="text-alesvia-muted text-sm leading-relaxed">{d.principle_friction_desc}</p>
            </div>
            <div className="bg-alesvia-surface/50 rounded-xl p-8 border border-alesvia-muted/10">
              <h4 className="font-serif text-xl font-bold text-alesvia-text mb-3">{d.principle_detox_title}</h4>
              <p className="text-alesvia-muted text-sm leading-relaxed">{d.principle_detox_desc}</p>
            </div>
            <div className="bg-alesvia-surface/50 rounded-xl p-8 border border-alesvia-muted/10">
              <h4 className="font-serif text-xl font-bold text-alesvia-text mb-3">{d.principle_boundaries_title}</h4>
              <p className="text-alesvia-muted text-sm leading-relaxed">{d.principle_boundaries_desc}</p>
            </div>
          </div>
        </section>

        <section className="border-t border-alesvia-muted/10 pt-16">
          <SectionLabel>{lang === 'cs' ? 'Aktivní Projekt: Unplugged.cz' : 'Active Project: Unplugged.cz'}</SectionLabel>
          <div className="mt-8 rounded-2xl overflow-hidden border border-alesvia-muted/20 shadow-2xl relative" style={{ height: '700px' }}>
            <div className="absolute top-0 left-0 w-full h-10 bg-alesvia-surface border-b border-alesvia-muted/20 flex items-center px-4 gap-2 z-10">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <div className="flex-1 text-center text-xs text-alesvia-muted font-medium font-mono mr-12">unplugged.cz</div>
            </div>
            <iframe 
              src="https://unplugged.cz" 
              className="w-full h-full pt-10 border-0" 
              title="Unplugged.cz platform"
              loading="lazy"
            />
          </div>
        </section>

        <section className="border-t border-alesvia-muted/10 pt-16">
          <div className="bg-alesvia-primary text-alesvia-bg rounded-2xl p-10 md:p-16">
            <SectionLabel>{d.cta_label}</SectionLabel>
            <p className="text-alesvia-bg/80 text-lg leading-relaxed max-w-2xl mb-8">{d.cta_text}</p>
            <Link href={getPublicPath(lang, 'contact')} className="bg-alesvia-accent text-alesvia-text font-semibold px-8 py-4 rounded hover:bg-alesvia-accent/90 transition-transform hover:scale-105 shadow-md inline-block">
              {d.cta_label}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
