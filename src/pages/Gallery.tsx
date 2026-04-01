import GalleryGrid from '../components/GalleryGrid'
import { galleryItems } from '../data/galleryItems'
import { siteConfig } from '../siteConfig'

export default function Gallery() {
  return (
    <div className="page">
      <section className="pageHeader">
        <h1>Gallery</h1>
        <p>
          A few examples of past projects. Want something similar? Call{' '}
          <a className="inlineLink" href={`tel:${siteConfig.phoneTel}`}>
            {siteConfig.phoneDisplay}
          </a>
          .
        </p>
      </section>

      <section className="section">
        <GalleryGrid items={galleryItems} />

        <div className="callout">
          <div className="calloutTitle">Need a quote?</div>
          <div className="calloutText">
            Call {siteConfig.phoneDisplay} or email {siteConfig.email} with a photo
            and a quick description.
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
