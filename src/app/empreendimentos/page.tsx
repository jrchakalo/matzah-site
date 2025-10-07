import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { EmpreendimentoCard } from "@/components/empreendimentos/EmpreendimentoCard";
import { empreendimentosContent } from "@/content/empreendimentos";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Empreendimentos em Bezerros e Região | Matzah",
  description:
    "Conheça nossos lançamentos, obras e projetos entregues. Qualidade, valorização e planejamento.",
  openGraph: {
    title: "Empreendimentos em Bezerros e Região | Matzah",
    description:
      "Conheça nossos lançamentos, obras e projetos entregues. Qualidade, valorização e planejamento.",
    images: [
      {
        url: `${siteConfig.url}/images/empreendimento-bezerros.jpg`,
        width: 1200,
        height: 630,
        alt: "Fachada do empreendimento Residencial Jardim das Serras em Bezerros",
      },
    ],
  },
};

export default function EmpreendimentosPage() {
  return (
    <Container className="space-y-16 lg:space-y-24">
      <SectionHeading
        eyebrow="Portfólio"
        title={empreendimentosContent.title}
        description={empreendimentosContent.introduction}
      />

      <div className="grid gap-8 xl:grid-cols-2">
        {empreendimentosContent.items.map((item, index) => (
          <EmpreendimentoCard key={item.name} empreendimento={item} index={index} />
        ))}
      </div>

      <div className="rounded-3xl border border-neutral-100 bg-gradient-to-br from-[#DD0000]/10 via-[#F77F00]/10 to-[#FCBF49]/10 p-10 text-center">
        <h2 className="font-heading text-3xl font-semibold text-neutral-900">
          {empreendimentosContent.closing}
        </h2>
        <p className="mt-3 text-base text-neutral-600">
          Estruturamos o reposicionamento do seu ativo, do diagnóstico à comercialização, com transparência, dados e relacionamento de longo prazo.
        </p>
      </div>
    </Container>
  );
}
