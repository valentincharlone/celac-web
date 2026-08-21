import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { OG_IMAGE, SITE_NAME, SITE_URL, localizedAlternates, socialMetadata } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "site" });
  const title = t("title");
  const description = t("description");

  return {
    title: { default: title, template: `%s | ${SITE_NAME}` },
    description,
    alternates: localizedAlternates(locale),
    ...socialMetadata({ locale, title, description }),
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "es" | "en" | "pt")) {
    notFound();
  }

  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "site" });

  /* Ficha de la organización para los buscadores: es lo que alimenta el panel
     de conocimiento y desambigua a la CELAC de otras siglas homónimas. */
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: t("organizationName"),
    alternateName: SITE_NAME,
    url: `${SITE_URL}/${locale}`,
    logo: `${SITE_URL}/images/logo-celac-color.png`,
    image: `${SITE_URL}${OG_IMAGE}`,
    description: t("description"),
    foundingDate: "2011-12-03",
    foundingLocation: { "@type": "Place", name: "Caracas, Venezuela" },
    email: "info@celac.cloud",
    sameAs: [`${SITE_URL}/${locale}/que-es-celac`],
  };

  return (
    <html lang={locale} className={`${inter.variable} ${fraunces.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
