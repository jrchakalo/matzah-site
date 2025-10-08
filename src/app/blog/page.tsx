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
          <p className="text-sm text-[color:var(--text-secondary)] dark:text-neutral-300">
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
        {blogContent.posts.map((post) => (
          <article
            key={post.slug}
            id={post.slug}
            className="flex h-full flex-col gap-4 rounded-3xl border border-[color:var(--border-color)] bg-[color:var(--surface-muted)] p-6 shadow-[0_30px_60px_-38px_var(--card-shadow)] transition-colors dark:border-white/10 dark:bg-[#212121]"
          >
            <div className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--header-link-muted)]">
              <span className="text-[color:var(--text-tertiary)] dark:text-neutral-400">{post.category}</span>
              <span className="flex items-center gap-2 text-[color:var(--text-tertiary)] dark:text-neutral-300">
                <span className="h-1.5 w-1.5 rounded-full bg-[#DD0000]" aria-hidden />
                {post.readTime}
              </span>
            </div>
            <h2 className="font-heading text-xl font-semibold text-[color:var(--foreground)] dark:text-white">
              {post.title}
            </h2>
            <p className="text-sm text-[color:var(--text-secondary)] dark:text-neutral-200">{post.excerpt}</p>
            <div className="space-y-3 text-sm leading-relaxed text-[color:var(--text-secondary)] dark:text-neutral-200">
              {post.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--header-link-muted)] dark:text-neutral-300">
                Em resumo
              </p>
              <ul className="mt-2 space-y-2 text-sm text-[color:var(--text-secondary)] dark:text-neutral-200">
                {post.takeaways.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#DD0000]" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto flex flex-wrap gap-3 pt-4">
              <Link
                href={`/contato?assunto=conteudo&tema=${post.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-[#DD0000] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#c20000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F77F00] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface-muted)] dark:focus-visible:ring-offset-[#141414]"
              >
                Falar com um especialista
              </Link>
              <Link
                href="#newsletter"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-color)] bg-[color:var(--surface)] px-4 py-2 text-sm font-semibold text-[color:var(--header-link)] transition hover:border-[#F77F00] hover:text-[#DD0000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F77F00] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface)] dark:border-white/15 dark:text-white dark:hover:border-[#F77F00] dark:hover:text-[#F77F00] dark:focus-visible:ring-offset-[#141414]"
              >
                Assinar novos conteúdos
              </Link>
            </div>
          </article>
        ))}
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
