"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function AboutHeader() {
  const t = useTranslations("queEsCelac");

  return (
    <section className="relative bg-celac-navy pt-40 pb-24 md:pt-48 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-celac-navy-2/60 via-celac-navy to-celac-navy" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center mb-6 px-4 py-1.5 rounded-full border border-celac-green/40 bg-celac-green/10 text-celac-green text-xs font-semibold tracking-widest uppercase">
            {t("eyebrow")}
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            {t("title")}
          </h1>
          <p className="text-white/65 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            {t("lead")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
