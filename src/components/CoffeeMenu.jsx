import { useMemo, useState } from 'react'
import { MENU_FILTERS, MENU_ITEMS, MENU_PREVIEW_COUNT } from '../data/menu'
import { formatPrice } from '../utils/format'
import Button from './ui/Button'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

function MenuCard({ item, index }) {
  return (
    <Reveal as="article" delay={index * 80} className="card group h-full">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${item.position}`}
        />
        <span className="absolute right-3 top-3 rounded-full bg-leaf px-3 py-1 text-xs font-bold text-white shadow-soft">
          {formatPrice(item.price)}
        </span>
      </div>
      <div className="p-4">
        <span className="rounded-full bg-mint px-2.5 py-1 text-[10px] font-semibold text-leaf">
          {item.category}
        </span>
        <h3 className="mt-3 text-lg font-semibold leading-snug">{item.name}</h3>
        <p className="mt-1 text-xs leading-relaxed text-primary/65">{item.desc}</p>
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
    <section id="carta" className="bg-sand/60 py-16 lg:py-20">
      <div className="section-wrap">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Nuestra carta"
            title="Hay un café para cada"
            accent="momento."
          />
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrar carta">
            {MENU_FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                  filter === f
                    ? 'bg-primary text-cream shadow-soft'
                    : 'bg-white/70 text-primary/70 ring-1 ring-primary/10 hover:bg-white'
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
