import { SITE } from './site'

export const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.082147812617!2d-80.8224264!3d-5.554840699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9049876cd28b110b%3A0xf99a1fb3f7c97d6b!2sBlack%20Coffee%20-%20Ice%20%26%20Hot!5e0!3m2!1ses!2spe!4v1791937132828!5m2!1ses!2spe'

export const DIRECTIONS_URL =
  'https://www.google.com/maps/place/Black+Coffee+-+Ice+%26+Hot/@-5.5548407,-80.8224264,17z'

export const LOCATION_CARDS = [
  {
    icon: 'pin',
    title: 'Visítanos',
    lines: ['Av. Principal 123', 'Centro de la ciudad'],
  },
  {
    icon: 'clock',
    title: 'Horarios',
    lines: ['Lun - Vie: 8:00 am - 10:00 pm', 'Sáb - Dom: 9:00 am - 11:00 pm'],
  },
  {
    icon: 'phone',
    title: 'Contáctanos',
    lines: [SITE.phone, SITE.email],
  },
]

export const FOOTER_COLUMNS = [
  {
    title: 'Explora',
    links: [
      { label: 'Carta', href: '#carta' },
      { label: 'Planes', href: '#planes' },
      { label: 'Galería', href: '#galeria' },
      { label: 'Eventos', href: '#eventos' },
    ],
  },
  {
    title: 'Black Coffee',
    links: [
      { label: 'Conoce la experiencia', href: '#experiencia' },
      { label: 'Ubicación', href: '#ubicacion' },
      { label: 'Suscríbete', href: '#newsletter' },
    ],
  },
]
