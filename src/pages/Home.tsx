import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import GalleryGrid from '../components/GalleryGrid'
import Reveal from '../components/Reveal'
import { galleryItems } from '../data/galleryItems'
import { siteConfig } from '../siteConfig'
import { pickRandom, shuffled } from '../utils/random'

export default function Home() {
  const heroSrc = useMemo(() => {
    return pickRandom(galleryItems)?.src ?? '/gallery/gallery-01.jpg'
  }, [])

  const recentItems = useMemo(() => {
    return shuffled(galleryItems).slice(0, 6)
  }, [])

  return (
    <div className="page">
      <section className="heroSection">
        <div className="heroGrid">
          <div className="heroCopy">
            <h1 className="heroTitle">Welding you can count on</h1>
            <p className="heroSubtitle">
              {siteConfig.tagline}. Fast turnaround, clean work, and clear
              communication.
            </p>

            <div className="heroHighlights">
              <div className="pill">Repairs</div>
              <div className="pill">Custom Fabrication</div>
              <div className="pill">On-site / Mobile</div>
              <div className="pill">Steel • Stainless • Aluminum</div>
            </div>

            <div className="heroActions">
              <a
                className="button buttonPrimary"
                href={`tel:${siteConfig.phoneTel}`}
              >
                Call for a quote
              </a>
              <Link className="button buttonSecondary" to="services">
                See services
              </Link>
            </div>

            <div className="heroSmall">
              <strong>Service area:</strong> {siteConfig.serviceArea}
            </div>
          </div>

          <div className="heroMedia" aria-hidden="true">
            <img className="heroImage" src={heroSrc} alt="" />
          </div>
        </div>
      </section>

      <Reveal>
        <section className="section">
          <div className="sectionHeader">
            <h2>What we do</h2>
            <p>Custom work, repairs, and small-to-medium fabrication projects.</p>
          </div>

          <div className="cardGrid">
            <div className="card">
              <h3>Mobile Welding</h3>
              <p>
                On-site repairs and installs for jobs that can’t come to the shop.
              </p>
            </div>
            <div className="card">
              <h3>Custom Fabrication</h3>
              <p>
                Brackets, frames, racks, guards, handrails, gates, and one-off
                solutions.
              </p>
            </div>
            <div className="card">
              <h3>Repairs</h3>
              <p>
                Trailers, equipment, fences, and general metal repair—built to last.
              </p>
            </div>
            <div className="card">
              <h3>Cut & Prep</h3>
              <p>
                Measuring, cutting, fit-up, grinding, and finishing to keep the job
                clean.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section">
          <div className="sectionHeader">
            <h2>Recent work</h2>
            <p>Here are a few examples—swap in your real photos anytime.</p>
          </div>

          <GalleryGrid items={recentItems} />

          <div className="sectionActions">
            <Link className="button buttonSecondary" to="gallery">
              View full gallery
            </Link>
          </div>
        </section>
      </Reveal>
    </div>
  )
}
