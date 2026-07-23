"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Handshake, Megaphone, Sprout } from "lucide-react";

const LINES = [
  { key: "actionLine1", icon: Handshake },
  { key: "actionLine2", icon: Megaphone },
  { key: "actionLine3", icon: Sprout },
] as const;

export default function ActionLinesSection() {
  const t = useTranslations("home");

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto mb-16 text-center"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-celac-navy mb-4">
            {t("actionLinesTitle")}
          </h2>
          <p className="text-gray-500">{t("actionLinesSubtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LINES.map(({ key, icon: Icon }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="relative rounded-2xl border border-gray-200 p-6 overflow-hidden"
            >
              <span className="absolute top-4 right-5 font-heading text-4xl font-bold text-gray-100 select-none">
                0{i + 1}
              </span>
              <div className="relative w-11 h-11 rounded-lg bg-celac-green flex items-center justify-center mb-5">
                <Icon size={20} className="text-white" strokeWidth={1.75} />
              </div>
              <h3 className="relative font-heading text-lg font-bold text-celac-navy mb-2 leading-snug">
                {t(`${key}Title` as "actionLine1Title")}
              </h3>
              <p className="relative text-gray-500 text-sm leading-relaxed">
                {t(`${key}Desc` as "actionLine1Desc")}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
