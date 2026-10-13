import { PLANS, PLANS_HEADING } from '../data/plans'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function Plans() {
  return (
    <section id="planes" className="bg-sand py-16 lg:py-20">
      <div className="section-wrap">
        <SectionHeading
          align="center"
          title={PLANS_HEADING.title}
          accent={PLANS_HEADING.accent}
          description={PLANS_HEADING.description}
          className="!max-w-2xl"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal as="article" key={plan.id} delay={i * 100} className="card-soft group h-full">
              <div className={`relative aspect-[4/3.1] overflow-hidden ${plan.shape}`}>
                <img
                  src={plan.image}
                  alt={plan.title}
                  loading="lazy"
                  className={`fade-to-b-soft h-full w-full object-cover transition duration-700 group-hover:scale-105 ${plan.position}`}
                />
                <span className="absolute bottom-4 left-5 rounded-full border border-primary/10 bg-cream/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wide shadow-soft">
                  {plan.badge}
                </span>
              </div>

              <div className="flex flex-1 flex-col px-6 pb-6 pt-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-caramel">{plan.kicker}</p>
                <h3 className="mt-1.5 text-xl font-semibold leading-snug">{plan.title}</h3>
                <p className="mt-2 flex-1 text-[12px] leading-relaxed text-primary/70">{plan.text}</p>
                <p className="mt-4 flex items-center gap-2 border-t border-primary/10 pt-3 text-[10.5px] font-bold text-primary/80">
                  <Icon name={plan.feature.icon} className="h-3.5 w-3.5" />
                  {plan.feature.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
