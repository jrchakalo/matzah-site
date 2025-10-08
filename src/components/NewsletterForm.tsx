"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NewsletterFormProps {
  title?: string;
  description?: string;
  privacy?: string;
  className?: string;
}

export function NewsletterForm({
  title = "Receba novidades e insights",
  description = "Atualizações quinzenais sobre imóveis, construção e investimentos.",
  privacy = "Utilizamos seus dados apenas para envio de conteúdo e você pode cancelar a qualquer momento.",
  className,
}: NewsletterFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    // Simulação de envio
    setTimeout(() => {
      setStatus("success");
    }, 1000);
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#DD0000] via-[#F77F00] to-[#FCBF49] p-[1px]",
        className
      )}
      aria-labelledby="newsletter-title"
    >
      <div className="h-full w-full rounded-3xl bg-white/95 p-8 shadow-sm sm:p-12 dark:bg-[#1f1f1f]/95">
        <div className="mx-auto max-w-2xl text-center sm:text-left">
          <h2
            id="newsletter-title"
            className="font-heading text-2xl font-semibold text-neutral-900 sm:text-3xl dark:text-white"
          >
            {title}
          </h2>
          <p className="mt-2 text-base text-neutral-600 dark:text-neutral-200">
            {description}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row"
          aria-live="polite"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Digite seu e-mail
          </label>
          <input
            id="newsletter-email"
            type="email"
            name="email"
            required
            placeholder="nome@empresa.com"
            className="flex-1 rounded-full border border-neutral-200 bg-white px-5 py-3 text-base text-neutral-800 shadow-sm placeholder:text-neutral-400 focus:border-[#DD0000] focus:outline-none focus:ring-2 focus:ring-[#F77F00] dark:border-white/15 dark:bg-[#2a2a2a] dark:text-white dark:placeholder:text-neutral-400"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-[#DD0000] px-6 py-3 text-base font-semibold text-white shadow transition hover:bg-[#c20000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F77F00] focus-visible:ring-offset-2"
            disabled={status === "loading" || status === "success"}
          >
            {status === "loading" ? "Enviando..." : status === "success" ? "Inscrito" : "Assinar"}
          </button>
        </form>

        <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-300">{privacy}</p>
        <p className="mt-2 text-sm font-medium text-neutral-700 dark:text-neutral-200">
          {status === "idle" && "Conteúdo relevante, sem spam."}
          {status === "loading" && "Carregando lista de contatos..."}
          {status === "success" && "Inscrição realizada com sucesso!"}
          {status === "error" && "Erro ao enviar. Tente novamente ou use o WhatsApp."}
        </p>
      </div>
    </motion.section>
  );
}
