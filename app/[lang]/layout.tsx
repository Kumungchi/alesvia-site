import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { getDictionary, hasLocale, Locale } from "../../dictionaries";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import JsonLd from "../../components/JsonLd";
import ScrollProgress from "../../components/ScrollProgress";
import { getAbsoluteUrl, getSiteOrigin } from "../../lib/site";
import { getPublicPath } from "../../lib/routes";
import { ConvexClientProvider } from "../../components/ConvexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from '@vercel/analytics/react';
import { headers } from "next/headers";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700", "900"], variable: "--font-playfair" });

const fallbackLocale: Locale = "cs";

const resolveLocale = async (params: Promise<{ lang: string }>): Promise<Locale> => {
  const { lang } = await params;
  return hasLocale(lang) ? lang : fallbackLocale;
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'cs' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const dict = await getDictionary(locale);
  const siteOrigin = getSiteOrigin();
  const homepage = getAbsoluteUrl(getPublicPath(locale, 'home'));

  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    metadataBase: new URL(siteOrigin),
    alternates: {
      canonical: homepage,
      languages: {
        en: getAbsoluteUrl(getPublicPath('en', 'home')),
        cs: getAbsoluteUrl(getPublicPath('cs', 'home')),
      },
    },
    openGraph: {
      title: dict.metadata.title,
      description: dict.metadata.description,
      url: homepage,
      siteName: 'Alesvia',
      locale: locale === 'cs' ? 'cs_CZ' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.metadata.title,
      description: dict.metadata.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const lang = await resolveLocale(params);
  const dict = await getDictionary(lang);
  const siteOrigin = getSiteOrigin();

  const headersList = await headers();
  const dnt = headersList.get('dnt');
  const shouldTrack = dnt !== '1';

  return (
    <ClerkProvider>
      <html lang={lang}>
        <body className={`${inter.variable} ${playfair.variable} font-sans bg-alesvia-bg text-alesvia-text antialiased`}>
          <ConvexClientProvider>
            <JsonLd data={{
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Alesvia',
              alternateName: 'Alesvia z.ú.',
              url: siteOrigin,
              description: dict.metadata.description,
              foundingLocation: {
                '@type': 'Place',
                name: 'Czech Republic',
              },
              legalName: 'Alesvia z.ú.',
              nonprofitStatus: 'RegisteredNonprofit',
              sameAs: [],
              knowsAbout: [
                'Human autonomy',
                'AI ethics',
                'Conversational AI',
                'Digital wellbeing',
                'Algorithmic literacy',
                'AI policy',
                'Ethical AI investment',
              ],
            }} />
            <JsonLd data={{
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Alesvia',
              url: siteOrigin,
              inLanguage: [lang === 'cs' ? 'cs-CZ' : 'en-US'],
            }} />
            <ScrollProgress />
            <div className="min-h-screen flex flex-col noise-overlay">
              <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-alesvia-primary focus:text-alesvia-bg focus:px-6 focus:py-3 focus:rounded-lg focus:text-sm focus:font-medium focus:shadow-lg"
              >
                {lang === 'cs' ? 'Přeskočit na obsah' : 'Skip to content'}
              </a>
              <Navbar dict={dict.nav} lang={lang} />
              <main id="main-content" className="flex-1" role="main">
                {children}
              </main>
              <Footer dict={dict.footer} lang={lang} />
            </div>
          </ConvexClientProvider>
          {shouldTrack && <Analytics />}
        </body>
      </html>
    </ClerkProvider>
  );
}
