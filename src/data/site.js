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
  eyebrow: 'Sobre nosotros',
  title: 'Más que café, un lugar para',
  accent: 'conectar.',
  paragraphs: [
    'En Black Coffee creemos que una buena taza abre conversaciones. Tostamos con cuidado, preparamos con cariño y abrimos las puertas para que cada visita se sienta como en casa.',
    'Ven por el café, quédate por la gente: libros, juegos de mesa y un rincón para ti.',
  ],
  features: [
    { icon: 'sparkle', title: 'Todo fresco', text: 'Granos tostados y bebidas preparadas al momento.' },
    { icon: 'users', title: 'Comunidad real', text: 'Lectores, jugadores y amigos que vuelven siempre.' },
  ],
}

export const NEWSLETTER = {
  title: 'Algo delicioso',
  accent: 'está por llegar.',
  text: 'Suscríbete y sé el primero en conocer nuestras nuevas bebidas, eventos y promociones.',
}
