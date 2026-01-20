"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { servicesContent } from "@/content/servicos";

export function ServicesTeaser() {
  const featured = servicesContent.services.slice(0, 3);
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {featured.map((service, index) => (
        <motion.article
          key={service.id}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
          className="flex h-full flex-col rounded-3xl border border-[color:var(--border-color)] bg-[color:var(--surface-muted)] p-6 shadow-[0_25px_50px_-30px_var(--card-shadow)] transition hover:-translate-y-1 hover:shadow-[0_25px_55px_-25px_var(--card-shadow)] dark:border-white/10 dark:bg-[#212121]"
        >
          <h3 className="font-heading text-xl font-semibold text-[color:var(--foreground)] dark:text-white">
            {service.name}
          </h3>
          <p className="mt-3 text-sm text-[color:var(--text-secondary)] dark:text-neutral-200">
            {service.description}
          </p>
          <Link
            href={service.cta.href}
            className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--action-primary)] transition hover:text-[color:var(--action-secondary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--action-secondary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface)] dark:focus-visible:ring-offset-[#121212]"
          >
            {service.cta.label}
            <span aria-hidden>→</span>
          </Link>
        </motion.article>
      ))}
    </div>
  );
}
