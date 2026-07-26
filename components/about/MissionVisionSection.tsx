"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function MissionVisionSection() {
  const t = useTranslations("queEsCelac");

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden border border-gray-200 mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-10 sm:p-12 border-b md:border-b-0 md:border-r border-gray-200"
          >
            <span className="text-celac-green text-xs font-semibold uppercase tracking-[0.2em]">
              {t("missionLabel")}
            </span>
            <p className="font-heading text-2xl sm:text-3xl text-celac-navy leading-snug mt-4">
              {t("missionText")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-10 sm:p-12 bg-celac-navy"
          >
            <span className="text-celac-green text-xs font-semibold uppercase tracking-[0.2em]">
              {t("visionLabel")}
            </span>
            <p className="font-heading text-2xl sm:text-3xl text-white leading-snug mt-4">
              {t("visionText")}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-celac-navy mb-4 leading-snug">
            {t("whyTitle")}
          </h3>
          <p className="text-gray-500 leading-relaxed">{t("whyBody")}</p>
        </motion.div>
      </div>
    </section>
  );
}
