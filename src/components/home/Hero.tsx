"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { heroContent } from "@/content/home";
import { siteConfig } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";

const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber.replace("+", "")}`;

export function Hero() {
  return (
  <section className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-900 text-white shadow-xl transition-colors duration-500 dark:border-neutral-700 dark:bg-[#111111]">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-construcao.jpg"
          alt="Equipe técnica analisando projeto de construção civil"
          fill
          className="object-cover opacity-70"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/30" />
      </div>

      <div className="relative z-10 flex flex-col gap-12 px-6 py-16 sm:px-10 lg:flex-row lg:items-center lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#FCBF49]">
            Matzah Empreendimentos & Construções
          </p>
          <h1 className="mt-6 font-heading text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            {heroContent.title}
          </h1>
          <p className="mt-6 text-lg text-neutral-100/90">
            {heroContent.subtitle}
          </p>
          <p className="mt-4 text-base text-neutral-100/75">
            {heroContent.lead}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {heroContent.primaryCtas.map((cta, index) => {
              const href = cta.label.includes("WhatsApp") ? whatsappHref : cta.href;
              const primaryStyles =
                index === 0
                  ? "border border-[#F77F00]/60 bg-[#F77F00]/20 text-white shadow-[0_0_30px_rgba(247,127,0,0.18)] hover:bg-[#F77F00]/30"
                  : "border border-white/20 bg-white/10 text-white hover:bg-white/15";
              return (
                <Link
                  key={cta.label}
                  href={href}
                  className={cn(
                    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-900",
                    primaryStyles
                  )}
                >
                  {cta.label}
                </Link>
              );
            })}
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-neutral-100/90">
            {heroContent.secondaryLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-2 rounded-full border border-[#FCBF49]/30 bg-[#FCBF49]/12 px-4 py-2 text-white transition hover:border-[#FCBF49]/60 hover:bg-[#FCBF49]/20"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative isolate overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur lg:w-[360px]"
        >
          <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[#FCBF49]/30 blur-3xl" aria-hidden />
          <div className="absolute -bottom-12 -left-10 h-32 w-32 rounded-full bg-[#DD0000]/30 blur-3xl" aria-hidden />
          <div className="relative space-y-4">
            <span className="relative block h-10 w-32">
              <Image
                src="/matzah-logo-branco.png"
                alt="Logotipo da Matzah"
                fill
                sizes="128px"
                className="object-contain"
              />
            </span>
            <h2 className="font-heading text-2xl font-semibold text-white">
              Credibilidade que inspira segurança
            </h2>
            <p className="text-sm text-neutral-100/80">
              Projetos imobiliários, arquitetônicos e construtivos guiados por fé, planejamento e excelência técnica.
            </p>
            <div className="space-y-3 text-sm text-neutral-100/75">
              <p>• Mais de 30 empreendimentos assessorados na região agreste.</p>
              <p>• Time multidisciplinar com arquitetura, engenharia e mercado.</p>
              <p>• Transparência total do diagnóstico à pós-entrega.</p>
            </div>
            <Link
              href="/servicos"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-brand-accent hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
            >
              Conheça nossas soluções
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
