import { siteConfig } from "@/lib/siteConfig";
import { buildWhatsAppLink } from "@/lib/utils";

const defaultWhatsAppMessage = "Olá! Gostaria de entrar em contato com algum representante Matzah!";
const meetingWhatsAppMessage = "Olá! Gostaria de agendar uma reunião com um dos representantes Matzah!";

export const contactContent = {
  title: "Fale Conosco",
  introduction:
    "Estamos à disposição para orientar, esclarecer e caminhar com você em cada etapa.",
  channels: [
    {
      label: "Telefone / WhatsApp",
      value: siteConfig.phone,
      description: "Resposta rápida em horário comercial.",
      href: buildWhatsAppLink(siteConfig.whatsappNumber, defaultWhatsAppMessage),
    },
    {
      label: "E-mail",
      value: siteConfig.email,
      description: "Retorno em até um dia útil.",
      href: `mailto:${siteConfig.email}`,
    },
    {
      label: "Endereço",
      value: `${siteConfig.address.street}, ${siteConfig.address.city}`,
      description: "Atendimento presencial com agendamento prévio.",
    },
    {
      label: "Redes Sociais",
      value: "Instagram",
      description: "Conteúdo e bastidores sempre atualizados.",
      href: siteConfig.social.instagram,
    },
  ],
  form: {
    success: "Obrigado! Em breve retornaremos. Se for urgente, fale agora no WhatsApp.",
    privacy: "Seus dados são tratados com confidencialidade e não são compartilhados sem consentimento.",
    submitLabel: "Enviar Mensagem",
    whatsappLabel: "Chamar no WhatsApp",
    scheduleLabel: "Agendar Reunião",
    reassurance: "Preferimos conversar com calma a prometer algo que não podemos entregar.",
    whatsappMessage: defaultWhatsAppMessage,
    scheduleMessage: meetingWhatsAppMessage,
  },
  whatsappMessage: defaultWhatsAppMessage,
  meetingMessage: meetingWhatsAppMessage,
};
