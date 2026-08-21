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
  /* Cuánto velo lleva el fondo, de menos a más tapado: "texture" para
     ilustraciones oscuras y de bajo contraste (el mapa, la constelación),
     "photo" para fotografía real, y "photoBright" para las fotos con zonas
     claras grandes —escenarios, cielos— que se tragan el título en blanco. */
  backgroundTone?: "texture" | "photo" | "photoBright";
  /* `object-position` del fondo. El hero es muy apaisado y el `object-cover`
     recorta fuerte en vertical, así que las fotos con un motivo arriba —el
     banner de la cumbre de 2011— necesitan subir el encuadre. */
  backgroundPosition?: string;
};

export default function PageHero({
  eyebrow,
  title,
  lead,
  breadcrumbs,
  backgroundImage,
  backgroundTone = "texture",
  backgroundPosition = "center",
}: Props) {
  const veil = {
    texture: {
      image: "opacity-55",
      overlay: "from-celac-navy/75 via-celac-navy/55 to-celac-navy/90",
    },
    photo: {
      image: "opacity-70",
      overlay: "from-celac-navy/70 via-celac-navy/45 to-celac-navy/85",
    },
    photoBright: {
      image: "opacity-40",
      overlay: "from-celac-navy/90 via-celac-navy/80 to-celac-navy/95",
    },
  }[backgroundTone];
  return (
    <section className="relative bg-celac-navy pt-40 pb-24 md:pt-48 md:pb-28 overflow-hidden">
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt=""
          fill
          preload
          sizes="100vw"
          style={{ objectPosition: backgroundPosition }}
          className={`object-cover ${veil.image}`}
        />
      )}
      <div
        className={`absolute inset-0 bg-linear-to-b ${
          backgroundImage
            ? veil.overlay
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
          <span className="inline-flex items-center mb-6 px-4 py-1.5 rounded-sm border border-celac-green-light/50 bg-celac-navy/60 backdrop-blur-sm text-celac-green-light text-xs font-semibold tracking-widest uppercase">
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
