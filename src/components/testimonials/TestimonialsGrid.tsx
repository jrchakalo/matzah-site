"use client";

import { motion, type Variants } from "framer-motion";
import { testimonialsContent } from "@/content/testimonials";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

interface TestimonialCardProps {
  testimonial: (typeof testimonialsContent.testimonials)[number];
  index: number;
}

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const { ref, shouldAnimate } = useScrollReveal<HTMLElement>();

  return (
    <motion.figure
      ref={ref}
      variants={cardVariants}
      initial={shouldAnimate ? "hidden" : "visible"}
      animate={shouldAnimate ? undefined : "visible"}
      whileInView={shouldAnimate ? "visible" : undefined}
      viewport={shouldAnimate ? { once: true, margin: "0px 0px -12% 0px" } : undefined}
      transition={{ duration: 0.5, ease: "easeOut", delay: shouldAnimate ? index * 0.05 : 0 }}
      className="flex h-full flex-col justify-between rounded-3xl border border-neutral-100 bg-white p-6 shadow-sm transition-colors dark:border-white/10 dark:bg-[#212121]"
    >
      <blockquote className="text-base text-neutral-700 dark:text-neutral-100">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-6 border-t border-neutral-100 pt-4 text-sm font-semibold text-neutral-900 dark:border-white/10 dark:text-white">
        {testimonial.author} <span className="font-normal text-neutral-500 dark:text-neutral-300">— {testimonial.role}</span>
      </figcaption>
    </motion.figure>
  );
}

interface TestimonialsGridProps {
  limit?: number;
}

export function TestimonialsGrid({ limit }: TestimonialsGridProps) {
  const testimonials = limit
    ? testimonialsContent.testimonials.slice(0, limit)
    : testimonialsContent.testimonials;

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={testimonial.author} testimonial={testimonial} index={index} />
      ))}
    </div>
  );
}
