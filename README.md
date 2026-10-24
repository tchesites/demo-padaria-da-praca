# Padaria da Praça (demo)

- **Cliente:** Padaria da Praça — *negócio fictício (projeto demonstrativo)*
- **Entidade:** tche-sites
- **Stack:** astro
- **Status:** ativo
- **Repo:** `tchesites/demo-padaria-da-praca` — `git@github.com-tchesites:tchesites/demo-padaria-da-praca.git`
- **Como rodar:** `npm install` e depois `npm run dev` (http://localhost:4321)

## Sobre

Site institucional de uma padaria de bairro fictícia, criado como **projeto
demonstrativo** para o portfólio da Tchê Sites. É o exemplo vivo do serviço
"Sites". Identidade visual própria (nada da marca Tchê Sites); negócio, endereço,
horário e telefone são fictícios.

## Estrutura

- `src\` — código-fonte (pages, components, layouts, styles, data)
- `src\data\` — dados editáveis (`negocio.js`, `cardapio.js`)
- `public\` — assets estáticos (favicon)
- `dist\` — build (gerado por `npm run build`)

## Páginas

- `/` — home (hero, destaques, resumo, cardápio em destaque, onde/quando)
- `/cardapio/` — produtos por categoria
- `/sobre/` — história e valores
- `/contato/` — endereço, horário e pedidos

## Decisões

- Astro puro, HTML estático; sem framework de UI.
- Identidade própria: paleta quente (marrom/creme/dourado) e fontes Fraunces +
  Nunito Sans.
- Dados centralizados em `src\data\` para manter endereço, horário e preços
  consistentes entre as páginas.
- Contato por WhatsApp (`wa.me`) com número fictício — sem backend.

## Deploy

**Pendente.** Falta publicar em host gratuito. URL prevista
`https://padaria-da-praca.vercel.app` — o projeto na Vercel se chama
`padaria-da-praca` (sem o prefixo `demo-` do repo), para a URL ficar limpa.

O nome do repositório segue a convenção de `projetos\README.md`: `demo-` marca
cliente fictício. O rodapé traz o aviso "Projeto demonstrativo — desenvolvido
pela Tchê Sites".
