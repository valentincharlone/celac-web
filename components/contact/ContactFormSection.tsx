"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import ContactForm from "./ContactForm";
import ContactInfoCard from "./ContactInfoCard";

export default function ContactFormSection() {
  const t = useTranslations("contacto");

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionEyebrow>{t("formEyebrow")}</SectionEyebrow>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-celac-navy leading-tight mb-8">
            {t("formTitle")}
          </h2>
          <ContactForm />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-gray-500 leading-relaxed mb-8">{t("formIntro")}</p>
          <ContactInfoCard />
        </motion.div>
      </div>
    </section>
  );
}
