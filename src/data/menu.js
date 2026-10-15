import { IMAGES } from './site'

export const MENU_FILTERS = ['Todos', 'Café Caliente', 'Bebidas Frías & Tragos', 'Especiales & Dulces']

/** Cantidad de productos visibles antes de pulsar "Ver carta completa". */
export const MENU_PREVIEW_COUNT = 4

/**
 * `badge`: etiqueta sobre la imagen. `tone` define su color ('light' | 'green').
 * `feature`: dato corto del pie de tarjeta (icono + texto).
 */
export const MENU_ITEMS = [
  {
    id: 'espresso',
    name: 'Espresso de Origen',
    desc: 'Doble shot de granos seleccionados, cuerpo sedoso y notas a cacao suave.',
    price: 7.5,
    category: 'Café Caliente',
    badge: 'Especialidad',
    feature: { icon: 'flame', text: 'Granos de Origen' },
    image: IMAGES.espresso,
    position: 'object-[center_25%]',
  },
  {
    id: 'iced-toast',
    name: 'Set Dulce Serenidad',
    desc: 'Bebida helada artesanal con tostadas doradas y fruta fresca seleccionada.',
    price: 18,
    category: 'Especiales & Dulces',
    badge: 'Ice & Dulce',
    feature: { icon: 'star', text: 'Favorito' },
    image: IMAGES.toast,
    position: 'object-[40%_75%]',
  },
  {
    id: 'cold-brew',
    name: 'Cold Brew Artesanal',
    desc: 'Infusión paciente en frío por 18 horas para una textura sedosa y refrescante.',
    price: 12.5,
    category: 'Bebidas Frías & Tragos',
    badge: 'Bebida Fría',
    feature: { icon: 'snowflake', text: 'Hielo Cristalino' },
    image: IMAGES.barista,
    position: 'object-[center_35%]',
  },
  {
    id: 'granos',
    name: 'Granos de Origen 250g',
    desc: 'Granos seleccionados con tostado artesanal para llevar la calma y el aroma a casa.',
    price: 26,
    category: 'Café Caliente',
    badge: 'Origen 100%',
    tone: 'green',
    feature: { icon: 'bag', text: 'Para Llevar' },
    image: IMAGES.barista,
    position: 'object-[center_55%]',
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino Aterciopelado',
    desc: 'Espresso balanceado con microespuma de leche cremada y arte latte reconfortante.',
    price: 9,
    category: 'Café Caliente',
    badge: 'Caliente',
    feature: { icon: 'flame', text: 'Espuma Sedosa' },
    image: IMAGES.reader,
    position: 'object-[15%_80%]',
  },
  {
    id: 'trago-cafe',
    name: 'Cóctel Espresso de Autor',
    desc: 'Trago a base de café de especialidad con notas cítricas y licor suave para relajarte.',
    price: 15,
    category: 'Bebidas Frías & Tragos',
    badge: 'Trago con Café',
    feature: { icon: 'sparkle', text: 'Trago de Autor' },
    image: IMAGES.espresso,
    position: 'object-[center_85%]',
  },
  {
    id: 'latte-helado',
    name: 'Iced Latte Vainilla',
    desc: 'Espresso sobre leche fresca fría, sutil toque de vainilla y hielo artesanal.',
    price: 11,
    category: 'Bebidas Frías & Tragos',
    badge: 'Bebida Fría',
    feature: { icon: 'snowflake', text: 'Refrescante' },
    image: IMAGES.espresso,
    position: 'object-[center_65%]',
  },
  {
    id: 'tostadas',
    name: 'Tostadas Francesas de la Casa',
    desc: 'Pan brioche con canela suave, fresas de estación y miel pura de abeja.',
    price: 14,
    category: 'Especiales & Dulces',
    badge: 'Artesanal',
    feature: { icon: 'star', text: 'Para Compartir' },
    image: IMAGES.toast,
    position: 'object-[25%_80%]',
  },
]
