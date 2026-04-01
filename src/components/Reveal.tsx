import type { PropsWithChildren } from 'react'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

type Props = PropsWithChildren<{
  className?: string
}>

export default function Reveal({ className, children }: Props) {
  const { ref, isRevealed } = useRevealOnScroll<HTMLDivElement>()

  const revealClassName = `${className ? `${className} ` : ''}${
    isRevealed ? 'reveal revealIn' : 'reveal'
  }`

  return (
    <div ref={ref} className={revealClassName}>
      {children}
    </div>
  )
}
