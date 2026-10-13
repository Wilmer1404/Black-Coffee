import { IMAGES } from './site'

export const MENU_FILTERS = ['Todos', 'Café Caliente', 'Café Frío', 'Especiales & Desayuno']

/** Cantidad de productos visibles antes de pulsar "Ver carta completa". */
export const MENU_PREVIEW_COUNT = 4

/**
 * `badge`: etiqueta sobre la imagen. `tone` define su color ('light' | 'green').
 * `feature`: dato corto del pie de tarjeta (icono + texto).
 */
export const MENU_ITEMS = [
  {
    id: 'espresso',
    name: 'Espresso Artesanal',
    desc: 'Extracción concentrada con notas de avellana, cacao amargo y crema densa.',
    price: 7.5,
    category: 'Café Caliente',
    badge: 'Caliente',
    feature: { icon: 'flame', text: 'Tostado Medio' },
    image: IMAGES.espresso,
    position: 'object-[center_25%]',
  },
  {
    id: 'iced-smoothie',
    name: 'Iced Smoothie & Toast',
    desc: 'Smoothie frío cremoso en jarra artesanal acompañado de tostadas francesas y fruta fresca.',
    price: 18,
    category: 'Especiales & Desayuno',
    badge: 'Ice & Sweet',
    feature: { icon: 'star', text: 'Favorito' },
    image: IMAGES.toast,
    position: 'object-[40%_75%]',
  },
  {
    id: 'cold-brew',
    name: 'Cold Brew Selección',
    desc: 'Macerado en frío por 18 horas para una textura sedosa y baja acidez natural.',
    price: 12.5,
    category: 'Café Frío',
    badge: 'Cold Brew',
    feature: { icon: 'snowflake', text: 'Hielo cristalino' },
    image: IMAGES.barista,
    position: 'object-[center_35%]',
  },
  {
    id: 'granos',
    name: 'Granos de Especialidad',
    desc: 'Bolsa de 250g en grano entero o molido al momento para tu prensa francesa o espresso.',
    price: 26,
    category: 'Café Caliente',
    badge: 'Origen 100%',
    tone: 'green',
    feature: { icon: 'bag', text: 'Para llevar' },
    image: IMAGES.barista,
    position: 'object-[center_55%]',
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino Cremoso',
    desc: 'Espresso doble, leche vaporizada y una espuma sedosa con arte latte.',
    price: 9,
    category: 'Café Caliente',
    badge: 'Caliente',
    feature: { icon: 'flame', text: 'Leche vaporizada' },
    image: IMAGES.reader,
    position: 'object-[15%_80%]',
  },
  {
    id: 'latte-helado',
    name: 'Latte Helado',
    desc: 'Espresso doble sobre leche fría y hielo, suave y refrescante.',
    price: 11,
    category: 'Café Frío',
    badge: 'Ice',
    feature: { icon: 'snowflake', text: 'Hielo cristalino' },
    image: IMAGES.espresso,
    position: 'object-[center_85%]',
  },
  {
    id: 'tostadas',
    name: 'Tostadas Francesas',
    desc: 'Pan brioche con canela, fresas, plátano y miel de abeja.',
    price: 14,
    category: 'Especiales & Desayuno',
    badge: 'Desayuno',
    feature: { icon: 'star', text: 'Para compartir' },
    image: IMAGES.toast,
    position: 'object-[25%_80%]',
  },
  {
    id: 'combo-lectura',
    name: 'Combo Lectura',
    desc: 'Tu café favorito con una porción dulce del día para acompañar tu libro.',
    price: 16,
    category: 'Especiales & Desayuno',
    badge: 'Combo',
    feature: { icon: 'book', text: 'Incluye café' },
    image: IMAGES.reader,
    position: 'object-[center_35%]',
  },
]
