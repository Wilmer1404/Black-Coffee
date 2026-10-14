import { FOOTER_DATA } from '../data/location'
import { SITE } from '../data/site'
import Icon from './ui/Icon'

export default function Footer() {
  return (
    <footer className="rounded-t-[2.5rem] sm:rounded-t-[3.5rem] bg-[#FBF0C0] py-10 sm:py-14 text-primary shadow-soft">
      <div className="section-wrap max-w-2xl text-center">
        {/* Logo / Badge central */}
        <div className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full bg-primary text-cream mx-auto shadow-xs">
          <Icon name="coffee" className="h-5 w-5" />
        </div>

        {/* Nombre de la marca */}
        <h3 className="mt-2.5 font-serif text-xl sm:text-2xl font-bold text-primary">
          {SITE.name}
        </h3>

        {/* Tagline / Manifiesto */}
        <p className="mt-1.5 text-[11px] sm:text-xs text-primary/70 leading-relaxed max-w-sm sm:max-w-md mx-auto">
          {FOOTER_DATA.tagline}
        </p>

        {/* Enlaces de navegación con separador de viñeta */}
        <nav
          className="mt-4 flex items-center justify-center gap-2.5 sm:gap-3 text-xs font-semibold text-primary/80 flex-wrap"
          aria-label="Pie de página"
        >
          {FOOTER_DATA.links.map((link, idx) => (
            <span key={link.label} className="inline-flex items-center gap-2.5 sm:gap-3">
              <a href={link.href} className="hover:text-caramel transition">
                {link.label}
              </a>
              {idx < FOOTER_DATA.links.length - 1 && (
                <span className="text-primary/30 select-none">•</span>
              )}
            </span>
          ))}
        </nav>

        {/* Botones circulares de redes y contacto */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <a
            href={SITE.social.find((s) => s.icon === 'instagram')?.href || '#'}
            aria-label="Instagram de Black Coffee"
            className="grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full bg-cream/90 hover:bg-white text-primary transition shadow-xs hover:-translate-y-0.5 active:scale-95"
          >
            <Icon name="instagram" className="h-4 w-4" />
          </a>
          <a
            href="#ubicacion"
            aria-label="Horarios de atención"
            className="grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full bg-cream/90 hover:bg-white text-primary transition shadow-xs hover:-translate-y-0.5 active:scale-95"
          >
            <Icon name="clock" className="h-4 w-4" />
          </a>
          <a
            href={SITE.phone ? `tel:${SITE.phone}` : '#'}
            aria-label="Llamar a Black Coffee"
            className="grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full bg-cream/90 hover:bg-white text-primary transition shadow-xs hover:-translate-y-0.5 active:scale-95"
          >
            <Icon name="phone" className="h-4 w-4" />
          </a>
        </div>

        {/* Dirección y Derechos reservados */}
        <div className="mt-5 text-[10px] sm:text-[11px] text-primary/60 space-y-1">
          <p>{FOOTER_DATA.address}</p>
          <p>{FOOTER_DATA.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

