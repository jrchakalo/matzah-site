## Matzah Empreendimentos & Construções

Website institucional construído com Next.js, React, TailwindCSS e Framer Motion para apresentar as soluções imobiliárias, construtivas e de representação da Matzah Empreendimentos & Construções em Pernambuco.

### ✨ Principais recursos
- Layout responsivo e moderno com foco em acessibilidade (teclas de navegação, ARIA e alto contraste).
- Componentização reutilizável (Hero, depoimentos, cards de serviços, formulário de contato e newsletter).
- Integração com conteúdo estruturado (`src/content`) para facilitar ajustes de texto e metadados.
- SEO aprimorado (metatags por página, Open Graph, Schema.org e palavras-chave em pt-BR).
- Animações suaves com Framer Motion e carregamento de imagens otimizado via `next/image` com assets em `/public/images`.
- Botão flutuante de WhatsApp, formulário de newsletter e simulação de fluxo LGPD.

### 📂 Estrutura
- `src/app` – Páginas estáticas (`home`, `sobre`, `servicos`, `empreendimentos`, `depoimentos`, `blog`, `contato`, `politica-de-privacidade`).
- `src/components` – Componentes reutilizáveis (layout, home, serviços, empreendimentos, depoimentos, contato).
- `src/content` – Conteúdo textual e configurações (siteConfig, textos institucionais, listas de serviços etc.).
- `public/images` – Imagens royalty-free otimizadas utilizadas nas seções do site.

### 🚀 Como rodar localmente
```bash
npm install
npm run dev
```

O site ficará disponível em [http://localhost:3000](http://localhost:3000).

### ✅ Verificações úteis
- `npm run lint` – Executa a análise estática com ESLint.

### 📄 Licenças
Todas as imagens foram obtidas em bancos royalty-free (Unsplash) e são utilizadas apenas para fins ilustrativos. Ajuste, se necessário, para fotos proprietárias da Matzah.
