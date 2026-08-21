"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
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

  /* Structured data: es el motivo principal por el que conviene tener las FAQ
     en la home. Se arma con los mismos textos traducidos que se pintan abajo. */
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(({ q, a }) => ({
      "@type": "Question",
      name: t(q),
      acceptedAnswer: { "@type": "Answer", text: t(a) },
    })),
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* ── Columna izquierda: intro + contacto ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-28 self-start"
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-celac-navy mb-6 leading-tight">
              {t("faqLead")}
            </h2>
            <p className="text-gray-500 leading-relaxed mb-10">
              {t("faqIntro")}
            </p>

            <div className="pt-8 border-t border-gray-200">
              <p className="font-heading font-bold text-celac-navy mb-1">
                {t("faqContactTitle")}
              </p>
              <p className="text-gray-500 text-sm mb-4">
                {t("faqContactBody")}
              </p>
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
            </div>
          </motion.div>

          {/* ── Columna derecha: preguntas ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {FAQS.map(({ q, a }, i) => {
              const isOpen = open === i;
              const buttonId = `faq-trigger-${i}`;
              const panelId = `faq-panel-${i}`;
              return (
                <div
                  key={q}
                  className={`border-b border-gray-200 rounded-sm transition-colors ${
                    isOpen ? "bg-celac-gray" : ""
                  }`}
                >
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full flex items-start gap-4 px-4 py-6 text-left cursor-pointer"
                  >
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
                  {/* El panel queda siempre montado —colapsa por altura en vez
                      de desmontarse— para que las tres respuestas estén en el
                      HTML y se indexen. `inert` lo saca del árbol de
                      accesibilidad y del foco mientras está cerrado. */}
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    inert={!isOpen}
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-500 leading-relaxed pb-6 pl-4 pr-8">
                      {t(a)}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
