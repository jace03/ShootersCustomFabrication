import { Link, NavLink, Outlet } from 'react-router-dom'
import { siteConfig } from '../../siteConfig'
import '../../App.css'

function getNavLinkClassName({ isActive }: { isActive: boolean }) {
  return isActive ? 'navLink navLinkActive' : 'navLink'
}

export default function BoldLayout() {
  return (
    <div className="layout layoutBold">
      <a className="skipLink" href="#main">
        Skip to content
      </a>

      <header className="header headerBold">
        <div className="headerInner headerInnerBold">
          <Link className="brand brandLink brandWithLogo" to="/" aria-label="All designs">
            <img className="brandLogo" src="/gallery/gallery-14.jpg" alt="" aria-hidden="true" />
            <div className="brandText">
              <div className="brandName">{siteConfig.businessName}</div>
              <div className="brandTagline">{siteConfig.tagline}</div>
            </div>
          </Link>

          <nav className="nav" aria-label="Primary">
            <NavLink to="." end className={getNavLinkClassName}>
              Home
            </NavLink>
            <NavLink to="services" className={getNavLinkClassName}>
              Services
            </NavLink>
            <NavLink to="gallery" className={getNavLinkClassName}>
              Gallery
            </NavLink>
          </nav>

          <div className="headerCta">
            <a className="button buttonPrimary" href={`tel:${siteConfig.phoneTel}`}>
              Call {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </header>

      <main id="main" className="main mainBold">
        <Outlet />
      </main>

      <footer className="footer footerBold">
        <div className="footerInner">
          <div className="footerTitle">Call for a quote</div>
          <div className="footerText">
            Tell us what you need, share a photo if you have one, and we’ll give you
            a quick estimate.
          </div>
          <div className="footerActions">
            <a className="button buttonPrimary" href={`tel:${siteConfig.phoneTel}`}>
              Call {siteConfig.phoneDisplay}
            </a>
            <a className="button buttonSecondary" href={`mailto:${siteConfig.email}`}>
              Email {siteConfig.email}
            </a>
          </div>
          <div className="footerFinePrint">
            © {new Date().getFullYear()} {siteConfig.businessName}
          </div>
        </div>
      </footer>
    </div>
  )
}
