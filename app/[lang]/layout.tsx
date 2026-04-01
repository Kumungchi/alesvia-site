import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { getDictionary, hasLocale, Locale } from "../../dictionaries";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700", "900"], variable: "--font-playfair" });

const fallbackLocale: Locale = "cs";

const resolveLocale = async (params: Promise<{ lang: string }>): Promise<Locale> => {
  const { lang } = await params;
  return hasLocale(lang) ? lang : fallbackLocale;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const dict = await getDictionary(locale);

  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
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
  return (
    <html lang={lang}>
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-statera-bg text-statera-text antialiased`}>
        {children}
      </body>
    </html>
  );
}
