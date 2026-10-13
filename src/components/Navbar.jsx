import { useState } from 'react'
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

  const linkClass = (href) =>
    `rounded-full px-3.5 py-1.5 text-[13px] font-medium transition ${
      active === href
        ? 'bg-primary text-cream'
        : 'text-primary/75 hover:bg-primary/5 hover:text-primary'
    }`

  return (
    <header
      className={`sticky top-0 z-50 transition duration-300 ${
        scrolled
          ? 'border-b border-primary/10 bg-cream/90 shadow-soft backdrop-blur'
          : 'bg-cream/60 backdrop-blur-sm'
      }`}
    >
      <nav className="section-wrap flex h-[68px] items-center justify-between" aria-label="Principal">
        <a href="#inicio" className="flex items-center gap-2.5" aria-label={`${SITE.name} - inicio`}>
          <img src={IMAGES.logo} alt="" className="h-10 w-10 rounded-full object-cover" />
          <span className="leading-none">
            <span className="block font-serif text-base font-semibold">{SITE.name}</span>
            <span className="block text-[9px] font-medium uppercase tracking-[0.2em] text-primary/60">
              {SITE.tagline}
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={linkClass(l.href)} aria-current={active === l.href ? 'true' : undefined}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button href="#cuenta" size="sm" className="!px-5">
            <Icon name="user" className="h-4 w-4" />
            Mi Cuenta
          </Button>
          <button
            type="button"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-primary/20 transition hover:bg-primary/5 lg:hidden"
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`grid overflow-hidden transition-all duration-300 lg:hidden ${
          open ? 'grid-rows-[1fr] border-t border-primary/10' : 'grid-rows-[0fr]'
        }`}
      >
        <ul className="section-wrap min-h-0 space-y-1 overflow-hidden">
          {NAV_LINKS.map((l) => (
            <li key={l.href} className="first:pt-3 last:pb-4">
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-3 py-2.5 text-sm font-medium ${
                  active === l.href ? 'bg-primary text-cream' : 'hover:bg-sand'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
