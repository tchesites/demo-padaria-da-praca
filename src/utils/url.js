// Prefixa caminhos internos com a base do site (`import.meta.env.BASE_URL`).
//
// Na Vercel/Netlify a base é "/" e as URLs saem como sempre saíram. No GitHub
// Pages de projeto a base é o nome do repositório
// (`https://tchesites.github.io/demo-padaria-da-praca/`), então todo link
// interno precisa deste prefixo — `href="/cardapio/"` sozinho levaria para a
// raiz de `tchesites.github.io` e daria 404.
//
// Use sempre `url('/caminho/')` em `href`, `src` e em dados que geram links.

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path = '/') => `${BASE}${path.startsWith('/') ? path : `/${path}`}`;
