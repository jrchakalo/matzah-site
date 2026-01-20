"use client";

import { FormEvent, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { contactContent } from "@/content/contato";
import { siteConfig } from "@/lib/siteConfig";
import { buildWhatsAppLink } from "@/lib/utils";
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
		const defaultErrorMessage = "Não foi possível enviar sua mensagem agora. Tente novamente ou use o WhatsApp.";
		const defaultSuccessMessage = contactContent.form.success;

		const [errorMessage, setErrorMessage] = useState(defaultErrorMessage);
		const [successMessage, setSuccessMessage] = useState(defaultSuccessMessage);
	const { ref, shouldAnimate } = useScrollReveal<HTMLFormElement>();

	const fieldClassName =
		"mt-2 rounded-2xl border border-[color:var(--border-color)] bg-[color:var(--input-bg)] px-4 py-3 text-sm text-[color:var(--text-secondary)] shadow-sm shadow-[0_18px_40px_-25px_var(--card-shadow)] placeholder:text-[color:var(--input-placeholder)] focus:border-[color:var(--action-primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--action-secondary)] focus:ring-offset-2 focus:ring-offset-[color:var(--surface)] dark:border-white/15 dark:bg-[#2a2a2a] dark:text-white dark:placeholder:text-neutral-400 dark:focus:ring-offset-[#151515]";

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (status === "loading") {
			return;
		}

		const form = event.currentTarget;
		const formData = new FormData(form);
		const name = String(formData.get("name") ?? "").trim();
		const email = String(formData.get("email") ?? "").trim();
		const phone = String(formData.get("phone") ?? "").trim();
		const subject = String(formData.get("subject") ?? "").trim();
		const message = String(formData.get("message") ?? "").trim();

		if (!name || !email || !phone || !subject || !message) {
			setErrorMessage("Preencha todos os campos antes de enviar sua mensagem.");
			setStatus("error");
			return;
		}

		setStatus("loading");
			setErrorMessage(defaultErrorMessage);

			try {
				const endpoint = "https://formsubmit.co/ajax/contato@matzah.com.br";
				if (!endpoint) {
					setErrorMessage(
						"Canal de envio não configurado. Defina NEXT_PUBLIC_CONTACT_FORM_ENDPOINT no ambiente."
					);
					setStatus("error");
					return;
				}

				const response = await fetch(endpoint, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
						Accept: "application/json",
					},
					body: JSON.stringify({
						name,
						email,
						phone,
						subject,
						message,
						_subject: `📩 Novo contato via site — ${subject}`,
						_template: "table",
						_language: "pt",
						_captcha: false,
						_autoresponse: "Olá! Recebemos sua mensagem e um de nossos representantes entrará em contato com você em breve. Obrigado pelo contato! — Equipe Matzah",
    
					}),
			});

			if (!response.ok) {
				const errorPayload = await response.json().catch(() => ({}));
						setErrorMessage(errorPayload?.message ?? defaultErrorMessage);
				setStatus("error");
				return;
			}

			await response.json().catch(() => ({}));
			setSuccessMessage(
				"Sua mensagem foi enviada com sucesso! Em breve, um de nossos representantes entrará em contato com você."
			);
			setStatus("success");
			form.reset();
		} catch (error) {
			console.error("Contact form submission failed", error);
					setErrorMessage(defaultErrorMessage);
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
						<label htmlFor="name" className="text-sm font-semibold text-[color:var(--foreground)] dark:text-neutral-200">
							Nome completo
						</label>
						<input
							id="name"
							name="name"
							type="text"
							required
							autoComplete="name"
							placeholder="Seu nome"
							className={fieldClassName}
						/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="email" className="text-sm font-semibold text-[color:var(--foreground)] dark:text-neutral-200">
							E-mail
						</label>
						<input
							id="email"
							name="email"
							type="email"
							required
							autoComplete="email"
							placeholder="nome@empresa.com"
							className={fieldClassName}
						/>
					</div>
				</div>
				<div className="grid gap-4 sm:grid-cols-2">
					<div className="flex flex-col">
						<label htmlFor="phone" className="text-sm font-semibold text-[color:var(--foreground)] dark:text-neutral-200">
							Telefone / WhatsApp
						</label>
						<input
							id="phone"
							name="phone"
							type="tel"
							required
							autoComplete="tel"
							placeholder="(81) 99999-9999"
							className={fieldClassName}
						/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="subject" className="text-sm font-semibold text-[color:var(--foreground)] dark:text-neutral-200">
							Assunto
						</label>
						<select id="subject" name="subject" required defaultValue="" className={fieldClassName}>
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
					<label htmlFor="message" className="text-sm font-semibold text-[color:var(--foreground)] dark:text-neutral-200">
						Mensagem
					</label>
					<textarea
						id="message"
						name="message"
						required
						rows={5}
						placeholder="Conte-nos como podemos ajudar"
						className={fieldClassName}
					/>
				</div>
				<div className="flex flex-wrap gap-3">
					<button
						type="submit"
						className="inline-flex items-center justify-center rounded-full bg-[color:var(--action-primary)] px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-[color:var(--action-primary-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--action-secondary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface)] dark:focus-visible:ring-offset-[#151515]"
						disabled={status === "loading"}
					>
						{status === "loading" ? "Enviando..." : contactContent.form.submitLabel}
					</button>
					<a
						href={buildWhatsAppLink(siteConfig.whatsappNumber, contactContent.form.whatsappMessage)}
						className="inline-flex items-center justify-center rounded-full border border-[color:var(--border-color)] bg-[color:var(--surface)] px-6 py-3 text-sm font-semibold text-[color:var(--header-link)] transition hover:border-[color:var(--action-secondary)] hover:text-[color:var(--action-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--action-secondary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface)] dark:border-white/15 dark:text-white dark:focus-visible:ring-offset-[#151515]"
					>
						{contactContent.form.whatsappLabel}
					</a>
					<a
						href={buildWhatsAppLink(siteConfig.whatsappNumber, contactContent.form.scheduleMessage)}
						className="inline-flex items-center justify-center rounded-full border border-[color:var(--border-color)] bg-[color:var(--surface)] px-6 py-3 text-sm font-semibold text-[color:var(--header-link)] transition hover:border-[color:var(--action-secondary)] hover:text-[color:var(--action-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--action-secondary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface)] dark:border-white/15 dark:text-white dark:focus-visible:ring-offset-[#151515]"
					>
						{contactContent.form.scheduleLabel}
					</a>
				</div>
				<p className="text-sm text-[color:var(--text-tertiary)] dark:text-neutral-300">
					{contactContent.form.privacy}
				</p>
				<p className="text-sm font-semibold text-[color:var(--action-primary)] dark:text-[color:var(--action-secondary)]">
					{status === "idle" && contactContent.form.reassurance}
					{status === "loading" && "Carregando informações..."}
					{status === "success" && successMessage}
					{status === "error" && errorMessage}
				</p>
			</motion.form>
		);
}
