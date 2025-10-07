"use client";

import { servicesContent } from "@/content/servicos";
import { motion } from "framer-motion";

export function ProcessTimeline() {
  return (
    <ol className="relative space-y-6 border-l border-dashed border-[#F77F00]/40 pl-6">
      {servicesContent.process.map((step, index) => (
        <motion.li
          key={step}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
        >
          <div className="absolute -left-[11px] mt-1 h-3 w-3 rounded-full border-2 border-white bg-[#DD0000]" aria-hidden />
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
            Etapa {index + 1}
          </p>
          <p className="mt-1 text-base font-medium text-neutral-800">{step}</p>
        </motion.li>
      ))}
    </ol>
  );
}
