import { IMAGES } from './site'

export const MENU_FILTERS = ['Todos', 'Calientes', 'Fríos', 'Para comer']

/** Cantidad de productos visibles antes de pulsar "Ver carta completa". */
export const MENU_PREVIEW_COUNT = 4

export const MENU_ITEMS = [
  {
    id: 'espresso',
    name: 'Espresso Clásico',
    desc: 'Intenso, con crema espesa y cuerpo aterciopelado.',
    price: 6,
    category: 'Calientes',
    image: IMAGES.espresso,
    position: 'object-[center_20%]',
  },
  {
    id: 'smoothie-avena',
    name: 'Smoothie de Avena',
    desc: 'Batido cremoso de avena, plátano y canela.',
    price: 12,
    category: 'Fríos',
    image: IMAGES.toast,
    position: 'object-[80%_70%]',
  },
  {
    id: 'cafe-origen',
    name: 'Café de Origen',
    desc: 'Filtrado de especialidad con notas a cacao y frutos secos.',
    price: 9,
    category: 'Calientes',
    image: IMAGES.barista,
    position: 'object-[center_55%]',
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    desc: 'Espresso, leche vaporizada y espuma sedosa.',
    price: 8,
    category: 'Calientes',
    image: IMAGES.reader,
    position: 'object-[15%_70%]',
  },
  {
    id: 'tostadas',
    name: 'Tostadas Francesas',
    desc: 'Con fresas, plátano y miel. Para acompañar tu café.',
    price: 14,
    category: 'Para comer',
    image: IMAGES.toast,
    position: 'object-[25%_75%]',
  },
  {
    id: 'cold-brew',
    name: 'Cold Brew',
    desc: 'Infusión en frío durante 12 horas, suave y refrescante.',
    price: 10,
    category: 'Fríos',
    image: IMAGES.espresso,
    position: 'object-[center_80%]',
  },
  {
    id: 'latte-helado',
    name: 'Latte Helado',
    desc: 'Espresso doble con leche fría y hielo.',
    price: 11,
    category: 'Fríos',
    image: IMAGES.barista,
    position: 'object-[center_75%]',
  },
  {
    id: 'combo-lectura',
    name: 'Combo Lectura',
    desc: 'Tu café favorito con una porción del día.',
    price: 16,
    category: 'Para comer',
    image: IMAGES.reader,
    position: 'object-[center_35%]',
  },
]
