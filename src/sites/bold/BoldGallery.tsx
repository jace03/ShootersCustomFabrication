import { useMemo } from 'react'
import GalleryGrid from '../../components/GalleryGrid'
import { galleryItems } from '../../data/galleryItems'
import { siteConfig } from '../../siteConfig'
import { shuffled } from '../../utils/random'

export default function BoldGallery() {
  const items = useMemo(() => shuffled(galleryItems), [])

  return (
    <div className="page pageBold">
      <section className="pageHeader">
        <h1>Gallery</h1>
        <p>
          Want work like this? Call{' '}
          <a className="inlineLink" href={`tel:${siteConfig.phoneTel}`}>
            {siteConfig.phoneDisplay}
          </a>
          .
        </p>
      </section>

      <section className="section">
        <GalleryGrid items={items} />

        <div className="callout">
          <div className="calloutTitle">Let’s build yours</div>
          <div className="calloutText">
            Call {siteConfig.phoneDisplay} or email {siteConfig.email} to get a
            quote.
          </div>
          <div className="calloutActions">
            <a className="button buttonPrimary" href={`tel:${siteConfig.phoneTel}`}>
              Call now
            </a>
            <a className="button buttonSecondary" href={`mailto:${siteConfig.email}`}>
              Email
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
