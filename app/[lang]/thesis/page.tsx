import type { Metadata } from 'next';
import Link from 'next/link';
import { hasLocale, Locale } from '../../../dictionaries';
import PageHeader from '../../../components/PageHeader';
import SectionLabel from '../../../components/SectionLabel';
import { getThesisContent } from '../../../content/thesis';
import { buildPageMetadata } from '../../../lib/metadata';
import { getPublicPath } from '../../../lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale = hasLocale(lang) ? lang : 'cs';
  const content = getThesisContent(locale);
  return buildPageMetadata({
    locale,
    routeKey: 'thesis',
    title: content.metadataTitle,
    description: content.metadataDescription,
  });
}

export default async function ThesisPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const content = getThesisContent(lang);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <PageHeader label={content.label} title={content.title} description={content.intro}>
        <div className="mt-10 glass rounded-2xl p-8 md:p-10 border border-alesvia-accent/15 max-w-3xl">
          <SectionLabel>{content.principleLabel}</SectionLabel>
          <p className="text-xl md:text-2xl font-light leading-relaxed text-alesvia-text">
            {content.principleText}
          </p>
        </div>
      </PageHeader>

      <div className="space-y-20 pb-24">
        {content.sections.map((section) => (
          <section key={section.heading} className="border-t border-alesvia-muted/10 pt-16 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-alesvia-text mb-8">
              {section.heading}
            </h2>
            <div className="space-y-6">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-lg text-alesvia-text leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            {section.points && (
              <ul className="mt-8 space-y-3 text-alesvia-muted">
                {section.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-base leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-alesvia-accent shrink-0" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <section className="pt-8">
          <div className="bg-[#0F2C59] text-alesvia-bg rounded-2xl p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-alesvia-accent/10 rounded-full blur-3xl -mr-12 -mt-12 pointer-events-none" />
            <div className="relative z-10 max-w-3xl">
              <SectionLabel>{content.closingLabel}</SectionLabel>
              <p className="text-alesvia-bg/85 text-lg md:text-xl leading-relaxed mb-8">
                {content.closingText}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={getPublicPath(lang, 'initiatives')}
                  className="bg-alesvia-accent text-alesvia-text font-semibold px-8 py-4 rounded-lg text-center"
                >
                  {content.primaryCta}
                </Link>
                <Link
                  href={getPublicPath(lang, 'contact')}
                  className="border border-alesvia-white/20 text-alesvia-white font-medium px-8 py-4 rounded-lg hover:bg-alesvia-white/10 transition-colors text-center"
                >
                  {content.secondaryCta}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
