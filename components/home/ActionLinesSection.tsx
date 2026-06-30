"use client";

import { motion } from "framer-motion";
import { Users, Globe, Heart } from "lucide-react";

const LINES = [
  {
    icon: Users,
    title: "Integración política y cooperación regional",
    desc: "Coordinación entre los 33 Estados miembros para fortalecer la voz colectiva de la región.",
  },
  {
    icon: Globe,
    title: "Vocería internacional y alianzas birregionales",
    desc: "Representación de América Latina y el Caribe ante organismos multilaterales y otros bloques.",
  },
  {
    icon: Heart,
    title: "Desarrollo social, educativo y medioambiental",
    desc: "Impulso a políticas que mejoran la calidad de vida de los 620 millones de ciudadanos.",
  },
] as const;

export default function ActionLinesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-celac-navy to-[#0a1628] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Líneas de Acción
          </h2>
          <p className="text-white/60 max-w-lg mx-auto">
            Los tres ejes estratégicos que orientan la agenda de trabajo de la CELAC.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LINES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/10 group-hover:bg-celac-green flex items-center justify-center mx-auto mb-5 transition-colors">
                <Icon size={24} />
              </div>
              <h3 className="font-heading font-semibold text-base mb-3 leading-snug">
                {title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
