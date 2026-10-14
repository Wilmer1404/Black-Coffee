import { useMemo, useState } from 'react'
import { MENU_FILTERS, MENU_ITEMS, MENU_PREVIEW_COUNT } from '../data/menu'
import { formatPrice } from '../utils/format'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

function getBadgeClass(item, label) {
  if (label === 'Favorito' || item.tone === 'orange' || item.id === 'iced-toast') {
    return 'bg-orange text-white'
  }
  if (label === 'Para Llevar' || label === 'Para llevar') {
    return 'bg-[#F8EACB] text-primary'
  }
  if (label === 'Origen 100%' || item.tone === 'green') {
    return 'bg-[#70B526] text-white'
  }
  if (label === 'Ice & Sweet' || label === 'Ice') {
    return 'bg-[#49B5CA] text-white'
  }
  if (label === 'Caliente' || label === 'Cold Brew') {
    return 'bg-[#3B2211]/85 text-white'
  }
  return 'bg-white/95 text-primary'
}

function MenuCard({ item, index }) {
  const badgeLabel = item.feature?.text || item.badge
  const badgeClass = getBadgeClass(item, badgeLabel)

  return (
    <Reveal
      as="article"
      delay={index * 50}
      className="group flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl bg-white p-2 sm:p-2.5 shadow-[0_4px_20px_rgba(59,34,17,0.06)] ring-1 ring-primary/5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_-10px_rgba(59,34,17,0.18)]"
    >
      <div>
        {/* Imagen cuadrada con bordes redondeados y badge flotante */}
        <div className="relative aspect-square w-full overflow-hidden rounded-xl sm:rounded-2xl bg-sand/30">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${item.position}`}
          />
          {badgeLabel && (
            <span
              className={`absolute left-2 top-2 rounded-full px-2 py-0.5 text-[8.5px] sm:text-[9.5px] font-bold tracking-tight shadow-xs backdrop-blur-sm ${badgeClass}`}
            >
              {badgeLabel}
            </span>
          )}
        </div>

        {/* Textos del producto */}
        <div className="px-1 pt-2 sm:px-1.5 sm:pt-2.5">
          <h3 className="font-serif text-[13px] sm:text-[15.5px] font-bold leading-tight text-primary line-clamp-1">
            {item.name}
          </h3>
          <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-[11.5px] leading-tight text-primary/65 line-clamp-1 sm:line-clamp-2 min-h-[14px] sm:min-h-[28px]">
            {item.desc}
          </p>
        </div>
      </div>

      {/* Fila inferior: Precio y Botón circular de añadir */}
      <div className="mt-2.5 sm:mt-3 flex items-center justify-between px-1 pb-0.5 sm:px-1.5 sm:pb-1">
        <span className="font-serif text-xs sm:text-sm font-bold text-primary tracking-tight">
          {formatPrice(item.price)}
        </span>
        <button
          type="button"
          aria-label={`Agregar ${item.name}`}
          className="grid h-7 w-7 sm:h-8 sm:w-8 place-items-center rounded-full bg-[#F8EACB] text-primary transition duration-200 hover:bg-primary hover:text-cream active:scale-90 shadow-xs"
        >
          <Icon name="plus" className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2.4} />
        </button>
      </div>
    </Reveal>
  )
}

export default function CoffeeMenu() {
  const [filter, setFilter] = useState(MENU_FILTERS[0])
  const [showAll, setShowAll] = useState(false)

  const filtered = useMemo(
    () => (filter === 'Todos' ? MENU_ITEMS : MENU_ITEMS.filter((i) => i.category === filter)),
    [filter],
  )
  const visible = showAll ? filtered : filtered.slice(0, MENU_PREVIEW_COUNT)
  const canToggle = filtered.length > MENU_PREVIEW_COUNT

  return (
    <section id="carta" className="bg-sand py-10 sm:py-16 lg:py-20">
      <div className="section-wrap">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="CARTA DE AUTOR"
            title="Hay un café para cada"
            accent="momento"
            description="Extracciones pacientes, notas aterciopeladas y frescura artesanal."
          />

          {/* Barra de filtros: scroll táctil fluido sin barra fea en móviles, wrap en pantallas mayores */}
          <div
            className="flex max-w-full items-center gap-2 overflow-x-auto no-scrollbar py-1 shrink-0"
            role="tablist"
            aria-label="Filtrar carta"
          >
            {MENU_FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`shrink-0 rounded-full px-3.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold transition whitespace-nowrap active:scale-95 ${
                  filter === f
                    ? 'bg-primary text-cream shadow-sm'
                    : 'bg-[#F8EACB] text-primary/85 hover:bg-[#EEDCAE] hover:text-primary'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Cuadrícula responsiva: 2 columnas en móvil, 2 en tablet, 4 en desktop */}
        <div className="mt-6 sm:mt-10 grid grid-cols-2 gap-2.5 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((item, i) => (
            <MenuCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {canToggle && (
          <div className="mt-7 sm:mt-10">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              aria-expanded={showAll}
              className="flex w-full sm:w-auto sm:mx-auto min-h-[46px] items-center justify-center gap-2 rounded-2xl sm:rounded-full bg-[#F5E6BF] px-6 py-3 text-xs sm:text-sm font-bold text-primary transition duration-300 hover:bg-[#EEDCAE] hover:shadow-soft active:scale-[0.98]"
            >
              <span>{showAll ? 'Ver menos opciones' : 'Ver carta y opciones completas'}</span>
              <Icon
                name={showAll ? 'arrow' : 'book'}
                className={`h-4 w-4 transition duration-300 ${showAll ? '-rotate-90' : ''}`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

