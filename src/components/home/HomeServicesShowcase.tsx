"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { servicesContent } from "@/content/servicos";
import { cn } from "@/lib/utils";

const shades = [
  "from-[#2F2B43]/95 to-[#211B31]",
  "from-[#DD0000]/95 to-[#8F0D0D]",
  "from-[#F77F00]/90 to-[#DD5600]/90",
  "from-[#1F3A5F]/95 to-[#0F1E30]",
  "from-[#0D9488]/95 to-[#0F766E]/95",
  "from-[#6366F1]/90 to-[#4338CA]/95",
  "from-[#4C1D95]/90 to-[#312E81]/95",
  "from-[#166534]/95 to-[#14532D]/95",
];

export function HomeServicesShowcase() {
  const services = servicesContent.services.map((service, index) => ({
    ...service,
    gradient: shades[index % shades.length],
  }));

  return (
    <section className="relative overflow-hidden rounded-[2.5rem] border border-neutral-200/70 bg-[var(--surface-muted)] p-8 shadow-lg backdrop-blur lg:p-12 dark:border-white/10 dark:bg-[#1e1e1e]">
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200/80 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-[#DD0000]" aria-hidden />
            Tudo começa com estratégia
          </div>
          <div className="space-y-4">
            <h2 className="font-heading text-3xl font-semibold text-neutral-900 sm:text-4xl lg:text-5xl dark:text-white">
              Um ecossistema completo em serviços imobiliários
            </h2>
            <p className="text-base text-neutral-600 dark:text-white/70">
              Da concepção de empreendimentos à comercialização e gestão de vendas, a Matzah integra equipes técnicas, marketing e inteligência comercial para gerar resultado real em cada etapa do ciclo.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href={"/servicos"}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#DD0000] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#DD0000]/30 transition hover:bg-[#F77F00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F77F00] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0E0E10]"
            >
              Explorar todos os serviços
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href={"/contato?assunto=servicos"}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:border-[#F77F00] hover:text-[#F77F00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F77F00] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/12 dark:bg-[#272727] dark:text-white dark:hover:border-[#F77F00] dark:hover:text-[#F77F00] dark:focus-visible:ring-offset-[#0E0E10]"
            >
              Construir uma solução sob medida
              <span aria-hidden>↗</span>
            </Link>
          </div>
          <div className="mt-6 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-white/40">
              Sites Matzah
            </span>
            <div className="flex flex-wrap gap-2">
              {servicesContent.hubs?.map((hub) => (
                <Link
                  key={hub.url}
                  href={hub.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-semibold text-neutral-700 transition hover:border-[#F77F00] hover:text-[#F77F00] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F77F00] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/12 dark:bg-[#272727] dark:text-white/80 dark:hover:border-[#F77F00] dark:hover:text-[#F77F00] dark:focus-visible:ring-offset-[#0E0E10]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#DD0000]" aria-hidden />
                  {hub.label}
                  <span aria-hidden>↗</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={cn(
                "relative overflow-hidden rounded-3xl p-6 text-white shadow-xl",
                "ring-1 ring-inset ring-white/10 backdrop-blur",
                "transition will-change-transform hover:-translate-y-1",
                "dark:ring-white/5",
                "bg-gradient-to-br",
                service.gradient,
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {service.hubUrl ? (
                  <Link
                    href={service.hubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/85 transition hover:border-white/60 hover:bg-white/20"
                  >
                    Acesse o site
                    <span aria-hidden>↗</span>
                  </Link>
                ) : null}
              </div>
              <h3 className="mt-4 font-heading text-xl font-semibold leading-tight text-white">
                {service.name}
              </h3>
              <p className="mt-3 text-sm text-white/80">
                {service.description}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                <Link
                  href={service.cta.href}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[11px] font-semibold text-white transition hover:border-white hover:bg-white hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                  {service.cta.label}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/10 to-transparent dark:from-black/30" />
    </section>
  );
}
