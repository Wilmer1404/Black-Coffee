import { useEffect, useState } from 'react'

/**
 * Devuelve el href (`#id`) de la sección que está actualmente en pantalla.
 * @param {string[]} hrefs lista de anclas, p. ej. ['#carta', '#planes']
 */
export function useScrollSpy(hrefs) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = hrefs
      .map((href) => document.querySelector(href))
      .filter(Boolean)
    if (!sections.length || !('IntersectionObserver' in window)) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [hrefs])

  return active
}
