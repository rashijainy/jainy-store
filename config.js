export const STORE = {
  name: 'Jain.Y Store',
  shippingThreshold: 999,
  standardShipping: 79,
  support: {
    phone: '[YOUR CUSTOMER CARE NUMBER]',
    email: '[YOUR BUSINESS EMAIL]',
    whatsapp: '[YOUR WHATSAPP NUMBER]',
    hours: '[YOUR BUSINESS HOURS]'
  },
  policies: {
    shipping: 'Shipping timelines and charges are editable policy content. Configure your fulfilment terms before going live.',
    returns: 'Returns and refunds are subject to the store policy you configure before launch.',
    care: 'Store jewellery away from moisture, perfume and direct sunlight. Wipe gently with a soft dry cloth after wear.'
  }
};

export const categories = [
  ['anklets', 'Anklets / Payal'], ['toe-rings', 'Toe Rings / Bichhiya'], ['rings', 'Finger Rings'],
  ['earrings', 'Earrings'], ['studs', 'Stud Earrings'], ['jhumkas', 'Jhumkas'], ['necklaces', 'Necklaces'],
  ['sets', 'Necklace Sets'], ['chains', 'Chains & Pendants'], ['mangalsutra', 'Mangalsutra'], ['bangles', 'Bangles'],
  ['bracelets', 'Bracelets'], ['hathphool', 'Hand Harness / Hathphool'], ['maang-tikka', 'Maang Tikka'],
  ['nose-pins', 'Nose Pins'], ['bridal', 'Bridal & Wedding'], ['festive', 'Festive Jewellery'],
  ['daily', 'Daily Wear'], ['gifts', 'Gift Sets']
].map(([id, name]) => ({ id, name }));
