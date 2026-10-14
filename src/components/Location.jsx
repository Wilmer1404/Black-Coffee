import { DIRECTIONS_URL, LOCATION_CARDS, MAP_SRC } from '../data/location'
import Button from './ui/Button'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function Location() {
  return (
    <section id="ubicacion" className="bg-sand py-12 sm:py-16 lg:py-20">
      <div className="section-wrap">
        <SectionHeading
          align="center"
          eyebrow="Ubicación"
          title="Tu próxima taza"
          accent="te espera."
        />

        <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-5 md:grid-cols-3">
          {LOCATION_CARDS.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 80}
              className="card p-5 sm:p-6 transition hover:-translate-y-1"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-cream shadow-xs">
                <Icon name={c.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-3.5 sm:mt-4 text-base sm:text-lg font-semibold">{c.title}</h3>
              <div className="mt-1.5 sm:mt-2 space-y-1">
                {c.lines.map((line) => (
                  <p key={line} className="text-xs sm:text-sm text-primary/70">
                    {line}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="relative mt-6 sm:mt-8 overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] shadow-soft ring-1 ring-primary/10">
          <iframe
            title="Ubicación de Black Coffee - Ice & Hot en Google Maps"
            src={MAP_SRC}
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="h-72 w-full border-0 sm:h-80 md:h-96"
          />
          <Button
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10 shadow-soft"
          >
            Cómo llegar <Icon name="arrow" className="h-3.5 w-3.5" />
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
