import type { Metadata } from 'next';
import { getDictionary, hasLocale, Locale } from '../../../../dictionaries';
import { buildPageMetadata } from '../../../../lib/metadata';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale = hasLocale(lang) ? lang : 'cs';
  const dict = await getDictionary(locale);
  return buildPageMetadata({
    locale,
    routeKey: 'legalTerms',
    title: dict.terms.metadata_title,
    description: dict.terms.metadata_description,
  });
}

export default async function TermsPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const d = dict.terms;

  return (
    <div className="max-w-3xl mx-auto px-6 md:px-12 py-20">
      <h1 className="font-serif text-4xl font-bold text-alesvia-primary mb-2">{d.title}</h1>
      <p className="text-sm text-alesvia-muted mb-12">{d.last_updated}</p>
      <p className="text-lg text-alesvia-text leading-relaxed mb-12">{d.intro}</p>

      <div className="space-y-10">
        {d.sections.map((section: { heading: string; content: string }, i: number) => (
          <section key={i}>
            <h2 className="font-serif text-xl font-bold text-alesvia-text mb-3">{section.heading}</h2>
            <p className="text-alesvia-muted leading-relaxed">{section.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
