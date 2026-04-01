import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

export function useRevealOnScroll<T extends HTMLElement>() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const ref = useRef<T | null>(null)
  const [isRevealed, setIsRevealed] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsRevealed(true)
      return
    }

    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsRevealed(true)
          observer.disconnect()
        }
      },
      { root: null, threshold: 0.15 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [prefersReducedMotion])

  return { ref, isRevealed }
}
