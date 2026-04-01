import { siteConfig } from '../../siteConfig'

export default function MinimalServices() {
  return (
    <div className="page pageMinimal">
      <section className="pageHeader">
        <h1>Services</h1>
        <p>
          For pricing, call{' '}
          <a className="inlineLink" href={`tel:${siteConfig.phoneTel}`}>
            {siteConfig.phoneDisplay}
          </a>{' '}
          or email {siteConfig.email}.
        </p>
      </section>

      <section className="section">
        <div className="minimalList">
          <div className="minimalRow">Mobile welding (on-site)</div>
          <div className="minimalRow">Custom fabrication</div>
          <div className="minimalRow">Equipment / trailer repairs</div>
          <div className="minimalRow">Handrails, gates, fence repairs</div>
          <div className="minimalRow">Brackets, reinforcement, modifications</div>
        </div>
      </section>

      <section className="section">
        <div className="sectionActions">
          <a className="button buttonPrimary" href={`tel:${siteConfig.phoneTel}`}>
            Call now
          </a>
          <a className="button buttonSecondary" href={`mailto:${siteConfig.email}`}>
            Email a photo
          </a>
        </div>
      </section>
    </div>
  )
}
