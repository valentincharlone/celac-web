"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { MessageSquare, Globe2, Leaf, Shield } from "lucide-react";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

/* Un solo acento de marca para los cuatro pilares: el color no distingue nada
   entre ellos, así que rotarlo solo agregaba ruido. */
const PILLARS = [
  { key: "pillar1", icon: MessageSquare },
  { key: "pillar2", icon: Globe2 },
  { key: "pillar3", icon: Leaf },
  { key: "pillar4", icon: Shield },
] as const;

export default function AboutSection() {
  const t = useTranslations("home");

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionEyebrow>{t("aboutTitle")}</SectionEyebrow>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-celac-navy mb-6 leading-tight">
            {t("aboutLead")}
          </h2>
          <p className="text-gray-500 leading-relaxed">{t("aboutBody")}</p>
        </motion.div>

        <div>
          {PILLARS.map(({ key, icon: Icon }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex items-start gap-4 py-5 border-b border-gray-100 first:pt-0 last:border-0 last:pb-0"
            >
              <div className="shrink-0 w-10 h-10 rounded-md bg-celac-green/10 flex items-center justify-center">
                <Icon
                  size={18}
                  className="text-celac-green"
                  strokeWidth={1.75}
                  aria-hidden
                />
              </div>
              <div>
                <h3 className="font-heading font-bold text-celac-navy text-base mb-1">
                  {t(key)}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {t(`${key}Desc`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
