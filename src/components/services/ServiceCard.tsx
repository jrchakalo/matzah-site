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
      className="flex h-full flex-col rounded-3xl border border-[color:var(--border-color)] bg-[color:var(--surface-muted)] p-6 shadow-[0_25px_55px_-30px_var(--card-shadow)] transition-colors dark:border-white/10 dark:bg-[#212121]"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--header-link-muted)] dark:text-neutral-400">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-2 font-heading text-2xl font-semibold text-[color:var(--foreground)] dark:text-white">
        {service.name}
      </h3>
      <p className="mt-4 text-sm text-[color:var(--text-secondary)] dark:text-neutral-200">
        {service.description}
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Link
          href={service.cta.href}
          className="inline-flex items-center gap-2 rounded-full bg-[color:var(--action-primary)]/10 px-4 py-2 text-sm font-semibold text-[color:var(--action-primary)] transition hover:bg-[color:var(--action-primary)]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--action-secondary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface)] dark:focus-visible:ring-offset-[#121212]"
        >
          {service.cta.label}
          <span aria-hidden>→</span>
        </Link>
        {service.hubUrl ? (
          <Link
            href={service.hubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-color)] bg-[color:var(--surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--header-link)] transition hover:border-[color:var(--action-secondary)] hover:text-[color:var(--action-secondary)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[color:var(--action-secondary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface)] dark:border-white/15 dark:bg-[#272727] dark:text-white/80 dark:focus-visible:ring-offset-[#121212]"
          >
            Acesse o site
            <span aria-hidden>↗</span>
          </Link>
        ) : null}
      </div>
    </motion.article>
  );
}
