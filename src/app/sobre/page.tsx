import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { aboutContent } from "@/content/sobre";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Sobre a Matzah | Transparência e Excelência em Empreendimentos",
  description:
    "Conheça a história, missão e valores da Matzah Empreendimentos & Construções em Bezerros-PE.",
  openGraph: {
    title: "Sobre a Matzah | Transparência e Excelência em Empreendimentos",
    description:
      "Conheça a história, missão e valores da Matzah Empreendimentos & Construções em Bezerros-PE.",
    images: [
      {
        url: `${siteConfig.url}/images/equipe-matzah.jpg`,
        width: 1200,
        height: 630,
        alt: "Equipe Matzah reunida em ambiente corporativo",
      },
    ],
  },
};

export default function SobrePage() {
  return (
    <Container className="space-y-16 lg:space-y-24 pt-24 sm:pt-28 pb-20">
      <Breadcrumbs 
        className="mb-8"
        items={[
          { label: 'Sobre' }
        ]}
      />
      
      <div className="space-y-6">
        <p className="inline-flex rounded-full border border-[color:var(--chip-border)] bg-[color:var(--chip-bg)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#965000] dark:border-white/20 dark:bg-white/10 dark:text-[#FCBF49]">
          {aboutContent.eyebrow || "Nossa história"}
        </p>
        <h1 className="font-heading text-3xl font-semibold text-[color:var(--foreground)] sm:text-4xl lg:text-5xl dark:text-white">
          {aboutContent.title}
        </h1>
        <p className="text-base text-[color:var(--text-secondary)] dark:text-neutral-200">
          {aboutContent.introduction}
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-3">
        <div className="rounded-3xl border border-[color:var(--border-color)] bg-[color:var(--surface-muted)] p-6 shadow-[0_26px_55px_-32px_var(--card-shadow)] dark:border-white/10 dark:bg-[#1f1f1f]/90">
          <h3 className="font-heading text-lg font-semibold text-[color:var(--foreground)] dark:text-neutral-100">
            Propósito
          </h3>
          <p className="mt-3 text-sm text-[color:var(--text-secondary)] dark:text-neutral-200">
            {aboutContent.purpose}
          </p>
        </div>

        <div className="rounded-3xl border border-[color:var(--border-color)] bg-[color:var(--surface-muted)] p-6 shadow-[0_26px_55px_-32px_var(--card-shadow)] dark:border-white/10 dark:bg-[#1f1f1f]/90">
          <h3 className="font-heading text-lg font-semibold text-[color:var(--foreground)] dark:text-neutral-100">
            Missão
          </h3>
          <p className="mt-3 text-sm text-[color:var(--text-secondary)] dark:text-neutral-200">
            {aboutContent.mission}
          </p>
        </div>

        <div className="rounded-3xl border border-[color:var(--border-color)] bg-[color:var(--surface-muted)] p-6 shadow-[0_26px_55px_-32px_var(--card-shadow)] dark:border-white/10 dark:bg-[#1f1f1f]/90">
          <h3 className="font-heading text-lg font-semibold text-[color:var(--foreground)] dark:text-neutral-100">
            Visão
          </h3>
          <p className="mt-3 text-sm text-[color:var(--text-secondary)] dark:text-neutral-200">
            {aboutContent.vision}
          </p>
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="overflow-hidden rounded-3xl ring-1 ring-[color:var(--border-color)] dark:ring-white/10">
          <Image
            src="/images/quem.jpg"
            alt="Estrutura de construção com equipe técnica"
            width={720}
            height={540}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="rounded-3xl border border-[color:var(--border-color)] bg-[color:var(--surface-muted)] p-8 shadow-[0_26px_55px_-32px_var(--card-shadow)] dark:border-white/10 dark:bg-[#1f1f1f]/90">
          <h3 className="font-heading text-2xl font-semibold text-[color:var(--foreground)] dark:text-neutral-100">
            Valores que sustentam nosso legado
          </h3>
          <ul className="mt-6 space-y-4 text-sm text-[color:var(--text-secondary)] dark:text-neutral-300">
            {aboutContent.values.map((value) => (
              <li key={value.title} className="flex items-start gap-3">
                <span
                  className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#DD0000] dark:bg-[#F77F00]"
                  aria-hidden
                />
                <div>
                  <p className="font-semibold text-[color:var(--foreground)] dark:text-white">
                    {value.title}
                  </p>
                  <p className="mt-1">{value.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="rounded-3xl border border-[color:var(--border-color)] bg-[color:var(--surface-muted)] p-8 shadow-[0_26px_55px_-32px_var(--card-shadow)] dark:border-white/10 dark:bg-[#1f1f1f]/90">
          <h3 className="font-heading text-xl font-semibold text-[color:var(--foreground)] dark:text-neutral-100">
            Diferenciais competitivos
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-[color:var(--text-secondary)] dark:text-neutral-300">
            {aboutContent.differentials.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#F77F00]" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex h-full flex-col justify-between rounded-3xl bg-gradient-to-br from-[#DD0000] via-[#F77F00] to-[#FCBF49] p-[1px]">
          <div className="h-full rounded-3xl bg-[color:var(--surface-muted)] p-8 dark:bg-[#121212]/90">
            <h3 className="font-heading text-2xl font-semibold text-[color:var(--foreground)] dark:text-white">
              Caminhamos com você
            </h3>
            <p className="mt-4 text-base text-[color:var(--text-secondary)] dark:text-neutral-200">
              {aboutContent.closing}
            </p>
            <p className="mt-6 text-sm font-semibold text-[#DD0000] dark:text-[#FCBF49]">
              Construindo confiança. Entregando valor. Transformando vidas.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
