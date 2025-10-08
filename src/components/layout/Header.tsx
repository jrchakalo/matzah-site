"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200/70 bg-white/95 shadow-sm backdrop-blur transition-colors duration-300 dark:border-white/10 dark:bg-[#1f1f1f]/90">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-6 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" aria-label={siteConfig.name}>
          <span className="relative flex h-12 w-40 items-center">
            <Image
              src="/matzah-logo.png"
              alt="Logotipo da Matzah Empreendimentos & Construções"
              fill
              sizes="160px"
              className="object-contain dark:hidden"
              priority
            />
            <Image
              src="/matzah-logo-branco.png"
              alt="Logotipo claro da Matzah Empreendimentos & Construções"
              fill
              sizes="160px"
              className="hidden object-contain dark:block"
              priority
            />
          </span>
        </Link>

        <nav
          aria-label="Menu principal"
          className="mx-auto hidden items-center gap-6 text-[0.95rem] font-medium lg:flex"
        >
          {siteConfig.navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-3 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#1f1f1f]",
                  isActive
                    ? "text-brand-primary dark:text-brand-accent"
                    : "text-neutral-700 dark:text-neutral-200 hover:text-brand-primary dark:hover:text-brand-accent"
                )}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavigation"
                    className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent"
                    aria-hidden
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-3 lg:gap-4">
          <ThemeToggle />
          <MobileNav />
        </div>
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
        className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200/80 text-sm font-semibold text-neutral-700 transition hover:border-neutral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/15 dark:text-neutral-100 dark:hover:border-white/40 dark:focus-visible:ring-offset-[#1f1f1f]"
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
            className="absolute right-0 mt-3 w-72 rounded-2xl border border-neutral-100 bg-white p-4 shadow-2xl dark:border-white/10 dark:bg-[#1f1f1f]"
            aria-label="Menu móvel"
          >
            <ul className="flex flex-col gap-2">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50 hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-brand-accent dark:focus-visible:ring-offset-[#1f1f1f]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-end">
              <ThemeToggle />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
