"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { blogContent } from "@/content/blog";

export function BlogPreview() {
  const posts = blogContent.posts.slice(0, 3);
  return (
    <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative overflow-hidden rounded-3xl"
      >
        <Image
          src="/images/blog-conteudo.jpg"
          alt="Equipe analisando gráficos e tendências do mercado imobiliário"
          width={640}
          height={480}
          className="h-full w-full object-cover"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="space-y-5"
      >
        <h3 className="font-heading text-2xl font-semibold text-[color:var(--foreground)] dark:text-white">
          Conteúdo & Insights
        </h3>
        <p className="text-base text-[color:var(--text-secondary)] dark:text-neutral-200">
          {blogContent.introduction}
        </p>
        <ul className="space-y-3 text-sm text-[color:var(--text-secondary)] dark:text-neutral-200">
          {posts.map((post) => (
            <li key={post.slug} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#DD0000]" aria-hidden />
              <span>
                <span className="font-semibold text-[color:var(--foreground)] dark:text-white">
                  {post.title}
                </span>
                <span className="block text-[color:var(--text-tertiary)] dark:text-neutral-300">
                  {post.excerpt}
                </span>
              </span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-full bg-[#DD0000] px-5 py-3 text-sm font-semibold text-white shadow transition hover:bg-[#c20000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F77F00] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface)] dark:focus-visible:ring-offset-[#121212]"
          >
            Explorar o blog
          </Link>
          <Link
            href="#newsletter"
            className="inline-flex items-center justify-center rounded-full border border-[color:var(--border-color)] bg-[color:var(--surface)] px-5 py-3 text-sm font-semibold text-[color:var(--header-link)] transition hover:border-[#F77F00]/70 hover:text-[#DD0000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F77F00] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface)] dark:border-white/15 dark:bg-transparent dark:text-white dark:hover:border-[#F77F00] dark:hover:text-[#F77F00] dark:focus-visible:ring-offset-[#121212]"
          >
            Assinar novidades
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
