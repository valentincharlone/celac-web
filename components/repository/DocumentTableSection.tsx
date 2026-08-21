"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Search, FileText, Download, X } from "lucide-react";
import {
  DOCUMENTS,
  DOC_CATEGORIES,
  DOC_YEARS,
  type DocCategory,
} from "@/lib/documents";

/** Búsqueda sin distinguir mayúsculas ni tildes. */
const DIACRITICS = /[̀-ͯ]/g;

const normalize = (value: string) =>
  value.trim().toLowerCase().normalize("NFD").replace(DIACRITICS, "");

export default function DocumentTableSection() {
  const t = useTranslations("repositorio");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<DocCategory | "all">("all");
  const [year, setYear] = useState<string>("all");

  const results = useMemo(() => {
    const q = normalize(query);
    return DOCUMENTS.filter((doc) => {
      if (category !== "all" && doc.category !== category) return false;
      if (year !== "all" && String(doc.year) !== year) return false;
      if (q && !normalize(doc.title).includes(q)) return false;
      return true;
    });
  }, [query, category, year]);

  const isFiltered = query !== "" || category !== "all" || year !== "all";

  const clear = () => {
    setQuery("");
    setCategory("all");
    setYear("all");
  };

  const selectClass =
    "h-11 px-3 rounded-sm border border-gray-200 bg-white text-sm text-celac-navy focus:outline-none focus:border-celac-green transition-colors";

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end gap-4 mb-6">
          <div className="relative flex-1">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("searchPlaceholder")}
              aria-label={t("searchPlaceholder")}
              className="w-full h-11 pl-10 pr-3 rounded-sm border border-gray-200 bg-white text-sm text-celac-navy placeholder:text-gray-400 focus:outline-none focus:border-celac-green transition-colors"
            />
          </div>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as DocCategory | "all")}
            aria-label={t("allCategories")}
            className={selectClass}
          >
            <option value="all">{t("allCategories")}</option>
            {DOC_CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {t(`cat_${c}` as "cat_declaraciones")}
              </option>
            ))}
          </select>

          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            aria-label={t("allYears")}
            className={selectClass}
          >
            <option value="all">{t("allYears")}</option>
            {DOC_YEARS.map((y) => (
              <option key={y} value={String(y)}>
                {y}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center justify-between gap-4 mb-8 text-sm text-gray-400">
          <span>{t("results", { count: results.length })}</span>
          {isFiltered && (
            <button
              type="button"
              onClick={clear}
              className="inline-flex items-center gap-1.5 text-celac-navy hover:text-celac-green transition-colors"
            >
              <X size={13} />
              {t("clearFilters")}
            </button>
          )}
        </div>

        {/* Tabla en desktop */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-celac-navy">
                <th className="py-3 pr-4 font-heading text-sm font-bold text-celac-navy">
                  {t("colTitle")}
                </th>
                <th className="py-3 px-4 font-heading text-sm font-bold text-celac-navy w-24">
                  {t("colYear")}
                </th>
                <th className="py-3 px-4 font-heading text-sm font-bold text-celac-navy w-56">
                  {t("colCategory")}
                </th>
                <th className="py-3 px-4 font-heading text-sm font-bold text-celac-navy w-28">
                  {t("colSize")}
                </th>
                <th className="py-3 pl-4 font-heading text-sm font-bold text-celac-navy w-32">
                  <span className="sr-only">{t("download")}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {results.map((doc, i) => (
                <tr
                  key={`${doc.title}-${i}`}
                  className="border-b border-gray-200 hover:bg-celac-gray transition-colors"
                >
                  <td className="py-4 pr-4">
                    <span className="flex items-start gap-3">
                      <FileText
                        size={16}
                        className="mt-0.5 shrink-0 text-celac-green"
                      />
                      <span className="text-celac-navy font-medium leading-snug">
                        {doc.title}
                      </span>
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-500 text-sm">
                    {doc.year ?? "—"}
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-xs text-gray-500 uppercase tracking-wide">
                      {t(`cat_${doc.category}` as "cat_declaraciones")}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-400 text-sm whitespace-nowrap">
                    {doc.size}
                  </td>
                  <td className="py-4 pl-4">
                    <a
                      href={doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-celac-navy hover:text-celac-green transition-colors"
                    >
                      <Download size={14} />
                      {doc.format}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards en mobile */}
        <div className="md:hidden divide-y divide-gray-200 border-t border-gray-200">
          {results.map((doc, i) => (
            <a
              key={`${doc.title}-${i}`}
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 py-5"
            >
              <FileText
                size={18}
                className="mt-0.5 shrink-0 text-celac-green"
              />
              <span className="min-w-0">
                <span className="block text-celac-navy font-medium leading-snug mb-1.5">
                  {doc.title}
                </span>
                <span className="block text-xs text-gray-400">
                  {[
                    doc.year,
                    t(`cat_${doc.category}` as "cat_declaraciones"),
                    doc.size,
                    doc.format,
                  ]
                    .filter(Boolean)
                    .join(" · ")}
                </span>
              </span>
            </a>
          ))}
        </div>

        {results.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-16 text-center text-gray-400"
          >
            {t("empty")}
          </motion.p>
        )}
      </div>
    </section>
  );
}
