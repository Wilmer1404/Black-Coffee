import { HERO, IMAGES } from '../data/site'
import Button from './ui/Button'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden">
      {/* Foto de fondo difuminada hacia el crema */}
      <div aria-hidden="true" className="absolute inset-y-0 right-0 -z-10 w-full md:w-[65%] lg:w-[60%]">
        <img
          src={IMAGES.espresso}
          alt=""
          className="h-full w-full object-cover object-[center_72%] opacity-40 sm:opacity-55 lg:opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/80 to-transparent sm:via-cream/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-cream/50 sm:to-cream/40" />
      </div>

      <div className="section-wrap grid min-h-[480px] sm:min-h-[560px] items-center gap-8 md:grid-cols-2 md:gap-8 lg:gap-12 py-10 sm:py-14 lg:py-20">
        <Reveal>
          <p className="eyebrow">{HERO.eyebrow}</p>
          <h1 className="mt-3 sm:mt-4 text-3xl sm:text-5xl md:text-5xl lg:text-[4.25rem] font-semibold leading-[1.08] sm:leading-[1.04]">
            {HERO.title}
            <br />
            <em className="font-medium text-caramel">{HERO.accent}</em>
          </h1>
          <p className="mt-4 sm:mt-6 max-w-md text-sm sm:text-[15px] leading-relaxed text-primary/75">
            {HERO.text}
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
            <Button href="#carta" className="w-full sm:w-auto">
              Ver la carta <Icon name="arrow" className="h-4 w-4" />
            </Button>
            <Button href="#experiencia" variant="outline" className="w-full sm:w-auto">
              Conoce la experiencia
            </Button>
          </div>

          <dl className="mt-8 sm:mt-10 grid max-w-md grid-cols-3 gap-2 sm:gap-3">
            {HERO.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl sm:rounded-2xl bg-white/80 p-2.5 sm:p-3 shadow-soft ring-1 ring-primary/5 backdrop-blur transition hover:-translate-y-0.5"
              >
                <Icon name={s.icon} className="h-4 w-4 text-caramel" />
                <dt className="mt-1.5 sm:mt-2 font-serif text-base sm:text-lg font-semibold leading-none">
                  {s.value}
                </dt>
                <dd className="mt-1 text-[10px] sm:text-[11px] leading-tight text-primary/60">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Tarjeta destacada visible en tablet (md) y laptop/desktop (lg) */}
        <Reveal delay={150} className="relative hidden md:block">
          <div className="ml-auto w-60 sm:w-64 lg:w-72 rotate-2 lg:rotate-3 overflow-hidden rounded-[2rem] bg-primary p-2 shadow-soft transition duration-500 hover:rotate-0">
            <img
              src={IMAGES.toast}
              alt="Tostadas francesas con frutas y batido"
              className="h-72 lg:h-80 w-full rounded-[1.5rem] object-cover object-[30%_70%]"
            />
          </div>
          <div className="absolute -bottom-2 left-2 lg:bottom-4 lg:left-8 max-w-[13.5rem] lg:max-w-[15rem] rounded-2xl bg-primary/95 p-3.5 lg:p-4 text-cream shadow-soft backdrop-blur ring-1 ring-white/10">
            <p className="font-serif text-base lg:text-lg leading-snug">
              {HERO.card?.title || 'Pausa & Serenidad'}
            </p>
            <p className="mt-1 text-[11px] lg:text-xs text-cream/75">
              {HERO.card?.subtitle || 'El ritmo tranquilo que tu día merece, de 8 am a 11:30 pm.'}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
