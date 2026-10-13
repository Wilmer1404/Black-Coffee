import { EVENTS } from '../data/events'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function Events() {
  return (
    <section id="eventos" className="section-wrap py-16 lg:py-20">
      <SectionHeading eyebrow="Eventos" title="Siempre hay algo por" accent="compartir." />

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {EVENTS.map((e, i) => (
          <Reveal as="article" key={e.id} delay={i * 100} className="card flex h-full flex-col bg-mint/70 p-6">
            <span className="self-start rounded-full bg-leaf px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
              {e.tag}
            </span>
            <h3 className="mt-4 text-xl font-semibold">{e.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-primary/70">{e.text}</p>

            <ul className="mt-5 space-y-1.5 border-t border-primary/10 pt-4 text-xs text-primary/70">
              <li className="flex items-center gap-2">
                <Icon name="calendar" className="h-3.5 w-3.5 text-leaf" /> {e.schedule}
              </li>
              <li className="flex items-center gap-2">
                <Icon name="pin" className="h-3.5 w-3.5 text-leaf" /> {e.place}
              </li>
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
