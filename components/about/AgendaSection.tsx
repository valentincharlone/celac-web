"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function AgendaSection() {
  const t = useTranslations("queEsCelac");
  const topics = t("agendaTopics")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <section className="py-20 md:py-28 bg-celac-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-celac-navy mb-4 leading-tight">
          {t("agendaTitle")}
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto mb-12">
          {t("agendaSubtitle")}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2.5"
        >
          {topics.map((topic) => (
            <span
              key={topic}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white border border-gray-200 text-celac-navy text-sm font-medium"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-celac-green shrink-0" />
              {topic}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
