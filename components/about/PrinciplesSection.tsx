"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

const PRINCIPLES = [
  "principle1",
  "principle2",
  "principle3",
  "principle4",
] as const;

export default function PrinciplesSection() {
  const t = useTranslations("queEsCelac");

  return (
    <section className="py-20 md:py-28 bg-celac-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <SectionEyebrow>{t("principlesTitle")}</SectionEyebrow>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-celac-navy leading-tight">
            {t("principlesSubtitle")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
          {PRINCIPLES.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="border-l-2 border-celac-green pl-5"
            >
              <h3 className="font-heading font-bold text-celac-navy text-lg mb-1.5">
                {t(`${key}Title` as "principle1Title")}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t(`${key}Desc` as "principle1Desc")}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
