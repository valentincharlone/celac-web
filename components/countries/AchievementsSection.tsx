"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

const ACHIEVEMENTS = [
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
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-celac-navy leading-tight mb-12">
          {t("achievementsTitle")}
        </h2>

        {/* Los cuatro párrafos venían del WordPress como texto corrido, sin
            división: ~2500 caracteres seguidos donde se perdían los hitos.
            Cada uno lleva ahora su año y su título, separados por una línea
            fina en vez de cajas, para no romper el tono del texto. */}
        <div className="border-t border-gray-200">
          {ACHIEVEMENTS.map((key, i) => (
            <motion.article
              key={key}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="py-8 border-b border-gray-200"
            >
              <p className="text-celac-green text-xs font-semibold uppercase tracking-[0.2em] mb-2">
                {t(`${key}Label` as "achievements1Label")}
              </p>
              <h3 className="font-heading font-bold text-celac-navy text-lg sm:text-xl mb-3 leading-snug">
                {t(`${key}Title` as "achievements1Title")}
              </h3>
              <p className="text-gray-600 leading-relaxed">{t(key)}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
