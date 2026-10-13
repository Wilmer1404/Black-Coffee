import { useMemo, useState } from 'react'
import { MENU_FILTERS, MENU_ITEMS, MENU_PREVIEW_COUNT } from '../data/menu'
import { formatPrice } from '../utils/format'
import Button from './ui/Button'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

function MenuCard({ item, index }) {
  const badgeTone =
    item.tone === 'green' ? 'bg-[#A6E07E] text-[#1F4A0E]' : 'bg-white/90 text-primary'

  return (
    <Reveal as="article" delay={index * 80} className="card-soft group h-full p-2">
      {/* Imagen con difuminado inferior hacia el color de la tarjeta */}
      <div className="relative aspect-[4/4.2] overflow-hidden rounded-[1.6rem_1.6rem_2.4rem_1.6rem]">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className={`fade-to-b h-full w-full object-cover transition duration-700 group-hover:scale-105 ${item.position}`}
        />
        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide shadow-soft backdrop-blur ${badgeTone}`}
        >
          {item.badge}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-3 pb-3 pt-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[1.05rem] font-semibold leading-tight">{item.name}</h3>
          <span className="shrink-0 rounded-full bg-[#FBE3CF] px-2.5 py-1 text-[11px] font-bold leading-tight text-[#B4561B]">
            {formatPrice(item.price)}
          </span>
        </div>
        <p className="mt-2 flex-1 text-[11.5px] leading-relaxed text-primary/65">{item.desc}</p>

        <div className="mt-4 flex items-center justify-between border-t border-primary/10 pt-3">
          <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-primary/80">
            <Icon name={item.feature.icon} className="h-3.5 w-3.5" />
            {item.feature.text}
          </span>
          <button
            type="button"
            aria-label={`Agregar ${item.name}`}
            className="grid h-8 w-8 place-items-center rounded-full bg-[#F8E7A8] text-primary transition hover:bg-primary hover:text-cream"
          >
            <Icon name="plus" className="h-4 w-4" strokeWidth={2.2} />
          </button>
        </div>
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
    <section id="carta" className="bg-sand py-16 lg:py-20">
      <div className="section-wrap">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            tag={{ icon: 'star', text: 'Selección barista' }}
            title="Hay un café para cada"
            accent="momento."
            description="Descubre sabores que hacen especial cada visita, preparados al punto exacto de balance aromático."
          />
          <div
            className="flex flex-wrap gap-1.5 rounded-[1.75rem] border border-[#EBD9A0] bg-cream/80 p-2 md:max-w-sm"
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
                className={`rounded-full px-4 py-2 text-[11px] font-bold transition ${
                  filter === f ? 'bg-primary text-cream shadow-soft' : 'text-primary/75 hover:bg-primary/5'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((item, i) => (
            <MenuCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {canToggle && (
          <div className="mt-10 text-center">
            <Button variant="outline" onClick={() => setShowAll((v) => !v)} aria-expanded={showAll}>
              {showAll ? 'Ver menos' : 'Ver carta completa'}
              <Icon name="arrow" className={`h-4 w-4 transition ${showAll ? '-rotate-90' : 'rotate-90'}`} />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
