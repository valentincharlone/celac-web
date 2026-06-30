import { useTranslations } from "next-intl";
import HeroSection from "@/components/home/HeroSection";
import PillarsSection from "@/components/home/PillarsSection";
import StatsSection from "@/components/home/StatsSection";
import ActionLinesSection from "@/components/home/ActionLinesSection";
import CtaBanner from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PillarsSection />
      <StatsSection />
      <ActionLinesSection />
      <CtaBanner />
    </>
  );
}
