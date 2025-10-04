export type SubMenuItemsType = {
  title: string;
  description: string;
  link: string;
};

export type MenuItemsType = {
  menuLabel: string;
  subContent: SubMenuItemsType[] | string;
}[];

export const menus: MenuItemsType = [
  {
    menuLabel: "Início",
    subContent: "/",
  },
  {
    menuLabel: "Serviços",
    subContent: [
      {
        title: "Classificação de E-mails",
        description:
          "Envie um e-mail em texto e receba se ele é relevante ou não.",
        link: "/services/email-text",
      },
      {
        title: "Análise de PDF",
        description:
          "Faça upload de um arquivo PDF e obtenha análise automática do conteúdo.",
        link: "/services/pdf-analyzer",
      },
      {
        title: "Resumo Inteligente",
        description: "Gere resumos automáticos para e-mails longos.",
        link: "/services/summary",
      },
    ],
  },
  {
    menuLabel: "Ferramentas",
    subContent: [
      {
        title: "Validador de Formato",
        description:
          "Verifique se um arquivo enviado é compatível (.txt, .pdf).",
        link: "/tools/validator",
      },
      {
        title: "Histórico de Envios",
        description: "Acompanhe seus últimos arquivos e análises realizadas.",
        link: "/tools/history",
      },
    ],
  },
  {
    menuLabel: "API",
    subContent: [
      {
        title: "Documentação",
        description: "Acesse a documentação completa da API de classificação.",
        link: "/api/docs",
      },
      {
        title: "Chaves de Acesso",
        description: "Gerencie suas credenciais para integração.",
        link: "/api/keys",
      },
    ],
  },
  {
    menuLabel: "Sobre",
    subContent: [
      {
        title: "Nossa Missão",
        description: "Saiba mais sobre o propósito do projeto.",
        link: "/about/mission",
      },
      {
        title: "Equipe",
        description: "Conheça os desenvolvedores e colaboradores.",
        link: "/about/team",
      },
    ],
  },
  {
    menuLabel: "Contato",
    subContent: "/contact",
  },
];
