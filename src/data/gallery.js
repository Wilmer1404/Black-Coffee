import { IMAGES } from './site'

export const GALLERY_HEADING = {
  tag: { icon: 'dice', text: 'Nuestra esencia única' },
  title: 'Café, libros y buenas',
  accent: 'partidas.',
  description:
    'No creemos en cafeterías rígidas donde reina el silencio incómodo ni en lugares ruidosos sin encanto. Creamos una atmósfera viva donde un juego amistoso o un libro cautivador van de la mano con la mejor taza de café.',
}

export const GALLERY_PERKS = [
  {
    icon: 'dice',
    title: 'Ludoteca Siempre Disponible',
    text: 'Pide el juego de mesa que quieras en mostrador sin costo adicional.',
  },
  {
    icon: 'book',
    title: 'Biblioteca Comunitaria',
    text: 'Novelas clásicas, diseño, relatos y poesía para hojear a tu ritmo.',
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
