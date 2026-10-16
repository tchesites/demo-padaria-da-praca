export const negocio = {
  nome: 'Padaria da Praça',
  slogan: 'Pão quentinho, café passado e o cheiro de casa.',
  endereco: 'Rua das Praças, 120 — Centro, Sapucaia do Sul/RS',
  horarios: [
    { dias: 'Segunda a sábado', horas: '6h às 20h' },
    { dias: 'Domingo', horas: '7h às 12h' },
  ],
  whatsappDisplay: '(51) 90000-0000',
  whatsappDigits: '5551900000000',
  mapaUrl:
    'https://www.google.com/maps/search/?api=1&query=Rua+das+Pra%C3%A7as+120+Sapucaia+do+Sul',
};

export const whatsappLink = (mensagem) =>
  `https://wa.me/${negocio.whatsappDigits}?text=${encodeURIComponent(mensagem)}`;
