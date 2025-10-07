import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { NewsletterForm } from "@/components/NewsletterForm";
import { blogContent } from "@/content/blog";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Blog Matzah | Conteúdo Imobiliário, Construção e Investimento",
  description:
    "Artigos sobre avaliação, financiamento, arquitetura e desenvolvimento de empreendimentos em Pernambuco.",
  openGraph: {
    title: "Blog Matzah | Conteúdo Imobiliário, Construção e Investimento",
    description:
      "Artigos sobre avaliação, financiamento, arquitetura e desenvolvimento de empreendimentos em Pernambuco.",
    images: [
      {
        url: `${siteConfig.url}/images/blog-conteudo.jpg`,
        width: 1200,
        height: 630,
        alt: "Equipe analisando gráficos e tendências do mercado imobiliário",
      },
    ],
  },
};

export default function BlogPage() {
  return (
    <Container className="space-y-16 lg:space-y-24">
      <section className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Conteúdo"
            title={blogContent.title}
            description={blogContent.introduction}
          />
          <p className="text-sm text-neutral-600">
            Atualizamos este espaço com periodicidade quinzenal, priorizando análises profundas, dados de mercado e orientações práticas para investidores, empreendedores e famílias pernambucanas.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-3xl">
          <Image
            src="/images/blog-conteudo.jpg"
            alt="Equipe analisando gráficos e tendências do mercado imobiliário"
            width={720}
            height={540}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {blogContent.posts.map((title) => {
          const slug = title
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)+/g, "");
          return (
            <article
              key={title}
              className="flex h-full flex-col rounded-3xl border border-neutral-100 bg-white p-6 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                Insights
              </p>
              <h2 className="mt-3 font-heading text-xl font-semibold text-neutral-900">
                {title}
              </h2>
              <p className="mt-3 text-sm text-neutral-600">
                Em breve você encontra aqui o conteúdo completo. Enquanto isso, fale conosco para receber materiais exclusivos sobre o tema.
              </p>
              <div className="mt-auto flex flex-wrap gap-3 pt-6">
                <Link
                  href={`/contato?assunto=conteudo&tema=${slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#DD0000] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#c20000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F77F00] focus-visible:ring-offset-2"
                >
                  Pedir material
                </Link>
                <Link
                  href="#newsletter"
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-800 transition hover:border-[#F77F00] hover:text-[#DD0000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F77F00] focus-visible:ring-offset-2"
                >
                  Receber por e-mail
                </Link>
              </div>
            </article>
          );
        })}
      </section>

      <NewsletterForm
        title={blogContent.newsletterCopy}
        description="Cadastre-se para receber novidades, relatórios e convites para eventos exclusivos."
        privacy={blogContent.privacyCopy}
        className="mx-auto max-w-4xl"
      />
    </Container>
  );
}
