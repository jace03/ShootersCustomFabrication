import { useMemo } from 'react'
import GalleryGrid from '../../components/GalleryGrid'
import { galleryItems } from '../../data/galleryItems'
import { siteConfig } from '../../siteConfig'
import { shuffled } from '../../utils/random'

export default function MinimalGallery() {
  const items = useMemo(() => shuffled(galleryItems).slice(0, 9), [])

  return (
    <div className="page pageMinimal">
      <section className="pageHeader">
        <h1>Gallery</h1>
        <p>
          Want something similar? Call{' '}
          <a className="inlineLink" href={`tel:${siteConfig.phoneTel}`}>
            {siteConfig.phoneDisplay}
          </a>
          .
        </p>
      </section>

      <section className="section">
        <GalleryGrid items={items} />
      </section>

      <section className="section">
        <div className="callout">
          <div className="calloutTitle">Quote</div>
          <div className="calloutText">
            Call {siteConfig.phoneDisplay} • Email {siteConfig.email}
          </div>
        </div>
      </section>
    </div>
  )
}
