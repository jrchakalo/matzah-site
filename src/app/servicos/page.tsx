import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ProcessTimeline } from "@/components/services/ProcessTimeline";
import { servicesContent } from "@/content/servicos";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Serviços Imobiliários, Avaliação, Construção e Arquitetura | Matzah",
  description:
    "Soluções completas: intermediação, representação, avaliação, financiamento, projetos e obras em Pernambuco.",
  openGraph: {
    title: "Serviços Imobiliários, Avaliação, Construção e Arquitetura | Matzah",
    description:
      "Soluções completas: intermediação, representação, avaliação, financiamento, projetos e obras em Pernambuco.",
    images: [
      {
        url: `${siteConfig.url}/images/hero-construcao.jpg`,
        width: 1200,
        height: 630,
        alt: "Equipe de engenharia analisando projeto construtivo",
      },
    ],
  },
};

export default function ServicosPage() {
  return (
    <Container className="space-y-16 lg:space-y-24">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Nossas soluções"
            title={servicesContent.title}
            description={servicesContent.intro}
          />
          <p className="text-base text-neutral-600 dark:text-neutral-200">
            Atuamos com governança, métricas claras e acompanhamento próximo em todas as frentes do ciclo imobiliário e construtivo. Cada demanda é analisada com profundidade para indicar o caminho ideal e maximizar o retorno.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-3xl">
          <Image
            src="/images/empreendimento-bezerros.jpg"
            alt="Fachada do empreendimento Residencial Jardim das Serras em Bezerros"
            width={720}
            height={540}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="space-y-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {servicesContent.services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

  <section className="grid gap-10 rounded-3xl border border-neutral-100 bg-white/85 p-8 shadow-sm transition-colors lg:grid-cols-[0.9fr_1.1fr] lg:items-center dark:border-white/10 dark:bg-[#1f1f1f]">
        <div className="space-y-4">
          <h2 className="font-heading text-3xl font-semibold text-neutral-900 dark:text-white">
            Processo integrado que gera previsibilidade
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-200">
            Nossa metodologia conecta diagnóstico, planejamento, modelagem comercial, execução e pós-entrega, garantindo transparência e tomada de decisão baseada em dados.
          </p>
        </div>
        <ProcessTimeline />
      </section>
    </Container>
  );
}
