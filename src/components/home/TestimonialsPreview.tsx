"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { SectionHeading } from "@/components/SectionHeading";
import { testimonialsContent } from "@/content/testimonials";

const TestimonialsGrid = dynamic(
  () =>
    import("@/components/testimonials/TestimonialsGrid").then(
      (mod) => mod.TestimonialsGrid
    ),
  {
    loading: () => (
      <p className="text-sm text-[color:var(--text-tertiary)] dark:text-neutral-300">
        Carregando histórias reais...
      </p>
    ),
  }
);

export function TestimonialsPreview() {
  return (
  <section className="space-y-8">
      <SectionHeading
        eyebrow="Depoimentos"
        title={testimonialsContent.title}
        description={testimonialsContent.introduction}
      />
      <TestimonialsGrid limit={3} />
      <div className="flex justify-end">
        <Link
          href="/depoimentos"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#DD0000] transition hover:text-[#F77F00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F77F00] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface)] dark:focus-visible:ring-offset-[#121212]"
        >
          Ver todos os depoimentos
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
