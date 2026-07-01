"use client";

import { useTranslations } from "next-intl";
import { motion, type Variants } from "framer-motion";

const HIGHLIGHT_COLORS = [
  "text-pillar-green",
  "text-pillar-sky",
  "text-pillar-amber",
] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { y: "110%" },
  show: {
    y: "0%",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function MissionSection() {
  const t = useTranslations("home");

  const highlight = (className: string) => {
    const Highlight = (chunks: React.ReactNode) => (
      <span className="inline-block overflow-hidden align-bottom pb-1 -mb-1">
        <motion.span variants={item} className={`inline-block ${className}`}>
          {chunks}
        </motion.span>
      </span>
    );

    return Object.assign(Highlight, {
      displayName: `Highlight(${className})`,
    });
  };

  return (
    <section className="py-20 md:py-28 bg-celac-gray">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-gray-500 text-sm sm:text-base">
            {t("missionTitle")}
          </span>
        </div>
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold text-celac-navy leading-tight"
        >
          {t.rich("missionSubtitle", {
            hl1: highlight(HIGHLIGHT_COLORS[0]),
            hl2: highlight(HIGHLIGHT_COLORS[1]),
            hl3: highlight(HIGHLIGHT_COLORS[2]),
          })}
        </motion.p>
      </motion.div>
    </section>
  );
}
