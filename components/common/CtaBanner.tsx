"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Props = {
  title: string;
  ctaLabel: string;
  href: string;
  /* Foto de fondo opcional. Sin ella la banda queda en el degradado navy de
     siempre. El velo es fijo y bastante cerrado: la banda es baja y el título
     en blanco tiene que leerse sobre lo que caiga detrás. */
  backgroundImage?: string;
  /* `object-position` de la foto. La banda es muy apaisada y recorta fuerte en
     vertical, igual que el PageHero. */
  backgroundPosition?: string;
};

export default function CtaBanner({
  title,
  ctaLabel,
  href,
  backgroundImage,
  backgroundPosition = "center",
}: Props) {
  return (
    <section className="relative overflow-hidden py-20 md:py-24 bg-linear-to-r from-celac-navy via-[#0b2436] to-[#103a3f]">
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            sizes="100vw"
            style={{ objectPosition: backgroundPosition }}
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-linear-to-r from-celac-navy/90 via-celac-navy/70 to-[#103a3f]/85" />
        </>
      )}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
      >
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug max-w-xl">
          {title}
        </h2>
        <Link
          href={href}
          className="group shrink-0 inline-flex items-center gap-2 px-8 py-3 bg-celac-green text-white font-semibold rounded-sm hover:bg-celac-green-hover transition-colors"
        >
          {ctaLabel}
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </motion.div>
    </section>
  );
}
