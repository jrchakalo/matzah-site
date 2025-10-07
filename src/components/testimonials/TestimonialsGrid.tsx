"use client";

import { motion } from "framer-motion";
import { testimonialsContent } from "@/content/testimonials";

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
        <motion.figure
          key={testimonial.author}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
          className="flex h-full flex-col justify-between rounded-3xl border border-neutral-100 bg-white p-6 shadow-sm"
        >
          <blockquote className="text-base text-neutral-700">
            “{testimonial.quote}”
          </blockquote>
          <figcaption className="mt-6 border-t border-neutral-100 pt-4 text-sm font-semibold text-neutral-900">
            {testimonial.author} <span className="font-normal text-neutral-500">— {testimonial.role}</span>
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
