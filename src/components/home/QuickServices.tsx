import { quickServices } from "@/content/home";

export function QuickServices() {
  return (
    <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-neutral-700">
      {quickServices.map((service) => (
        <span
          key={service}
          className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs uppercase tracking-[0.15em] text-neutral-700 shadow-sm dark:border-white/15 dark:bg-[#272727] dark:text-white/80"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#DD0000]" aria-hidden />
          {service}
        </span>
      ))}
    </div>
  );
}
