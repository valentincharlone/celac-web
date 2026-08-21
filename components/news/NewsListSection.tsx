"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  NEWS,
  NEWS_CATEGORIES,
  type Locale,
  type NewsCategory,
} from "@/lib/news";

type Filter = "all" | NewsCategory;

const FILTERS: Filter[] = ["all", ...NEWS_CATEGORIES];

export default function NewsListSection() {
  const t = useTranslations("noticias");
  const locale = useLocale() as Locale;
  const [filter, setFilter] = useState<Filter>("all");

  const posts = NEWS.filter((p) => filter === "all" || p.category === filter);
  const [featured, ...rest] = posts;

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-b border-gray-200 pb-4 mb-12">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`relative -mb-4 pb-4 text-sm font-semibold tracking-wide uppercase transition-colors ${
                filter === f
                  ? "text-celac-navy"
                  : "text-gray-400 hover:text-celac-navy"
              }`}
            >
              {t(`filter_${f}` as "filter_all")}
              {filter === f && (
                <motion.span
                  layoutId="news-filter"
                  className="absolute left-0 right-0 bottom-0 h-0.5 bg-celac-green"
                />
              )}
            </button>
          ))}
        </div>

        {featured && (
          <motion.article
            key={featured.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="group grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center mb-16"
          >
            <Link
              href={`/${locale}/noticias/${featured.slug}`}
              className="lg:col-span-3 relative aspect-16/10 overflow-hidden rounded-sm bg-celac-gray"
            >
              <Image
                src={featured.image}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </Link>
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-celac-green text-xs font-semibold uppercase tracking-widest">
                  {featured.tag[locale]}
                </span>
                {featured.date && (
                  <span className="text-gray-400 text-xs">
                    {featured.date[locale]}
                  </span>
                )}
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-celac-navy leading-tight mb-4">
                <Link
                  href={`/${locale}/noticias/${featured.slug}`}
                  className="hover:text-celac-green transition-colors"
                >
                  {featured.title[locale]}
                </Link>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                {featured.excerpt[locale]}
              </p>
              <Link
                href={`/${locale}/noticias/${featured.slug}`}
                className="inline-flex items-center gap-2 text-celac-navy font-semibold text-sm border-b-2 border-celac-green pb-0.5 hover:gap-3 transition-all"
              >
                {t("readMore")}
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.article>
        )}

        <div className="border-t border-gray-200">
          {rest.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.2) }}
              className="group border-b border-gray-200"
            >
              <Link
                href={`/${locale}/noticias/${post.slug}`}
                className="flex flex-col sm:flex-row gap-5 sm:gap-8 py-8"
              >
                <div className="relative h-44 sm:h-28 sm:w-44 shrink-0 overflow-hidden rounded-sm bg-celac-gray">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, 176px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-celac-green text-xs font-semibold uppercase tracking-widest">
                      {post.tag[locale]}
                    </span>
                    {post.date && (
                      <span className="text-gray-400 text-xs">
                        {post.date[locale]}
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-celac-navy leading-snug mb-2 group-hover:text-celac-green transition-colors">
                    {post.title[locale]}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                    {post.excerpt[locale]}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {posts.length === 0 && (
          <p className="py-16 text-center text-gray-400">{t("empty")}</p>
        )}
      </div>
    </section>
  );
}
