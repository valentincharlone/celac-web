"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

/* Cierre de la home. Reemplaza al CtaBanner genérico (que sigue en
   que-es-celac): en vez de una franja de color con una frase inspiracional,
   retoma la fotografía documental del hero y ofrece el destino que de verdad
   sigue después de leer la home — el archivo de documentos.

   `lqh-grupal.jpg` se había descartado del hero por ser demasiado clara, pero
   acá el overlay navy es más fuerte y la toma apaisada (2.5:1) entra sin
   recortar caras. */
export default function ClosingSection() {
  const t = useTranslations("home");
  const locale = useLocale();

  return (
    <section className="relative flex items-center overflow-hidden bg-celac-navy min-h-104 md:min-h-128">
      <motion.div
        initial={{ scale: 1.06 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/images/lqh-grupal.jpg"
          alt=""
          fill
          sizes="100vw"
          style={{ objectPosition: "50% 58%" }}
          className="object-cover saturate-[0.75]"
          quality={85}
        />
      </motion.div>

      {/* La foto es clara y trae logos de terceros en el fondo: el tinte plano
          la baja de tono y los apaga. */}
      <div className="absolute inset-0 bg-celac-navy/60 z-10" />
      <div className="absolute inset-0 bg-linear-to-r from-celac-navy via-celac-navy/65 to-celac-navy/45 z-10" />
      {/* Funde con el footer navy: el bloque deja de leerse como una franja
          suelta y pasa a ser el arranque del pie. */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-celac-navy to-transparent z-10" />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-2xl"
        >

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            {t("closingTitle")}
          </h2>
          <p className="text-white/65 text-base sm:text-lg leading-relaxed mb-9 max-w-xl">
            {t("closingLead")}
          </p>

          <Link
            href={`/${locale}/repositorio`}
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-celac-green text-white font-semibold rounded-sm hover:bg-celac-green-hover active:scale-[0.98] transition-all"
          >
            {t("closingCta")}
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
