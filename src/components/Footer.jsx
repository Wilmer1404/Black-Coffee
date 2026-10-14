import { FOOTER_COLUMNS } from '../data/location'
import { IMAGES, SITE } from '../data/site'
import Icon from './ui/Icon'

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-primary text-cream">
      <div className="section-wrap grid gap-8 sm:gap-10 py-10 sm:py-14 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div className="sm:col-span-2 lg:col-span-1">
          <a href="#inicio" className="inline-flex items-center gap-3 transition-transform hover:scale-[1.02]">
            <img src={IMAGES.logo} alt="" className="h-10 w-10 sm:h-11 sm:w-11 rounded-full ring-1 ring-white/10" />
            <span className="font-serif text-lg sm:text-xl font-semibold">{SITE.name}</span>
          </a>
          <p className="mt-3.5 sm:mt-4 max-w-sm text-xs sm:text-sm leading-relaxed text-cream/70">
            {SITE.description}
          </p>
        </div>

        {FOOTER_COLUMNS.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#E2A15F]">
              {col.title}
            </h3>
            <ul className="mt-3 sm:mt-4 space-y-2">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="inline-block py-0.5 text-xs sm:text-sm text-cream/75 transition hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#E2A15F]">
            Síguenos
          </h3>
          <ul className="mt-3 sm:mt-4 flex gap-2.5">
            {SITE.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full bg-white/10 transition hover:-translate-y-0.5 hover:bg-caramel active:scale-95"
                >
                  <Icon name={s.icon} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="section-wrap py-4 sm:py-5 text-[11px] sm:text-xs text-cream/55 text-center sm:text-left">
          © {CURRENT_YEAR} {SITE.name} · {SITE.tagline}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
