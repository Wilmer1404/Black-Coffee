import { useState } from 'react'
import { IMAGES, NEWSLETTER } from '../data/site'
import Button from './ui/Button'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | error | success

  const onSubmit = (e) => {
    e.preventDefault()
    if (!EMAIL_RE.test(email.trim())) {
      setStatus('error')
      return
    }
    // TODO: conectar con el servicio de email marketing (Mailchimp, Resend, etc.)
    setStatus('success')
    setEmail('')
  }

  return (
    <section id="newsletter" className="section-wrap pb-16 lg:pb-20">
      <Reveal className="relative overflow-hidden rounded-[2rem] bg-primary text-cream shadow-soft">
        <img
          src={IMAGES.toast}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-y-0 right-0 hidden h-full w-3/5 object-cover object-[60%_70%] opacity-90 lg:block"
        />
        <div aria-hidden="true" className="absolute inset-0 hidden bg-gradient-to-r from-primary via-primary/85 to-transparent lg:block" />

        <div className="relative max-w-lg p-8 sm:p-12 lg:py-16">
          <SectionHeading
            light
            title={NEWSLETTER.title}
            accent={NEWSLETTER.accent}
            description={NEWSLETTER.text}
          />

          {status === 'success' ? (
            <p role="status" className="mt-6 flex items-center gap-2 rounded-2xl bg-white/10 px-5 py-3 text-sm">
              <Icon name="coffee" className="h-4 w-4 text-[#E2A15F]" />
              ¡Gracias! Pronto sabrás de nosotros.
            </p>
          ) : (
            <form onSubmit={onSubmit} noValidate className="mt-6">
              <div className="flex flex-col gap-3 sm:flex-row">
                <label htmlFor="newsletter-email" className="sr-only">
                  Correo electrónico
                </label>
                <div className="relative flex-1">
                  <Icon name="mail" className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary/50" />
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (status === 'error') setStatus('idle')
                    }}
                    aria-invalid={status === 'error'}
                    aria-describedby={status === 'error' ? 'newsletter-error' : undefined}
                    placeholder="Tu correo electrónico"
                    className="w-full rounded-full border-0 bg-cream py-3 pl-11 pr-5 text-sm text-primary placeholder:text-primary/45 focus:outline-none focus:ring-2 focus:ring-caramel"
                  />
                </div>
                <Button type="submit" variant="accent" className="shrink-0">
                  Suscribirme
                </Button>
              </div>
              {status === 'error' && (
                <p id="newsletter-error" role="alert" className="mt-2 pl-4 text-xs text-[#F3B58A]">
                  Ingresa un correo válido.
                </p>
              )}
            </form>
          )}
        </div>
      </Reveal>
    </section>
  )
}
