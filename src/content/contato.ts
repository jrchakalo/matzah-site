import { siteConfig } from "@/lib/siteConfig";

export const contactContent = {
  title: "Fale Conosco",
  introduction:
    "Estamos à disposição para orientar, esclarecer e caminhar com você em cada etapa.",
  channels: [
    {
      label: "WhatsApp",
      value: "+55 (81) 99999-9999",
      description: "Resposta rápida em horário comercial.",
      href: `https://wa.me/${siteConfig.whatsappNumber.replace("+", "")}`,
    },
    {
      label: "E-mail",
      value: siteConfig.email,
      description: "Retorno em até um dia útil.",
      href: `mailto:${siteConfig.email}`,
    },
    {
      label: "Telefone",
      value: siteConfig.phone,
      description: "Atendimento de segunda a sexta, 8h às 18h.",
    },
    {
      label: "Endereço",
      value: `${siteConfig.address.street}, ${siteConfig.address.neighborhood}, ${siteConfig.address.city} - ${siteConfig.address.state}`,
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
  },
};
