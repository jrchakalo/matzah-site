"use client";

import { FormEvent, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { contactContent } from "@/content/contato";
import { siteConfig } from "@/lib/siteConfig";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const subjects = [
  "Compra",
  "Venda",
  "Avaliação",
  "Financiamento",
  "Construção",
  "Parceria",
  "Outros",
];

const formVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { ref, shouldAnimate } = useScrollReveal<HTMLFormElement>();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      console.info("Formulário Contato", payload);
      setTimeout(() => {
        setStatus("success");
        form.reset();
      }, 1000);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <motion.form
      ref={ref}
      variants={formVariants}
      initial={shouldAnimate ? "hidden" : "visible"}
      animate={shouldAnimate ? undefined : "visible"}
      whileInView={shouldAnimate ? "visible" : undefined}
      viewport={shouldAnimate ? { once: true, margin: "0px 0px -10% 0px" } : undefined}
      transition={{ duration: 0.55, ease: "easeOut" }}
      onSubmit={handleSubmit}
      className="space-y-5"
      aria-live="polite"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
            Nome completo
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Seu nome"
            className="mt-2 rounded-2xl border border-neutral-200 px-4 py-3 text-sm text-neutral-800 shadow-sm focus:border-[#DD0000] focus:outline-none focus:ring-2 focus:ring-[#F77F00] dark:border-white/15 dark:bg-[#2a2a2a] dark:text-white"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="nome@empresa.com"
            className="mt-2 rounded-2xl border border-neutral-200 px-4 py-3 text-sm text-neutral-800 shadow-sm focus:border-[#DD0000] focus:outline-none focus:ring-2 focus:ring-[#F77F00] dark:border-white/15 dark:bg-[#2a2a2a] dark:text-white"
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
            Telefone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(81) 99999-9999"
            className="mt-2 rounded-2xl border border-neutral-200 px-4 py-3 text-sm text-neutral-800 shadow-sm focus:border-[#DD0000] focus:outline-none focus:ring-2 focus:ring-[#F77F00] dark:border-white/15 dark:bg-[#2a2a2a] dark:text-white"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="subject" className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
            Assunto
          </label>
          <select
            id="subject"
            name="subject"
            required
            className="mt-2 rounded-2xl border border-neutral-200 px-4 py-3 text-sm text-neutral-800 shadow-sm focus:border-[#DD0000] focus:outline-none focus:ring-2 focus:ring-[#F77F00] dark:border-white/15 dark:bg-[#2a2a2a] dark:text-white"
            defaultValue=""
          >
            <option value="" disabled>
              Selecione uma opção
            </option>
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="message" className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Conte-nos como podemos ajudar"
          className="mt-2 rounded-2xl border border-neutral-200 px-4 py-3 text-sm text-neutral-800 shadow-sm focus:border-[#DD0000] focus:outline-none focus:ring-2 focus:ring-[#F77F00] dark:border-white/15 dark:bg-[#2a2a2a] dark:text-white"
        />
      </div>
      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-[#DD0000] px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-[#c20000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F77F00] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#151515]"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Enviando..." : contactContent.form.submitLabel}
        </button>
        <a
          href={`https://wa.me/${siteConfig.whatsappNumber.replace("+", "")}`}
          className="inline-flex items-center justify-center rounded-full border border-neutral-200 px-6 py-3 text-sm font-semibold text-neutral-800 transition hover:border-[#F77F00] hover:text-[#DD0000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F77F00] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/15 dark:text-white dark:hover:border-[#F77F00] dark:hover:text-[#F77F00] dark:focus-visible:ring-offset-[#151515]"
        >
          {contactContent.form.whatsappLabel}
        </a>
        <a
          href="https://cal.com/matzah/consultoria"
          className="inline-flex items-center justify-center rounded-full border border-neutral-200 px-6 py-3 text-sm font-semibold text-neutral-800 transition hover:border-[#F77F00] hover:text-[#DD0000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F77F00] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/15 dark:text-white dark:hover:border-[#F77F00] dark:hover:text-[#F77F00] dark:focus-visible:ring-offset-[#151515]"
        >
          {contactContent.form.scheduleLabel}
        </a>
      </div>
      <p className="text-sm text-neutral-500 dark:text-neutral-300">{contactContent.form.privacy}</p>
      <p className="text-sm font-semibold text-[#DD0000]">
        {status === "idle" && contactContent.form.reassurance}
        {status === "loading" && "Carregando informações..."}
        {status === "success" && contactContent.form.success}
        {status === "error" && "Erro ao enviar. Tente novamente ou use o WhatsApp."}
      </p>
    </motion.form>
  );
}
