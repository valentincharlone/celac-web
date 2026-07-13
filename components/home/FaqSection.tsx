"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";

const FAQS = [
  { q: "faqQ1", a: "faqA1" },
  { q: "faqQ2", a: "faqA2" },
  { q: "faqQ3", a: "faqA3" },
] as const;

export default function FaqSection() {
  const t = useTranslations("home");
  const locale = useLocale();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-pillar-sky/10 text-pillar-sky uppercase tracking-wide text-xs font-semibold mb-5">
            {t("faqTitle")}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-celac-navy mb-6 leading-tight">
            {t("faqLead")}
          </h2>
          <p className="text-gray-500 leading-relaxed max-w-xl mx-auto">
            {t("faqIntro")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border-t border-gray-200"
        >
          {FAQS.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <div
                key={q}
                className={`border-b border-gray-200 rounded-lg transition-colors ${
                  isOpen ? "bg-celac-gray" : ""
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start gap-4 px-4 py-6 text-left"
                >
                  <span className="font-heading text-sm font-bold text-pillar-green shrink-0 pt-0.5">
                    0{i + 1}
                  </span>
                  <span
                    className={`flex-1 font-heading font-semibold text-base sm:text-lg ${
                      isOpen ? "text-celac-navy" : "text-gray-700"
                    }`}
                  >
                    {t(q)}
                  </span>
                  <Plus
                    size={20}
                    className={`shrink-0 text-pillar-green transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-500 leading-relaxed pb-6 pl-10 pr-8">
                        {t(a)}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="font-heading font-bold text-celac-navy mb-1">
            {t("faqContactTitle")}
          </p>
          <p className="text-gray-500 text-sm mb-4">{t("faqContactBody")}</p>
          <Link
            href={`/${locale}/contacto`}
            className="group inline-flex items-center gap-2 text-celac-navy font-semibold text-sm border-b-2 border-pillar-green pb-0.5 hover:gap-3 transition-all"
          >
            {t("faqContactCta")}
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
