"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import {
  AG,
  AR,
  BS,
  BB,
  BZ,
  BO,
  BR,
  CL,
  CO,
  CR,
  CU,
  DM,
  EC,
  SV,
  GD,
  GT,
  GY,
  HT,
  HN,
  JM,
  MX,
  NI,
  PA,
  PY,
  PE,
  DO,
  KN,
  LC,
  VC,
  SR,
  TT,
  UY,
  VE,
} from "country-flag-icons/react/3x2";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

const COUNTRIES = [
  { key: "c1", Flag: AG, url: "https://ab.gov.ag/" },
  { key: "c2", Flag: AR, url: "https://www.argentina.gob.ar/" },
  { key: "c3", Flag: BS, url: "https://www.bahamas.gov.bs/" },
  { key: "c4", Flag: BB, url: "https://www.gov.bb/" },
  { key: "c5", Flag: BZ, url: "https://www.belize.gov.bz/" },
  { key: "c6", Flag: BO, url: "https://www.gob.bo/" },
  { key: "c7", Flag: BR, url: "https://www.gov.br/" },
  { key: "c8", Flag: CL, url: "https://www.gob.cl/" },
  { key: "c9", Flag: CO, url: "https://www.gov.co/" },
  { key: "c10", Flag: CR, url: "https://www.presidencia.go.cr/" },
  { key: "c11", Flag: CU, url: "https://www.presidencia.gob.cu/" },
  { key: "c12", Flag: DM, url: "https://dominica.gov.dm/" },
  { key: "c13", Flag: EC, url: "https://www.gob.ec/" },
  { key: "c14", Flag: SV, url: "https://www.presidencia.gob.sv/" },
  { key: "c15", Flag: GD, url: "https://gov.gd/" },
  { key: "c16", Flag: GT, url: "https://guatemala.gob.gt/" },
  { key: "c17", Flag: GY, url: "https://dpi.gov.gy/" },
  { key: "c18", Flag: HT, url: "https://communication.gouv.ht/" },
  { key: "c19", Flag: HN, url: "https://www.presidencia.gob.hn/" },
  { key: "c20", Flag: JM, url: "https://www.gov.jm/" },
  { key: "c21", Flag: MX, url: "https://www.gob.mx/" },
  { key: "c22", Flag: NI, url: undefined },
  { key: "c23", Flag: PA, url: "https://portalunico.gob.pa/" },
  { key: "c24", Flag: PY, url: "https://www.paraguay.gov.py/" },
  { key: "c25", Flag: PE, url: "https://www.gob.pe/" },
  { key: "c26", Flag: DO, url: "https://www.gob.do/" },
  { key: "c27", Flag: KN, url: "https://www.gov.kn/" },
  { key: "c28", Flag: LC, url: "https://www.govt.lc/" },
  { key: "c29", Flag: VC, url: "https://www.gov.vc/" },
  { key: "c30", Flag: SR, url: "https://gov.sr/" },
  { key: "c31", Flag: TT, url: "https://www.ttconnect.gov.tt/" },
  { key: "c32", Flag: UY, url: "https://www.gub.uy/" },
  { key: "c33", Flag: VE, url: undefined },
] as const;

export default function CountryGridSection() {
  const t = useTranslations("paisesMiembros");

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <SectionEyebrow>{t("gridEyebrow")}</SectionEyebrow>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-celac-navy leading-tight mb-4">
            {t("gridTitle")}
          </h2>
          <p className="text-gray-500 leading-relaxed">{t("gridLead")}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {COUNTRIES.map(({ key, Flag, url }, i) => {
            const name = t(`${key}Country` as "c1Country");
            const cardProps = {
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.015, duration: 0.35 },
              className: `group relative rounded-md bg-celac-gray border border-gray-200 p-4 flex flex-col items-center text-center gap-2 ${
                url ? "hover:border-celac-green hover:bg-white transition-colors" : ""
              }`,
            };

            const content = (
              <>
                {url && (
                  <ExternalLink
                    size={12}
                    className="absolute top-2 right-2 shrink-0 text-gray-300 group-hover:text-celac-green transition-colors"
                  />
                )}
                <Flag
                  title={name}
                  className="w-11 h-auto rounded-[3px] shrink-0 ring-1 ring-black/5"
                />
                <p className="font-heading font-bold text-celac-navy text-sm leading-snug">
                  {name}
                </p>
              </>
            );

            return url ? (
              <motion.a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} — sitio oficial de gobierno, se abre en una pestaña nueva`}
                {...cardProps}
              >
                {content}
              </motion.a>
            ) : (
              <motion.div key={key} {...cardProps}>
                {content}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
