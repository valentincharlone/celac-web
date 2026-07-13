"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

const EVENTS = [
  { dayKey: "event1Day", monthKey: "event1Month", titleKey: "event1Title", locationKey: "event1Location" },
  { dayKey: "event2Day", monthKey: "event2Month", titleKey: "event2Title", locationKey: "event2Location" },
  { dayKey: "event3Day", monthKey: "event3Month", titleKey: "event3Title", locationKey: "event3Location" },
] as const;

export default function EventsSection() {
  const t = useTranslations("home");
  const locale = useLocale();

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-celac-navy mb-4 leading-tight">
            {t("eventsTitle")}
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">{t("eventsIntro")}</p>
        </div>

        <div className="border-t border-gray-200">
          {EVENTS.map(({ dayKey, monthKey, titleKey, locationKey }, i) => (
            <motion.div
              key={titleKey}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex items-center gap-6 py-6 border-b border-gray-200"
            >
              <div className="shrink-0 w-16 h-16 rounded-xl bg-celac-gray flex flex-col items-center justify-center border border-gray-200">
                <span className="font-heading text-xl font-bold text-celac-navy leading-none">
                  {t(dayKey)}
                </span>
                <span className="text-pillar-green text-xs font-semibold uppercase tracking-wide">
                  {t(monthKey)}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-bold text-celac-navy text-base sm:text-lg mb-1">
                  {t(titleKey)}
                </h3>
                <p className="text-gray-500 text-sm flex items-center gap-1.5">
                  <MapPin size={14} className="shrink-0" />
                  {t(locationKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href={`/${locale}/eventos`}
            className="inline-flex items-center gap-2 px-7 py-3 bg-celac-navy text-white font-semibold rounded-lg hover:bg-celac-navy/90 active:scale-[0.98] transition-all"
          >
            {t("eventsCta")}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
