import { getTranslations } from "next-intl/server";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import MissionSection from "@/components/home/MissionSection";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import ActionLinesSection from "@/components/home/ActionLinesSection";
import NewsSection from "@/components/home/NewsSection";
import FaqSection from "@/components/home/FaqSection";
import CtaBanner from "@/components/common/CtaBanner";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhatWeDoSection />
      {/* Mission va acá y no antes de WhatWeDo: es el único bloque oscuro del
          cuerpo, y a mitad de página reparte el peso visual en vez de rebotar
          contra el hero. Además cierra la secuencia quiénes somos → qué
          hacemos → los números. */}
      <MissionSection />
      <NewsSection />
      <ActionLinesSection />
      <FaqSection />
      <CtaBanner
        title={t("ctaBanner")}
        ctaLabel={t("ctaButton")}
        href={`/${locale}/que-es-celac`}
      />
    </>
  );
}
