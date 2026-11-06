# 🏗️ Matzah Empreendimentos & Construções

Website institucional moderno do Grupo Matzah construído com **Next.js 15**, **React 19**, **TailwindCSS** e **Supabase**, apresentando as duas empresas do grupo: Matzah Empreendimentos & Construções e Matzah Soluções Imobiliárias.

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
- **SEO aprimorado**: metatags dinâmicas, Open Graph, Schema.org, sitemap dinâmico
- **Breadcrumbs estruturados** com Schema.org BreadcrumbList para SEO
- **Google Analytics & Tag Manager** integrados (opcional)
- **Lazy loading inteligente**: imagens above-the-fold com priority, resto com lazy
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
│   │   ├── grupo-matzah/             # Página do grupo
│   │   ├── empresas/                 # Páginas das empresas do grupo
│   │   │   ├── e-c/                  # Empreendimentos & Construções
│   │   │   ├── s-i/                  # Soluções Imobiliárias
│   │   │   └── way/                  # Matzah Way
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
│   │   ├── layout/                   # Header, Footer, Container, tema
│   │   ├── home/                     # Seções da home
│   │   ├── services/                 # Cards de serviços
│   │   ├── testimonials/             # Grid de depoimentos
│   │   ├── empreendimentos/          # Cards de empreendimentos
│   │   ├── contact/                  # Formulário + canais
│   │   ├── Breadcrumbs.tsx           # Breadcrumbs + Schema.org
│   │   ├── GoogleAnalytics.tsx       # Script opcional do GA4
│   │   ├── GoogleTagManager.tsx      # Script opcional do GTM
│   │   └── NewsletterForm.tsx        # Formulário de newsletter
│   ├── content/                      # Conteúdo estático
│   │   ├── home.ts                   # Textos da home
│   │   ├── sobre.ts                  # Textos da página sobre
│   │   ├── servicos.ts               # Lista de serviços
│   │   ├── empreendimentos.ts        # Portfolio
│   │   ├── grupo-matzah.ts           # Dados do grupo e empresas
│   │   ├── blog.ts                   # Conteúdo do blog público
│   │   ├── contato.ts                # Canais e textos de contato
│   │   └── testimonials.ts           # Depoimentos
│   ├── lib/                          # Utilitários
│   │   ├── supabase.ts               # Cliente Supabase + CRUD
│   │   ├── siteConfig.ts             # Config global do site
│   │   └── utils.ts                  # Helpers gerais
│   └── hooks/                        # Custom React hooks
│       └── useScrollReveal.ts        # Animações scroll
├── public/
│   └── images/                       # Assets otimizados
├── .env.local                        # Variáveis de ambiente (não versionado)
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
git clone https://github.com/jrchakalo/matzah-site.git
cd matzah-site

# Instale as dependências
npm install
```

### 2. Configurar Supabase

Crie um arquivo `.env.local` na raiz do projeto (não versionado pelo Git):

```bash
# Supabase (OBRIGATÓRIO — blog e área admin)
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anonima

# Google Analytics (OPCIONAL)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google Tag Manager (OPCIONAL)
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

> **Nota:** a chave `anon` do Supabase é pública por design e respeita as políticas de **RLS** do banco. O formulário de contato usa o [FormSubmit](https://formsubmit.co/) e não requer credenciais de email no ambiente.

**Configuração do banco (feito uma vez no painel do Supabase):**
- Crie a tabela `posts` com as políticas de **RLS** adequadas
- Configure o bucket de imagens no Storage (usado pelo editor do blog)
- Crie o usuário admin conforme o passo 4 abaixo

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

> As credenciais do admin existem **apenas no Supabase** — nunca no código. A autenticação é feita via JWT com rate limiting nativo do Supabase Auth.

---

## 📊 Analytics & Tracking (Opcional)

O site suporta integração com **Google Analytics 4** e **Google Tag Manager**:

### Google Analytics 4 (GA4)
1. Crie uma propriedade GA4 em [analytics.google.com](https://analytics.google.com)
2. Copie o **Measurement ID** (formato: `G-XXXXXXXXXX`)
3. Adicione ao `.env.local`:
   ```bash
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
4. O tracking será habilitado automaticamente em todas as páginas

### Google Tag Manager (GTM)
1. Crie um container em [tagmanager.google.com](https://tagmanager.google.com)
2. Copie o **Container ID** (formato: `GTM-XXXXXXX`)
3. Adicione ao `.env.local`:
   ```bash
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
   ```
4. Configure tags, triggers e variáveis no dashboard do GTM

**Nota:** Ambos são opcionais. Se não configurados, os componentes não renderizam scripts.

---

## 🧭 Breadcrumbs & SEO Estruturado

O site implementa breadcrumbs com marcação Schema.org para melhor SEO:

- **Home** → Sem breadcrumbs (primeira página)
- **Blog** → `Home > Blog`
- **Post** → `Home > Blog > [Título do Post]`
- **Sobre** → `Home > Sobre`
- **Contato** → `Home > Contato`
- **Empresas** → `Home > Grupo Matzah > [Nome da Empresa]`

Os breadcrumbs incluem:
- ✅ Marcação **Schema.org BreadcrumbList** (JSON-LD)
- ✅ Ícones visuais (Home icon, ChevronRight separators)
- ✅ Links clicáveis (exceto página atual)
- ✅ Destaque da página atual em branco

---

## 🏢 Empresas do Grupo Matzah

O site apresenta as duas verticais de negócio:

| Empresa | Foco | Serviços |
|---------|------|----------|
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

Definida como variáveis CSS em `globals.css`, com tema claro e escuro:

```css
/* Tema claro */ 
--action-primary:   #d00000  /* Vermelho principal */
--action-secondary: #f77f00  /* Laranja (hover) */
--highlight:        #fcbf49  /* Amarelo (acento) */
--surface:          #ffffff  /* Superfícies e cards */
--border-color:     #e5e5e5  /* Bordas */

/* Tema escuro */
--action-primary:   #dd0000
--surface:          #212121
--border-color:     rgba(255, 255, 255, 0.08)
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

Este é um projeto de cliente mantido pela Matzah. Para sugestões, correções ou melhorias, entre em contato por uma das vias abaixo.

---

## 👤 Autor

[<img src="https://avatars.githubusercontent.com/jrchakalo?v=4" width=115><br><sub>Júnior Silva</sub>](https://github.com/jrchakalo)

**Júnior Silva** — estudante de Engenharia da Computação no CIn/UFPE, Recife — Brasil. Desenvolvimento e manutenção deste site.

- GitHub: [@jrchakalo](https://github.com/jrchakalo)
- Repositório: [matzah-site](https://github.com/jrchakalo/matzah-site)

---

**Feito com ❤️ em Pernambuco**
