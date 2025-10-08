"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { aboutSnippet, trustMicrocopy } from "@/content/home";

export function AboutMini() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-4"
      >
        <h3 className="font-heading text-2xl font-semibold text-[color:var(--foreground)] dark:text-neutral-100">
          Quem Somos
        </h3>
        <p className="text-base text-[color:var(--text-secondary)] dark:text-neutral-300">{aboutSnippet}</p>
        <p className="flex items-center gap-2 text-sm font-semibold text-[#DD0000] dark:text-[#F77F00]">
          <span
            className="h-2 w-2 rounded-full bg-[#DD0000] dark:bg-[#F77F00]"
            aria-hidden
          />
          {trustMicrocopy}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="relative overflow-hidden rounded-3xl"
      >
        <Image
          src="/images/equipe-matzah.jpg"
          alt="Equipe Matzah reunida em ambiente corporativo"
          width={640}
          height={480}
          className="h-full w-full object-cover"
        />
      </motion.div>
    </div>
  );
}
