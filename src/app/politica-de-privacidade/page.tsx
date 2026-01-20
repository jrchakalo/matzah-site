import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Política de Privacidade | Matzah Empreendimentos & Construções",
  description:
    "Entenda como a Matzah Empreendimentos & Construções trata, armazena e protege seus dados pessoais.",
};

export default function PoliticaPrivacidadePage() {
  return (
    <Container className="pt-24 sm:pt-28 pb-20">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-[color:var(--foreground)] mb-4">
          Política de Privacidade
        </h1>
        <p className="text-[color:var(--text-secondary)]">
          Última atualização: Janeiro de 2026
        </p>
      </header>

      {/* Conteúdo */}
      <div className="max-w-4xl space-y-8 text-[color:var(--text-secondary)]">
        {/* Introdução */}
        <div className="space-y-4">
          <p className="text-lg leading-relaxed">
            Esta Política de Privacidade descreve como a <span className="text-[color:var(--foreground)] font-semibold">{siteConfig.name}</span> coleta, utiliza, compartilha e protege as informações pessoais fornecidas por clientes, parceiros e usuários, em conformidade com a Lei Geral de Proteção de Dados (LGPD).
          </p>
        </div>

        {/* Seção 1 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[color:var(--foreground)]">
            1. Informações que Coletamos
          </h2>
          <p className="leading-relaxed">
            Quando você entra em contato conosco por WhatsApp, e-mail, telefone ou redes sociais, podemos coletar as seguintes informações de forma voluntária:
          </p>
          <ul className="space-y-2 pl-6">
            <li className="list-disc">
              <strong className="text-[color:var(--foreground)]">Dados de contato:</strong> nome, e-mail, telefone e empresa
            </li>
            <li className="list-disc">
              <strong className="text-[color:var(--foreground)]">Dados de localização:</strong> município, estado e país
            </li>
            <li className="list-disc">
              <strong className="text-[color:var(--foreground)]">Dados do projeto:</strong> tipo de imóvel, finalidade e orçamento estimado
            </li>
            <li className="list-disc">
              <strong className="text-[color:var(--foreground)]">Interações:</strong> mensagens via e-mail, WhatsApp, redes sociais e outros canais de comunicação
            </li>
          </ul>
          <p className="text-sm text-[color:var(--text-tertiary)] italic">
            Estas informações são coletadas apenas quando você as fornece voluntariamente durante nossas interações.
          </p>
        </section>

        {/* Seção 2 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[color:var(--foreground)]">
            2. Finalidade do Tratamento
          </h2>
          <p className="leading-relaxed">
            Utilizamos suas informações para prestar os serviços contratados, responder solicitações, enviar conteúdos relevantes sobre o mercado imobiliário e de construção, cumprir obrigações legais e aprimorar continuamente nossas soluções.
          </p>
        </section>

        {/* Seção 3 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[color:var(--foreground)]">
            3. Compartilhamento de Dados
          </h2>
          <p className="leading-relaxed">
            Compartilhamos dados apenas com parceiros estratégicos necessários para execução dos serviços (escritórios de arquitetura, engenharia, órgãos públicos), sempre mediante contratos que asseguram confidencialidade e conformidade com a LGPD.
          </p>
        </section>

        {/* Seção 4 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[color:var(--foreground)]">
            4. Seus Direitos (LGPD)
          </h2>
          <p className="leading-relaxed mb-3">
            Como titular dos dados, você tem direito a:
          </p>
          <ul className="space-y-2 pl-6">
            <li className="list-disc">Acessar seus dados pessoais armazenados</li>
            <li className="list-disc">Corrigir informações incompletas ou desatualizadas</li>
            <li className="list-disc">Solicitar a exclusão de seus dados</li>
            <li className="list-disc">Revogar consentimento para tratamento</li>
            <li className="list-disc">Solicitar portabilidade dos dados</li>
            <li className="list-disc">Opor-se ao tratamento de dados</li>
          </ul>
        </section>

        {/* Seção 5 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[color:var(--foreground)]">
            5. Segurança da Informação
          </h2>
          <p className="leading-relaxed">
            Implementamos controles técnicos e administrativos para proteger seus dados contra acessos não autorizados, perda, alteração ou uso indevido.
          </p>
        </section>

        {/* Seção Contato */}
        <section className="space-y-4 pt-8 border-t border-[color:var(--border-color)]">
          <h2 className="text-2xl font-bold text-[color:var(--foreground)]">
            6. Contato
          </h2>
          <p className="leading-relaxed">
            Dúvidas sobre esta política ou deseja exercer seus direitos? Entre em contato:
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[color:var(--action-primary)] via-[color:var(--action-secondary)] to-[color:var(--highlight)] hover:from-[color:var(--action-primary-hover)] hover:via-[color:var(--action-secondary)] hover:to-[color:var(--highlight)] text-white font-semibold rounded-lg transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              E-mail
            </a>
            <a 
              href={`https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[color:var(--surface-alt)] hover:bg-[color:var(--surface-soft)] text-[color:var(--foreground)] font-semibold rounded-lg transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </section>
      </div>
    </Container>
  );
}
