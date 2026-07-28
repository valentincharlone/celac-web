import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";

export default async function NotFound() {
  const locale = await getLocale();
  const t = await getTranslations("notFound");

  return (
    <section className="relative bg-white min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-24 overflow-hidden">
      <span
        aria-hidden
        className="pointer-events-none select-none absolute inset-0 flex items-center justify-center font-heading font-bold text-[16rem] sm:text-[22rem] text-celac-gray leading-none"
      >
        404
      </span>
      <div className="relative max-w-2xl mx-auto text-center">
        <Image
          src="/images/logo-celac-color.png"
          alt="CELAC"
          width={300}
          height={104}
          className="w-auto object-cover mx-auto mb-8"
          preload
        />
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-celac-navy leading-[1.1] tracking-tight mb-5">
          {t("title")}
        </h1>
        <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8">
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
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-celac-navy font-semibold rounded-md border border-gray-200 bg-white hover:bg-celac-gray active:scale-[0.98] transition-all"
          >
            {t("ctaSecondary")}
          </Link>
        </div>
      </div>
    </section>
  );
}
