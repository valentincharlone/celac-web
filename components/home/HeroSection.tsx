"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

/* Fotografía documental de la CELAC. `position` fija el punto de interés de cada
   toma para que el object-cover del hero no lo recorte en pantallas anchas. */
const SLIDE_IMAGES = [
  { src: "/images/celac-2011-scaled.jpg", position: "50% 90%" },
  { src: "/images/lqh-banderas.jpg", position: "62% 55%" },
  { src: "/images/2025.jpg", position: "50% 35%" },
] as const;

const INTERVAL = 4500;

export default function HeroSection() {
  const t = useTranslations("home");
  const locale = useLocale();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const SLIDES = SLIDE_IMAGES.map((image, i) => ({
    id: i,
    ...image,
    title: t(`heroSlide${i + 1}Title` as "heroSlide1Title"),
    subtitle: t(`heroSlide${i + 1}Subtitle` as "heroSlide1Subtitle"),
  }));

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % SLIDES.length),
    [SLIDES.length],
  );

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [next, paused]);

  /* La barra del indicador activo replica el temporizador de arriba: se congela
     donde está cuando se pausa (hover) y vuelve a correr desde cero al soltar,
     igual que el setInterval, que también se reinicia entero. */
  const progress = useAnimationControls();

  useEffect(() => {
    if (paused) {
      progress.stop();
      return;
    }
    progress.set({ width: "0%" });
    progress.start({
      width: "100%",
      transition: { duration: INTERVAL / 1000, ease: "linear" },
    });
  }, [current, paused, progress]);

  const slide = SLIDES[current];

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-celac-navy"
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
            src={s.src}
            alt=""
            fill
            sizes="100vw"
            /* Los tres slides están above the fold y se muestran dentro de los
               primeros 9s, así que no se dejan al `lazy` por defecto: el segundo
               y el tercero cargan igual pero en prioridad baja, para no competir
               con el primero, que es el LCP. */
            loading="eager"
            fetchPriority={i === 0 ? "high" : "low"}
            style={{ objectPosition: s.position }}
            className="object-cover saturate-[0.8]"
            quality={90}
          />
        </motion.div>
      ))}

      {/* Tinte navy plano: unifica la temperatura de las fotos con la paleta */}
      <div className="absolute inset-0 bg-celac-navy/35 z-10" />
      {/* Overlay: oscuro izquierda → semitransparente derecha */}
      <div className="absolute inset-0 bg-linear-to-r from-celac-navy via-celac-navy/35 to-transparent z-10" />
      {/* Franja oscura en la parte inferior */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-celac-navy to-transparent z-10" />

      {/* ── Contenido ── */}
      <div className="relative z-20 w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-screen pt-28 sm:pt-24">
          {/* ── Columna izquierda: texto animado ── */}
          <div className="flex flex-col justify-center">
            {/* min-h fijo para que el crossfade no cause saltos de layout */}
            <div className="relative min-h-80 mb-8">
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
                  <span className="inline-flex items-center mb-6 px-4 py-1.5 rounded-md border border-celac-green/40 bg-celac-green/10 text-celac-green text-xs font-semibold tracking-widest uppercase backdrop-blur-sm">
                    {t("heroBadge")}
                  </span>

                  {/* Título */}
                  <h1 className="font-heading text-[2.4rem] sm:text-5xl xl:text-[3.4rem] font-bold text-white leading-[1.1] tracking-tight mb-5">
                    {slide.title}
                  </h1>

                  {/* Subtítulo */}
                  <p className="text-white/65 text-base sm:text-lg leading-relaxed max-w-134">
                    {slide.subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                href={`/${locale}/que-es-celac`}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-celac-green text-white font-semibold rounded-md hover:bg-celac-green-hover active:scale-[0.98] transition-all"
              >
                {t("heroCta")}
                <ArrowRight size={16} />
              </Link>
              <Link
                href={`/${locale}/noticias`}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-md border border-white/20 bg-white/6 hover:bg-white/12 active:scale-[0.98] transition-all backdrop-blur-sm"
              >
                {t("heroNewsCta")}
              </Link>
            </div>
          </div>

          {/* ── Columna derecha: marca de los 33 Estados Miembros ── */}
          {/* <div className="hidden lg:flex items-center justify-center relative">
            <MemberStatesMark />
          </div> */}
        </div>
      </div>

      {/* Indicadores del slider — al pie, sobre el mismo eje izquierdo que el
          texto: repiten el contenedor del bloque de contenido para alinear. */}
      <div className="absolute inset-x-0 bottom-8 z-30">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={t("heroGoToSlide", { title: s.title })}
              aria-current={i === current}
              /* La barra mide 4px, pero el botón agrega padding vertical para
                 llegar a un área de toque de 24px (WCAG 2.2 target size). */
              className="group py-2.5 cursor-pointer"
            >
              <span
                className="relative flex h-1 rounded-full overflow-hidden transition-all duration-300"
                style={{ width: i === current ? 40 : 16 }}
              >
                <span className="absolute inset-0 bg-white/25 group-hover:bg-white/40 transition-colors rounded-full" />
                {i === current && (
                  <motion.span
                    className="absolute inset-y-0 left-0 bg-celac-green rounded-full"
                    animate={progress}
                  />
                )}
              </span>
            </button>
          ))}
        </div>
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
