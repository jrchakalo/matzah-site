"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Empreendimento } from "@/content/empreendimentos";

interface EmpreendimentoCardProps {
  empreendimento: Empreendimento;
  index: number;
}

export function EmpreendimentoCard({ empreendimento, index }: EmpreendimentoCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
  className="overflow-hidden rounded-3xl border border-[color:var(--border-color)] bg-[color:var(--surface)] shadow-[0_28px_60px_-35px_var(--card-shadow)] transition-colors dark:border-white/10 dark:bg-[#212121]"
    >
      <div className="relative h-56 w-full">
        <Image
          src={empreendimento.image}
          alt={`Imagem ilustrativa do ${empreendimento.name}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
        <span className="absolute left-4 top-4 inline-flex rounded-full border border-[color:var(--border-color)] bg-[color:var(--surface)] px-3 py-1 text-xs font-semibold text-[#DD0000] shadow-sm shadow-[0_12px_25px_-15px_var(--card-shadow)] dark:border-white/15 dark:bg-[#2a2a2a]">
          {empreendimento.status}
        </span>
      </div>
      <div className="space-y-4 p-6">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--header-link-muted)] dark:text-neutral-300">
            {empreendimento.type} • {empreendimento.location}
          </p>
          <h3 className="font-heading text-2xl font-semibold text-[color:var(--foreground)] dark:text-white">
            {empreendimento.name}
          </h3>
        </div>
        <dl className="grid gap-2 text-sm text-[color:var(--text-secondary)] dark:text-neutral-200">
          <div>
            <dt className="font-semibold text-[color:var(--foreground)] dark:text-white">Unidades</dt>
            <dd>{empreendimento.units}</dd>
          </div>
          <div>
            <dt className="font-semibold text-[color:var(--foreground)] dark:text-white">Metragens</dt>
            <dd>{empreendimento.areaRange}</dd>
          </div>
        </dl>
        <div>
          <h4 className="text-sm font-semibold text-[color:var(--foreground)] dark:text-white">Diferenciais</h4>
          <ul className="mt-2 space-y-1 text-sm text-[color:var(--text-secondary)] dark:text-neutral-200">
            {empreendimento.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#F77F00]" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-[color:var(--foreground)] dark:text-white">Infraestrutura</h4>
          <ul className="mt-2 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--text-tertiary)] dark:text-neutral-300">
            {empreendimento.infrastructure.map((item) => (
              <li key={item} className="rounded-full border border-[color:var(--border-color)] bg-[color:var(--surface)] px-3 py-1 dark:border-white/15 dark:bg-[#2a2a2a]">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-xs text-[color:var(--text-tertiary)] dark:text-neutral-300">
          {empreendimento.regulation}
        </p>
        <Link
          href={empreendimento.cta.href}
          className="inline-flex items-center gap-2 rounded-full bg-[#DD0000] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#c20000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F77F00] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface)] dark:focus-visible:ring-offset-[#141414]"
        >
          {empreendimento.cta.label}
          <span aria-hidden>→</span>
        </Link>
      </div>
    </motion.article>
  );
}
