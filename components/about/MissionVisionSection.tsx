"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function MissionVisionSection() {
  const t = useTranslations("queEsCelac");

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Entradilla: la definición completa de la CELAC, tal como la da el
            sitio institucional. El lead del hero es deliberadamente más corto
            para no repetir esta misma frase dos veces seguidas. */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          /* Sin centrar: son 7 líneas y centrado se pierde el arranque de cada
             una. "¿Por qué existe?", más abajo, sí va centrado porque es corto. */
          className="max-w-3xl mx-auto mb-16 text-lg text-gray-600 leading-relaxed"
        >
          {t("introBody")}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 rounded-sm overflow-hidden border border-gray-200 mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-10 sm:p-12 border-b md:border-b-0 md:border-r border-gray-200"
          >
            <h2 className="text-celac-green text-xs font-semibold uppercase tracking-[0.2em]">
              {t("missionLabel")}
            </h2>
            <p className="font-heading text-2xl sm:text-3xl text-celac-navy leading-snug mt-4">
              {t("missionText")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-10 sm:p-12 bg-celac-navy"
          >
            {/* Verde claro: el verde de marca sobre el navy da 3.2:1. */}
            <h2 className="text-celac-green-light text-xs font-semibold uppercase tracking-[0.2em]">
              {t("visionLabel")}
            </h2>
            <p className="font-heading text-2xl sm:text-3xl text-white leading-snug mt-4">
              {t("visionText")}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-celac-navy mb-4 leading-snug">
            {t("whyTitle")}
          </h2>
          <p className="text-gray-500 leading-relaxed">{t("whyBody")}</p>
          <p className="text-gray-500 leading-relaxed mt-4">{t("whyBody2")}</p>
        </motion.div>
      </div>
    </section>
  );
}
