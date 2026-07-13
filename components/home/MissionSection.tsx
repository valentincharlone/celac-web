"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { valueKey: "statsCountries", number: 33, suffix: "", text: "text-pillar-green" },
  { valueKey: "statsSummits", number: 8, suffix: "", text: "text-pillar-sky" },
  { valueKey: "statsAreas", number: 18, suffix: "", text: "text-pillar-navy" },
  { valueKey: "statsCitizens", number: 620, suffix: "M", text: "text-pillar-amber" },
] as const;

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
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
    <section className="py-20 md:py-28 bg-celac-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-gray-400 uppercase tracking-wide text-sm font-medium">
              {t("missionTitle")}
            </span>
            <span className="h-px w-10 bg-pillar-green" />
          </div>
          <p className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-celac-navy leading-tight">
            {t("missionSubtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 lg:divide-x divide-gray-300/70">
          {STATS.map(({ valueKey, number, suffix, text }, i) => (
            <motion.div
              key={valueKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="px-4 py-6 lg:py-2 text-center"
            >
              <p
                className={`font-heading text-4xl sm:text-5xl font-bold mb-2 ${text}`}
              >
                <AnimatedCounter target={number} suffix={suffix} />
              </p>
              <p className="text-gray-500 text-xs sm:text-sm font-medium uppercase tracking-wide">
                {t(valueKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
