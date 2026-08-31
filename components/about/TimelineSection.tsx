"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { BR, MX, VE, CL, CU, DO, AR, CO } from "country-flag-icons/react/3x2";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

/* La bandera es la del país sede de cada hito, y va junto al lugar. El sitio
   original marca estos mismos ocho países en su línea de tiempo. */
const MILESTONES = [
  { key: "milestone1", Flag: BR },
  { key: "milestone2", Flag: MX },
  { key: "milestone3", Flag: VE },
  { key: "milestone4", Flag: CL },
  { key: "milestone5", Flag: CU },
  { key: "milestone6", Flag: DO },
  { key: "milestone7", Flag: AR },
  { key: "milestone8", Flag: CO },
] as const;

export default function TimelineSection() {
  const t = useTranslations("queEsCelac");

  return (
    <section className="py-20 md:py-28 bg-celac-navy-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <SectionEyebrow tone="dark">{t("timelineTitle")}</SectionEyebrow>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight">
            {t("timelineSubtitle")}
          </h2>
        </div>

        <div className="relative">
          {MILESTONES.map(({ key, Flag }, i) => {
            const place = t(`${key}Place` as "milestone1Place");
            const isLast = i === MILESTONES.length - 1;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className={`flex gap-4 sm:gap-8 ${isLast ? "" : "pb-10"}`}
              >
                <span className="shrink-0 w-24 sm:w-28 text-right">
                  <span className="font-heading text-lg sm:text-xl font-bold text-celac-green-light">
                    {t(`${key}Year` as "milestone1Year")}
                  </span>
                </span>
                <div className="relative shrink-0 w-2.5 flex justify-center">
                  <span className="z-10 w-2.5 h-2.5 rounded-full bg-celac-green mt-2" />
                  {!isLast && (
                    <span
                      aria-hidden
                      className="absolute left-1/2 -translate-x-1/2 top-2 -bottom-10 w-px bg-white/15"
                    />
                  )}
                </div>
                {/* `max-w-2xl`: sin tope, las descripciones se estiran a los
                    ~1180px del contenedor, que a 14px son unos 110 caracteres
                    por línea. */}
                <div className="pb-1 -mt-0.5 max-w-2xl">
                  <h3 className="font-heading font-bold text-white text-base sm:text-lg mb-1 leading-snug">
                    {t(`${key}Title` as "milestone1Title")}
                  </h3>
                  {place && (
                    <p className="flex items-center gap-2 text-celac-green-light text-xs font-semibold uppercase tracking-wide mb-1.5">
                      {/* Sin `title`: el texto de al lado ya nombra el país, así
                          que para un lector de pantalla la bandera es ruido. */}
                      <Flag
                        aria-hidden
                        className="w-5 h-auto rounded-[1px] shrink-0 ring-1 ring-white/20"
                      />
                      {place}
                    </p>
                  )}
                  <p className="text-white/55 text-sm leading-relaxed">
                    {t(`${key}Desc` as "milestone1Desc")}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
