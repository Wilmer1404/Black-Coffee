import { ABOUT, IMAGES } from '../data/site'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function About() {
  return (
    <section id="experiencia" className="section-wrap py-16 lg:py-20">
      <div className="grid overflow-hidden rounded-[2rem] bg-white/60 shadow-soft ring-1 ring-primary/5 lg:grid-cols-2">
        <Reveal className="relative min-h-[340px]">
          <img
            src={IMAGES.barista}
            alt="Barista disfrutando el aroma de los granos de café"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
          />
          <div aria-hidden="true" className="absolute inset-0 hidden bg-gradient-to-r from-transparent via-transparent to-white/70 lg:block" />
        </Reveal>

        <div className="p-8 sm:p-12">
          <SectionHeading eyebrow={ABOUT.eyebrow} title={ABOUT.title} accent={ABOUT.accent} />
          <Reveal delay={100}>
            {ABOUT.paragraphs.map((p) => (
              <p key={p} className="mt-4 text-sm leading-relaxed text-primary/70">
                {p}
              </p>
            ))}
          </Reveal>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {ABOUT.features.map((f, i) => (
              <Reveal as="li" key={f.title} delay={150 + i * 100} className="rounded-2xl bg-sand/70 p-4 ring-1 ring-primary/5">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-cream">
                  <Icon name={f.icon} className="h-4 w-4" />
                </span>
                <h3 className="mt-3 text-base font-semibold">{f.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-primary/65">{f.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
