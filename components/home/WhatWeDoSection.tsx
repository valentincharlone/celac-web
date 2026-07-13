"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function WhatWeDoSection() {
  const t = useTranslations("home");
  const locale = useLocale();

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-pillar-green/10 text-pillar-green uppercase tracking-wide text-xs font-semibold mb-5">
            {t("whatWeDoTitle")}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-celac-navy mb-6 leading-tight">
            {t("whatWeDoLead")}
          </h2>
          <p className="border-l-4 border-pillar-amber pl-5 text-gray-500 leading-relaxed mb-8">
            {t("whatWeDoBody")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 border-y border-gray-200 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 mb-8">
            <div className="py-5 sm:pr-6">
              <h3 className="font-heading font-bold text-celac-navy text-base mb-1">
                {t("allianceTitle")}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t("allianceDesc")}
              </p>
            </div>
            <div className="py-5 sm:pl-6">
              <h3 className="font-heading font-bold text-celac-navy text-base mb-1">
                {t("actionsTitle")}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t("actionsDesc")}
              </p>
            </div>
          </div>

          <Link
            href={`/${locale}/que-es-celac`}
            className="group inline-flex items-center gap-2 text-celac-navy font-semibold border-b-2 border-pillar-green pb-1 hover:gap-3 transition-all"
          >
            {t("whatWeDoCta")}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative pb-12 pl-6 sm:pl-10"
        >
          <span className="absolute right-0 top-6 bottom-18 w-1.5 rounded-full bg-pillar-amber" />

          <div className="relative h-72 sm:h-88 mr-6 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/lqh-grupal.jpg"
              alt="Delegados de la CELAC en la Reunión Ministerial de Energía, Montevideo"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-0 left-0 w-3/5 h-36 sm:h-44 rounded-2xl overflow-hidden shadow-xl ring-4 ring-celac-gray">
            <Image
              src="/images/lqh-banderas.jpg"
              alt="Banderas de los Estados miembros de la CELAC"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
