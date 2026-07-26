"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  CL,
  CU,
  CR,
  EC,
  DO,
  SV,
  BO,
  MX,
  AR,
  VC,
  HN,
  CO,
} from "country-flag-icons/react/3x2";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

const PPT = [
  { key: "ppt1", Flag: CL, years: "2012", current: false },
  { key: "ppt2", Flag: CU, years: "2013", current: false },
  { key: "ppt3", Flag: CR, years: "2014", current: false },
  { key: "ppt4", Flag: EC, years: "2015", current: false },
  { key: "ppt5", Flag: DO, years: "2016", current: false },
  { key: "ppt6", Flag: SV, years: "2017–2018", current: false },
  { key: "ppt7", Flag: BO, years: "2019", current: false },
  { key: "ppt8", Flag: MX, years: "2020–2021", current: false },
  { key: "ppt9", Flag: AR, years: "2022", current: false },
  { key: "ppt10", Flag: VC, years: "2023", current: false },
  { key: "ppt11", Flag: HN, years: "2024", current: false },
  { key: "ppt12", Flag: CO, years: "2025", current: true },
] as const;

export default function PptSection() {
  const t = useTranslations("queEsCelac");

  return (
    <section className="py-20 md:py-28 bg-celac-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <SectionEyebrow>{t("pptTitle")}</SectionEyebrow>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-celac-navy leading-tight">
            {t("pptSubtitle")}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {PPT.map(({ key, Flag, years, current }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, duration: 0.35 }}
              className={`rounded-xl bg-white border p-5 flex items-center gap-3 ${
                current ? "border-celac-amber" : "border-gray-200"
              }`}
            >
              <Flag
                title={t(`${key}Country` as "ppt1Country")}
                className="w-7 h-auto rounded-[3px] shrink-0 ring-1 ring-black/5"
              />
              <div className="min-w-0">
                <p className="font-heading font-bold text-celac-navy text-sm leading-snug">
                  {t(`${key}Country` as "ppt1Country")}
                </p>
                <p
                  className={`text-xs font-semibold uppercase tracking-wide ${
                    current ? "text-celac-amber" : "text-gray-400"
                  }`}
                >
                  {years}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
