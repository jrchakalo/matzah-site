"use client";

import { motion } from "framer-motion";
import { valueHighlights } from "@/content/home";

export function ValueHighlights() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {valueHighlights.map((item, index) => (
        <motion.article
          key={item.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
          className="group relative overflow-hidden rounded-3xl border border-neutral-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#F77F00]/0 via-[#FCBF49]/0 to-[#DD0000]/10 opacity-0 transition group-hover:opacity-100" />
          <h3 className="font-heading text-xl font-semibold text-neutral-900">
            {item.title}
          </h3>
          <p className="mt-3 text-sm text-neutral-600">{item.description}</p>
        </motion.article>
      ))}
    </div>
  );
}
