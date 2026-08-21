import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { localizedAlternates, socialMetadata } from "@/lib/site";
import PageHero from "@/components/common/PageHero";
import LanguagesSection from "@/components/countries/LanguagesSection";
import AchievementsSection from "@/components/countries/AchievementsSection";
import CountryGridSection from "@/components/countries/CountryGridSection";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "paisesMiembros" });
  const title = t("title");
  const description = t("lead");

  return {
    title,
    description,
    alternates: localizedAlternates(locale, "/paises-miembros"),
    ...socialMetadata({ locale, path: "/paises-miembros", title, description }),
  };
}

export default async function PaisesMiembrosPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "paisesMiembros" });
  const tNav = await getTranslations({ locale, namespace: "nav" });

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        lead={t("lead")}
        backgroundImage="/images/hero-map.png"
        breadcrumbs={[
          { label: tNav("home"), href: `/${locale}` },
          { label: t("title") },
        ]}
      />
      <LanguagesSection />
      <AchievementsSection />
      <CountryGridSection />
    </>
  );
}
