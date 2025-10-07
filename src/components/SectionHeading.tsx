"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "space-y-3",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-flex rounded-full bg-[#FCBF49]/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#DD0000]">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-3xl font-semibold text-neutral-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base text-neutral-600 sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
