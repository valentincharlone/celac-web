"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { MessageSquare, Globe2, Leaf, Shield } from "lucide-react";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

const PILLARS = [
  {
    key: "pillar1",
    icon: MessageSquare,
    tint: "bg-pillar-green/10",
    text: "text-pillar-green",
  },
  {
    key: "pillar2",
    icon: Globe2,
    tint: "bg-pillar-sky/10",
    text: "text-pillar-sky",
  },
  {
    key: "pillar3",
    icon: Leaf,
    tint: "bg-pillar-navy/10",
    text: "text-pillar-navy",
  },
  {
    key: "pillar4",
    icon: Shield,
    tint: "bg-pillar-amber/10",
    text: "text-pillar-amber",
  },
] as const;

export default function AboutSection() {
  const t = useTranslations("home");

  return (
    <section className="py-26 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionEyebrow>{t("aboutTitle")}</SectionEyebrow>
          <h2 className="font-heading text-4xl sm:text-6xl font-bold text-celac-navy mb-6 leading-16">
            {t("aboutLead")}
          </h2>
          <p className="text-gray-500 leading-relaxed">{t("aboutBody")}</p>
        </motion.div>

        <div className="mt-6">
          {PILLARS.map(({ key, icon: Icon, tint, text }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex items-start gap-4 py-5 border-b border-gray-100 first:pt-0 last:border-0 last:pb-0"
            >
              <div
                className={`shrink-0 w-10 h-10 rounded-lg ${tint} flex items-center justify-center`}
              >
                <Icon size={18} className={text} strokeWidth={1.75} />
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
