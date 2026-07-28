"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Props = {
  title: string;
  ctaLabel: string;
  href: string;
};

export default function CtaBanner({ title, ctaLabel, href }: Props) {
  return (
    <section className="py-20 md:py-24 bg-linear-to-r from-celac-navy via-[#0b2436] to-[#103a3f]">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-center justify-between gap-8 text-center md:text-left"
      >
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug max-w-xl">
          {title}
        </h2>
        <Link
          href={href}
          className="group shrink-0 inline-flex items-center gap-2 px-8 py-3 bg-celac-green text-white font-semibold rounded-md hover:bg-celac-green-hover transition-colors"
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
