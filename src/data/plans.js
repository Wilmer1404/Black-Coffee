import { IMAGES } from './site'

export const PLANS_HEADING = {
  title: 'Tu próximo plan',
  accent: 'está aquí.',
  description:
    'Un café puede ser el comienzo de una tarde de concentración, de risas compartidas o simplemente de reencontrarte contigo mismo.',
}

export const PLANS = [
  {
    id: 'pausa',
    badge: 'Momento Zen',
    kicker: 'Momento de café',
    title: 'Una pausa para ti',
    text: 'Disfruta de notas aromáticas exclusivas y el ritmo pausado que necesitas para iniciar o cerrar tu jornada laboral.',
    feature: { icon: 'wifi', text: 'Espacio con Wi-Fi veloz y calma' },
    image: IMAGES.espresso,
    position: 'object-[center_28%]',
    shape: 'rounded-[2.5rem_2rem_2rem_2rem]',
  },
  {
    id: 'grupo',
    badge: 'En grupo',
    kicker: 'Juegos y amigos',
    title: 'Juega, comparte y repite',
    text: 'Mesas amplias para disfrutar de partidas de cartas, juegos de estrategia y risas con amigos alrededor de tus bebidas favoritas.',
    feature: { icon: 'dice', text: 'Colección abierta y libre' },
    image: IMAGES.toast,
    position: 'object-[60%_70%]',
    shape: 'rounded-[2rem_2rem_2rem_2rem]',
  },
  {
    id: 'lectura',
    badge: 'Lectura',
    kicker: 'Lectura & silencio',
    title: 'Un rincón para desconectar',
    text: 'Asientos cómodos, luz natural filtrada y una pequeña biblioteca para sumergirte en tu novela predilecta sin prisas.',
    feature: { icon: 'book', text: 'Biblioteca de libre acceso' },
    image: IMAGES.reader,
    position: 'object-[center_30%]',
    shape: 'rounded-[2rem_2.5rem_2rem_2rem]',
  },
]
