import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getDictionary, hasLocale, Locale } from '../../../../dictionaries';
import PageHeader from '../../../../components/PageHeader';
import SectionLabel from '../../../../components/SectionLabel';
import CrisisSupport from '../../../../components/CrisisSupport';
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
          <span className="text-xs font-semibold bg-alesvia-accent/10 text-alesvia-accent-ink px-3 py-1.5 rounded">{d.status}</span>
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
            <div className="border-t border-alesvia-text/15 pt-6">
              <h4 className="font-serif text-xl font-bold text-alesvia-text mb-3">{d.principle_friction_title}</h4>
              <p className="text-alesvia-muted text-sm leading-relaxed">{d.principle_friction_desc}</p>
            </div>
            <div className="border-t border-alesvia-text/15 pt-6">
              <h4 className="font-serif text-xl font-bold text-alesvia-text mb-3">{d.principle_detox_title}</h4>
              <p className="text-alesvia-muted text-sm leading-relaxed">{d.principle_detox_desc}</p>
            </div>
            <div className="border-t border-alesvia-text/15 pt-6">
              <h4 className="font-serif text-xl font-bold text-alesvia-text mb-3">{d.principle_boundaries_title}</h4>
              <p className="text-alesvia-muted text-sm leading-relaxed">{d.principle_boundaries_desc}</p>
            </div>
          </div>
        </section>

        <section className="border-t border-alesvia-muted/10 pt-16">
          <SectionLabel>{d.preview_label}</SectionLabel>
          <figure className="mt-8 max-w-4xl">
            <a href="https://www.unplugged.cz" className="block overflow-hidden rounded-lg border border-alesvia-muted/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-alesvia-accent">
              <Image
                src="/previews/unplugged-home.png"
                width={1280}
                height={680}
                sizes="(max-width: 768px) calc(100vw - 48px), (max-width: 992px) calc(100vw - 96px), 896px"
                alt={d.preview_alt}
                className="h-auto w-full"
              />
            </a>
            <figcaption className="mt-3 text-sm text-alesvia-muted">{d.preview_caption}</figcaption>
          </figure>
          <a href="https://www.unplugged.cz" className="mt-6 inline-block underline underline-offset-4 hover:text-alesvia-accent-ink">{d.preview_link}</a>
        </section>

        <section className="border-t border-alesvia-muted/10 pt-16">
          <div className="on-dark bg-alesvia-primary text-alesvia-bg rounded-md px-8 py-12 md:px-16">
            <SectionLabel>{d.cta_label}</SectionLabel>
            <p className="text-alesvia-bg/80 text-lg leading-relaxed max-w-2xl mb-8">{d.cta_text}</p>
            <Link href={getPublicPath(lang, 'contact')} className="bg-alesvia-accent text-alesvia-text font-semibold px-8 py-4 rounded hover:bg-alesvia-accent/90 transition-colors shadow-md inline-block">
              {d.cta_label}
            </Link>
          </div>
        </section>
      </div>
      <CrisisSupport dict={dict.crisis_support} />
    </div>
  );
}
