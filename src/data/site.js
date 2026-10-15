/**
 * Contenido global del sitio Black Coffee - Ice & Hot (Sechura).
 * Textos que transmiten paz, calidez, calma y café de especialidad.
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
  tagline: 'Ice & Hot · Sechura',
  description:
    'Cafetería de especialidad en Sechura. Un remanso de paz y tranquilidad con granos seleccionados de origen, bebidas frías, calientes y tragos de autor.',
  address: 'Calle San Martín #263, Sechura, Piura',
  phone: '+51 984 088 265',
  phoneDisplay: '984088265',
  email: 'contacto@blackcoffee.com',
  hours: 'Lunes a Domingo: 8:00 am – 11:30 pm',
  whatsappUrl:
    'https://wa.me/51984088265?text=Hola%20Black%20Coffee%2C%20quisiera%20hacer%20un%20pedido%20o%20consulta',
  social: [
    {
      label: 'Instagram',
      icon: 'instagram',
      href: 'https://www.instagram.com/blackcoffeeicehot/',
    },
    {
      label: 'Facebook',
      icon: 'facebook',
      href: 'https://web.facebook.com/juanChblackcoffe',
    },
    {
      label: 'WhatsApp',
      icon: 'whatsapp',
      href: 'https://wa.me/51984088265?text=Hola%20Black%20Coffee%2C%20quisiera%20hacer%20un%20pedido%20o%20consulta',
    },
  ],
}

/** `href` debe coincidir con el `id` de cada sección (lo usa el scroll-spy). */
export const NAV_LINKS = [
  { label: 'Nuestra Esencia', href: '#experiencia' },
  { label: 'Carta', href: '#carta' },
  { label: 'Momentos', href: '#planes' },
  { label: 'Espacios', href: '#galeria' },
  { label: 'Encuentros', href: '#eventos' },
  { label: 'Ubicación', href: '#ubicacion' },
]

export const HERO = {
  eyebrow: 'Cafetería de Especialidad en Sechura',
  title: 'Tu refugio de paz',
  accent: 'en cada taza.',
  text: 'Respira hondo y regálate una pausa. En Black Coffee unimos granos seleccionados de origen con bebidas calientes, frías y tragos de autor, servidos con calidez en un rincón donde las prisas se desvanecen.',
  card: {
    title: 'Pausa & Serenidad',
    subtitle: 'El ritmo tranquilo que tu día merece, de 8 am a 11:30 pm.',
  },
  stats: [
    { icon: 'coffee', value: 'Origen', label: 'Granos seleccionados' },
    { icon: 'sparkle', value: 'Ice & Hot', label: 'Frías, calientes y tragos' },
    { icon: 'feather', value: 'Paz Total', label: '¡Listos para servirles! 💙 💚' },
  ],
}

export const ABOUT = {
  tag: { icon: 'feather', text: 'Nuestra esencia & hospitalidad' },
  heroSubtitle: 'El aroma a café de especialidad en un espacio donde el tiempo se detiene.',
  title: 'Más que una taza, un bálsamo',
  accent: 'de serenidad.',
  quote: {
    label: 'Filosofía Black Coffee',
    text: 'El café sabe mejor cuando se disfruta despacio, con calma y en buena sintonía.',
  },
  paragraphs: [
    'En Black Coffee creamos un santuario de paz en pleno centro de Sechura. Un lugar donde la calidez del ambiente, la música apacible y el aroma envolvente a café recién tostado te invitan a dejar afuera el estrés y reconectar con la tranquilidad.',
    'Nuestros baristas calificados cuidan cada método de extracción y cada receta artesanal —desde una taza humeante hasta refrescantes bebidas frías y tragos de autor con café—. ¡Estamos listos para servirles con todo el cariño! 💙 💚',
  ],
  features: [
    {
      icon: 'flame',
      title: 'Granos de Origen',
      text: 'Café de especialidad con perfiles limpios y notas aromáticas únicas.',
      iconBg: 'bg-[#3B2211] text-cream',
    },
    {
      icon: 'users',
      title: 'Baristas Calificados',
      text: 'Pasión por el detalle, servicio dedicado y una cálida atención.',
      iconBg: 'bg-[#70B526] text-white',
    },
  ],
  link: { label: 'Conoce nuestros espacios', href: '#galeria' },
}

export const PROMO = {
  tag: { icon: 'sparkle', text: 'Creaciones de la casa' },
  title: 'Bebidas frías, calientes',
  accent: 'y tragos de café.',
  text: 'Déjate sorprender por nuestras infusiones lentas en frío, cócteles de autor a base de espresso y combinaciones dulces artesanales. La compañía perfecta para saborear una tarde apacible.',
  cta: { label: 'Explorar la carta', href: '#carta' },
  note: { icon: 'clock', text: 'Atención continua: 8:00 am a 11:30 pm' },
}

