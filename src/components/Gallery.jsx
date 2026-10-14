import { GALLERY_HEADING, GALLERY_IMAGES, GALLERY_PERKS, SPACES } from '../data/gallery'
import Button from './ui/Button'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

/** Dos columnas escalonadas: [tall, short] y [short, tall]. */
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
    <section id="galeria" className="bg-cream py-12 sm:py-16 lg:py-24">
      <div className="section-wrap">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
          <div>
            <SectionHeading
              tag={GALLERY_HEADING.tag}
              title={GALLERY_HEADING.title}
              accent={GALLERY_HEADING.accent}
              description={GALLERY_HEADING.description}
            />
            <ul className="mt-5 sm:mt-6 space-y-3">
              {GALLERY_PERKS.map((p, i) => (
                <Reveal
                  as="li"
                  key={p.title}
                  delay={i * 80}
                  className="flex items-start gap-3 rounded-2xl bg-[#FBF0C0] p-3.5 sm:p-4 ring-1 ring-[#EBD9A0] transition hover:-translate-y-0.5"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-cream text-primary">
                    <Icon name={p.icon} className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-sm sm:text-[15px] font-semibold">{p.title}</h3>
                    <p className="mt-0.5 text-xs sm:text-[11.5px] text-primary/70">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md sm:max-w-lg mx-auto lg:max-w-none w-full">
            {COLUMNS.map((col, c) => (
              <div key={c} className={`flex flex-col gap-3 sm:gap-4 ${c === 1 ? '-mt-3 sm:-mt-6' : 'sm:mt-4'}`}>
                {col.map((img, i) => (
                  <CollageImage key={img.alt} img={img} delay={(c * 2 + i) * 80} />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 sm:mt-16 grid gap-4 sm:gap-5 md:grid-cols-2">
          {SPACES.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 100}
              className="card-soft flex-col sm:flex-row items-start gap-4 p-5 sm:p-7"
            >
              <span className="grid h-11 w-11 sm:h-12 sm:w-12 shrink-0 place-items-center rounded-2xl bg-[#FBE3CF] text-[#B4561B]">
                <Icon name={s.icon} className="h-5 w-5 sm:h-6 sm:w-6" />
              </span>
              <div className="flex flex-col items-start gap-2">
                <h3 className="text-lg sm:text-xl font-semibold">{s.title}</h3>
                <p className="text-xs sm:text-sm text-primary/70 leading-relaxed">{s.text}</p>
                <Button href="#ubicacion" size="sm" className="mt-1 sm:mt-2">
                  {s.cta}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
