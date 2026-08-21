"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

const LANGUAGES = [
  { key: "langSpanish", count: 18 },
  { key: "langEnglish", count: 12 },
  { key: "langPortuguese", count: 1 },
  { key: "langFrench", count: 1 },
  { key: "langDutch", count: 1 },
] as const;

export default function LanguagesSection() {
  const t = useTranslations("paisesMiembros");

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <SectionEyebrow>{t("langEyebrow")}</SectionEyebrow>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-celac-navy leading-tight">
            {t("langTitle")}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {LANGUAGES.map(({ key, count }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="rounded-sm bg-celac-gray border border-gray-200 p-6 text-center"
            >
              <p className="font-heading text-3xl sm:text-4xl font-bold text-celac-green mb-1.5">
                {count}
              </p>
              <p className="text-gray-500 text-xs sm:text-sm font-medium leading-snug">
                {t(key)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
