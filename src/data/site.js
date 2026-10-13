/**
 * Contenido global del sitio. Todo el texto "editable" vive en `src/data`
 * para que los componentes solo se ocupen de la presentación.
 */

export const IMAGES = {
  logo: '/images/logo.png',
  espresso: '/images/espresso-granos.jpg',
  toast: '/images/tostadas-batido.jpg',
  barista: '/images/barista-aroma.jpg',
  reader: '/images/cliente-leyendo.png',
}

export const SITE = {
  name: 'Black Coffee',
  tagline: 'Ice & Hot',
  description:
    'Café de especialidad, libros y buenas partidas. Tu pausa favorita del día.',
  address: 'Av. Principal 123, Centro',
  phone: '+51 900 000 000',
  email: 'hola@blackcoffee.com',
  social: [
    { label: 'Instagram', icon: 'instagram', href: '#' },
    { label: 'Facebook', icon: 'facebook', href: '#' },
    { label: 'TikTok', icon: 'tiktok', href: '#' },
  ],
}

/** `href` debe coincidir con el `id` de cada sección (lo usa el scroll-spy). */
export const NAV_LINKS = [
  { label: 'Conoce la experiencia', href: '#experiencia' },
  { label: 'Carta', href: '#carta' },
  { label: 'Planes', href: '#planes' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Ubicación', href: '#ubicacion' },
]

export const HERO = {
  eyebrow: 'Café de especialidad',
  title: 'Tu pausa favorita',
  accent: 'del día.',
  text: 'Granos seleccionados, bebidas frías y calientes, y un rincón cálido para leer, jugar o simplemente conversar. Aquí cada taza tiene una historia.',
  stats: [
    { icon: 'coffee', value: '+50', label: 'Cafés y bebidas' },
    { icon: 'sparkle', value: 'Ice & Hot', label: 'Frío o caliente' },
    { icon: 'users', value: '100%', label: 'Buen ambiente' },
  ],
}

export const ABOUT = {
  tag: { icon: 'feather', text: 'Nuestra historia & manifiesto' },
  title: 'Más que café, un lugar',
  accent: 'para conectar.',
  quote: {
    label: 'Filosofía',
    text: 'El café sabe mejor cuando el tiempo se detiene un momento.',
  },
  paragraphs: [
    'Nacimos con una idea clara: el café no debe ser una rutina con prisa en un vaso descartable, sino una invitación a respirar. En Black Coffee unimos la maestría del tueste con la calidez de un espacio donde las personas vienen a leer, reír en una partida de cartas o compartir una conversación sincera.',
    'Cuidamos cada detalle térmico: bebidas frías llenas de energía vibrante y preparaciones calientes que reconfortan el espíritu. Aquí no eres solo un cliente; eres parte de nuestra pequeña gran comunidad.',
  ],
  features: [
    { icon: 'flame', title: 'Tueste Fresco', text: 'Lotes seleccionados con perfil balanceado.' },
    { icon: 'users', title: 'Comunidad Real', text: 'Un salón abierto al intercambio y juego libre.' },
  ],
  link: { label: 'Conoce nuestra esencia', href: '#galeria' },
}

export const PROMO = {
  tag: { icon: 'feather', text: 'Novedad de temporada' },
  title: 'Algo delicioso',
  accent: 'está por llegar.',
  text: "Nuestras creaciones frías con crema batida especial, hielo artesanal y maridajes frescos de tostadas con fresa. Pregunta en mostrador por el combo 'Dulce Pausa'.",
  cta: { label: 'Descubre las novedades', href: '#carta' },
  note: { icon: 'ticket', text: 'Disponible solo por este mes' },
}

