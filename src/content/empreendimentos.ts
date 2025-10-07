export type EmpreendimentoStatus =
  | "Lançamento"
  | "Em Obras"
  | "Pronto"
  | "Entregue";

export interface Empreendimento {
  name: string;
  type: "Residencial" | "Comercial" | "Loteamento" | "Misto" | "Vertical" | "Horizontal";
  location: string;
  status: EmpreendimentoStatus;
  units: string;
  areaRange: string;
  highlights: string[];
  infrastructure: string[];
  regulation: string;
  image: string;
  cta: { label: string; href: string };
  documentHref?: string;
}

export const empreendimentosContent = {
  title: "Nossos Empreendimentos",
  introduction:
    "Desenvolvemos e representamos projetos que combinam localização estratégica, sustentabilidade, valorização de patrimônio e experiência de uso.",
  items: [
    {
      name: "Residencial Jardim das Serras",
      type: "Residencial",
      location: "Bezerros - PE",
      status: "Lançamento" as EmpreendimentoStatus,
      units: "84 unidades | 2 e 3 quartos",
      areaRange: "65 m² a 90 m²",
      highlights: [
        "Ventilação cruzada",
        "Energia fotovoltaica nas áreas comuns",
        "Espaço multiuso modular",
      ],
      infrastructure: [
        "Área de lazer completa",
        "Coworking",
        "Pet place",
        "Portaria inteligente",
      ],
      regulation: "Registro de Incorporação nº 12.345 - Cartório de Bezerros",
      image: "/images/empreendimento-bezerros.jpg",
  cta: { label: "Fale com um Consultor", href: "/contato?assunto=empreendimento" },
    },
    {
      name: "Centro Comercial Monte Carmelo",
      type: "Comercial",
      location: "Caruaru - PE",
      status: "Em Obras" as EmpreendimentoStatus,
      units: "42 salas comerciais",
      areaRange: "35 m² a 75 m²",
      highlights: [
        "Fachada ventilada",
        "Pré-instalação para energia solar",
        "Vallet com gestão inteligente",
      ],
      infrastructure: [
        "Auditório modular",
        "Lobby com concierge",
        "Estacionamento coberto",
        "Monitoramento 24h",
      ],
      regulation: "Alvará de Construção nº 4.567/2025 - Prefeitura de Caruaru",
      image: "/images/hero-construcao.jpg",
      cta: { label: "Reservar Unidade", href: "/contato?assunto=empreendimento" },
    },
    {
      name: "Parque das Águas Loteamento",
      type: "Loteamento",
      location: "Bezerros - PE",
      status: "Entregue" as EmpreendimentoStatus,
      units: "220 lotes residenciais e mistos",
      areaRange: "160 m² a 300 m²",
      highlights: [
        "Paisagismo nativo",
        "Ciclovia perimetral",
        "Clube social equipado",
      ],
      infrastructure: [
        "Rede de água e esgoto",
        "Iluminação LED",
        "Estação de tratamento",
        "Portaria com reconhecimento facial",
      ],
      regulation: "Registro nº 9.876 - Cartório Único de Bezerros",
      image: "/images/obra-andamento.jpg",
      cta: { label: "Visitar Decorado", href: "/contato?assunto=visita" },
    },
  ] as Empreendimento[],
  closing: "Quer desenvolver ou representar seu empreendimento? Vamos conversar.",
};
