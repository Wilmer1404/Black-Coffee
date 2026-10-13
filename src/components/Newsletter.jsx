import { IMAGES, PROMO } from '../data/site'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'

/** Bloque promocional oscuro "Algo delicioso está por llegar". */
export default function Newsletter() {
  return (
    <section id="newsletter" className="section-wrap pb-16 lg:pb-24">
      <Reveal className="relative isolate overflow-hidden rounded-[2.25rem] bg-[#2E170A] text-cream shadow-soft ring-1 ring-black/40">
        {/* Resplandor cálido en la esquina superior izquierda */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,#7A431B_0%,#4A2812_38%,#2E170A_75%)]"
        />

        {/* Foto: en escritorio ocupa la derecha y se difumina hacia el marrón */}
        <img
          src={IMAGES.toast}
          alt="Tostadas francesas con fresas y smoothie en jarra artesanal"
          loading="lazy"
          className="fade-to-b-soft h-52 w-full object-cover object-[60%_65%] lg:absolute lg:inset-y-0 lg:right-0 lg:-z-10 lg:h-full lg:w-[52%] lg:[mask-image:linear-gradient(to_left,#000_45%,rgba(0,0,0,0.5)_75%,transparent_100%)] lg:[-webkit-mask-image:linear-gradient(to_left,#000_45%,rgba(0,0,0,0.5)_75%,transparent_100%)]"
        />

        <div className="px-7 pb-10 pt-4 sm:px-12 lg:max-w-[52%] lg:py-20">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-orange px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#3B1D07]">
            <Icon name={PROMO.tag.icon} className="h-3 w-3" strokeWidth={2.2} />
            {PROMO.tag.text}
          </span>

          <h2 className="mt-4 text-4xl font-semibold leading-[1.08] sm:text-5xl">
            {PROMO.title}
            <br />
            <em className="font-medium underline decoration-orange decoration-wavy decoration-1 underline-offset-[6px]">
              {PROMO.accent}
            </em>
          </h2>

          <p className="mt-5 max-w-md text-[13px] leading-relaxed text-cream/75">{PROMO.text}</p>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
            <a
              href={PROMO.cta.href}
              className="inline-flex items-center justify-center rounded-full bg-orange px-6 py-3 text-sm font-bold text-[#2E170A] transition duration-300 hover:-translate-y-0.5 hover:bg-[#FFA750] hover:shadow-[0_12px_28px_-10px_rgba(255,147,51,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-[#2E170A]"
            >
              {PROMO.cta.label}
            </a>
            <span className="inline-flex items-center gap-2 text-[11px] text-cream/70">
              <Icon name={PROMO.note.icon} className="h-4 w-4" />
              {PROMO.note.text}
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
