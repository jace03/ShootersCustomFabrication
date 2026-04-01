import { useMemo, useState, type CSSProperties } from 'react'
import type { GalleryItem } from '../data/galleryItems'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

type Props = {
  items: GalleryItem[]
  className?: string
}

function GalleryImage({ src, alt, index }: GalleryItem & { index: number }) {
  const [isLoaded, setIsLoaded] = useState(false)

  const style = useMemo(() => {
    return { '--loaded': isLoaded ? 1 : 0, '--i': index } as CSSProperties
  }, [index, isLoaded])

  return (
    <figure className={isLoaded ? 'galleryFigure galleryFigureLoaded' : 'galleryFigure'} style={style}>
      <div className="imgShell" aria-hidden="true" />
      <img
        className="galleryImg"
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
      />
    </figure>
  )
}

export default function GalleryGrid({ items, className }: Props) {
  const prefersReducedMotion = usePrefersReducedMotion()

  const gridClassName = useMemo(() => {
    const base = prefersReducedMotion ? 'galleryGrid' : 'galleryGrid galleryGridAnimate'
    return className ? `${base} ${className}` : base
  }, [className, prefersReducedMotion])

  return (
    <div className={gridClassName}>
      {items.map((item, idx) => (
        <GalleryImage
          key={`${item.alt}-${idx}`}
          src={item.src}
          alt={item.alt}
          index={idx}
        />
      ))}
    </div>
  )
}
