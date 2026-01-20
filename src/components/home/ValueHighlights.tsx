"use client";

import { motion, type Variants } from "framer-motion";
import { valueHighlights } from "@/content/home";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const highlightVariants: Variants = {
  hidden: { y: 20 },
  visible: { y: 0 },
};

export function ValueHighlights() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {valueHighlights.map((item, index) => (
        <HighlightCard key={item.title} item={item} index={index} />
      ))}
    </div>
  );
}

interface HighlightCardProps {
  item: (typeof valueHighlights)[number];
  index: number;
}

function HighlightCard({ item, index }: HighlightCardProps) {
  const { ref, shouldAnimate } = useScrollReveal<HTMLElement>();
  const initialState = shouldAnimate ? "hidden" : false;
  const animateState = shouldAnimate ? undefined : "visible";
  const viewportConfig = shouldAnimate ? { once: true, margin: "0px 0px -12% 0px" } : undefined;

  return (
    <motion.article
      ref={ref}
      variants={highlightVariants}
      initial={initialState}
      animate={animateState}
      whileInView={shouldAnimate ? "visible" : undefined}
      viewport={viewportConfig}
      transition={{ duration: 0.5, ease: "easeOut", delay: shouldAnimate ? index * 0.05 : 0 }}
    className="group relative overflow-hidden rounded-3xl border border-[color:var(--border-color)] bg-[color:var(--surface-soft)] p-6 shadow-[0_25px_55px_-30px_var(--card-shadow)] transition duration-200 ease-out hover:-translate-y-2 focus-visible:-translate-y-1 dark:border-white/10 dark:bg-[#212121]"
    >
    <div
      className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
      style={{
        backgroundImage:
          "radial-gradient(circle at top, var(--surface) 0%, color-mix(in srgb, var(--action-secondary) 8%, transparent) 55%, color-mix(in srgb, var(--action-primary) 12%, transparent) 100%)",
      }}
    />
  <h3 className="font-heading text-xl font-semibold text-[color:var(--foreground)] dark:text-white">
        {item.title}
      </h3>
  <p className="mt-3 text-sm text-[color:var(--text-secondary)] dark:text-neutral-200">
        {item.description}
      </p>
    </motion.article>
  );
}
