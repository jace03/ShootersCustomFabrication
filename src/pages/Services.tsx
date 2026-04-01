import { siteConfig } from '../siteConfig'

const services = [
  {
    title: 'Mobile welding (on-site)'
  },
  {
    title: 'Custom fabrication'
  },
  {
    title: 'Equipment and trailer repairs'
  },
  {
    title: 'Handrails, gates, and fence work'
  },
  {
    title: 'Structural reinforcement and brackets'
  },
  {
    title: 'General metal repair and modifications'
  },
] as const

const processSteps = [
  {
    title: 'Call or email'
  },
  {
    title: 'Quick details'
  },
  {
    title: 'Quote'
  },
  {
    title: 'Schedule'
  },
  {
    title: 'Build / repair'
  },
] as const

export default function Services() {
  return (
    <div className="page">
      <section className="pageHeader">
        <h1>Services</h1>
        <p>
          Need welding or fabrication done right? Call{' '}
          <a className="inlineLink" href={`tel:${siteConfig.phoneTel}`}>
            {siteConfig.phoneDisplay}
          </a>{' '}
          for a quote.
        </p>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <h2>Welding & fabrication</h2>
          <p>Common jobs we handle—ask if you don’t see yours listed.</p>
        </div>

        <div className="listGrid">
          {services.map((service) => (
            <div key={service.title} className="listItem">
              {service.title}
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <h2>How it works</h2>
          <p>Fast and straightforward from first call to finished job.</p>
        </div>

        <div className="steps">
          {processSteps.map((step, index) => (
            <div key={step.title} className="step">
              <div className="stepNumber">{index + 1}</div>
              <div className="stepTitle">{step.title}</div>
            </div>
          ))}
        </div>

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
