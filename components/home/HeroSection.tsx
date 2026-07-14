"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const SLIDE_IMAGES = [
  "/images/hero-map.png",
  "/images/hero-slider1.png",
  "/images/hero-slider3.png",
] as const;

const INTERVAL = 4000;

export default function HeroSection() {
  const t = useTranslations("home");
  const locale = useLocale();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const SLIDES = SLIDE_IMAGES.map((image, i) => ({
    id: i,
    image,
    title: t(`heroSlide${i + 1}Title` as "heroSlide1Title"),
    subtitle: t(`heroSlide${i + 1}Subtitle` as "heroSlide1Subtitle"),
  }));

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % SLIDES.length),
    [],
  );
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length),
    [],
  );

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [next, paused]);

  const slide = SLIDES[current];

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-[#060e1c]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Imágenes de fondo con crossfade ── */}
      {SLIDES.map((s, i) => (
        <motion.div
          key={s.id}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: i === current ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <Image
            src={s.image}
            alt=""
            fill
            priority={i === 0}
            className="object-cover object-center"
            quality={90}
          />
        </motion.div>
      ))}

      {/* Overlay: oscuro izquierda → semitransparente derecha */}
      <div className="absolute inset-0 bg-linear-to-r from-[#060e1c] via-[#060e1c]/80 to-[#060e1c]/35 z-10" />
      {/* Franja oscura en la parte inferior */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-[#060e1c] to-transparent z-10" />

      {/* ── Contenido ── */}
      <div className="relative z-20 w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-screen pt-16">
          {/* ── Columna izquierda: texto animado ── */}
          <div className="flex flex-col justify-center">
            {/* min-h fijo para que el crossfade no cause saltos de layout */}
            <div className="relative min-h-90 mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                >
                  {/* Badge */}
                  <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-celac-green/40 bg-celac-green/10 text-celac-green text-xs font-semibold tracking-widest uppercase backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-celac-green animate-pulse" />
                    {t("heroBadge")}
                  </span>

                  {/* Título */}
                  <h1 className="font-heading text-[2.4rem] sm:text-5xl xl:text-[3.4rem] font-bold text-white leading-[1.1] tracking-tight mb-5">
                    {slide.title}
                  </h1>

                  {/* Subtítulo */}
                  <p className="text-white/65 text-base sm:text-lg leading-relaxed max-w-120">
                    {slide.subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                href={`/${locale}/que-es-celac`}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-celac-green text-white font-semibold rounded-xl hover:bg-celac-green/90 active:scale-[0.98] transition-all shadow-[0_0_28px_rgba(27,138,78,0.4)]"
              >
                {t("heroCta")}
                <ArrowRight size={16} />
              </Link>
              <Link
                href={`/${locale}/noticias`}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl border border-white/20 bg-white/6 hover:bg-white/12 active:scale-[0.98] transition-all backdrop-blur-sm"
              >
                {t("heroNewsCta")}
              </Link>
            </div>
          </div>

          {/* ── Columna derecha: logo flotante ── */}
          <div className="hidden lg:flex items-center justify-center relative">
            {/* Anillos */}
            <motion.div
              animate={{ scale: [1, 1.06, 1], opacity: [0.25, 0.45, 0.25] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-90 h-90 rounded-full border border-celac-green/35"
            />
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.12, 0.22, 0.12] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2,
              }}
              className="absolute w-115 h-115 rounded-full border border-white/15"
            />

            {/* Halo */}
            <div className="absolute w-80 h-80 rounded-full bg-celac-green/8 blur-[70px]" />
          </div>
        </div>
      </div>

      {/* Controles del slider — pie de sección */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4">
        <button
          onClick={prev}
          className="w-8 h-8 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all backdrop-blur-sm"
        >
          <ChevronLeft size={15} />
        </button>

        <div className="flex items-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="relative h-1 rounded-full overflow-hidden transition-all duration-300"
              style={{ width: i === current ? 32 : 14 }}
            >
              <span className="absolute inset-0 bg-white/25 rounded-full" />
              {i === current && (
                <motion.span
                  key={current}
                  className="absolute inset-y-0 left-0 bg-celac-green rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: paused ? "60%" : "100%" }}
                  transition={{ duration: INTERVAL / 1000, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>

        <button
          onClick={next}
          className="w-8 h-8 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all backdrop-blur-sm"
        >
          <ChevronRight size={15} />
        </button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 right-10 z-30"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="text-white/25"
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
