import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactChannels } from "@/components/contact/ContactChannels";
import { contactContent } from "@/content/contato";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contato Matzah | Imobiliária e Construção em Bezerros",
  description:
    "Fale com nossa equipe para avaliação, compra, venda, financiamento ou desenvolvimento de empreendimentos.",
  openGraph: {
    title: "Contato Matzah | Imobiliária e Construção em Bezerros",
    description:
      "Fale com nossa equipe para avaliação, compra, venda, financiamento ou desenvolvimento de empreendimentos.",
    images: [
      {
        url: `${siteConfig.url}/images/contato-equipe.jpg`,
        width: 1200,
        height: 630,
        alt: "Equipe de atendimento da Matzah conversando com cliente",
      },
    ],
  },
};

export default function ContatoPage() {
  return (
    <Container className="space-y-16 lg:space-y-24">
      <SectionHeading
        eyebrow="Atendimento"
        title={contactContent.title}
        description={contactContent.introduction}
      />

      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/images/contato-equipe.jpg"
              alt="Equipe Matzah atendendo clientes em ambiente acolhedor"
              width={720}
              height={540}
              className="h-full w-full object-cover"
            />
          </div>
          <ContactChannels />
        </div>
        <div className="rounded-3xl border border-neutral-100 bg-white p-8 shadow-sm transition-colors dark:border-white/10 dark:bg-[#212121]">
          <ContactForm />
        </div>
      </div>

      <div className="rounded-3xl border border-neutral-100 bg-gradient-to-br from-[#DD0000]/10 via-[#F77F00]/10 to-[#FCBF49]/10 p-10 text-center shadow-sm transition-colors dark:border-white/10 dark:bg-[#24201c]">
        <h2 className="font-heading text-2xl font-semibold text-neutral-900 dark:text-white">
          {contactContent.form.reassurance}
        </h2>
        <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-200">
          Se preferir atendimento imediato, fale agora no WhatsApp. Estamos à disposição para orientar, esclarecer e caminhar com você em cada etapa.
        </p>
      </div>
    </Container>
  );
}
