"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { heroContent } from "@/content/home";
import { siteConfig } from "@/lib/siteConfig";

const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber.replace("+", "")}`;

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-neutral-100 bg-neutral-950 text-white shadow-xl">
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
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="inline-flex rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#FCBF49]">
            Matzah Empreendimentos & Construções
          </p>
          <h1 className="mt-6 font-heading text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            {heroContent.title}
          </h1>
          <p className="mt-6 text-lg text-neutral-200">
            {heroContent.subtitle}
          </p>
          <p className="mt-4 text-base text-neutral-100/80">
            {heroContent.lead}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {heroContent.ctas.map((cta) => {
              const href = cta.label.includes("WhatsApp") ? whatsappHref : cta.href;
              return (
                <Link
                  key={cta.label}
                  href={href}
                  className="inline-flex items-center justify-between rounded-2xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#FCBF49]/60 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F77F00] focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
                >
                  <span>{cta.label}</span>
                  <span aria-hidden>→</span>
                </Link>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative isolate overflow-hidden rounded-3xl bg-white/10 p-6 backdrop-blur lg:w-[360px]"
        >
          <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[#FCBF49]/30 blur-3xl" aria-hidden />
          <div className="absolute -bottom-12 -left-10 h-32 w-32 rounded-full bg-[#DD0000]/30 blur-3xl" aria-hidden />
          <div className="relative space-y-4">
            <h2 className="font-heading text-2xl font-semibold text-white">
              Credibilidade que inspira segurança
            </h2>
            <p className="text-sm text-neutral-100/80">
              Projetos imobiliários, arquitetônicos e construtivos guiados por fé, planejamento e excelência técnica.
            </p>
            <div className="space-y-3 text-sm text-neutral-100/70">
              <p>• Mais de 30 empreendimentos assessorados na região agreste.</p>
              <p>• Time multidisciplinar com arquitetura, engenharia e mercado.</p>
              <p>• Transparência total do diagnóstico à pós-entrega.</p>
            </div>
            <Link
              href="/servicos"
              className="inline-flex items-center justify-center rounded-full bg-[#FCBF49] px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-[#F6A20A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
            >
              Conheça nossas soluções
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
