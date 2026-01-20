"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { servicesContent } from "@/content/servicos";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const gradients = [
  [
    "from-[color:var(--surface)]",
    "via-[color:var(--surface-soft)]",
    "to-[color:var(--surface)]",
    "dark:from-[#2F2B43]/95",
    "dark:via-[#2F2B43]/90",
    "dark:to-[#211B31]",
  ],
  [
    "from-[color:var(--action-primary)]/12",
    "via-[color:var(--action-primary)]/6",
    "to-[color:var(--surface)]",
    "dark:from-[#DD0000]/95",
    "dark:via-[#b41212]/95",
    "dark:to-[#8F0D0D]",
  ],
  [
    "from-[color:var(--action-secondary)]/12",
    "via-[color:var(--action-secondary)]/6",
    "to-[color:var(--surface)]",
    "dark:from-[#F77F00]/90",
    "dark:via-[#F77F00]/80",
    "dark:to-[#DD5600]/90",
  ],
  [
    "from-[color:var(--surface)]",
    "via-[color:var(--surface-soft)]",
    "to-[color:var(--surface)]",
    "dark:from-[#1F3A5F]/95",
    "dark:via-[#1b3253]/95",
    "dark:to-[#0F1E30]",
  ],
  [
    "from-[color:var(--surface)]",
    "via-[color:var(--surface-soft)]",
    "to-[color:var(--surface)]",
    "dark:from-[#0D9488]/95",
    "dark:via-[#119384]/95",
    "dark:to-[#0F766E]/95",
  ],
  [
    "from-[color:var(--surface)]",
    "via-[color:var(--surface-soft)]",
    "to-[color:var(--surface)]",
    "dark:from-[#6366F1]/90",
    "dark:via-[#5558e7]/90",
    "dark:to-[#4338CA]/95",
  ],
  [
    "from-[color:var(--surface)]",
    "via-[color:var(--surface-soft)]",
    "to-[color:var(--surface)]",
    "dark:from-[#4C1D95]/90",
    "dark:via-[#3c1979]/95",
    "dark:to-[#312E81]/95",
  ],
  [
    "from-[color:var(--surface)]",
    "via-[color:var(--surface-soft)]",
    "to-[color:var(--surface)]",
    "dark:from-[#166534]/95",
    "dark:via-[#145a30]/95",
    "dark:to-[#14532D]/95",
  ],
];

const columnVariants: Variants = {
  hidden: { y: 20 },
  visible: { y: 0 },
};

const cardVariants: Variants = {
  hidden: { y: 24 },
  visible: { y: 0 },
};

function ServiceHighlightCard({
  service,
  index,
}: {
  service: (typeof servicesContent.services)[number] & {
    gradient: (typeof gradients)[number];
  };
  index: number;
}) {
  const { ref, shouldAnimate } = useScrollReveal<HTMLElement>();
  const initialState = shouldAnimate ? "hidden" : false;
  const animateState = shouldAnimate ? undefined : "visible";
  const viewportConfig = shouldAnimate ? { once: true, margin: "0px 0px -12% 0px" } : undefined;
  const transitionConfig = {
    duration: 0.55,
    ease: "easeOut" as const,
    delay: shouldAnimate ? index * 0.07 : 0,
  };

  return (
    <motion.article
      ref={ref}
      variants={cardVariants}
      initial={initialState}
      animate={animateState}
      whileInView={shouldAnimate ? "visible" : undefined}
      viewport={viewportConfig}
      transition={transitionConfig}
      className={cn(
  "group relative overflow-hidden rounded-3xl border border-[color:var(--border-color)] p-6 text-[color:var(--foreground)] shadow-[0_28px_60px_-32px_var(--card-shadow)] backdrop-blur",
        "bg-gradient-to-br",
        ...service.gradient,
  "transition duration-200 ease-out hover:-translate-y-2 focus-visible:-translate-y-1 dark:border-white/5 dark:text-white",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--header-link-muted)] dark:text-white/70">
          {String(index + 1).padStart(2, "0")}
        </span>
        {service.hubUrl ? (
          <Link
            href={service.hubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-[color:var(--border-color)] bg-[color:var(--surface)] px-3 py-1 text-[11px] font-semibold text-[color:var(--header-link)] transition-colors hover:border-[color:var(--action-secondary)]/70 hover:bg-[color:var(--action-secondary)]/10 hover:text-[color:var(--action-secondary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--action-secondary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface)] dark:border-white/10 dark:bg-white/10 dark:text-white/85 dark:focus-visible:ring-offset-[#0E0E10]"
          >
            Acesse o site
            <span aria-hidden>↗</span>
          </Link>
        ) : null}
      </div>
      <h3 className="mt-4 font-heading text-xl font-semibold leading-tight text-[color:var(--foreground)] dark:text-white">
        {service.name}
      </h3>
      <p className="mt-3 text-sm text-[color:var(--text-secondary)] dark:text-white/80">
        {service.description}
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--header-link-muted)] dark:text-white/60">
        <Link
          href={service.cta.href}
          className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-color)] bg-[color:var(--surface-soft)] px-4 py-2 text-[11px] font-semibold text-[color:var(--action-primary)] transition-colors hover:border-[color:var(--action-secondary)] hover:bg-[color:var(--action-secondary)]/18 hover:text-[color:var(--action-secondary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--action-secondary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface)] dark:border-white/30 dark:bg-white/10 dark:text-white dark:focus-visible:ring-offset-[#0E0E10]"
        >
          {service.cta.label}
          <span aria-hidden>→</span>
        </Link>
      </div>
    </motion.article>
  );
}

export function HomeServicesShowcase() {
  const leftColumnReveal = useScrollReveal<HTMLDivElement>();
  const services = servicesContent.services.map((service, index) => ({
    ...service,
    gradient: gradients[index % gradients.length],
  }));
  const leftInitial = leftColumnReveal.shouldAnimate ? "hidden" : false;
  const leftAnimate = leftColumnReveal.shouldAnimate ? undefined : "visible";
  const leftViewport = leftColumnReveal.shouldAnimate
    ? { once: true, margin: "0px 0px -15% 0px" }
    : undefined;

  return (
  <section className="relative overflow-hidden rounded-[2.5rem] border border-[color:var(--border-color)] bg-[color:var(--surface-soft)] p-8 shadow-[0_40px_80px_-45px_var(--card-shadow)] backdrop-blur lg:p-12 dark:border-white/10 dark:bg-[#1e1e1e]">
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
        <motion.div
          ref={leftColumnReveal.ref}
          variants={columnVariants}
          initial={leftInitial}
          animate={leftAnimate}
          whileInView={leftColumnReveal.shouldAnimate ? "visible" : undefined}
          viewport={leftViewport}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-color)] bg-[color:var(--surface)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--text-tertiary)] shadow-sm shadow-[0_15px_35px_-25px_var(--card-shadow)] dark:border-white/10 dark:bg-white/10 dark:text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--action-primary)]" aria-hidden />
            Tudo começa com estratégia
          </div>
          <div className="space-y-4">
            <h2 className="font-heading text-3xl font-semibold text-[color:var(--foreground)] sm:text-4xl lg:text-5xl dark:text-white">
              Um ecossistema completo em serviços imobiliários
            </h2>
            <p className="text-base text-[color:var(--text-secondary)] dark:text-white/70">
              Da concepção de empreendimentos à comercialização e gestão de vendas, a Matzah integra equipes técnicas, marketing e inteligência comercial para gerar resultado real em cada etapa do ciclo.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href={"/servicos"}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--action-primary)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[color:var(--action-primary)]/30 transition hover:bg-[color:var(--action-secondary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--action-secondary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface)] dark:focus-visible:ring-offset-[#0E0E10]"
            >
              Explorar todos os serviços
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href={"/contato?assunto=servicos"}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--border-color)] bg-[color:var(--surface)] px-5 py-3 text-sm font-semibold text-[color:var(--header-link)] transition-colors hover:border-[color:var(--action-secondary)] hover:text-[color:var(--action-secondary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--action-secondary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface)] dark:border-white/12 dark:bg-[#272727] dark:text-white dark:focus-visible:ring-offset-[#0E0E10]"
            >
              Construir uma solução sob medida
              <span aria-hidden>↗</span>
            </Link>
          </div>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {services.map((service, index) => (
            <ServiceHighlightCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[color:var(--action-secondary)]/10 to-transparent dark:from-black/30" />
    </section>
  );
}
