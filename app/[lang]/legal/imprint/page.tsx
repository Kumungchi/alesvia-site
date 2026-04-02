import type { Metadata } from 'next';
import { getDictionary, hasLocale, Locale } from '../../../../dictionaries';
import { buildPageMetadata } from '../../../../lib/metadata';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale = hasLocale(lang) ? lang : 'cs';
  const dict = await getDictionary(locale);
  return buildPageMetadata({
    locale,
    routeKey: 'legalImprint',
    title: dict.imprint.metadata_title,
    description: dict.imprint.metadata_description,
  });
}

export default async function ImprintPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const d = dict.imprint;

  const fields = [
    { label: d.registration_label, value: d.registration_text },
    { label: d.ico_label, value: d.ico_text },
    { label: d.address_label, value: d.address_text },
    { label: d.representative_label, value: d.representative_text },
    { label: d.contact_label, value: d.contact_text },
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 md:px-12 py-20">
      <h1 className="font-serif text-4xl font-bold text-alesvia-primary mb-4">{d.title}</h1>
      <p className="font-serif text-xl text-alesvia-text font-bold mb-12">{d.org_name}</p>

      <div className="space-y-8">
        {fields.map((field) => (
          <div key={field.label} className="border-b border-alesvia-muted/10 pb-6">
            <dt className="text-xs font-bold uppercase tracking-widest text-alesvia-muted mb-2">{field.label}</dt>
            <dd className="text-lg text-alesvia-text">{field.value}</dd>
          </div>
        ))}
      </div>
    </div>
  );
}
