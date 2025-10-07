"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";

export function FloatingWhatsApp() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.6 }}
      className="fixed bottom-6 right-4 z-40"
    >
      <Link
        href={`https://wa.me/${siteConfig.whatsappNumber.replace("+", "")}`}
        aria-label="Abrir conversa no WhatsApp"
  className="group inline-flex items-center gap-3 rounded-full border border-brand-accent/40 bg-brand-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-primary/40 transition hover:-translate-y-1 hover:bg-brand-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-950"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
          <WhatsAppIcon className="h-4 w-4" />
        </span>
        {siteConfig.whatsappLabel}
      </Link>
    </motion.div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M16.01 3a12.94 12.94 0 0 0-11 19.69L4 29l6.49-2.12A12.94 12.94 0 1 0 16 3Zm0 2.4a10.55 10.55 0 0 1 7.47 18 1.2 1.2 0 0 0-.36 1.12l.8 2.94-3-.98a1.2 1.2 0 0 0-.88.05 10.54 10.54 0 0 1-13.29-14.8A10.53 10.53 0 0 1 16 5.4ZM11.11 9a1.3 1.3 0 0 0-1.13.62c-.33.53-.85 1.47-.85 2.41 0 2.52 1.93 5.5 4.2 7.4s4.68 3.03 6.92 3.03c1.07 0 1.93-.73 2.3-1.21.28-.36.43-.8.43-1.25a1.3 1.3 0 0 0-.37-.92l-2.05-2.05a1.3 1.3 0 0 0-1.84 0l-.61.6-.16.16a.35.35 0 0 1-.5 0l-2.58-2.58a.35.35 0 0 1 0-.5l.76-.76a1.3 1.3 0 0 0 0-1.84l-2.05-2.05A1.3 1.3 0 0 0 11.11 9Z" />
    </svg>
  );
}
