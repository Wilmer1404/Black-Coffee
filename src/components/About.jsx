import { ABOUT, IMAGES } from '../data/site'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function About() {
  return (
    <section id="experiencia" className="relative isolate overflow-hidden bg-cream py-16 lg:py-24">
      {/* Foto a sangre en el lado izquierdo, difuminada hacia el fondo */}
      <div aria-hidden="true" className="absolute inset-y-0 left-0 -z-10 w-full lg:w-[58%]">
        <img
          src={IMAGES.barista}
          alt=""
          loading="lazy"
          className="fade-to-r h-full w-full object-cover object-[center_35%] opacity-90 blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-transparent to-cream/60" />
      </div>

      <div className="section-wrap grid items-center gap-8 lg:grid-cols-[1fr_1.15fr]">
        {/* Tarjeta flotante con la cita */}
        <Reveal className="order-2 lg:order-1 lg:self-end lg:pb-6">
          <figure className="max-w-[16rem] rounded-2xl bg-cream/95 p-4 shadow-soft ring-1 ring-primary/5 backdrop-blur">
            <figcaption className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-caramel">
              <Icon name="quote" className="h-3.5 w-3.5" strokeWidth={2.2} />
              {ABOUT.quote.label}
            </figcaption>
            <blockquote className="mt-2 font-serif text-sm italic leading-snug">{ABOUT.quote.text}</blockquote>
          </figure>
          <div className="h-48 lg:h-72" aria-hidden="true" />
        </Reveal>

        <Reveal
          delay={100}
          className="order-1 rounded-[2rem] bg-cream/85 p-7 shadow-soft ring-1 ring-primary/5 backdrop-blur-md sm:p-10 lg:order-2"
        >
          <SectionHeading tag={ABOUT.tag} title={ABOUT.title} accent={ABOUT.accent} />

          <div className="mt-5 space-y-4">
            {ABOUT.paragraphs.map((p) => (
              <p key={p} className="text-[13px] leading-relaxed text-primary/75">
                {p}
              </p>
            ))}
          </div>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {ABOUT.features.map((f) => (
              <li key={f.title} className="rounded-2xl bg-[#FBF0C0] p-4 ring-1 ring-[#EBD9A0]">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#FBE3CF] text-[#B4561B]">
                  <Icon name={f.icon} className="h-4 w-4" />
                </span>
                <h3 className="mt-3 text-base font-semibold">{f.title}</h3>
                <p className="mt-1 text-[11.5px] leading-relaxed text-primary/70">{f.text}</p>
              </li>
            ))}
          </ul>

          <a
            href={ABOUT.link.href}
            className="group mt-6 inline-flex items-center gap-2 text-xs font-bold text-primary"
          >
            {ABOUT.link.label}
            <Icon name="arrow" className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
