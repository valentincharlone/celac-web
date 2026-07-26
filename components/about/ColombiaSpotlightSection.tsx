"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function ColombiaSpotlightSection() {
  const t = useTranslations("queEsCelac");
  const topics = t("spotlightTopics")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-celac-amber/30 bg-celac-amber/5 p-8 sm:p-12"
        >
          <span className="inline-flex items-center mb-5 px-4 py-1.5 rounded-full border border-celac-amber/40 bg-celac-amber/10 text-celac-amber text-xs font-semibold tracking-widest uppercase">
            {t("spotlightEyebrow")}
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-celac-navy mb-4 leading-tight">
            {t("spotlightTitle")}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl">
            {t("spotlightBody")}
          </p>

          <p className="text-celac-navy font-semibold text-sm mb-3">
            {t("spotlightTopicsLabel")}
          </p>
          <div className="flex flex-wrap gap-2">
            {topics.map((topic) => (
              <span
                key={topic}
                className="px-3 py-1.5 rounded-full bg-white border border-celac-amber/30 text-celac-navy text-sm"
              >
                {topic}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
