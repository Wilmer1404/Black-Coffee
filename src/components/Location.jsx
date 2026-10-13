import { DIRECTIONS_URL, LOCATION_CARDS, MAP_SRC } from '../data/location'
import Button from './ui/Button'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function Location() {
  return (
    <section id="ubicacion" className="bg-sand py-16 lg:py-20">
      <div className="section-wrap">
        <SectionHeading
          align="center"
          eyebrow="Ubicación"
          title="Tu próxima taza"
          accent="te espera."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {LOCATION_CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 100} className="card p-6">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-cream">
                <Icon name={c.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{c.title}</h3>
              <div className="mt-2 space-y-1">
                {c.lines.map((line) => (
                  <p key={line} className="text-sm text-primary/70">
                    {line}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="relative mt-6 overflow-hidden rounded-[2rem] shadow-soft ring-1 ring-primary/10">
          <iframe
            title="Mapa de ubicación de Black Coffee"
            src={MAP_SRC}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-80 w-full border-0 sm:h-96"
          />
          <Button
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            className="absolute bottom-4 right-4 shadow-soft"
          >
            Cómo llegar <Icon name="arrow" className="h-3.5 w-3.5" />
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
