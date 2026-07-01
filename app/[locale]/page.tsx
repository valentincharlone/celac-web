import { useTranslations } from "next-intl";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import MissionSection from "@/components/home/MissionSection";
import StatsSection from "@/components/home/StatsSection";
import ActionLinesSection from "@/components/home/ActionLinesSection";
import CtaBanner from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <StatsSection />
      <ActionLinesSection />
      <CtaBanner />
    </>
  );
}
