import { siteConfig } from '../../siteConfig'

export default function MinimalHome() {
  return (
    <div className="page pageMinimal">
      <section className="minimalHeader">
        <h1>Welding & fabrication</h1>
        <p>
          Mobile welding, repairs, and custom fabrication. Call{' '}
          <a className="inlineLink" href={`tel:${siteConfig.phoneTel}`}>
            {siteConfig.phoneDisplay}
          </a>{' '}
          to get started.
        </p>

        <div className="sectionActions">
          <a className="button buttonPrimary" href={`tel:${siteConfig.phoneTel}`}>
            Call now
          </a>
          <a className="button buttonSecondary" href={`mailto:${siteConfig.email}`}>
            Email
          </a>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <h2>Services at a glance</h2>
          <p>Simple list for fast scanning.</p>
        </div>

        <div className="minimalList">
          <div className="minimalRow">Mobile welding (on-site)</div>
          <div className="minimalRow">Custom fabrication</div>
          <div className="minimalRow">Trailer & equipment repairs</div>
          <div className="minimalRow">Gates, rails, fence work</div>
          <div className="minimalRow">Cut, prep, grind, finish</div>
        </div>
      </section>

      <section className="section">
        <div className="callout">
          <div className="calloutTitle">Quick quote</div>
          <div className="calloutText">
            Send a photo + description to {siteConfig.email} or call{' '}
            {siteConfig.phoneDisplay}.
          </div>
        </div>
      </section>
    </div>
  )
}
