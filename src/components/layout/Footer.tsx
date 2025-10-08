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
              className="inline-flex items-center justify-center gap-x-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F77F00] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0  0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
              </svg>
              Instagram
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
