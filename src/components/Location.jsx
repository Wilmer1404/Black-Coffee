import { DIRECTIONS_URL, LOCATION_CARDS, LOCATION_HEADING, MAP_SRC, WHATSAPP_URL } from '../data/location'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'

export default function Location() {
  return (
    <section id="ubicacion" className="bg-sand py-10 sm:py-16 lg:py-20">
      <div className="section-wrap max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-4 sm:gap-6 lg:gap-8 items-center">
          {/* Columna Izquierda / Superior: Cabecera y tarjetas de información */}
          <div>
            <Reveal>
              <p className="eyebrow">{LOCATION_HEADING.eyebrow}</p>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-primary leading-tight">
                {LOCATION_HEADING.title}
              </h2>
              <p className="mt-2 text-xs sm:text-[13px] text-primary/75 leading-relaxed">
                {LOCATION_HEADING.description}
              </p>
            </Reveal>

            <div className="mt-4 sm:mt-5 space-y-3">
              {LOCATION_CARDS.map((c, i) => (
                <Reveal
                  key={c.title}
                  delay={i * 70}
                  className="flex items-start gap-3.5 rounded-2xl bg-white p-3.5 sm:p-4 shadow-soft ring-1 ring-primary/5 transition hover:-translate-y-0.5"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#F8EACB] text-caramel shadow-xs">
                    <Icon name={c.icon} className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="font-serif text-xs sm:text-sm font-bold text-primary">
                      {c.title}
                    </h3>
                    <p className="mt-0.5 text-[10.5px] sm:text-xs text-primary/70 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Columna Derecha / Inferior: Mapa y Botón de WhatsApp */}
          <div className="space-y-3 sm:space-y-4">
            {/* Mapa interactivo con botón flotante */}
            <Reveal className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-soft ring-1 ring-primary/10 aspect-[16/10] sm:aspect-[16/9] w-full">
              <iframe
                title="Ubicación de Black Coffee"
                src={MAP_SRC}
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                className="h-full w-full border-0"
              />
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 text-[11px] font-bold text-primary shadow-soft backdrop-blur-sm transition hover:bg-white active:scale-95"
              >
                <Icon name="pin" className="h-3.5 w-3.5 text-caramel" />
                <span>Cómo llegar con Maps</span>
              </a>
            </Reveal>

            {/* Botón ancho de WhatsApp */}
            <Reveal delay={100}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#10C65A] py-3.5 px-4 text-xs sm:text-sm font-bold text-white shadow-soft transition duration-300 hover:bg-[#0EB552] active:scale-[0.98]"
              >
                <Icon name="chat" className="h-4 w-4" strokeWidth={2.2} />
                <span>Atención Rápida por WhatsApp</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

