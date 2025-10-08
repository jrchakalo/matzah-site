"use client";

import { motion, type Variants } from "framer-motion";
import { valueHighlights } from "@/content/home";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const highlightVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
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
      whileHover={{ y: -6 }}
      whileTap={{ y: -2 }}
      className="group relative overflow-hidden rounded-3xl border border-neutral-100 bg-white p-6 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-[#212121]"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#F77F00]/0 via-[#FCBF49]/0 to-[#DD0000]/12 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <h3 className="font-heading text-xl font-semibold text-neutral-900 dark:text-white">
        {item.title}
      </h3>
      <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-200">
        {item.description}
      </p>
    </motion.article>
  );
}
