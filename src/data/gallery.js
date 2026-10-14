import { IMAGES } from './site'

export const GALLERY_HEADING = {
  eyebrow: 'LUDOTECA & BIBLIOTECA',
  title: 'Café, libros y buenas',
  accent: 'partidas',
  description: 'Sin cuotas extra por jugar: sólo siéntate, pide tu bebida y déjate llevar.',
}

export const GALLERY_CARDS = [
  {
    icon: 'dice',
    iconBg: 'bg-[#3B2211] text-cream',
    title: 'Espacio de Juegos',
    text: 'Más de 20 títulos listos en estantería: desde estrategia rápida hasta partidas casuales de 15 minutos.',
  },
  {
    icon: 'book',
    iconBg: 'bg-caramel text-cream',
    title: 'Biblioteca Abierta',
    text: 'Novelas, ensayos sobre diseño y botánica disponibles para hojear libremente mientras tomas tu infusión.',
  },
]

/**
 * Collage en forma de arcos. Cada foto lleva su etiqueta flotante.
 * Reemplaza `src` por las fotos reales de juegos cuando estén en /public/images.
 */
export const GALLERY_IMAGES = [
  {
    src: IMAGES.toast,
    label: 'Desayunos',
    alt: 'Tostadas francesas con fruta junto a un batido',
    shape: 'rounded-[999px_999px_1.75rem_1.75rem]',
    position: 'object-[45%_75%]',
    layout: 'aspect-[3/4.1]',
  },
  {
    src: IMAGES.reader,
    label: 'Lectura Tranquila',
    alt: 'Cliente leyendo un libro con una taza de café',
    shape: 'rounded-[1.75rem_999px_1.75rem_1.75rem]',
    position: 'object-[center_30%]',
    layout: 'aspect-[4/3]',
  },
  {
    src: IMAGES.espresso,
    label: 'Espresso',
    alt: 'Espresso junto a granos formando el nombre del café',
    shape: 'rounded-[1.75rem_1.75rem_1.75rem_1.75rem]',
    position: 'object-[center_30%]',
    layout: 'aspect-[4/3]',
  },
  {
    src: IMAGES.barista,
    label: 'Aromas',
    alt: 'Barista oliendo granos de café',
    shape: 'rounded-[1.75rem_1.75rem_999px_999px]',
    position: 'object-[center_40%]',
    layout: 'aspect-[3/4.1]',
  },
]

export const SPACES = [
  {
    icon: 'dice',
    title: 'Espacio de Juegos',
    text: 'Mesas amplias y juegos para pasar la tarde con amigos.',
    cta: 'Reservar mesa',
  },
  {
    icon: 'book',
    title: 'Espacio de Lectura',
    text: 'Un rincón silencioso con buena luz y un café a tu lado.',
    cta: 'Ver horarios',
  },
]
