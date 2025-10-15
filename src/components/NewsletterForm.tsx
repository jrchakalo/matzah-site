"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NewsletterFormProps {
  id?: string;
  title?: string;
  description?: string;
  privacy?: string;
  className?: string;
}

export function NewsletterForm({
  id = "newsletter",
  title = "Receba novidades e insights",
  description = "Atualizações quinzenais sobre imóveis, construção e investimentos.",
  privacy = "Utilizamos seus dados apenas para envio de conteúdo e você pode cancelar a qualquer momento.",
  className,
}: NewsletterFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [successMessage, setSuccessMessage] = useState("Inscrição realizada com sucesso!");
  const [errorMessage, setErrorMessage] = useState("Erro ao enviar. Tente novamente ou use o WhatsApp.");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "loading") {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "").trim();

    if (!email) {
      setErrorMessage("Informe um e-mail válido antes de assinar.");
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const endpoint = "https://formsubmit.co/ajax/contato@matzah.com.br";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email,
          _subject: "📰 Nova assinatura — Newsletter do site",
          _template: "table",
          _language: "pt",
          _captcha: false,
        }),
      });

      if (!response.ok) {
        const errorPayload = await response.json().catch(() => ({}));
        setErrorMessage(errorPayload?.message ?? "Não foi possível concluir a inscrição agora.");
        setStatus("error");
        return;
      }

      await response.json().catch(() => ({}));
      setSuccessMessage("Inscrição realizada! Você receberá um e-mail sempre que novos conteúdos forem publicados.");
      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Newsletter subscription error", error);
      setErrorMessage("Não conseguimos salvar sua inscrição. Tente novamente em instantes.");
      setStatus("error");
    }
  }

  return (
    <motion.section
      id={id}
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
      <div className="h-full w-full rounded-3xl bg-[color:var(--surface-muted)] p-8 shadow-[0_32px_60px_-35px_var(--card-shadow)] sm:p-12 dark:bg-[#1f1f1f]/95">
        <div className="mx-auto max-w-2xl text-center sm:text-left">
          <h2
            id="newsletter-title"
            className="font-heading text-2xl font-semibold text-[color:var(--foreground)] sm:text-3xl dark:text-white"
          >
            {title}
          </h2>
          <p className="mt-2 text-base text-[color:var(--text-secondary)] dark:text-neutral-200">
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
            className="flex-1 rounded-full border border-[color:var(--border-color)] bg-[color:var(--surface)] px-5 py-3 text-base text-[color:var(--text-secondary)] shadow-sm shadow-[0_20px_40px_-25px_var(--card-shadow)] placeholder:text-[color:var(--input-placeholder)] focus:border-[#DD0000] focus:outline-none focus:ring-2 focus:ring-[#F77F00] focus:ring-offset-2 focus:ring-offset-[color:var(--surface-muted)] dark:border-white/15 dark:bg-[#2a2a2a] dark:text-white dark:placeholder:text-neutral-400 dark:focus:ring-offset-[#1f1f1f]"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-[#DD0000] px-6 py-3 text-base font-semibold text-white shadow transition hover:bg-[#c20000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F77F00] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface-muted)] dark:focus-visible:ring-offset-[#1f1f1f]"
            disabled={status === "loading" || status === "success"}
          >
            {status === "loading" ? "Enviando..." : status === "success" ? "Inscrito" : "Assinar"}
          </button>
        </form>

        <p className="mt-3 text-sm text-[color:var(--text-tertiary)] dark:text-neutral-300">{privacy}</p>
        <p className="mt-2 text-sm font-medium text-[color:var(--text-secondary)] dark:text-neutral-200">
          {status === "idle" && "Conteúdo relevante, sem spam."}
          {status === "loading" && "Carregando lista de contatos..."}
          {status === "success" && successMessage}
          {status === "error" && errorMessage}
        </p>
      </div>
    </motion.section>
  );
}
