"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

const STATS = [
  { valueKey: "statsCountries", number: 33, suffix: "" },
  { valueKey: "statsSummits", number: 8, suffix: "" },
  { valueKey: "statsAreas", number: 18, suffix: "" },
  { valueKey: "statsCitizens", number: 620, suffix: "M" },
] as const;

const COUNT_DURATION = 1500;

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
  const reduceMotion = useReducedMotion();

  /* Con reduced-motion se muestra el valor final directamente, sin pasar por el
     estado: así el efecto de abajo no corre y no hace falta un setState. */
  const display = reduceMotion ? target : count;

  useEffect(() => {
    if (!inView || reduceMotion) return;

    /* El progreso se calcula sobre el tiempo transcurrido, no sumando un paso
       fijo por tick: así los cuatro contadores terminan juntos a los 1500ms sin
       importar su magnitud. Con el paso fijo, el 8 tardaba 128ms y el 620,
       1424ms. requestAnimationFrame además va sincronizado al refresh. */
    let raf = 0;
    const started = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - started) / COUNT_DURATION, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, reduceMotion]);

  return (
    <span ref={ref}>
      <span aria-hidden>
        {display}
        {suffix}
      </span>
      {/* El valor final, para que un lector de pantalla no anuncie un número
          intermedio de la animación. */}
      <span className="sr-only">
        {target}
        {suffix}
      </span>
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
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            {t("missionSubtitle")}
          </h2>
        </motion.div>

        {/* Grid en vez de flex-wrap: con wrap, el separador `border-l` quedaba
            colgando al inicio de cada fila nueva. Acá el borde depende de la
            posición en la grilla — 2 columnas en mobile, 4 desde md. */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10">
          {STATS.map(({ valueKey, number, suffix }, i) => (
            <motion.div
              key={valueKey}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className={`flex flex-col items-center text-center px-3 sm:px-5 border-white/15 md:border-l md:first:border-l-0 ${
                i % 2 === 1 ? "border-l" : ""
              }`}
            >
              <span className="font-heading text-4xl sm:text-5xl font-bold text-celac-green">
                <AnimatedCounter target={number} suffix={suffix} />
              </span>
              <span className="mt-2 text-white/50 text-xs sm:text-sm font-medium uppercase tracking-wide">
                {t(valueKey)}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
