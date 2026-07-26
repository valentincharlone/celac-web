"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

const LEVELS = ["how1", "how2", "how3", "how4", "how5"] as const;
// Alturas relativas de cada barra: representan el nivel de autoridad,
// de la Cumbre (máxima instancia) a las reuniones técnicas.

export default function HowItWorksSection() {
  const t = useTranslations("queEsCelac");

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <SectionEyebrow>{t("howTitle")}</SectionEyebrow>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-celac-navy leading-tight">
            {t("howSubtitle")}
          </h2>
        </div>

        <div className="border-t border-gray-200">
          {LEVELS.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="flex items-start gap-4 py-5 border-b border-gray-200"
            >
              <span className="shrink-0 w-6 text-celac-green font-heading font-bold text-sm pt-0.5">
                {i + 1}
              </span>
              <div>
                <h3 className="font-heading font-bold text-celac-navy text-base sm:text-lg mb-1 leading-snug">
                  {t(`${key}Title` as "how1Title")}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {t(`${key}Desc` as "how1Desc")}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
