import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { localizedAlternates, socialMetadata } from "@/lib/site";
import PageHero from "@/components/common/PageHero";
import MissionVisionSection from "@/components/about/MissionVisionSection";
import PrinciplesSection from "@/components/about/PrinciplesSection";
import HowItWorksSection from "@/components/about/HowItWorksSection";
import TimelineSection from "@/components/about/TimelineSection";
import PptSection from "@/components/about/PptSection";
import AgendaSection from "@/components/about/AgendaSection";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "queEsCelac" });
  const title = t("title");
  const description = t("lead");

  return {
    title,
    description,
    alternates: localizedAlternates(locale, "/que-es-celac"),
    ...socialMetadata({ locale, path: "/que-es-celac", title, description }),
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
      <AgendaSection />
    </>
  );
}
