import { ABOUT, IMAGES } from '../data/site'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function About() {
  return (
    <section id="experiencia" className="relative isolate overflow-hidden bg-cream py-12 sm:py-16 lg:py-24">
      {/* Foto a sangre en el lado izquierdo solo para pantallas grandes (laptop / desktop) */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute inset-y-0 left-0 -z-10 w-[56%]"
      >
        <img
          src={IMAGES.barista}
          alt=""
          loading="lazy"
          className="fade-to-r h-full w-full object-cover object-[center_35%] opacity-90 blur-[0.5px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-transparent to-cream/60" />
      </div>

      <div className="section-wrap grid items-center gap-6 sm:gap-8 lg:grid-cols-[1fr_1.15fr]">
        {/* En móvil y tablet: tarjeta fotográfica con la cita integrada */}
        <Reveal className="lg:hidden">
          <div className="relative overflow-hidden rounded-[2.25rem] bg-[#3B2211] p-2 shadow-soft">
            <img
              src={IMAGES.barista}
              alt="Barista cuidando el aroma del café de especialidad"
              loading="lazy"
              className="h-64 sm:h-72 w-full rounded-[1.75rem] object-cover object-[center_35%]"
            />
            <figure className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs rounded-2xl bg-cream/95 p-3.5 sm:p-4 shadow-soft ring-1 ring-primary/5 backdrop-blur-md">
              <figcaption className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-caramel">
                <Icon name="quote" className="h-3.5 w-3.5" strokeWidth={2.2} />
                {ABOUT.quote.label}
              </figcaption>
              <blockquote className="mt-1 font-serif text-xs sm:text-sm italic leading-snug text-primary">
                {ABOUT.quote.text}
              </blockquote>
            </figure>
          </div>
        </Reveal>

        {/* En desktop/laptop: tarjeta flotante con la cita que acompaña la foto de fondo */}
        <Reveal className="hidden lg:block self-end pb-8">
          <figure className="max-w-[17rem] rounded-2xl bg-cream/95 p-5 shadow-soft ring-1 ring-primary/5 backdrop-blur-md">
            <figcaption className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-caramel">
              <Icon name="quote" className="h-3.5 w-3.5" strokeWidth={2.2} />
              {ABOUT.quote.label}
            </figcaption>
            <blockquote className="mt-2 font-serif text-sm italic leading-snug">
              {ABOUT.quote.text}
            </blockquote>
          </figure>
          <div className="h-44" aria-hidden="true" />
        </Reveal>

        {/* Tarjeta de contenido y manifiesto */}
        <Reveal
          delay={100}
          className="card-soft p-6 sm:p-8 lg:p-10"
        >
          <SectionHeading tag={ABOUT.tag} title={ABOUT.title} accent={ABOUT.accent} />

          <div className="mt-4 sm:mt-5 space-y-3 sm:space-y-4">
            {ABOUT.paragraphs.map((p) => (
              <p key={p} className="text-xs sm:text-[13px] leading-relaxed text-primary/75">
                {p}
              </p>
            ))}
          </div>

          <ul className="mt-5 sm:mt-6 grid gap-3 sm:grid-cols-2">
            {ABOUT.features.map((f) => (
              <li
                key={f.title}
                className="rounded-xl sm:rounded-2xl bg-[#FBF0C0] p-3.5 sm:p-4 ring-1 ring-[#EBD9A0] transition hover:-translate-y-0.5"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#FBE3CF] text-[#B4561B]">
                  <Icon name={f.icon} className="h-4 w-4" />
                </span>
                <h3 className="mt-2.5 sm:mt-3 text-sm sm:text-base font-semibold">{f.title}</h3>
                <p className="mt-1 text-[11px] sm:text-[11.5px] leading-relaxed text-primary/70">
                  {f.text}
                </p>
              </li>
            ))}
          </ul>

          <a
            href={ABOUT.link.href}
            className="group mt-5 sm:mt-6 inline-flex items-center gap-2 text-xs font-bold text-primary transition hover:text-caramel"
          >
            {ABOUT.link.label}
            <Icon name="arrow" className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
