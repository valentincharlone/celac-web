"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const LINE_IMAGES = [
  "/images/action-politica.png",
  "/images/action-voceria.png",
  "/images/action-desarrollo.png",
] as const;

export default function ActionLinesSection() {
  const t = useTranslations("home");

  const LINES = LINE_IMAGES.map((image, i) => ({
    image,
    title: t(`actionLine${i + 1}Title` as "actionLine1Title"),
    desc: t(`actionLine${i + 1}Desc` as "actionLine1Desc"),
  }));

  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-28 pb-14 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-celac-navy mb-4">
          {t("actionLinesTitle")}
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          {t("actionLinesSubtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 mt-6 md:mt-10">
        {LINES.map(({ image, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="group relative h-140 overflow-hidden"
          >
            <Image
              src={image}
              alt=""
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#060e1c] via-[#060e1c]/55 to-[#060e1c]/10" />

            <div className="relative z-10 h-full flex flex-col justify-end items-center text-center p-8">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-3 leading-snug max-w-sm">
                {title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                {desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
