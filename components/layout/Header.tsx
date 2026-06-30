"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";

const NAV_LINKS = [
  { key: "whatIsCelac", href: "/que-es-celac" },
  { key: "countries",   href: "/paises-miembros" },
  { key: "news",        href: "/noticias" },
  { key: "repository",  href: "/repositorio" },
  { key: "contact",     href: "/contacto" },
] as const;

const LOCALES = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" },
] as const;

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen]     = useState(false);
  const [scrolled, setScrolled]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-celac-navy/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center shrink-0">
            <Image
              src="/images/logo-celac-white.png"
              alt="CELAC"
              width={160}
              height={40}
              className="h-16 object-contain"
              style={{ width: "auto" }}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(({ key, href }) => (
              <Link
                key={key}
                href={`/${locale}${href}`}
                className="px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors"
              >
                {t(key)}
              </Link>
            ))}
          </nav>

          {/* Language switcher + mobile toggle */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="flex items-center gap-1 px-2 py-1.5 text-white/80 hover:text-white text-sm rounded-md hover:bg-white/10 transition-colors"
              >
                <Globe size={14} />
                <span>{locale.toUpperCase()}</span>
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-1 w-20 bg-white rounded-md shadow-lg overflow-hidden">
                  {LOCALES.map(({ code, label }) => (
                    <Link
                      key={code}
                      href={`/${code}`}
                      onClick={() => setLangOpen(false)}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        code === locale
                          ? "bg-celac-green text-white"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <button
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-md transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-celac-navy/95 backdrop-blur-md border-t border-white/10">
          <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {NAV_LINKS.map(({ key, href }) => (
              <Link
                key={key}
                href={`/${locale}${href}`}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors"
              >
                {t(key)}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
