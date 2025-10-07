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
    <Container className="space-y-10 lg:space-y-16">
      <header className="space-y-4">
        <h1 className="font-heading text-4xl font-semibold text-neutral-900">
          Política de Privacidade
        </h1>
        <p className="text-sm text-neutral-600">
          Última atualização: Outubro de 2025
        </p>
      </header>

      <section className="space-y-6 text-sm text-neutral-700">
        <p>
          Esta Política de Privacidade descreve como a {siteConfig.name} coleta, utiliza, compartilha e protege as informações pessoais fornecidas por clientes, parceiros e usuários de nossos canais digitais.
        </p>
        <div className="space-y-4">
          <h2 className="font-heading text-2xl font-semibold text-neutral-900">
            1. Informações que coletamos
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Dados de contato: nome, e-mail, telefone e empresa.</li>
            <li>Dados de localização: município, estado e país.</li>
            <li>Dados relacionados ao serviço solicitado: tipo de imóvel, finalidade, orçamento estimado.</li>
            <li>Interações por e-mail, formulários, redes sociais e WhatsApp.</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="font-heading text-2xl font-semibold text-neutral-900">
            2. Finalidade do tratamento
          </h2>
          <p>
            Utilizamos suas informações para prestar os serviços contratados, responder solicitações, enviar conteúdos relevantes, cumprir obrigações legais e aprimorar continuamente nossas soluções.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="font-heading text-2xl font-semibold text-neutral-900">
            3. Compartilhamento de dados
          </h2>
          <p>
            Compartilhamos dados apenas com parceiros estratégicos necessários para execução dos serviços, sempre mediante contratos que asseguram confidencialidade e conformidade com a LGPD.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="font-heading text-2xl font-semibold text-neutral-900">
            4. Direitos dos titulares
          </h2>
          <p>
            Você pode solicitar acesso, correção, atualização ou exclusão dos seus dados pessoais a qualquer momento, além de revogar consentimentos concedidos.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="font-heading text-2xl font-semibold text-neutral-900">
            5. Segurança da informação
          </h2>
          <p>
            Implementamos controles técnicos e administrativos para proteger seus dados contra acessos não autorizados, perda ou uso indevido.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="font-heading text-2xl font-semibold text-neutral-900">
            6. Contato
          </h2>
          <p>
            Em caso de dúvidas sobre esta política ou para exercer seus direitos, entre em contato pelo e-mail {siteConfig.email} ou WhatsApp {siteConfig.whatsappNumber}.
          </p>
        </div>
      </section>
    </Container>
  );
}
