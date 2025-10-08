import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="bg-[#171514] text-neutral-100 transition-colors duration-300 dark:bg-[#0d0d0d]">
      <Container className="grid gap-10 py-12 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="relative flex h-14 w-44 items-center">
              <Image
                src="/matzah-logo-branco.png"
                alt="Logotipo da Matzah Empreendimentos & Construções"
                fill
                sizes="176px"
                className="object-contain"
              />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
              Construindo com propósito
            </span>
          </div>
          <p className="text-sm text-neutral-300">
            Soluções imobiliárias e construtivas com propósito, conectando pessoas, projetos e oportunidades em Pernambuco.
          </p>
          <p className="text-xs text-neutral-200">
            &ldquo;Se o Senhor não edificar a casa, em vão trabalham os que a edificam.&rdquo; — Salmo 127:1
          </p>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold text-white uppercase tracking-wide">
            Contato
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-neutral-300">
            <li>
              <strong className="text-white">E-mail:</strong> {siteConfig.email}
            </li>
            <li>
              <strong className="text-white">Telefone:</strong> {siteConfig.phone}
            </li>
            <li>
              <strong className="text-white">Endereço:</strong> {siteConfig.address.street}, {siteConfig.address.neighborhood}, {siteConfig.address.city} - {siteConfig.address.state}
            </li>
            <li>
              <strong className="text-white">WhatsApp:</strong> +55 (81) 99999-9999
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold text-white uppercase tracking-wide">
            Links úteis
          </h3>
          <nav aria-label="Links úteis" className="mt-4">
            <ul className="space-y-2 text-sm text-neutral-300">
              {siteConfig.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition hover:text-[#FCBF49] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F77F00] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/politica-de-privacidade"
                  className="transition hover:text-[#FCBF49] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F77F00] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="space-y-4">
          <h3 className="font-heading text-sm font-semibold text-white uppercase tracking-wide">
            Redes & News
          </h3>
          <p className="text-sm text-neutral-300">
            Conteúdo relevante, sem spam. Acompanhe nossos bastidores e novidades.
          </p>
          <div className="flex gap-3">
            <Link
              href={siteConfig.social.instagram}
              aria-label="Instagram da Matzah"
              className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F77F00] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Instagram
            </Link>
            <Link
              href={siteConfig.social.linkedin}
              aria-label="LinkedIn da Matzah"
              className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F77F00] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-neutral-400 sm:flex-row">
          <p>© 2025 {siteConfig.name}. Todos os direitos reservados.</p>
          <p>Desenvolvimento responsável. Relacionamentos duradouros.</p>
        </Container>
      </div>
    </footer>
  );
}
