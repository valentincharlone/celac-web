"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  const t = useTranslations("home");
  const locale = useLocale();

  return (
    <section className="py-20 md:py-24 bg-linear-to-r from-celac-navy via-[#0b2436] to-[#103a3f]">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-center justify-between gap-8 text-center md:text-left"
      >
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug max-w-xl">
          {t("ctaBanner")}
        </h2>
        <Link
          href={`/${locale}/que-es-celac`}
          className="group shrink-0 inline-flex items-center gap-2 px-8 py-3 bg-celac-green text-white font-semibold rounded-lg hover:bg-celac-green-hover transition-colors"
        >
          {t("ctaButton")}
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </motion.div>
    </section>
  );
}
