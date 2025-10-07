"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";

export function FloatingWhatsApp() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="fixed bottom-6 right-4 z-40"
    >
      <Link
        href={`https://wa.me/${siteConfig.whatsappNumber.replace("+", "")}`}
        aria-label="Abrir conversa no WhatsApp"
        className="group inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/40 transition hover:-translate-y-1 hover:bg-[#1ebe5d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#25D366]"
      >
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
        </span>
        {siteConfig.whatsappLabel}
      </Link>
    </motion.div>
  );
}
