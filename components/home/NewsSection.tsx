"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const NEWS = [
  {
    image: "/images/lqh-grupal.jpg",
    tagKey: "newsItem1Tag",
    dateKey: "newsItem1Date",
    titleKey: "newsItem1Title",
    excerptKey: "newsItem1Excerpt",
  },
  {
    image: "/images/news-voceria.jpg",
    tagKey: "newsItem2Tag",
    dateKey: "newsItem2Date",
    titleKey: "newsItem2Title",
    excerptKey: "newsItem2Excerpt",
  },
  {
    image: "/images/news-networking.jpg",
    tagKey: "newsItem3Tag",
    dateKey: "newsItem3Date",
    titleKey: "newsItem3Title",
    excerptKey: "newsItem3Excerpt",
  },
] as const;

export default function NewsSection() {
  const t = useTranslations("home");
  const locale = useLocale();
  const [featured, ...rest] = NEWS;

  return (
    <section className="py-20 md:py-28 bg-celac-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-celac-navy leading-tight">
            {t("newsTitle")}
          </h2>
          <Link
            href={`/${locale}/noticias`}
            className="group hidden sm:inline-flex items-center gap-2 text-celac-navy font-semibold text-sm border-b-2 border-pillar-green pb-0.5 hover:gap-3 transition-all"
          >
            {t("newsViewAll")}
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group rounded-2xl overflow-hidden bg-white border border-gray-100 flex flex-col"
          >
            <div className="relative h-64 lg:h-72 overflow-hidden shrink-0">
              <Image
                src={featured.image}
                alt=""
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-celac-green text-white text-xs font-semibold uppercase tracking-wide">
                {t(featured.tagKey)}
              </span>
            </div>
            <div className="p-6">
              <span className="text-gray-400 text-xs">
                {t(featured.dateKey)}
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-celac-navy mt-1 mb-2 leading-snug">
                {t(featured.titleKey)}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t(featured.excerptKey)}
              </p>
            </div>
          </motion.article>

          <div className="flex flex-col gap-8">
            {rest.map((item, i) => (
              <motion.article
                key={item.titleKey}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
                className="group flex gap-5 items-start"
              >
                <div className="relative w-32 h-24 sm:w-40 sm:h-28 rounded-xl overflow-hidden shrink-0">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-pillar-green text-xs font-semibold uppercase tracking-wide">
                      {t(item.tagKey)}
                    </span>
                    <span className="text-gray-400 text-xs">
                      {t(item.dateKey)}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-celac-navy text-base mb-1 leading-snug">
                    {t(item.titleKey)}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                    {t(item.excerptKey)}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
