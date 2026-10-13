import { GALLERY_IMAGES, GALLERY_PERKS, SPACES } from '../data/gallery'
import Button from './ui/Button'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function Gallery() {
  return (
    <section id="galeria" className="bg-sand/60 py-16 lg:py-20">
      <div className="section-wrap">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Galería"
              title="Café, libros y"
              accent="buenas partidas."
              description="Un espacio hecho para quedarse un rato más. Mira cómo se vive el día a día en nuestra casa."
            />
            <ul className="mt-7 space-y-3">
              {GALLERY_PERKS.map((p, i) => (
                <Reveal
                  as="li"
                  key={p.title}
                  delay={i * 100}
                  className="flex items-start gap-3 rounded-2xl bg-white/70 p-4 ring-1 ring-primary/5"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary text-cream">
                    <Icon name={p.icon} className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="font-sans text-sm font-semibold">{p.title}</h3>
                    <p className="text-xs text-primary/65">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {GALLERY_IMAGES.map((img, i) => (
              <Reveal key={img.alt} delay={i * 100} className={img.offset}>
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className={`aspect-square w-full object-cover shadow-soft transition duration-500 hover:scale-[1.03] ${img.shape} ${img.position}`}
                />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {SPACES.map((s, i) => (
            <Reveal key={s.title} delay={i * 100} className="card flex items-start gap-4 p-7">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-mint text-leaf">
                <Icon name={s.icon} className="h-6 w-6" />
              </span>
              <div className="flex flex-col items-start gap-2">
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="text-sm text-primary/65">{s.text}</p>
                <Button href="#ubicacion" size="sm" className="mt-2">
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
