import { IMAGES } from './site'

export const GALLERY_PERKS = [
  { icon: 'dice', title: 'Cartas y juegos disponibles', text: 'Ajedrez, cartas y juegos de mesa para todos.' },
  { icon: 'book', title: 'Biblioteca comunitaria', text: 'Lleva, lee y comparte libros con la comunidad.' },
]

/** Cada `shape` es un border-radius orgánico distinto (efecto "blob"). */
export const GALLERY_IMAGES = [
  {
    src: IMAGES.reader,
    alt: 'Cliente leyendo con un café',
    shape: 'rounded-[58%_42%_47%_53%/52%_44%_56%_48%]',
    position: 'object-[center_30%]',
  },
  {
    src: IMAGES.barista,
    alt: 'Barista oliendo granos de café',
    shape: 'rounded-[44%_56%_52%_48%/55%_47%_53%_45%]',
    position: 'object-[center_45%]',
    offset: 'mt-10',
  },
  {
    src: IMAGES.espresso,
    alt: 'Espresso junto a granos de café',
    shape: 'rounded-[50%_50%_44%_56%/46%_58%_42%_54%]',
    position: 'object-[center_25%]',
    offset: '-mt-6',
  },
  {
    src: IMAGES.toast,
    alt: 'Tostadas francesas y batido',
    shape: 'rounded-[47%_53%_58%_42%/53%_45%_55%_47%]',
    position: 'object-[40%_70%]',
    offset: 'mt-4',
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
