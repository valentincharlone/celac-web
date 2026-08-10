"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { NEWS, type Locale } from "@/lib/news";

export default function NewsSection() {
  const t = useTranslations("home");
  const locale = useLocale() as Locale;
  const [featured, ...rest] = NEWS.slice(0, 3);

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
            className="group rounded-md overflow-hidden bg-white border border-gray-100 flex flex-col"
          >
            <Link href={`/${locale}/noticias/${featured.slug}`}>
              <div className="relative h-64 lg:h-72 overflow-hidden shrink-0">
                <Image
                  src={featured.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-celac-green text-white text-xs font-semibold uppercase tracking-wide">
                  {featured.tag[locale]}
                </span>
              </div>
              <div className="p-6">
                {featured.date && (
                  <span className="text-gray-400 text-xs">
                    {featured.date[locale]}
                  </span>
                )}
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-celac-navy mt-1 mb-2 leading-snug group-hover:text-celac-green transition-colors">
                  {featured.title[locale]}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {featured.excerpt[locale]}
                </p>
              </div>
            </Link>
          </motion.article>

          <div className="grid grid-rows-2 gap-8">
            {rest.map((item, i) => (
              <motion.article
                key={item.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
                className="group rounded-md overflow-hidden bg-white border border-gray-100"
              >
                <Link
                  href={`/${locale}/noticias/${item.slug}`}
                  className="flex flex-col sm:flex-row h-full"
                >
                  <div className="relative h-40 sm:h-auto sm:w-2/5 overflow-hidden shrink-0">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex flex-col justify-center min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-pillar-green text-xs font-semibold uppercase tracking-wide">
                        {item.tag[locale]}
                      </span>
                      {item.date && (
                        <span className="text-gray-400 text-xs">
                          {item.date[locale]}
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading font-bold text-celac-navy text-base mb-1 leading-snug group-hover:text-celac-green transition-colors">
                      {item.title[locale]}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                      {item.excerpt[locale]}
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
