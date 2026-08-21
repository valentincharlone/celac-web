import { getTranslations } from "next-intl/server";
import PageHero from "@/components/common/PageHero";
import CtaBanner from "@/components/common/CtaBanner";
import MissionVisionSection from "@/components/about/MissionVisionSection";
import PrinciplesSection from "@/components/about/PrinciplesSection";
import HowItWorksSection from "@/components/about/HowItWorksSection";
import TimelineSection from "@/components/about/TimelineSection";
import PptSection from "@/components/about/PptSection";
import ColombiaSpotlightSection from "@/components/about/ColombiaSpotlightSection";
import AgendaSection from "@/components/about/AgendaSection";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "queEsCelac" });
  return {
    title: t("title"),
    description: t("lead"),
  };
}

export default async function QueEsCelacPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "queEsCelac" });
  const tNav = await getTranslations({ locale, namespace: "nav" });

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        lead={t("lead")}
        backgroundImage="/images/celac-2011-scaled.jpg"
        backgroundPosition="center top"
        backgroundTone="photo"
        breadcrumbs={[
          { label: tNav("home"), href: `/${locale}` },
          { label: t("title") },
        ]}
      />
      <MissionVisionSection />
      <PrinciplesSection />
      <HowItWorksSection />
      <TimelineSection />
      <PptSection />
      <ColombiaSpotlightSection />
      <AgendaSection />
      <CtaBanner
        title={t("closingTitle")}
        ctaLabel={t("closingCta")}
        href={`/${locale}/paises-miembros`}
      />
    </>
  );
}
