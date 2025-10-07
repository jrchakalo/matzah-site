"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { servicesContent } from "@/content/servicos";

interface ServiceCardProps {
  service: (typeof servicesContent.services)[number];
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.article
      id={service.id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.03 }}
      className="flex h-full flex-col rounded-3xl border border-neutral-100 bg-white p-6 shadow-sm"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-2 font-heading text-2xl font-semibold text-neutral-900">
        {service.name}
      </h3>
      <p className="mt-4 text-sm text-neutral-600">{service.description}</p>
      <Link
        href={service.cta.href}
        className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#DD0000] transition hover:text-[#F77F00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F77F00] focus-visible:ring-offset-2"
      >
        {service.cta.label}
        <span aria-hidden>→</span>
      </Link>
    </motion.article>
  );
}
