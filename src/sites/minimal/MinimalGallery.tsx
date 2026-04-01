import GalleryGrid from '../../components/GalleryGrid'
import { galleryItems } from '../../data/galleryItems'
import { siteConfig } from '../../siteConfig'

export default function MinimalGallery() {
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
        <GalleryGrid items={galleryItems.slice(0, 9)} />
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
