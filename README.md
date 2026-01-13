# 🏗️ Matzah Empreendimentos & Construções

Website institucional moderno do Grupo Matzah construído com **Next.js 15**, **React 19**, **TailwindCSS** e **Supabase**, apresentando as três empresas do grupo: Matzah Way, Matzah Empreendimentos & Construções e Matzah Soluções Imobiliárias.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat&logo=tailwind-css)
![Supabase](https://img.shields.io/badge/Supabase-Database-3ECF8E?style=flat&logo=supabase)

---

## ✨ Principais Recursos

### 🎨 Design & UX
- **Layout responsivo** com design moderno em gradiente vermelho/laranja/amarelo
- **Modo claro/escuro** com alternância suave via botão no header
- **Animações fluidas** com Framer Motion para micro-interações
- **Acessibilidade** (WCAG): navegação por teclado, ARIA labels, alto contraste
- **Botão flutuante WhatsApp** para contato rápido

### 📝 Blog Dinâmico (CMS)
- **Sistema admin completo** com autenticação segura via Supabase Auth
- **Editor WYSIWYG** com suporte a Markdown (títulos, listas, links, imagens)
- **Upload de imagens** para Supabase Storage
- **Gestão de posts**: criar, editar, deletar e organizar por categorias
- **Renderização otimizada** com react-markdown e syntax highlighting

### 🔒 Segurança
- **Autenticação JWT** real com Supabase Auth (sem credenciais hardcoded)
- **RLS (Row Level Security)** configurado para posts e imagens
- **Rate limiting** nativo contra ataques de força bruta
- **Logs de acesso** automáticos no dashboard Supabase
- **LGPD Compliance** com política de privacidade detalhada

### 🚀 Performance & SEO
- **Otimização de imagens** com `next/image` (lazy loading, WebP)
- **SEO aprimorado**: metatags dinâmicas, Open Graph, Schema.org
- **Palavras-chave** otimizadas para pt-BR (mercado imobiliário PE)
- **Componentes reutilizáveis** para manutenibilidade

---

## 📂 Estrutura do Projeto

```
matzah-site/
├── src/
│   ├── app/                          # Páginas Next.js (App Router)
│   │   ├── page.tsx                  # Home
│   │   ├── sobre/                    # Sobre a empresa
│   │   ├── servicos/                 # Serviços oferecidos
│   │   ├── empreendimentos/          # Portfolio de projetos
│   │   ├── depoimentos/              # Testemunhos de clientes
│   │   ├── blog/                     # Blog público
│   │   │   ├── page.tsx              # Listagem de posts
│   │   │   └── [slug]/page.tsx       # Post individual
│   │   ├── contato/                  # Formulário de contato
│   │   ├── politica-de-privacidade/  # LGPD
│   │   └── admin/                    # Área administrativa
│   │       ├── page.tsx              # Login
│   │       └── dashboard/
│   │           ├── page.tsx          # Dashboard (listar posts)
│   │           ├── novo/             # Criar post
│   │           └── editar/[id]/      # Editar post
│   ├── components/                   # Componentes React
│   │   ├── layout/                   # Header, Footer, Container
│   │   ├── home/                     # Seções da home
│   │   ├── services/                 # Cards de serviços
│   │   ├── testimonials/             # Grid de depoimentos
│   │   └── contact/                  # Formulário + canais
│   ├── content/                      # Conteúdo estático
│   │   ├── home.ts                   # Textos da home
│   │   ├── servicos.ts               # Lista de serviços
│   │   ├── empreendimentos.ts        # Portfolio
│   │   └── testimonials.ts           # Depoimentos
│   ├── lib/                          # Utilitários
│   │   ├── supabase.ts               # Cliente Supabase + CRUD
│   │   ├── siteConfig.ts             # Config global do site
│   │   └── utils.ts                  # Helpers gerais
│   └── hooks/                        # Custom React hooks
│       └── useScrollReveal.ts        # Animações scroll
├── public/
│   └── images/                       # Assets otimizados
├── .env.local                        # Variáveis de ambiente
└── README.md                         # Você está aqui!
```

---

## 🚀 Começando

### Pré-requisitos
- **Node.js** 18+ e npm/yarn
- Conta no **[Supabase](https://supabase.com)** (gratuita)

### 1. Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/matzah-site.git
cd matzah-site

# Instale as dependências
npm install
```

### 2. Configurar Supabase

Crie um arquivo `.env.local` na raiz do projeto:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anonima
```

**Configuração completa do banco de dados:**
- Veja o arquivo `SUPABASE-SETUP.md` (na raiz) para instruções detalhadas
- SQL para criar tabela `posts` e políticas RLS
- Configuração do bucket de imagens
- Instruções de deployment

### 3. Rodar Localmente

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) 🎉

### 4. Criar Usuário Admin

1. Acesse o [Supabase Dashboard](https://supabase.com/dashboard)
2. Vá em **Authentication** > **Users** > **Add user**
3. Crie um usuário com email/senha e marque **"Auto Confirm User"**
4. Faça login em `/admin` com as credenciais criadas

**Documentação completa:** veja `AUTENTICACAO-ADMIN.md` para detalhes de segurança.

---

## 🏢 Empresas do Grupo Matzah

O site apresenta as três verticais de negócio:

| Empresa | Foco | Serviços |
|---------|------|----------|
| **Matzah Way** | Inteligência Comercial | Agência de marketing, análise de mercado, branding |
| **Matzah Empreendimentos** | Construção Civil | Arquitetura, engenharia, construção, avaliação técnica |
| **Matzah Soluções Imobiliárias** | Mercado Imobiliário | Corretagem, financiamento, legalização de imóveis |

---

## 🛠️ Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento (localhost:3000)
npm run build        # Build de produção
npm run start        # Servidor de produção
npm run lint         # ESLint (análise estática)
```

---

## 📦 Tecnologias Utilizadas

### Core
- **[Next.js 15](https://nextjs.org)** - Framework React com SSR/SSG
- **[React 19](https://react.dev)** - Biblioteca UI
- **[TypeScript](https://typescriptlang.org)** - Type safety

### Styling
- **[TailwindCSS](https://tailwindcss.com)** - Utility-first CSS
- **[Framer Motion](https://framer.com/motion)** - Animações

### Backend & Database
- **[Supabase](https://supabase.com)** - PostgreSQL + Auth + Storage
- **Row Level Security (RLS)** - Segurança a nível de linha

### Content & Markdown
- **[react-markdown](https://github.com/remarkjs/react-markdown)** - Renderização Markdown
- **[remark-gfm](https://github.com/remarkjs/remark-gfm)** - GitHub Flavored Markdown

---

## 🎨 Paleta de Cores

```css
--primary-red:    #DD0000  /* Vermelho principal */
--primary-orange: #F77F00  /* Laranja (hover) */
--primary-yellow: #FCBF49  /* Amarelo (acento) */
--surface:        rgba(17, 24, 39, 0.5)  /* Gray 900/50 */
--border-color:   rgba(75, 85, 99, 1)    /* Gray 600 */
```

---

## 🔐 Segurança do Admin

O sistema admin utiliza **Supabase Auth** com:
- ✅ Autenticação real via JWT (sem localStorage burlável)
- ✅ Rate limiting contra força bruta
- ✅ Sessões com expiração automática
- ✅ Logs de acesso auditáveis
- ✅ Zero credenciais hardcoded

**⚠️ Importante:** Crie usuários admin via Supabase Dashboard, não exponha credenciais no código.

---

## 📱 Contato Matzah

- **📞 WhatsApp**: (81) 98534-5567
- **📧 Email**: contato@matzah.com.br
- **📍 Endereço**: Rua Dr. José Mariano, 65, Bezerros - PE
- **📸 Instagram**: [@matzahoficial](https://www.instagram.com/matzahoficial/)

---

## 📄 Licença

© 2026 Matzah Empreendimentos & Construções. Todos os direitos reservados.

---

## 🤝 Contribuindo

Este é um projeto privado da Matzah. Para sugestões ou melhorias, entre em contato via email ou WhatsApp.

---

**Feito com ❤️ em Pernambuco**
