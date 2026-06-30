"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { valueKey: "statsCountries", number: 33, suffix: "" },
  { valueKey: "statsSummits", number: 8, suffix: "" },
  { valueKey: "statsAreas", number: 18, suffix: "" },
  { valueKey: "statsCitizens", number: 620, suffix: "M" },
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

export default function StatsSection() {
  const t = useTranslations("home");

  return (
    <section className="py-16 bg-celac-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map(({ valueKey, number, suffix }, i) => (
            <motion.div
              key={valueKey}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="text-center"
            >
              <p className="font-heading text-4xl sm:text-5xl font-bold text-celac-navy mb-2">
                <AnimatedCounter target={number} suffix={suffix} />
              </p>
              <p className="text-gray-500 text-sm font-medium">{t(valueKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
