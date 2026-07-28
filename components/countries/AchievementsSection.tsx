"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

const PARAGRAPHS = [
  "achievements1",
  "achievements2",
  "achievements3",
  "achievements4",
] as const;

export default function AchievementsSection() {
  const t = useTranslations("paisesMiembros");

  return (
    <section className="py-20 md:py-28 bg-celac-gray">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionEyebrow>{t("achievementsEyebrow")}</SectionEyebrow>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-celac-navy leading-tight mb-10">
          {t("achievementsTitle")}
        </h2>

        <div className="space-y-5">
          {PARAGRAPHS.map((key, i) => (
            <motion.p
              key={key}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="text-gray-600 leading-relaxed"
            >
              {t(key)}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
