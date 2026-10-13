import { SITE } from './site'

/** Ajusta el bbox/coordenadas con la ubicación real del local. */
export const MAP_SRC =
  'https://www.openstreetmap.org/export/embed.html?bbox=-77.0600%2C-12.1400%2C-76.9900%2C-12.0900&layer=mapnik'

export const DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${SITE.name} ${SITE.address}`,
)}`

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
