import { IMAGES } from './site'

export const PLANS = [
  {
    id: 'mananas',
    title: 'Mañanas de café',
    text: 'Empieza el día con un espresso y tostadas recién hechas.',
    image: IMAGES.espresso,
    position: 'object-[center_20%]',
    cta: 'Reservar',
  },
  {
    id: 'lee-juega',
    title: 'Lee, juega y comparte',
    text: 'Un libro, una partida y tu bebida favorita en buena compañía.',
    image: IMAGES.reader,
    position: 'object-[center_30%]',
    cta: 'Reservar',
  },
  {
    id: 'rincon',
    title: 'Un rincón para ti',
    text: 'Trabaja o descansa con un ambiente tranquilo y aromático.',
    image: IMAGES.barista,
    position: 'object-[center_40%]',
    cta: 'Reservar',
  },
]
