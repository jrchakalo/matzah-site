import { quickServices } from "@/content/home";

export function QuickServices() {
  return (
    <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-[color:var(--text-secondary)]">
      {quickServices.map((service) => (
        <span
          key={service}
          className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-color)] bg-[color:var(--surface)] px-4 py-2 text-xs uppercase tracking-[0.15em] text-[color:var(--text-secondary)] shadow-sm shadow-[0_15px_30px_-20px_var(--card-shadow)] dark:border-white/15 dark:bg-[#272727] dark:text-white/80"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#DD0000]" aria-hidden />
          {service}
        </span>
      ))}
    </div>
  );
}
