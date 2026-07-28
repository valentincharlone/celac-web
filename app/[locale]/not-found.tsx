import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";

export default async function NotFound() {
  const locale = await getLocale();
  const t = await getTranslations("notFound");

  return (
    <section className="relative bg-celac-navy pt-40 pb-24 md:pt-48 md:pb-28 min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-celac-navy-2/60 via-celac-navy to-celac-navy" />
      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center mb-6 px-4 py-1.5 rounded-md border border-celac-green/40 bg-celac-green/10 text-celac-green text-xs font-semibold tracking-widest uppercase">
          {t("eyebrow")}
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
          {t("title")}
        </h1>
        <p className="text-white/65 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10">
          {t("body")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href={`/${locale}`}
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-celac-green text-white font-semibold rounded-md hover:bg-celac-green-hover active:scale-[0.98] transition-all"
          >
            {t("cta")}
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
          <Link
            href={`/${locale}/paises-miembros`}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-md border border-white/20 bg-white/6 hover:bg-white/12 active:scale-[0.98] transition-all backdrop-blur-sm"
          >
            {t("ctaSecondary")}
          </Link>
        </div>
      </div>
    </section>
  );
}
