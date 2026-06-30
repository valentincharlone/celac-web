"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { MessageSquare, Globe2, Leaf, Shield } from "lucide-react";

const PILLARS = [
  {
    key: "pillar1",
    icon: MessageSquare,
    color: "bg-pillar-green",
    lightColor: "bg-pillar-green/10",
    textColor: "text-pillar-green",
  },
  {
    key: "pillar2",
    icon: Globe2,
    color: "bg-pillar-sky",
    lightColor: "bg-pillar-sky/10",
    textColor: "text-pillar-sky",
  },
  {
    key: "pillar3",
    icon: Leaf,
    color: "bg-pillar-navy",
    lightColor: "bg-pillar-navy/10",
    textColor: "text-pillar-navy",
  },
  {
    key: "pillar4",
    icon: Shield,
    color: "bg-pillar-amber",
    lightColor: "bg-pillar-amber/10",
    textColor: "text-pillar-amber",
  },
] as const;

export default function PillarsSection() {
  const t = useTranslations("home");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-celac-navy mb-4">
            {t("pillarsTitle")}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Los cuatro ejes que guían el trabajo de la Comunidad de Estados
            Latinoamericanos y Caribeños.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map(({ key, icon: Icon, color, lightColor, textColor }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div
                className={`w-12 h-12 rounded-xl ${lightColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <Icon className={`${textColor}`} size={22} />
              </div>
              <h3 className={`font-heading font-bold text-base ${textColor} mb-2`}>
                {t(key)}
              </h3>
              <div className={`w-8 h-1 rounded-full ${color}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
