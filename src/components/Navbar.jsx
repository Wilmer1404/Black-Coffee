import { useEffect, useState } from 'react'
import { IMAGES, NAV_LINKS, SITE } from '../data/site'
import { useScrolled } from '../hooks/useScrolled'
import { useScrollSpy } from '../hooks/useScrollSpy'
import Button from './ui/Button'
import Icon from './ui/Icon'

const SPY_TARGETS = NAV_LINKS.map((l) => l.href)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()
  const active = useScrollSpy(SPY_TARGETS)

  // Cerrar menú con Escape o al pasar a pantalla grande
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const linkClass = (href) =>
    `rounded-full px-3.5 py-1.5 text-[13px] font-medium transition ${
      active === href
        ? 'bg-primary text-cream shadow-sm'
        : 'text-primary/75 hover:bg-primary/5 hover:text-primary'
    }`

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition duration-300 ${
        scrolled || open
          ? 'border-b border-primary/10 bg-cream/95 shadow-soft backdrop-blur-md'
          : 'border-b border-primary/5 bg-cream/85 backdrop-blur-md'
      }`}
    >
      <nav
        className="section-wrap flex h-16 sm:h-[68px] items-center justify-between gap-4"
        aria-label="Principal"
      >
        <a
          href="#inicio"
          className="flex shrink-0 items-center gap-2.5 transition-transform hover:scale-[1.02]"
          aria-label={`${SITE.name} - inicio`}
        >
          <img
            src={IMAGES.logo}
            alt=""
            className="h-9 w-9 sm:h-10 sm:w-10 rounded-full object-cover ring-1 ring-primary/10"
          />
          <span className="leading-none">
            <span className="block font-serif text-base sm:text-lg font-semibold">{SITE.name}</span>
            <span className="block text-[8.5px] sm:text-[9px] font-medium uppercase tracking-[0.2em] text-primary/60">
              {SITE.tagline}
            </span>
          </span>
        </a>

        {/* Enlaces de escritorio / laptop */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={linkClass(l.href)}
                aria-current={active === l.href ? 'true' : undefined}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Acciones derecha: botón en laptop/desktop, hamburguesa en tablet y móvil */}
        <div className="flex items-center gap-3">
          <Button
            href="#carta"
            size="sm"
            className="hidden lg:inline-flex shadow-sm hover:shadow-soft"
          >
            Ver carta
          </Button>

          <button
            type="button"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-2xl bg-[#F4E9CD] text-primary transition hover:bg-[#ebdcb4] active:scale-95 lg:hidden shadow-xs"
          >
            <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Menú desplegable para móviles y tablets */}
      <div
        id="mobile-menu"
        className={`grid overflow-hidden transition-all duration-300 lg:hidden ${
          open
            ? 'grid-rows-[1fr] border-t border-primary/10 bg-cream/98 shadow-lg backdrop-blur-md max-h-[calc(100vh-4.5rem)] overflow-y-auto'
            : 'grid-rows-[0fr]'
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <ul className="section-wrap space-y-1 pt-3 pb-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-3.5 py-2.5 text-sm font-medium transition ${
                    active === l.href
                      ? 'bg-primary text-cream shadow-sm'
                      : 'text-primary/80 hover:bg-sand'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="section-wrap border-t border-primary/10 pt-3 pb-4">
            <Button
              href="#carta"
              size="sm"
              className="w-full text-center"
              onClick={() => setOpen(false)}
            >
              Ver carta completa
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
