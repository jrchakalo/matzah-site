"use client";

import { servicesContent } from "@/content/servicos";
import { motion } from "framer-motion";

export function ProcessSteps() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {servicesContent.process.map((step, index) => (
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: index * 0.04, ease: "easeOut" }}
          className="rounded-2xl border border-neutral-100 bg-white p-5 shadow-sm"
        >
          <span className="text-sm font-semibold text-[#DD0000]">
            Etapa {index + 1}
          </span>
          <p className="mt-2 text-base font-medium text-neutral-800">{step}</p>
        </motion.div>
      ))}
    </div>
  );
}
