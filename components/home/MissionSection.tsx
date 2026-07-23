"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

const STATS = [
  { valueKey: "statsCountries", number: 33, suffix: "" },
  { valueKey: "statsSummits", number: 8, suffix: "" },
  { valueKey: "statsAreas", number: 18, suffix: "" },
  { valueKey: "statsCitizens", number: 620, suffix: "M" },
] as const;

function AnimatedCounter({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function MissionSection() {
  const t = useTranslations("home");

  return (
    <section className="py-20 md:py-28 bg-celac-navy-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <SectionEyebrow align="center" tone="dark">
            {t("missionTitle")}
          </SectionEyebrow>
          <p className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            {t("missionSubtitle")}
          </p>
        </motion.div>

        <div className="flex flex-wrap items-baseline justify-center gap-y-6">
          {STATS.map(({ valueKey, number, suffix }, i) => (
            <motion.div
              key={valueKey}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex items-baseline gap-2 px-3 sm:px-5 border-l border-white/15 first:border-0 first:pl-0 last:pr-0"
            >
              <span className="font-heading text-2xl sm:text-3xl font-bold text-celac-green">
                <AnimatedCounter target={number} suffix={suffix} />
              </span>
              <span className="text-white/50 text-xs sm:text-sm font-medium uppercase tracking-wide">
                {t(valueKey)}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
