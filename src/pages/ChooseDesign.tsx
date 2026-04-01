import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { galleryItems } from '../data/galleryItems'
import { siteConfig } from '../siteConfig'
import { pickRandom } from '../utils/random'

type Option = {
  title: string
  description: string
  to: string
}

const options: Option[] = [
  {
    title: 'Option A — Classic',
    description:
      'Clean, modern layout with a sticky header and strong call-to-action.',
    to: '/classic',
  },
  {
    title: 'Option B — Bold',
    description:
      'Big hero, punchy sections, and a more “sales page” feel for calls.',
    to: '/bold',
  },
  {
    title: 'Option C — Minimal',
    description:
      'Simple, lightweight layout focused on clarity and quick scanning.',
    to: '/minimal',
  },
]

export default function ChooseDesign() {
  const heroSrc = useMemo(() => {
    return pickRandom(galleryItems)?.src ?? '/gallery/gallery-01.jpg'
  }, [])

  return (
    <div className="page">
      <section className="heroSection">
        <div className="heroGrid">
          <div className="heroCopy">
            <h1 className="heroTitle">Choose a website option</h1>
            <p className="heroSubtitle">
              Pick one of the 3 designs to show {siteConfig.businessName}. Each
              option includes the same 3 pages: Home, Services, Gallery.
            </p>

            <div className="heroActions">
              <a
                className="button buttonPrimary"
                href={`tel:${siteConfig.phoneTel}`}
              >
                Test the call button
              </a>
            </div>

            <div className="heroSmall">
              <strong>Tip:</strong> Replace contact info in{' '}
              <code>src/siteConfig.ts</code>
            </div>
          </div>

          <div className="heroMedia" aria-hidden="true">
            <img className="heroImage" src={heroSrc} alt="" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="cardGrid designsGrid">
          {options.map((option) => (
            <div key={option.title} className="card designCard">
              <h3>{option.title}</h3>
              <p>{option.description}</p>
              <div className="sectionActions">
                <Link className="button buttonPrimary" to={option.to}>
                  Open this option
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
