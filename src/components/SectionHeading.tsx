"use client";

import { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const { ref, shouldAnimate } = useScrollReveal<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      variants={revealVariants}
      initial={shouldAnimate ? "hidden" : "visible"}
      animate={shouldAnimate ? undefined : "visible"}
      whileInView={shouldAnimate ? "visible" : undefined}
      viewport={shouldAnimate ? { once: true, margin: "0px 0px -15% 0px" } : undefined}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "space-y-3",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-flex rounded-full bg-[color:var(--badge-bg)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#d24400] shadow-sm dark:bg-[#FCBF49]/15 dark:text-[#F77F00]">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-3xl font-semibold text-[color:var(--foreground)] sm:text-4xl dark:text-white">
        {title}
      </h2>
      {description && (
        <p className={cn(
          "max-w-2xl text-base text-[color:var(--text-secondary)] sm:text-lg dark:text-neutral-200",
          align === "center" && "mx-auto"
        )}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
