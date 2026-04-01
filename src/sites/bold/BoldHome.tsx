import { useMemo } from 'react'
import Reveal from '../../components/Reveal'
import { galleryItems } from '../../data/galleryItems'
import { siteConfig } from '../../siteConfig'
import { pickRandom } from '../../utils/random'

export default function BoldHome() {
  const heroSrc = useMemo(() => {
    return pickRandom(galleryItems)?.src ?? '/gallery/gallery-01.jpg'
  }, [])

  return (
    <div className="page pageBold">
      <section className="boldHero">
        <div className="boldHeroInner">
          <div>
            <h1 className="boldHeroTitle">Need welding today?</h1>
            <p className="boldHeroSubtitle">
              Mobile welding & custom fabrication for repairs, installs, and one-off
              builds.
            </p>

            <div className="boldHeroActions">
              <a className="button buttonPrimary" href={`tel:${siteConfig.phoneTel}`}>
                Call {siteConfig.phoneDisplay}
              </a>
              <a className="button buttonSecondary" href={`mailto:${siteConfig.email}`}>
                Email a photo
              </a>
            </div>

            <div className="boldBadges">
              <div className="pill">Fast turnaround</div>
              <div className="pill">On-site / Mobile</div>
              <div className="pill">Clean, strong welds</div>
            </div>
          </div>

          <div className="boldHeroMedia" aria-hidden="true">
            <img className="heroImage" src={heroSrc} alt="" />
          </div>
        </div>
      </section>

      <Reveal>
        <section className="section">
          <div className="sectionHeader">
            <h2>Most common calls</h2>
            <p>Quick list of work we regularly handle.</p>
          </div>

          <div className="listGrid">
            <div className="listItem">Trailer repairs</div>
            <div className="listItem">Equipment repairs</div>
            <div className="listItem">Brackets & reinforcement</div>
            <div className="listItem">Gates, rails, fence work</div>
            <div className="listItem">Custom fabrication</div>
            <div className="listItem">Cut, prep, grind, finish</div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section">
          <div className="callout">
            <div className="calloutTitle">Get an estimate in minutes</div>
            <div className="calloutText">
              Call {siteConfig.phoneDisplay} or email {siteConfig.email} with a
              photo and a quick description.
            </div>
            <div className="calloutActions">
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
                Email
              </a>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  )
}
