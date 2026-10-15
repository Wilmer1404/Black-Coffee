import { IMAGES } from './site'

export const PLANS_HEADING = {
  title: 'Espacios para respirar',
  accent: 'y desconectar.',
  description:
    'Un café de especialidad puede ser el inicio de una tarde apacible, de una conversación sincera o de un momento a solas para reencontrarte contigo mismo.',
}

export const PLANS = [
  {
    id: 'pausa',
    badge: 'Momento Zen',
    kicker: 'Pausa personal',
    title: 'Un respiro de calma',
    text: 'Disfruta de notas aromáticas limpias, luz tenue y el ritmo pausado que necesitas para reiniciar tu mente o cerrar el día en total tranquilidad.',
    feature: { icon: 'wifi', text: 'Ambiente apacible con Wi-Fi libre' },
    image: IMAGES.espresso,
    position: 'object-[center_28%]',
    shape: 'rounded-[2.5rem_2rem_2rem_2rem]',
  },
  {
    id: 'grupo',
    badge: 'En compañía',
    kicker: 'Tranquilidad compartida',
    title: 'Conversaciones que reconfortan',
    text: 'Mesas acogedoras para compartir bebidas calientes, refrescantes cafés fríos o tragos de autor en un ambiente agradable y distendido.',
    feature: { icon: 'users', text: 'Mesas amplias y cómodas' },
    image: IMAGES.toast,
    position: 'object-[60%_70%]',
    shape: 'rounded-[2rem_2rem_2rem_2rem]',
  },
  {
    id: 'lectura',
    badge: 'Lectura & Sosiego',
    kicker: 'Desconexión',
    title: 'Tu rincón para desconectar',
    text: 'Asientos cómodos, música suave de fondo y estanterías con lecturas para sumergirte en una buena historia sin prisas ni interrupciones.',
    feature: { icon: 'book', text: 'Rincón de libre lectura' },
    image: IMAGES.reader,
    position: 'object-[center_30%]',
    shape: 'rounded-[2rem_2.5rem_2rem_2rem]',
  },
]
