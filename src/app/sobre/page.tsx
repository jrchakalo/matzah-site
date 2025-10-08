import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/SectionHeading";
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
    <Container className="space-y-16 lg:space-y-24">
      <SectionHeading
        eyebrow="Nossa história"
        title={aboutContent.title}
        description={aboutContent.introduction}
      />

      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <div className="space-y-6 text-base text-neutral-600 dark:text-neutral-300">
          <p>{aboutContent.history}</p>
          <div className="rounded-3xl border border-neutral-200/70 bg-white/90 p-6 shadow-inner dark:border-white/10 dark:bg-[#1f1f1f]/90">
            <h3 className="font-heading text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              Propósito, missão e visão
            </h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="font-semibold text-[#DD0000] dark:text-[#F77F00]">
                  Propósito
                </dt>
                <dd className="text-neutral-700 dark:text-neutral-200">
                  {aboutContent.purpose}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-[#DD0000] dark:text-[#F77F00]">
                  Missão
                </dt>
                <dd className="text-neutral-700 dark:text-neutral-200">
                  {aboutContent.mission}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-[#DD0000] dark:text-[#F77F00]">
                  Visão
                </dt>
                <dd className="text-neutral-700 dark:text-neutral-200">
                  {aboutContent.vision}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="space-y-6">
          <div className="overflow-hidden rounded-3xl ring-1 ring-neutral-200/70 dark:ring-white/10">
            <Image
              src="/images/obra-andamento.jpg"
              alt="Estrutura de construção com equipe técnica"
              width={720}
              height={540}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="rounded-3xl border border-neutral-200/70 bg-white/90 p-6 shadow-sm dark:border-white/10 dark:bg-[#1f1f1f]/90">
            <h3 className="font-heading text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              Valores que sustentam nosso legado
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
              {aboutContent.values.map((value) => (
                <li key={value.title} className="flex items-start gap-3">
                  <span
                    className="mt-1 h-2 w-2 rounded-full bg-[#DD0000] dark:bg-[#F77F00]"
                    aria-hidden
                  />
                  <div>
                    <p className="font-semibold text-neutral-900 dark:text-white">
                      {value.title}
                    </p>
                    <p>{value.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="rounded-3xl border border-neutral-200/70 bg-white/90 p-6 shadow-sm dark:border-white/10 dark:bg-[#1f1f1f]/90">
          <h3 className="font-heading text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            Diferenciais competitivos
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
            {aboutContent.differentials.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#F77F00]" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex h-full flex-col justify-between rounded-3xl bg-gradient-to-br from-[#DD0000] via-[#F77F00] to-[#FCBF49] p-[1px]">
          <div className="h-full rounded-3xl bg-white/95 p-8 dark:bg-[#121212]/90">
            <h3 className="font-heading text-2xl font-semibold text-neutral-900 dark:text-white">
              Caminhamos com você
            </h3>
            <p className="mt-4 text-base text-neutral-700 dark:text-neutral-200">
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
