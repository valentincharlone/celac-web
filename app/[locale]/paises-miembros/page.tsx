import { getTranslations } from "next-intl/server";
import PageHero from "@/components/common/PageHero";
import LanguagesSection from "@/components/countries/LanguagesSection";
import AchievementsSection from "@/components/countries/AchievementsSection";
import CountryGridSection from "@/components/countries/CountryGridSection";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "paisesMiembros" });
  return {
    title: t("title"),
    description: t("lead"),
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
        backgroundImage="/images/bg-2.jpg"
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
