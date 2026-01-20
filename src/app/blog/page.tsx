import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { NewsletterForm } from "@/components/NewsletterForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getAllPostsFromDB } from "@/lib/supabase";
import { siteConfig } from "@/lib/siteConfig";
import { Clock, Calendar, User, ArrowRight } from "lucide-react";

export const revalidate = 0; // Sempre busca dados mais recentes

export const metadata: Metadata = {
  title: "Blog Matzah | Conteúdo Imobiliário, Construção e Investimento",
  description:
    "Artigos sobre avaliação, financiamento, arquitetura e desenvolvimento de empreendimentos em Pernambuco.",
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    title: "Blog Matzah | Conteúdo Imobiliário, Construção e Investimento",
    description:
      "Artigos sobre avaliação, financiamento, arquitetura e desenvolvimento de empreendimentos em Pernambuco.",
    url: `${siteConfig.url}/blog`,
    siteName: siteConfig.name,
    locale: 'pt_BR',
    type: 'website',
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

export default async function BlogPage() {
  const posts = await getAllPostsFromDB();

  return (
    <>
      <Container className="pt-24 sm:pt-28 pb-20">
        <Breadcrumbs 
          className="mb-8"
          items={[
            { label: 'Blog' }
          ]}
        />
        
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Blog"
            title="Insights e Análises do Mercado Imobiliário"
            description="Conteúdo especializado sobre financiamento, avaliação, desenvolvimento de empreendimentos e tendências do setor imobiliário em Pernambuco."
            align="center"
          />
        </div>

        {/* Grid de Posts */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-[color:var(--border-color)] bg-[color:var(--surface)] transition-all hover:border-[color:var(--action-secondary)]/50 hover:shadow-[0_28px_60px_-32px_var(--card-shadow)] dark:border-white/10 dark:bg-[#212121]"
            >
              {/* Imagem */}
              <div className="aspect-video w-full overflow-hidden bg-[color:var(--surface-soft)]">
                {post.cover_image ? (
                  <Image
                    src={post.cover_image}
                    alt={post.title}
                    width={640}
                    height={360}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-[color:var(--action-primary)]/10 to-[color:var(--action-secondary)]/10">
                    <span className="text-4xl font-bold text-[color:var(--text-tertiary)] dark:text-white/20">
                      {post.category[0]}
                    </span>
                  </div>
                )}
              </div>

              {/* Conteúdo */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 inline-flex">
                  <span className="rounded-full bg-[color:var(--action-primary)]/10 border border-[color:var(--action-primary)]/20 px-3 py-1 text-xs font-medium text-[color:var(--action-primary)]">
                    {post.category}
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-bold text-[color:var(--foreground)] transition-colors group-hover:text-[color:var(--action-secondary)]">
                  {post.title}
                </h3>

                <p className="mb-4 flex-1 text-sm leading-relaxed text-[color:var(--text-secondary)]">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-4 border-t border-[color:var(--border-color)] pt-4 text-[color:var(--text-tertiary)]">
                  <div className="flex items-center gap-1.5 text-xs">
                    <Clock className="h-4 w-4" />
                    <span>{post.read_time}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {new Date(post.date + 'T00:00:00').toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[color:var(--action-primary)] group-hover:text-[color:var(--action-secondary)] transition-colors">
                  Ler artigo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mx-auto max-w-2xl rounded-2xl border border-[color:var(--border-color)] bg-[color:var(--surface)] p-8 text-center shadow-[0_28px_60px_-35px_var(--card-shadow)] dark:border-white/10 dark:bg-[#212121]">
          <h3 className="mb-3 text-2xl font-bold text-[color:var(--foreground)]">
            Receba Novidades no Email
          </h3>
          <p className="mb-6 text-[color:var(--text-secondary)]">
            Artigos, análises de mercado e dicas exclusivas direto na sua caixa
            de entrada.
          </p>
          <NewsletterForm />
        </div>
      </Container>
    </>
  );
}
