import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/home/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ValueHighlights } from "@/components/home/ValueHighlights";
import { AboutMini } from "@/components/home/AboutMini";
import { QuickServices } from "@/components/home/QuickServices";
import { ServicesTeaser } from "@/components/home/ServicesTeaser";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { TestimonialsPreview } from "@/components/home/TestimonialsPreview";
import { BlogPreview } from "@/components/home/BlogPreview";
import { NewsletterForm } from "@/components/NewsletterForm";
import { servicesContent } from "@/content/servicos";
import { trustMicrocopy } from "@/content/home";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title:
    "Imobiliária e Construção em Bezerros | Matzah Empreendimentos & Construções",
  description:
    "Matzah Empreendimentos em Bezerros-PE: imóveis, construção civil, avaliações, arquitetura, financiamento e desenvolvimento de projetos com fé, transparência e excelência.",
  keywords: siteConfig.keywords.primary,
  openGraph: {
    title:
      "Imobiliária e Construção em Bezerros | Matzah Empreendimentos & Construções",
    description:
      "Matzah Empreendimentos em Bezerros-PE: imóveis, construção civil, avaliações, arquitetura, financiamento e desenvolvimento de projetos com fé, transparência e excelência.",
    images: [
      {
        url: `${siteConfig.url}/images/hero-construcao.jpg`,
        alt: "Equipe Matzah apresentando empreendimento em Bezerros",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <Container className="space-y-16 lg:space-y-24">
        <Hero />

        <section className="space-y-6">
          <SectionHeading
            eyebrow="Serviços"
            title="Imobiliária, construção e inteligência em um único parceiro"
            description="Integramos planejamento, execução e relacionamento para gerar valor sustentável em cada empreendimento."
          />
          <QuickServices />
        </section>

        <section className="space-y-10">
          <SectionHeading
            eyebrow="Valor"
            title="Princípios que orientam nosso trabalho"
            description="Cada decisão nasce da combinação entre fé, transparência e excelência técnica."
          />
          <ValueHighlights />
        </section>

        <AboutMini />

        <section className="space-y-10">
          <SectionHeading
            eyebrow="Soluções"
            title={servicesContent.title}
            description={servicesContent.intro}
          />
          <ServicesTeaser />
        </section>

        <section className="space-y-10">
          <SectionHeading
            eyebrow="Processo"
            title="Metodologia integrada que reduz riscos"
            description="Acompanhamos todas as etapas com governança, métricas e transparência para entregar mais valor e menos retrabalho."
          />
          <ProcessSteps />
          <p className="text-sm font-semibold text-[#DD0000]">{trustMicrocopy}</p>
        </section>

        <TestimonialsPreview />

        <BlogPreview />
      </Container>

      <Container id="newsletter" className="mt-16 lg:mt-24">
        <NewsletterForm
          title="Receba novos conteúdos no seu e-mail"
          description="Insights sobre avaliação, financiamento, construção, arquitetura e desenvolvimento imobiliário em Pernambuco."
          privacy="Utilizamos seus dados apenas para envio de conteúdo e você pode cancelar a qualquer momento."
        />
      </Container>
    </>
  );
}
