"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/ui/Breadcrumb";

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow: string;
  title: string;
  lead: string;
  breadcrumbs?: Crumb[];
  backgroundImage?: string;
  /* Cuánto velo lleva el fondo. "texture" es para ilustraciones oscuras y de
     bajo contraste (el mapa, la constelación): se las deja ver. "photo" es para
     fotografía real, que trae zonas claras capaces de tragarse el título en
     blanco, así que va más tapada. */
  backgroundTone?: "texture" | "photo";
};

export default function PageHero({
  eyebrow,
  title,
  lead,
  breadcrumbs,
  backgroundImage,
  backgroundTone = "texture",
}: Props) {
  const isPhoto = backgroundTone === "photo";
  return (
    <section className="relative bg-celac-navy pt-40 pb-24 md:pt-48 md:pb-28 overflow-hidden">
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt=""
          fill
          preload
          sizes="100vw"
          className={`object-cover object-center ${isPhoto ? "opacity-40" : "opacity-55"}`}
        />
      )}
      <div
        className={`absolute inset-0 bg-linear-to-b ${
          backgroundImage
            ? isPhoto
              ? "from-celac-navy/90 via-celac-navy/80 to-celac-navy/95"
              : "from-celac-navy/75 via-celac-navy/55 to-celac-navy/90"
            : "from-celac-navy-2/60 via-celac-navy to-celac-navy"
        }`}
      />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {breadcrumbs && <Breadcrumb items={breadcrumbs} />}
          <span className="inline-flex items-center mb-6 px-4 py-1.5 rounded-md border border-celac-green/40 bg-celac-green/10 text-celac-green text-xs font-semibold tracking-widest uppercase">
            {eyebrow}
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            {title}
          </h1>
          <p className="text-white/65 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            {lead}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
