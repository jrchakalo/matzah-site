import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/home/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ValueHighlights } from "@/components/home/ValueHighlights";
import { AboutMini } from "@/components/home/AboutMini";
import { CompaniesShowcase } from "@/components/home/CompaniesShowcase";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { BlogPreview } from "@/components/home/BlogPreview";
import { NewsletterForm } from "@/components/NewsletterForm";
import { trustMicrocopy } from "@/content/home";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title:
    "Matzah Empreendimentos & Construções | Imobiliária e Construção em Bezerros",
  description:
    "Matzah Empreendimentos em Bezerros-PE: imóveis, construção civil, avaliações, arquitetura, financiamento e desenvolvimento de projetos com fé, transparência e excelência.",
  keywords: siteConfig.keywords.primary,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title:
      "Matzah Empreendimentos & Construções | Imobiliária e Construção em Bezerros",
    description:
      "Matzah Empreendimentos em Bezerros-PE: imóveis, construção civil, avaliações, arquitetura, financiamento e desenvolvimento de projetos com fé, transparência e excelência.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'pt_BR',
    type: 'website',
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
      <Container className="space-y-16 lg:space-y-24 pt-24 sm:pt-28 pb-20">
        <Hero />

        <CompaniesShowcase />

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
            eyebrow="Processo"
            title="Metodologia integrada que reduz riscos"
            description="Acompanhamos todas as etapas com governança, métricas e transparência para entregar mais valor e menos retrabalho."
          />
          <ProcessSteps />
          {trustMicrocopy && (
            <p className="text-sm font-semibold text-[color:var(--action-primary)]">{trustMicrocopy}</p>
          )}
        </section>

        <BlogPreview />
      </Container>

      <Container className="mt-16 lg:mt-24 pb-20">
        <NewsletterForm
          id="newsletter-home"
          title="Receba novos conteúdos no seu e-mail"
          description="Insights sobre avaliação, financiamento, construção, arquitetura e desenvolvimento imobiliário em Pernambuco."
          privacy="Utilizamos seus dados apenas para envio de conteúdo e você pode cancelar a qualquer momento."
        />
      </Container>
    </>
  );
}
