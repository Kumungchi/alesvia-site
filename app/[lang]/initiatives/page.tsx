import type { Metadata } from 'next';
import { getDictionary, hasLocale, Locale } from '../../../dictionaries';
import PageHeader from '../../../components/PageHeader';
import InitiativeCard from '../../../components/InitiativeCard';
import { buildPageMetadata } from '../../../lib/metadata';
import { getPublicPath } from '../../../lib/routes';

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
  const eco = dict.ecosystem;

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <PageHeader label={d.label} title={d.title} description={d.intro} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-24">
        <InitiativeCard
          icon="U"
          title={eco.unplugged_title}
          description={eco.unplugged_desc}
          status="active"
          statusLabel={eco.status_active}
          href={getPublicPath(lang, 'initiativeUnplugged')}
          linkText={eco.unplugged_link}
          variant="featured"
        />
        <InitiativeCard
          icon="A"
          title={eco.academy_title}
          description={eco.academy_desc}
          status="incubating"
          statusLabel={eco.status_incubating}
          href={getPublicPath(lang, 'initiativeAcademy')}
          variant="premium"
        />
        <InitiativeCard
          icon="Pr"
          title={eco.practitioners_title}
          description={eco.practitioners_desc}
          status="incubating"
          statusLabel={eco.status_incubating}
          href={getPublicPath(lang, 'initiativePractitioners')}
        />
        <InitiativeCard
          icon="P"
          title={eco.policy_title}
          description={eco.policy_desc}
          status="incubating"
          statusLabel={eco.status_incubating}
          href={getPublicPath(lang, 'initiativePolicyLab')}
        />
      </div>
    </div>
  );
}
