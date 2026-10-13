import { HERO, IMAGES } from '../data/site'
import Button from './ui/Button'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden">
      {/* Foto de fondo difuminada hacia el crema */}
      <div aria-hidden="true" className="absolute inset-y-0 right-0 -z-10 w-full lg:w-[62%]">
        <img
          src={IMAGES.espresso}
          alt=""
          className="h-full w-full object-cover object-[center_72%] opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-cream/40" />
      </div>

      <div className="section-wrap grid min-h-[560px] items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
        <Reveal>
          <p className="eyebrow">{HERO.eyebrow}</p>
          <h1 className="mt-4 text-5xl font-semibold leading-[1.04] sm:text-6xl lg:text-[4.25rem]">
            {HERO.title}
            <br />
            <em className="font-medium text-caramel">{HERO.accent}</em>
          </h1>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-primary/70">{HERO.text}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#carta">
              Ver la carta <Icon name="arrow" className="h-4 w-4" />
            </Button>
            <Button href="#experiencia" variant="outline">
              Conoce la experiencia
            </Button>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-3">
            {HERO.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-white/70 p-3 shadow-soft ring-1 ring-primary/5 backdrop-blur"
              >
                <Icon name={s.icon} className="h-4 w-4 text-caramel" />
                <dt className="mt-2 font-serif text-lg font-semibold leading-none">{s.value}</dt>
                <dd className="mt-1 text-[11px] leading-tight text-primary/60">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={150} className="relative hidden lg:block">
          <div className="ml-auto w-72 rotate-3 overflow-hidden rounded-[2rem] bg-primary p-2 shadow-soft">
            <img
              src={IMAGES.toast}
              alt="Tostadas francesas con frutas y batido"
              className="h-80 w-full rounded-[1.5rem] object-cover object-[30%_70%]"
            />
          </div>
          <div className="absolute bottom-4 left-10 max-w-[15rem] rounded-2xl bg-primary/90 p-4 text-cream shadow-soft backdrop-blur">
            <p className="font-serif text-lg leading-snug">Café de buenos momentos</p>
            <p className="mt-1 text-xs text-cream/70">Hecho para compartir, de la mañana a la noche.</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
