"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/90 shadow-sm backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label={siteConfig.name}>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#DD0000] via-[#F77F00] to-[#FCBF49] text-white font-bold">
            ME
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-base font-semibold text-neutral-900">
              {siteConfig.name}
            </span>
            <span className="text-xs text-neutral-500">Construindo valor com fé</span>
          </div>
        </Link>

        <nav aria-label="Menu principal" className="hidden items-center gap-6 lg:flex">
          {siteConfig.navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium text-neutral-700 transition-colors hover:text-[#DD0000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DD0000] focus-visible:ring-offset-2",
                  isActive && "text-[#DD0000]"
                )}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavigation"
                    className="absolute -bottom-2 left-0 h-0.5 w-full bg-gradient-to-r from-[#DD0000] via-[#F77F00] to-[#FCBF49]"
                    aria-hidden
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={`https://wa.me/${siteConfig.whatsappNumber.replace("+", "")}`}
            className="inline-flex items-center justify-center rounded-full bg-[#DD0000] px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-[#c20000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F77F00] focus-visible:ring-offset-2"
          >
            {siteConfig.whatsappLabel}
          </Link>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-sm font-semibold text-neutral-700 transition hover:border-neutral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DD0000] focus-visible:ring-offset-2"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
      >
        Menu
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute right-0 mt-3 w-72 rounded-2xl border border-neutral-100 bg-white p-4 shadow-2xl"
            aria-label="Menu móvel"
          >
            <ul className="flex flex-col gap-2">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50 hover:text-[#DD0000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DD0000] focus-visible:ring-offset-2"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Link
                href={`https://wa.me/${siteConfig.whatsappNumber.replace("+", "")}`}
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-full bg-[#DD0000] px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-[#c20000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F77F00] focus-visible:ring-offset-2"
              >
                {siteConfig.whatsappLabel}
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
