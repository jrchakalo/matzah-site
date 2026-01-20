import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { grupoMatzahContent } from "@/content/grupo-matzah";
import { siteConfig } from "@/lib/siteConfig";

const empresa = grupoMatzahContent.empresas.find((e) => e.id === "empreendimentos-construcoes")!;

export const metadata: Metadata = {
  title: `${empresa.name} | ${empresa.tagline}`,
  description: empresa.description,
  openGraph: {
    title: `${empresa.name} | ${empresa.tagline}`,
    description: empresa.description,
    images: [
      {
        url: `${siteConfig.url}/images/hero-construcao.jpg`,
        width: 1200,
        height: 630,
        alt: empresa.name,
      },
    ],
  },
};

export default function MatzahECPage() {
  return (
    <Container className="space-y-6 lg:space-y-8 pt-24 sm:pt-28 pb-20">
      <Breadcrumbs 
        className="mb-6"
        items={[
          { label: 'Grupo Matzah', href: '/grupo-matzah' },
          { label: 'Matzah Empreendimentos & Construções' }
        ]}
      />
      
      <div className="space-y-6">
        <Link
          href="/grupo-matzah"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--text-secondary)] transition hover:text-[color:var(--action-primary)] dark:text-neutral-300"
        >
          <span aria-hidden>←</span>
          Voltar ao Grupo Matzah
        </Link>

        <div className="flex items-center gap-4">
          <span
            className="inline-block h-4 w-4 rounded-full"
            style={{ backgroundColor: empresa.color }}
            aria-hidden
          />
          <SectionHeading
            eyebrow="Grupo Matzah"
            title={empresa.name}
            description={empresa.tagline}
          />
        </div>
      </div>

      <div className="relative overflow-hidden rounded-3xl h-64 lg:h-80">
        <Image
          src="/images/matzah-matzahempreedimentos.jpg"
          alt="Matzah Empreendimentos & Construções"
          width={1200}
          height={600}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-3xl border border-[color:var(--border-color)] bg-[color:var(--surface-muted)] p-8 shadow-[0_26px_55px_-32px_var(--card-shadow)] dark:border-white/10 dark:bg-[#1f1f1f]/90">
            <h2 className="font-heading text-2xl font-semibold text-[color:var(--foreground)] dark:text-white">
              Sobre a Matzah Empreendimentos & Construções
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[color:var(--text-secondary)] dark:text-neutral-300">
              {empresa.description}
            </p>
          </div>

          <div className="rounded-3xl border border-[color:var(--border-color)] bg-[color:var(--surface-muted)] p-8 shadow-[0_26px_55px_-32px_var(--card-shadow)] dark:border-white/10 dark:bg-[#1f1f1f]/90">
            <h3 className="font-heading text-xl font-semibold text-[color:var(--foreground)] dark:text-white">
              Nossos Serviços
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[color:var(--text-secondary)] dark:text-neutral-300">
              {empresa.services.map((service) => (
                <li key={service} className="flex items-start gap-3">
                  <span
                    className="mt-1 h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: empresa.color }}
                    aria-hidden
                  />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-3xl border border-[color:var(--border-color)] bg-[color:var(--surface-muted)] p-8 shadow-[0_26px_55px_-32px_var(--card-shadow)] dark:border-white/10 dark:bg-[#1f1f1f]/90">
          <h3 className="font-heading text-xl font-semibold text-[color:var(--foreground)] dark:text-white">
            Diferenciais
          </h3>
          <ul className="mt-6 space-y-4 text-sm text-[color:var(--text-secondary)] dark:text-neutral-300">
            {empresa.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3">
                <span
                  className="mt-1 h-2 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: empresa.color }}
                  aria-hidden
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-3xl border border-[color:var(--border-color)] bg-gradient-to-br from-[color:var(--action-primary)]/10 to-transparent p-10 text-center shadow-[0_28px_60px_-35px_var(--card-shadow)] transition-colors dark:border-white/10">
        <h2 className="font-heading text-3xl font-semibold text-[color:var(--foreground)] dark:text-white">
          Precisa avaliar, projetar ou construir?
        </h2>
        <p className="mt-4 text-base text-[color:var(--text-secondary)] dark:text-neutral-200">
          Nossa equipe técnica está pronta para desenvolver seu projeto com excelência, do planejamento à entrega.
        </p>
        <Link
          href="/contato"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-[color:var(--action-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--action-primary-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--action-secondary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface)] dark:focus-visible:ring-offset-[#121212]"
        >
          Falar com a equipe
        </Link>
      </div>
    </Container>
  );
}
