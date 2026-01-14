import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProcessTimeline } from "@/components/services/ProcessTimeline";
import { grupoMatzahContent } from "@/content/grupo-matzah";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Grupo Matzah | Três Empresas, Um Propósito",
  description:
    "Conheça as três empresas do Grupo Matzah: Matzah Way, Matzah Empreendimentos & Construções e Matzah Soluções Imobiliárias.",
  openGraph: {
    title: "Grupo Matzah | Três Empresas, Um Propósito",
    description:
      "Conheça as três empresas do Grupo Matzah: Matzah Way, Matzah Empreendimentos & Construções e Matzah Soluções Imobiliárias.",
    images: [
      {
        url: `${siteConfig.url}/images/hero-construcao.jpg`,
        width: 1200,
        height: 630,
        alt: "Grupo Matzah - Três empresas integradas",
      },
    ],
  },
};

export default function GrupoMatzahPage() {
  return (
    <Container className="space-y-16 lg:space-y-24 pt-24 sm:pt-28 pb-20">
      <Breadcrumbs 
        className="mb-8"
        items={[
          { label: 'Grupo Matzah' }
        ]}
      />
      
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Grupo Matzah"
            title={grupoMatzahContent.title}
            description={grupoMatzahContent.intro}
          />
          <p className="text-base leading-relaxed text-[color:var(--text-secondary)] dark:text-neutral-200">
            {grupoMatzahContent.description}
          </p>
        </div>
        <div className="relative overflow-hidden rounded-3xl">
          <Image
            src="/images/serviços.jpg"
            alt="Fachada do empreendimento Residencial Jardim das Serras em Bezerros"
            width={720}
            height={540}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="space-y-10">
        <h2 className="font-heading text-3xl font-semibold text-center text-[color:var(--foreground)] dark:text-white">
          Nossas Empresas
        </h2>
        <div className="grid gap-8 xl:grid-cols-3">
          {grupoMatzahContent.empresas.map((empresa) => (
            <article
              key={empresa.id}
              className="flex flex-col rounded-3xl border border-[color:var(--border-color)] bg-[color:var(--surface-muted)] p-8 shadow-[0_32px_65px_-35px_var(--card-shadow)] transition-all duration-200 hover:-translate-y-1 dark:border-white/10 dark:bg-[#1f1f1f]"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <span
                  className="inline-block h-3 w-3 rounded-full"
                  style={{ backgroundColor: empresa.color }}
                  aria-hidden
                />
              </div>

              <h3 className="font-heading text-2xl font-semibold text-[color:var(--foreground)] dark:text-white">
                {empresa.name}
              </h3>

              <p className="mt-3 text-sm font-medium text-[color:var(--text-secondary)] dark:text-neutral-300">
                {empresa.tagline}
              </p>

              <p className="mt-4 text-sm text-[color:var(--text-tertiary)] dark:text-neutral-400">
                {empresa.description}
              </p>

              <div className="mt-6 space-y-3 mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--header-link-muted)] dark:text-neutral-400">
                  Serviços:
                </p>
                <ul className="space-y-2 text-sm text-[color:var(--text-tertiary)] dark:text-neutral-400">
                  {empresa.services.map((service) => (
                    <li key={service} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--text-tertiary)]" aria-hidden />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={empresa.cta.href}
                target={empresa.external ? "_blank" : undefined}
                rel={empresa.external ? "noopener noreferrer" : undefined}
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#DD0000] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#c20000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F77F00] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface)] dark:focus-visible:ring-offset-[#121212]"
              >
                {empresa.cta.label}
                {empresa.external && <span aria-hidden>↗</span>}
                {!empresa.external && <span aria-hidden>→</span>}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-[color:var(--border-color)] bg-gradient-to-br from-[#DD0000]/10 via-[#F77F00]/10 to-[#FCBF49]/10 p-10 text-center shadow-[0_28px_60px_-35px_var(--card-shadow)] transition-colors dark:border-white/10 dark:from-[#DD0000]/5 dark:via-[#F77F00]/5 dark:to-[#FCBF49]/5">
        <h2 className="font-heading text-3xl font-semibold text-[color:var(--foreground)] dark:text-white">
          {grupoMatzahContent.integration.title}
        </h2>
        <p className="mt-4 text-base text-[color:var(--text-secondary)] dark:text-neutral-200">
          {grupoMatzahContent.integration.description}
        </p>
      </section>

      <section className="grid gap-10 rounded-3xl border border-[color:var(--border-color)] bg-[color:var(--surface-muted)] p-8 shadow-[0_32px_65px_-35px_var(--card-shadow)] transition-colors lg:grid-cols-[0.9fr_1.1fr] lg:items-center dark:border-white/10 dark:bg-[#1f1f1f]">
        <div className="space-y-4">
          <h2 className="font-heading text-3xl font-semibold text-[color:var(--foreground)] dark:text-white">
            Processo integrado que gera previsibilidade
          </h2>
          <p className="text-base text-[color:var(--text-secondary)] dark:text-neutral-200">
            Nossa metodologia conecta diagnóstico, planejamento, modelagem comercial, execução e pós-entrega, garantindo transparência e tomada de decisão baseada em dados.
          </p>
        </div>
        <ProcessTimeline />
      </section>

      <section className="rounded-3xl border border-[color:var(--border-color)] bg-[color:var(--surface-muted)] p-10 text-center shadow-[0_28px_60px_-35px_var(--card-shadow)] transition-colors dark:border-white/10 dark:bg-[#1f1f1f]">
        <h2 className="font-heading text-3xl font-semibold text-[color:var(--foreground)] dark:text-white">
          {grupoMatzahContent.closing}
        </h2>
        <Link
          href="/contato"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-[#DD0000] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#c20000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F77F00] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface)] dark:focus-visible:ring-offset-[#121212]"
        >
          Entre em contato
        </Link>
      </section>
    </Container>
  );
}
