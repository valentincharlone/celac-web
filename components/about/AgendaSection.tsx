"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

/* Los 21 temas de la agenda permanente. `ppt2025` marca los que la
   Presidencia Pro Témpore de Colombia declaró como prioridad: antes vivían en
   una sección aparte (`ColombiaSpotlightSection`) con su propia nube de chips,
   que repetía casi textualmente estos mismos temas. Marcarlos acá dice lo
   mismo una sola vez y además deja ver qué parte de la agenda cubren.
   "Transición verde" no tenía equivalente exacto en la lista permanente; se
   mapeó a Desarrollo Sostenible. */
const AGENDA = [
  { key: "agenda1", ppt2025: true }, // ← Autosuficiencia alimentaria y sanitaria
  { key: "agenda2", ppt2025: false },
  { key: "agenda3", ppt2025: true }, // ← Igualdad de género
  { key: "agenda4", ppt2025: false },
  { key: "agenda5", ppt2025: false },
  { key: "agenda6", ppt2025: false },
  { key: "agenda7", ppt2025: true }, // ← Migración
  { key: "agenda8", ppt2025: false },
  { key: "agenda9", ppt2025: true }, // ← Nuevo enfoque frente a las drogas
  { key: "agenda10", ppt2025: false },
  { key: "agenda11", ppt2025: false },
  { key: "agenda12", ppt2025: false },
  { key: "agenda13", ppt2025: true }, // ← Transición verde
  { key: "agenda14", ppt2025: true }, // ← Cambio climático
  { key: "agenda15", ppt2025: true }, // ← Mitigación de desastres
  { key: "agenda16", ppt2025: false },
  { key: "agenda17", ppt2025: true }, // ← Interconexión energética regional
  { key: "agenda18", ppt2025: false },
  { key: "agenda19", ppt2025: false },
  { key: "agenda20", ppt2025: false },
  { key: "agenda21", ppt2025: false },
] as const;

export default function AgendaSection() {
  const t = useTranslations("queEsCelac");
  const legend = t("agendaLegend");

  // Fondo blanco: PptSection, que va justo antes, ya es celac-gray.
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <SectionEyebrow>{t("agendaTitle")}</SectionEyebrow>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-celac-navy leading-tight">
            {t("agendaSubtitle")}
          </h2>
        </div>

        {/* 20rem es el ancho mínimo con el que "Presidencia Pro Témpore 2025"
            entra en una línea dentro del chip, en los tres idiomas. */}
        <div className="grid lg:grid-cols-[20rem_1fr] gap-10 lg:gap-14 items-start">
          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-sm border border-celac-amber/40 bg-celac-amber/5 p-7"
          >
            <span className="inline-flex items-center mb-4 px-3 py-1 rounded-sm border border-celac-amber/40 bg-celac-amber/10 text-celac-amber-ink text-xs font-semibold tracking-wide uppercase text-balance">
              {t("spotlightEyebrow")}
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-celac-navy mb-3 leading-snug">
              {t("spotlightTitle")}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {t("spotlightBody")}
            </p>
            <p className="flex items-start gap-2.5 mt-6 pt-5 border-t border-gray-200 text-celac-navy text-sm leading-snug">
              <span
                aria-hidden
                className="shrink-0 w-2.5 h-2.5 mt-1 rounded-full bg-celac-amber ring-2 ring-celac-amber/25"
              />
              {legend}
            </p>
          </motion.aside>

          <div className="flex flex-wrap gap-2.5">
            {AGENDA.map(({ key, ppt2025 }, i) => (
              <motion.span
                key={key}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02, duration: 0.35 }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-sm border text-sm font-medium ${
                  ppt2025
                    ? "bg-celac-amber/10 border-celac-amber/50 text-celac-navy"
                    : "bg-celac-gray border-gray-200 text-celac-navy"
                }`}
              >
                <span
                  aria-hidden
                  className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                    ppt2025 ? "bg-celac-amber" : "bg-celac-green"
                  }`}
                />
                {t(`${key}` as "agenda1")}
                {/* El resaltado ámbar es solo color; esto lo dice en palabras
                    para quien navega con lector de pantalla. */}
                {ppt2025 && <span className="sr-only"> — {legend}</span>}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
