import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Container } from "@/components/layout/Container";
import { getAllPostsFromDB, getPostBySlugFromDB } from "@/lib/supabase";
import { siteConfig } from "@/lib/siteConfig";
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from "lucide-react";

export const revalidate = 0; // Sempre busca dados mais recentes

export async function generateStaticParams() {
  const posts = await getAllPostsFromDB();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlugFromDB(params.slug);

  if (!post) {
    return {
      title: "Post não encontrado",
    };
  }

  return {
    title: `${post.title} | Blog Matzah`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.cover_image || `${siteConfig.url}/images/blog.jpg`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlugFromDB(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Container className="py-12 pt-24 sm:pt-28 pb-20">
        <div className="mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <Link
            href="/blog"
            className="group mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-accent-blue"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Voltar para o blog
          </Link>

          {/* Hero Image */}
          {post.cover_image && (
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl mb-8">
              <Image
                src={post.cover_image}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>
          )}

          {/* Cabeçalho do Post */}
          <header className="mb-12 border-b border-gray-800 pb-8">
            <div className="mb-4 inline-flex">
              <span className="rounded-full bg-[#DD0000]/10 border border-[#DD0000]/20 px-4 py-1.5 text-sm font-semibold text-[#DD0000]">
                {post.category}
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl">
              {post.title}
            </h1>

            <p className="mb-6 text-xl leading-relaxed text-gray-400">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4" />
                <span>{post.read_time}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(post.date + 'T00:00:00').toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
            </div>
          </header>

          {/* Conteúdo */}
          <article className="max-w-none mb-12">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                h2: (props) => <h2 className="text-3xl font-bold text-white mt-12 mb-6 first:mt-0" {...props} />,
                h3: (props) => <h3 className="text-2xl font-semibold text-white mt-8 mb-4" {...props} />,
                p: (props) => <p className="text-gray-300 leading-relaxed mb-6 text-lg" {...props} />,
                strong: (props) => <strong className="text-white font-semibold" {...props} />,
                ul: (props) => <ul className="list-disc ml-6 mb-6 space-y-2 text-gray-300 text-lg" {...props} />,
                ol: (props) => <ol className="list-decimal ml-6 mb-6 space-y-2 text-gray-300 text-lg" {...props} />,
                li: (props) => <li className="leading-relaxed" {...props} />,
                a: (props) => <a className="text-[#DD0000] hover:text-[#F77F00] hover:underline font-semibold transition-colors" {...props} />,
                hr: (props) => <hr className="border-gray-800 my-8" {...props} />,
                blockquote: (props) => <blockquote className="border-l-4 border-accent-blue pl-4 italic text-gray-400 my-6" {...props} />,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </article>

          {/* CTA */}
          <div className="rounded-2xl border border-gray-800 bg-gradient-to-br from-accent-blue/5 to-accent-green/5 p-8 text-center">
            <h3 className="mb-3 text-2xl font-bold text-white">
              Precisa de Consultoria Especializada?
            </h3>
            <p className="mb-6 text-gray-400">
              Nossa equipe está pronta para ajudar você a realizar seus projetos
              imobiliários com segurança e eficiência.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#DD0000] via-[#F77F00] to-[#FCBF49] hover:from-[#c20000] hover:via-[#e57400] hover:to-[#e5ad3d] px-8 py-3 font-semibold text-white transition-all shadow-lg hover:shadow-xl"
            >
              Falar com Especialista
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
