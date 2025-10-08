import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialsGrid } from "@/components/testimonials/TestimonialsGrid";
import { testimonialsContent } from "@/content/testimonials";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Depoimentos | Matzah Empreendimentos & Construções",
  description:
    "Histórias reais de clientes, investidores e parceiros que confiam na Matzah Empreendimentos & Construções.",
  openGraph: {
    title: "Depoimentos | Matzah Empreendimentos & Construções",
    description:
      "Histórias reais de clientes, investidores e parceiros que confiam na Matzah Empreendimentos & Construções.",
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

export default function DepoimentosPage() {
  return (
    <Container className="space-y-16 lg:space-y-24">
      <SectionHeading
        eyebrow="Confiança"
        title={testimonialsContent.title}
        description={testimonialsContent.introduction}
      />

      <TestimonialsGrid />

      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#DD0000] via-[#F77F00] to-[#FCBF49] p-[1px] shadow-xl">
        <div className="rounded-[1.45rem] bg-white/95 p-8 text-center dark:bg-[#121212]/92">
          <h2 className="font-heading text-2xl font-semibold text-neutral-900 dark:text-white">
          {testimonialsContent.closing}
          </h2>
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-200">
            Preferimos conversar com calma e construir histórias duradouras. Compartilhe sua experiência ou fale conosco pelo WhatsApp.
          </p>
        </div>
      </div>
    </Container>
  );
}
