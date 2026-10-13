import { useEffect, useRef, useState } from 'react'

/** `true` si el navegador no puede (o no debe) animar: sin IO o con reduced-motion. */
const shouldSkipAnimation = () =>
  typeof window === 'undefined' ||
  !('IntersectionObserver' in window) ||
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Marca un elemento como visible la primera vez que entra al viewport.
 * Respeta `prefers-reduced-motion` mostrando el contenido de inmediato.
 */
export function useInView({ threshold = 0.15, rootMargin = '0px 0px -8% 0px' } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(shouldSkipAnimation)

  useEffect(() => {
    const node = ref.current
    if (!node || inView) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [inView, threshold, rootMargin])

  return [ref, inView]
}
