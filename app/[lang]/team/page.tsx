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
    <div className="site-page">
      <PageHeader label={d.label} title={d.title} description={d.intro} />

      <div className="space-y-16 pb-24">
        <section aria-labelledby="founder-name" className="content-section max-w-3xl border-t border-alesvia-text/15 pt-10">
          <SectionLabel>{d.founder_label}</SectionLabel>
          <h3 id="founder-name" className="font-serif text-3xl md:text-4xl font-bold text-alesvia-text">{d.founder_name}</h3>
          <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-alesvia-primary">{d.founder_role}</p>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-alesvia-text">
            {d.founder_bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="content-section max-w-3xl border-t border-alesvia-text/15 pt-10">
          <SectionLabel>{d.board_label}</SectionLabel>
          <p className="text-alesvia-muted max-w-3xl">{d.board_text}</p>
        </section>
      </div>
    </div>
  );
}
