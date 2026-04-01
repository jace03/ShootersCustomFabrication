import { siteConfig } from '../../siteConfig'
import Reveal from '../../components/Reveal'

const sections = [
  {
    title: 'Mobile welding',
    description:
      'On-site repairs and installs. Great for jobs that can’t be moved easily.',
  },
  {
    title: 'Custom fabrication',
    description:
      'Built-to-fit parts: brackets, frames, racks, guards, and one-off solutions.',
  },
  {
    title: 'Repair work',
    description:
      'Trailers, equipment, fences, and general metal repairs built to last.',
  },
] as const

export default function BoldServices() {
  return (
    <div className="page pageBold">
      <section className="pageHeader">
        <h1>Services</h1>
        <p>
          Call{' '}
          <a className="inlineLink" href={`tel:${siteConfig.phoneTel}`}>
            {siteConfig.phoneDisplay}
          </a>{' '}
          and tell us what you’re working on.
        </p>
      </section>

      <Reveal>
        <section className="section">
          <div className="cardGrid">
            {sections.map((section) => (
              <div key={section.title} className="card">
                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section">
          <div className="steps">
            <div className="step">
              <div className="stepNumber">1</div>
              <div className="stepTitle">Call or email</div>
            </div>
            <div className="step">
              <div className="stepNumber">2</div>
              <div className="stepTitle">Send details</div>
            </div>
            <div className="step">
              <div className="stepNumber">3</div>
              <div className="stepTitle">Get a quote</div>
            </div>
            <div className="step">
              <div className="stepNumber">4</div>
              <div className="stepTitle">Schedule</div>
            </div>
            <div className="step">
              <div className="stepNumber">5</div>
              <div className="stepTitle">Build / repair</div>
            </div>
          </div>

          <div className="sectionActions">
            <a
              className="button buttonPrimary"
              href={`tel:${siteConfig.phoneTel}`}
            >
              Call now
            </a>
            <a
              className="button buttonSecondary"
              href={`mailto:${siteConfig.email}`}
            >
              Email a photo
            </a>
          </div>
        </section>
      </Reveal>
    </div>
  )
}
