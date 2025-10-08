"use client";

import { servicesContent } from "@/content/servicos";
import { motion, type Variants } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

interface TimelineStepProps {
  step: string;
  index: number;
  lineOffset: string;
}

function TimelineStep({ step, index, lineOffset }: TimelineStepProps) {
  const { ref, shouldAnimate } = useScrollReveal<HTMLLIElement>();
  const initialState = shouldAnimate ? "hidden" : false;
  const animateState = shouldAnimate ? undefined : "visible";
  const viewportConfig = shouldAnimate ? { once: true, margin: "-10% 0px -10% 0px" } : undefined;

  return (
    <motion.li
      ref={ref}
      variants={stepVariants}
      initial={initialState}
      animate={animateState}
      whileInView={shouldAnimate ? "visible" : undefined}
      viewport={viewportConfig}
      transition={{ duration: 0.45, ease: "easeOut", delay: shouldAnimate ? index * 0.05 : 0 }}
      className="relative pl-16"
    >
      <span
        className="pointer-events-none absolute top-2 flex h-4 w-4 -translate-x-1/2 items-center justify-center"
        style={{ left: lineOffset }}
        aria-hidden
      >
        <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#DD0000] via-[#F77F00] to-[#FCBF49] shadow-[0_0_12px_rgba(221,0,0,0.28)]" />
      </span>
      <div className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-600 dark:text-neutral-300">
          Etapa {index + 1}
        </p>
        <p className="text-base font-medium text-neutral-900 dark:text-neutral-100">
          {step}
        </p>
      </div>
    </motion.li>
  );
}

export function ProcessTimeline() {
  const lineOffset = "1.125rem";

  return (
    <div className="relative">
      <span
        aria-hidden
        className="pointer-events-none absolute top-0 bottom-0 border-l border-dashed border-[#F77F00]/55 dark:border-[#F77F00]/40"
        style={{ left: lineOffset }}
      />
      <ol className="space-y-8">
        {servicesContent.process.map((step, index) => (
          <TimelineStep key={step} step={step} index={index} lineOffset={lineOffset} />
        ))}
      </ol>
    </div>
  );
}
