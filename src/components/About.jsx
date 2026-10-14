import { ABOUT, IMAGES } from '../data/site'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'

export default function About() {
  return (
    <section id="experiencia" className="relative isolate overflow-hidden bg-cream py-10 sm:py-16 lg:py-24">
      <div className="section-wrap grid items-center gap-6 sm:gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
        {/* Tarjeta fotográfica con badge y titular integrado sobre la imagen */}
        <Reveal className="h-full">
          <div className="relative aspect-[4/2.6] sm:aspect-[4/2.5] lg:aspect-[4/4.5] w-full overflow-hidden rounded-[1.75rem] sm:rounded-[2.25rem] bg-[#3B2211] shadow-soft">
            <img
              src={IMAGES.barista}
              alt="Barista cuidando el aroma del café de especialidad"
              loading="lazy"
              className="h-full w-full object-cover object-[center_35%]"
            />
            {/* Degradado inferior para legibilidad perfecta del texto */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"
              aria-hidden="true"
            />

            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 lg:p-8">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange px-3 py-1 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[0.14em] text-white shadow-xs">
                {ABOUT.tag.text}
              </span>
              <h3 className="mt-2 font-serif text-base sm:text-xl lg:text-2xl font-bold leading-snug text-white">
                {ABOUT.heroSubtitle}
              </h3>
            </div>
          </div>
        </Reveal>

        {/* Bloque de contenido: Titular, párrafos, tarjetas en 2 columnas y cita */}
        <Reveal delay={100} className="flex flex-col">
          <h2 className="text-2xl sm:text-3xl lg:text-[2.65rem] font-serif font-semibold leading-[1.15] sm:leading-[1.12] text-primary">
            {ABOUT.title}{' '}
            <em className="font-medium text-caramel">{ABOUT.accent}</em>
          </h2>

          <div className="mt-3 sm:mt-4 space-y-2.5">
            {ABOUT.paragraphs.map((p) => (
              <p key={p} className="text-xs sm:text-[13px] leading-relaxed text-primary/75">
                {p}
              </p>
            ))}
          </div>

          {/* Tarjetas en 2 columnas en móvil y escritorio */}
          <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4">
            {ABOUT.features.map((f) => (
              <div
                key={f.title}
                className="flex flex-col justify-between rounded-2xl bg-[#FBF0C0] p-3.5 sm:p-4 ring-1 ring-[#EBD9A0] transition hover:-translate-y-0.5"
              >
                <div>
                  <span
                    className={`grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-full shadow-xs ${f.iconBg}`}
                  >
                    <Icon name={f.icon} className="h-4 w-4" />
                  </span>
                  <h3 className="mt-2.5 font-serif text-xs sm:text-sm font-bold text-primary leading-tight">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-[10px] sm:text-[11.5px] leading-relaxed text-primary/70">
                    {f.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Tarjeta de cita inferior con comillas */}
          <figure className="relative mt-4 overflow-hidden rounded-2xl bg-white p-3.5 sm:p-4 shadow-soft ring-1 ring-primary/5">
            <span
              className="absolute -bottom-4 right-2 font-serif text-6xl sm:text-7xl font-bold text-[#EBD9A0]/35 select-none pointer-events-none"
              aria-hidden="true"
            >
              ”
            </span>
            <div className="relative z-10 flex items-start gap-2">
              <span className="font-serif text-base sm:text-lg font-bold text-caramel leading-none select-none">
                “
              </span>
              <blockquote className="font-serif text-[11.5px] sm:text-xs italic font-semibold leading-snug text-primary">
                {ABOUT.quote.text}
              </blockquote>
            </div>
          </figure>

          {ABOUT.link && (
            <a
              href={ABOUT.link.href}
              className="group mt-4 inline-flex items-center gap-2 text-xs font-bold text-primary transition hover:text-caramel self-start"
            >
              {ABOUT.link.label}
              <Icon name="arrow" className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
            </a>
          )}
        </Reveal>
      </div>
    </section>
  )
}
