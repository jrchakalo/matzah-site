"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Alternar modo de cor"
        className="h-10 w-10 rounded-full border border-neutral-200 bg-white/40 text-neutral-600 opacity-0"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white/60 text-neutral-700 shadow-sm transition hover:border-brand-accent hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 dark:border-white/10 dark:bg-neutral-800/80 dark:text-neutral-200 dark:hover:border-brand-accent/70 dark:hover:text-brand-accent"
    >
      {isDark ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}

function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden
      className="stroke-current"
    >
      <circle cx="12" cy="12" r="5" strokeWidth="1.8" />
      <path
        strokeWidth="1.8"
        strokeLinecap="round"
        d="M12 1v2m0 18v2m11-11h-2M4 12H2m17.657-7.657-1.414 1.414M7.757 16.243l-1.414 1.414m12.728 0-1.414-1.414M7.757 7.757 6.343 6.343"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden
      className="stroke-current"
    >
      <path
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 14.5A9 9 0 0 1 9.5 3 7.5 7.5 0 1 0 21 14.5Z"
      />
    </svg>
  );
}
