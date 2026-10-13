import { PLANS } from '../data/plans'
import Button from './ui/Button'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function Plans() {
  return (
    <section id="planes" className="section-wrap py-16 lg:py-20">
      <SectionHeading
        align="center"
        eyebrow="Planes"
        title="Tu próximo plan"
        accent="está aquí."
        description="Elige cómo quieres vivir Black Coffee: solo, en pareja o con amigos."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {PLANS.map((plan, i) => (
          <Reveal as="article" key={plan.id} delay={i * 100} className="card group flex h-full flex-col">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={plan.image}
                alt={plan.title}
                loading="lazy"
                className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${plan.position}`}
              />
            </div>
            <div className="flex flex-1 flex-col items-start p-5">
              <h3 className="text-lg font-semibold">{plan.title}</h3>
              <p className="mt-1 flex-1 text-xs leading-relaxed text-primary/65">{plan.text}</p>
              <Button href="#ubicacion" size="sm" className="mt-4">
                {plan.cta}
              </Button>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
