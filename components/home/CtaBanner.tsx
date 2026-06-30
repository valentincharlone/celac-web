import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  const t = useTranslations("home");
  const locale = useLocale();

  return (
    <section className="py-16 bg-celac-sky">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-6 leading-snug">
          {t("ctaBanner")}
        </h2>
        <Link
          href={`/${locale}/que-es-celac`}
          className="inline-flex items-center gap-2 px-8 py-3 bg-white text-celac-navy font-semibold rounded-lg hover:bg-white/90 transition-colors"
        >
          {t("ctaButton")}
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
