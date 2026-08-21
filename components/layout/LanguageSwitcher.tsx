"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Globe } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";

const LOCALES = [
  { code: "es", label: "ES", name: "Español" },
  { code: "en", label: "EN", name: "English" },
  { code: "pt", label: "PT", name: "Português" },
] as const;

export default function LanguageSwitcher() {
  const locale = useLocale();
  /* Sin el prefijo de idioma, para que cambiar de locale conserve la página. */
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`Idioma: ${
          LOCALES.find((l) => l.code === locale)?.name ?? locale
        }`}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 text-sm rounded-sm transition-colors ${
          open ? "bg-white/10 text-white" : "text-white/80 hover:text-white hover:bg-white/10"
        }`}
      >
        <Globe size={14} />
        <span className="font-medium tracking-wide">{locale.toUpperCase()}</span>
        <ChevronDown
          size={13}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 min-w-44 py-1 rounded-sm border border-white/10 bg-celac-navy/95 backdrop-blur-md shadow-lg shadow-black/30 overflow-hidden"
          >
            {LOCALES.map(({ code, label, name }) => {
              const active = code === locale;
              return (
                <Link
                  key={code}
                  href={pathname}
                  locale={code}
                  role="menuitem"
                  aria-current={active ? "true" : undefined}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2 text-sm transition-colors ${
                    active
                      ? "text-white bg-white/5"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span
                    className={`w-7 text-xs font-semibold tracking-wider ${
                      active ? "text-celac-green-light" : "text-white/50"
                    }`}
                  >
                    {label}
                  </span>
                  <span className="flex-1">{name}</span>
                  {active && <Check size={14} className="text-celac-green-light" />}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
