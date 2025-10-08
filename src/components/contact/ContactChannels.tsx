"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { contactContent } from "@/content/contato";

export function ContactChannels() {
  return (
    <div className="grid gap-4">
      {contactContent.channels.map((channel, index) => (
        <motion.div
          key={channel.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.04 }}
          className="flex flex-col rounded-3xl border border-neutral-100 bg-white/90 p-5 shadow-sm transition-colors dark:border-white/10 dark:bg-[#212121]"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-300">
            {channel.label}
          </span>
          <p className="mt-2 text-base font-semibold text-neutral-900 dark:text-white">
            {channel.href ? (
              <Link
                href={channel.href}
                className="transition hover:text-[#DD0000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F77F00] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#121212]"
              >
                {channel.value}
              </Link>
            ) : (
              channel.value
            )}
          </p>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-200">
            {channel.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
