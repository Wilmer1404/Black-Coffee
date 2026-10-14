import { GALLERY_CARDS, GALLERY_HEADING, GALLERY_IMAGES } from '../data/gallery'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'

/** Dos columnas escalonadas: [tall, short] y [short, tall]. Conserva el modelo y forma original de imágenes */
const COLUMNS = [GALLERY_IMAGES.slice(0, 2), GALLERY_IMAGES.slice(2, 4)]

function CollageImage({ img, delay }) {
  return (
    <Reveal delay={delay} className="group relative">
      <img
        src={img.src}
        alt={img.alt}
        loading="lazy"
        className={`w-full object-cover shadow-soft ring-4 ring-white/80 transition duration-500 group-hover:scale-[1.02] ${img.layout} ${img.shape} ${img.position}`}
      />
      <span className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary/85 px-3 py-1 text-[9px] font-bold uppercase tracking-wide text-cream backdrop-blur">
        {img.label}
      </span>
    </Reveal>
  )
}

export default function Gallery() {
  return (
    <section id="galeria" className="bg-cream py-10 sm:py-16 lg:py-24">
      <div className="section-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Cabecera (en móvil: 1º lugar arriba) */}
          <div className="lg:col-start-1 lg:row-start-1">
            <Reveal>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-orange" />
                <p className="eyebrow">{GALLERY_HEADING.eyebrow}</p>
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-[2.65rem] font-serif font-semibold leading-[1.15] text-primary">
                {GALLERY_HEADING.title}{' '}
                <em className="font-medium text-caramel">{GALLERY_HEADING.accent}</em>
              </h2>
              <p className="mt-2.5 sm:mt-3 text-xs sm:text-[13px] leading-relaxed text-primary/75 max-w-lg">
                {GALLERY_HEADING.description}
              </p>
            </Reveal>
          </div>

          {/* Collage de fotos (en móvil: 2º lugar debajo de la cabecera; en desktop: columna derecha) */}
          <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2 my-2 sm:my-4 lg:my-0">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md sm:max-w-lg mx-auto lg:max-w-none w-full">
              {COLUMNS.map((col, c) => (
                <div
                  key={c}
                  className={`flex flex-col gap-3 sm:gap-4 ${c === 1 ? '-mt-3 sm:-mt-6' : 'sm:mt-4'}`}
                >
                  {col.map((img, i) => (
                    <CollageImage key={img.alt} img={img} delay={(c * 2 + i) * 80} />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Tarjetas (en móvil: 3º lugar debajo de las fotos; en desktop: debajo del texto) */}
          <div className="lg:col-start-1 lg:row-start-2 space-y-3 sm:space-y-4">
            {GALLERY_CARDS.map((c, i) => (
              <Reveal
                key={c.title}
                delay={i * 80}
                className="flex items-start gap-3.5 sm:gap-4 rounded-2xl bg-white p-4 sm:p-5 shadow-soft ring-1 ring-primary/5 transition hover:-translate-y-0.5"
              >
                <span
                  className={`grid h-10 w-10 sm:h-11 sm:w-11 shrink-0 place-items-center rounded-full shadow-xs ${c.iconBg}`}
                >
                  <Icon name={c.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-primary">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-[12.5px] leading-relaxed text-primary/70">
                    {c.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

