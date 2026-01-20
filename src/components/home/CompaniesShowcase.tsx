"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { grupoMatzahContent } from "@/content/grupo-matzah";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const cardVariants: Variants = {
  hidden: { y: 24 },
  visible: { y: 0 },
};

export function CompaniesShowcase() {
  return (
    <section className="space-y-10">
      <div className="text-center space-y-4">
        <p className="inline-flex rounded-full border border-[color:var(--chip-border)] bg-[color:var(--chip-bg)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--action-secondary)] dark:border-white/20 dark:bg-white/10">
          Grupo Matzah
        </p>
        <h2 className="font-heading text-3xl font-semibold text-[color:var(--foreground)] sm:text-4xl dark:text-white">
          Duas empresas, um propósito
        </h2>
        <p className="mx-auto max-w-2xl text-base text-[color:var(--text-secondary)] dark:text-neutral-200">
          {grupoMatzahContent.description}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {grupoMatzahContent.empresas.map((empresa, index) => (
          <CompanyCard key={empresa.id} empresa={empresa} index={index} />
        ))}
      </div>
    </section>
  );
}

function CompanyCard({
  empresa,
  index,
}: {
  empresa: (typeof grupoMatzahContent.empresas)[number];
  index: number;
}) {
  const { ref, shouldAnimate } = useScrollReveal<HTMLElement>();
  const initialState = shouldAnimate ? "hidden" : false;
  const animateState = shouldAnimate ? undefined : "visible";
  const viewportConfig = shouldAnimate ? { once: true, margin: "0px 0px -12% 0px" } : undefined;
  const transitionConfig = {
    duration: 0.55,
    ease: "easeOut" as const,
    delay: shouldAnimate ? index * 0.07 : 0,
  };

  const borderColor = `color-mix(in srgb, ${empresa.color} 30%, transparent)`;
  const bgGradient = `linear-gradient(135deg, color-mix(in srgb, ${empresa.color} 12%, transparent), transparent)`;

  return (
    <motion.article
      ref={ref}
      variants={cardVariants}
      initial={initialState}
      animate={animateState}
      whileInView={shouldAnimate ? "visible" : undefined}
      viewport={viewportConfig}
      transition={transitionConfig}
      className="group relative overflow-hidden rounded-3xl border bg-[color:var(--surface)] bg-gradient-to-br p-6 shadow-[0_28px_60px_-32px_var(--card-shadow)] transition duration-200 hover:-translate-y-2 dark:border-white/10"
      style={{ borderColor, backgroundImage: bgGradient }}
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-2">
          <span 
            className="inline-block h-2 w-2 rounded-full" 
            style={{ backgroundColor: empresa.color }}
            aria-hidden
          />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--text-secondary)] dark:text-neutral-400">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h3 className="font-heading text-xl font-semibold text-[color:var(--foreground)] dark:text-white">
          {empresa.name}
        </h3>

        <p className="text-sm font-medium text-[color:var(--text-secondary)] dark:text-neutral-300">
          {empresa.tagline}
        </p>

        <p className="text-sm text-[color:var(--text-secondary)] dark:text-neutral-400">
          {empresa.description}
        </p>

        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--text-secondary)] dark:text-neutral-400">
            Serviços:
          </p>
          <ul className="space-y-1 text-xs text-[color:var(--text-secondary)] dark:text-neutral-400">
            {empresa.services.map((service) => (
              <li key={service} className="flex items-start gap-2">
                <span className="mt-1 h-1 w-1 rounded-full bg-[color:var(--text-secondary)]" aria-hidden />
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href={empresa.cta.href}
          target={empresa.external ? "_blank" : undefined}
          rel={empresa.external ? "noopener noreferrer" : undefined}
          className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-color)] bg-[color:var(--surface)] px-4 py-2 text-xs font-semibold text-[color:var(--header-link)] transition-colors hover:border-[color:var(--action-secondary)] hover:bg-[color:var(--action-secondary)]/10 hover:text-[color:var(--action-secondary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--action-secondary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface)] dark:border-white/20 dark:bg-white/10 dark:text-white"
        >
          {empresa.cta.label}
          {empresa.external && <span aria-hidden>↗</span>}
          {!empresa.external && <span aria-hidden>→</span>}
        </Link>
      </div>
    </motion.article>
  );
}
