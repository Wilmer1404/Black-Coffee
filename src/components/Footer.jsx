import { FOOTER_COLUMNS } from '../data/location'
import { IMAGES, SITE } from '../data/site'
import Icon from './ui/Icon'

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-primary text-cream">
      <div className="section-wrap grid gap-10 py-14 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <a href="#inicio" className="flex items-center gap-3">
            <img src={IMAGES.logo} alt="" className="h-11 w-11 rounded-full" />
            <span className="font-serif text-xl font-semibold">{SITE.name}</span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/65">{SITE.description}</p>
        </div>

        {FOOTER_COLUMNS.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#E2A15F]">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-2">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-cream/70 transition hover:text-white">
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
          <ul className="mt-4 flex gap-2">
            {SITE.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:-translate-y-0.5 hover:bg-caramel"
                >
                  <Icon name={s.icon} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="section-wrap py-5 text-xs text-cream/50">
          © {CURRENT_YEAR} {SITE.name} · {SITE.tagline}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
