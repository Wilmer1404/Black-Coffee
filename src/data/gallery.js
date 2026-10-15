import { IMAGES } from './site'

export const GALLERY_HEADING = {
  eyebrow: 'CALMA & HOSPITALIDAD',
  title: 'Un remanso de tranquilidad',
  accent: 'en Sechura',
  description: 'Música suave, aroma a café tostado de origen y rincones creados para que cada visita te llene de paz.',
}

export const GALLERY_CARDS = [
  {
    icon: 'coffee',
    iconBg: 'bg-[#3B2211] text-cream',
    title: 'Baristas Calificados',
    text: 'Cuidamos cada método de extracción y preparamos tus bebidas favoritas con paciencia y calidez. ¡Listos para servirles! 💙 💚',
  },
  {
    icon: 'book',
    iconBg: 'bg-caramel text-cream',
    title: 'Lectura y Sosiego',
    text: 'Estanterías con lecturas abiertas y luz natural para dejar a un lado el celular y entregarte a un momento de serenidad.',
  },
]

/**
 * Collage en forma de arcos con imágenes armoniosas y etiquetas descriptivas.
 */
export const GALLERY_IMAGES = [
  {
    src: IMAGES.toast,
    label: 'Desayunos & Dulces',
    alt: 'Tostadas francesas con fruta fresca y smoothie artesanal',
    shape: 'rounded-[999px_999px_1.75rem_1.75rem]',
    position: 'object-[45%_75%]',
    layout: 'aspect-[3/4.1]',
  },
  {
    src: IMAGES.reader,
    label: 'Lectura en Calma',
    alt: 'Momento de lectura tranquila con una taza de café caliente',
    shape: 'rounded-[1.75rem_999px_1.75rem_1.75rem]',
    position: 'object-[center_30%]',
    layout: 'aspect-[4/3]',
  },
  {
    src: IMAGES.espresso,
    label: 'Granos de Especialidad',
    alt: 'Extracción de espresso con granos de origen seleccionados',
    shape: 'rounded-[1.75rem_1.75rem_1.75rem_1.75rem]',
    position: 'object-[center_30%]',
    layout: 'aspect-[4/3]',
  },
  {
    src: IMAGES.barista,
    label: 'Aroma & Pasión',
    alt: 'Barista apreciando las notas aromáticas del café de especialidad',
    shape: 'rounded-[1.75rem_1.75rem_999px_999px]',
    position: 'object-[center_40%]',
    layout: 'aspect-[3/4.1]',
  },
]

export const SPACES = [
  {
    icon: 'coffee',
    title: 'Barra de Especialidad',
    text: 'Observa la preparación pausada de tus bebidas frías, calientes o tragos de autor.',
    cta: 'Ver la carta',
  },
  {
    icon: 'book',
    title: 'Espacio de Sosiego',
    text: 'Un rincón pacífico con luz natural para desconectar y recargar energías.',
    cta: 'Visítanos',
  },
]
