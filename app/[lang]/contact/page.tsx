import type { Metadata } from 'next';
import { getDictionary, hasLocale, Locale } from '../../../dictionaries';
import PageHeader from '../../../components/PageHeader';
import ContactForm from '../../../components/ContactForm';
import { buildPageMetadata } from '../../../lib/metadata';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale = hasLocale(lang) ? lang : 'cs';
  const dict = await getDictionary(locale);
  return buildPageMetadata({
    locale,
    routeKey: 'contact',
    title: dict.contact.metadata_title,
    description: dict.contact.metadata_description,
  });
}

export default async function ContactPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const d = dict.contact;

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <PageHeader label={d.label} title={d.title} description={d.intro} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-24">
        <div className="bg-alesvia-surface/50 rounded-xl p-8 border border-alesvia-muted/10">
          <h3 className="font-serif text-xl font-bold text-alesvia-text mb-3">{d.general_label}</h3>
          <p className="text-alesvia-muted text-sm leading-relaxed mb-4">{d.general_text}</p>
          <a href="mailto:info@alesvia.org" className="text-alesvia-accent font-medium text-sm hover:text-alesvia-primary transition-colors">
            info@alesvia.org
          </a>
        </div>

        <div className="bg-alesvia-surface/50 rounded-xl p-8 border border-alesvia-muted/10">
          <h3 className="font-serif text-xl font-bold text-alesvia-text mb-3">{d.institutional_label}</h3>
          <p className="text-alesvia-muted text-sm leading-relaxed mb-4">{d.institutional_text}</p>
          <a href="mailto:partners@alesvia.org" className="text-alesvia-accent font-medium text-sm hover:text-alesvia-primary transition-colors">
            partners@alesvia.org
          </a>
        </div>

        <div className="bg-alesvia-surface/50 rounded-xl p-8 border border-alesvia-muted/10">
          <h3 className="font-serif text-xl font-bold text-alesvia-text mb-3">{d.media_label}</h3>
          <p className="text-alesvia-muted text-sm leading-relaxed mb-4">{d.media_text}</p>
          <a href="mailto:press@alesvia.org" className="text-alesvia-accent font-medium text-sm hover:text-alesvia-primary transition-colors">
            press@alesvia.org
          </a>
        </div>
      </div>

      <div className="pb-24">
        <ContactForm dict={d} lang={lang} />
      </div>

      <div className="pb-24">
        <h3 className="font-serif text-xl font-bold text-alesvia-text mb-3">{d.address_label}</h3>
        <p className="text-alesvia-muted">{d.address_placeholder}</p>
      </div>
    </div>
  );
}
