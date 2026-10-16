export const categorias = [
  {
    nome: 'Pães',
    itens: [
      {
        nome: 'Pão francês',
        descricao: 'Crocante por fora, macio por dentro, saindo do forno várias vezes ao dia.',
        preco: 16.9,
        unidade: 'o quilo',
      },
      {
        nome: 'Pão integral',
        descricao: 'Com grãos e farinha integral, de fermentação natural.',
        preco: 21.9,
        unidade: 'o quilo',
      },
      {
        nome: 'Pão de leite',
        descricao: 'Macio e levemente adocicado, o preferido das crianças.',
        preco: 3.5,
        unidade: 'a unidade',
      },
    ],
  },
  {
    nome: 'Confeitaria',
    itens: [
      {
        nome: 'Bolo de cenoura',
        descricao: 'Massa fofinha com cobertura de chocolate.',
        preco: 9.0,
        unidade: 'a fatia',
      },
      {
        nome: 'Sonho',
        descricao: 'Recheio cremoso e um toque de açúcar por cima.',
        preco: 7.0,
        unidade: 'a unidade',
      },
    ],
  },
  {
    nome: 'Salgados',
    itens: [
      {
        nome: 'Pão de queijo',
        descricao: 'Quentinho, com queijo de verdade.',
        preco: 4.5,
        unidade: 'a unidade',
      },
      {
        nome: 'Croissant',
        descricao: 'Folhado amanteigado, feito na casa.',
        preco: 8.5,
        unidade: 'a unidade',
      },
      {
        nome: 'Torta de frango',
        descricao: 'Recheio cremoso de frango com catupiry.',
        preco: 12.5,
        unidade: 'a fatia',
      },
    ],
  },
  {
    nome: 'Café da manhã',
    itens: [
      {
        nome: 'Café passado',
        descricao: 'Café fresquinho, passado na hora.',
        preco: 6.0,
        unidade: 'o copo',
      },
      {
        nome: 'Média com pão na chapa',
        descricao: 'Café com leite e pão na chapa com manteiga.',
        preco: 11.5,
        unidade: 'o combo',
      },
      {
        nome: 'Misto quente',
        descricao: 'Pão de forma, presunto e queijo, prensado na chapa.',
        preco: 12.0,
        unidade: 'a unidade',
      },
    ],
  },
];

export const todosItens = categorias.flatMap((c) =>
  c.itens.map((i) => ({ ...i, categoria: c.nome }))
);

export const destaques = ['Pão francês', 'Sonho', 'Pão de queijo']
  .map((nome) => todosItens.find((i) => i.nome === nome))
  .filter(Boolean);

export const precoBRL = (valor) =>
  valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
