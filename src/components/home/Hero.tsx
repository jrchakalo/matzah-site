"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { heroContent } from "@/content/home";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-[color:var(--border-color)] bg-[color:var(--surface)] text-[color:var(--foreground)] shadow-[0_25px_60px_-25px_var(--card-shadow)] transition-colors duration-500 dark:border-neutral-700 dark:bg-[#111111] dark:text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-construcao.jpg"
          alt="Equipe técnica analisando projeto de construção civil"
          fill
          className="object-cover opacity-70"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-white/70 to-transparent dark:from-black/70 dark:via-black/60 dark:to-black/30" />
      </div>

      <div className="relative z-10 flex flex-col gap-12 px-6 py-16 sm:px-10 lg:flex-row lg:items-center lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="inline-flex rounded-full border border-[color:var(--chip-border)] bg-[color:var(--chip-bg)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--action-secondary)] dark:border-white/20 dark:bg-white/10">
            Matzah Empreendimentos & Construções
          </p>
          <h1 className="mt-6 font-heading text-4xl font-semibold leading-tight text-[color:var(--foreground)] sm:text-5xl lg:text-6xl dark:text-white">
            {heroContent.title}
          </h1>
          <p className="mt-6 text-lg text-[color:var(--text-secondary)] dark:text-neutral-100/90">
            {heroContent.subtitle}
          </p>
          <p className="mt-4 text-base text-[color:var(--text-tertiary)] dark:text-neutral-100/75">
            {heroContent.lead}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {heroContent.primaryCtas.map((cta, index) => {
              const isExternal = cta.href.startsWith("http");
              const primaryStyles =
                index === 0
                  ? "border border-[color:var(--action-primary)]/60 bg-[color:var(--action-primary)]/20 text-[color:var(--foreground)] shadow-[0_0_30px_var(--action-primary-shadow)] hover:bg-[color:var(--action-primary)]/30 dark:text-white"
                  : index === 1
                  ? "border border-[color:var(--action-secondary)]/60 bg-[color:var(--action-secondary)]/20 text-[color:var(--foreground)] shadow-[0_0_30px_var(--action-primary-shadow)] hover:bg-[color:var(--action-secondary)]/30 dark:text-white"
                  : index === 2
                  ? "border border-[color:var(--highlight)]/60 bg-[color:var(--highlight)]/20 text-[color:var(--foreground)] shadow-[0_0_30px_var(--action-primary-shadow)] hover:bg-[color:var(--highlight)]/30 dark:text-white"
                  : "border border-[color:var(--border-color)] bg-[color:var(--surface-soft)] text-[color:var(--header-link)] hover:border-[color:var(--action-secondary)]/60 hover:bg-[color:var(--action-secondary)]/15 hover:text-[color:var(--action-secondary)] dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/15";
              return (
                <Link
                  key={cta.label}
                  href={cta.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className={cn(
                    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--action-secondary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface)] dark:focus-visible:ring-offset-neutral-900",
                    primaryStyles
                  )}
                >
                  {cta.label}
                </Link>
              );
            })}
          </div>
          {heroContent.secondaryLinks.length > 0 && (
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-[color:var(--text-secondary)] dark:text-neutral-100/90">
              {heroContent.secondaryLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center gap-2 rounded-full border border-[color:var(--highlight)]/45 bg-[color:var(--highlight)]/25 px-4 py-2 text-[color:var(--header-link)] transition hover:border-[color:var(--highlight)]/65 hover:bg-[color:var(--highlight)]/35 dark:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative isolate overflow-hidden rounded-3xl border border-[color:var(--border-color)] bg-[color:var(--surface-muted)] p-6 shadow-[0_20px_50px_-25px_var(--card-shadow)] backdrop-blur lg:w-[360px] dark:border-white/15 dark:bg-white/10 dark:shadow-none"
        >
          <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[color:var(--highlight)]/40 blur-3xl" aria-hidden />
          <div className="absolute -bottom-12 -left-10 h-32 w-32 rounded-full bg-[color:var(--action-primary)]/35 blur-3xl" aria-hidden />
          <div className="relative space-y-4">
            <span className="relative block h-10 w-32">
              <Image
                src="/matzah-logo.png"
                alt="Logotipo da Matzah"
                fill
                sizes="128px"
                className="object-contain dark:hidden"
              />
              <Image
                src="/matzah-logo-branco.png"
                alt="Logotipo da Matzah"
                fill
                sizes="128px"
                className="hidden object-contain dark:block"
              />
            </span>
            <h2 className="font-heading text-2xl font-semibold text-[color:var(--foreground)] dark:text-white">
              Credibilidade que inspira segurança
            </h2>
            <p className="text-sm text-[color:var(--text-secondary)] dark:text-neutral-100/80">
              Projetos imobiliários, arquitetônicos e construtivos guiados por fé, planejamento e excelência técnica.
            </p>
            <div className="space-y-3 text-sm text-[color:var(--text-tertiary)] dark:text-neutral-100/75">
              {heroContent.quickServices.map((item) => (
                <p key={item}>• {item}</p>
              ))}
              <p>• Time multidisciplinar com arquitetura, engenharia e mercado.</p>
              <p>• Transparência total do diagnóstico à pós-entrega.</p>
            </div>
            <Link
              href="/grupo-matzah"
              className="inline-flex items-center justify-center rounded-full border border-[color:var(--border-color)] bg-[color:var(--surface)] px-5 py-3 text-sm font-semibold text-[color:var(--header-link)] transition hover:border-[color:var(--action-secondary)]/60 hover:bg-[color:var(--action-secondary)]/12 hover:text-[color:var(--action-secondary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--action-secondary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface)] dark:border-white/25 dark:bg-white/10 dark:text-white dark:focus-visible:ring-offset-neutral-900"
            >
              Conheça nossas soluções
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
