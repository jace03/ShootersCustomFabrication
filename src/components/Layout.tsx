import { Link, NavLink, Outlet } from 'react-router-dom'
import { siteConfig } from '../siteConfig'
import '../App.css'

function getNavLinkClassName({ isActive }: { isActive: boolean }) {
  return isActive ? 'navLink navLinkActive' : 'navLink'
}

export default function Layout() {
  return (
    <div className="layout layoutClassic">
      <a className="skipLink" href="#main">
        Skip to content
      </a>

      <header className="header">
        <div className="headerInner">
          <Link className="brand brandLink" to="/" aria-label="All designs">
            <div className="brandName">{siteConfig.businessName}</div>
            <div className="brandTagline">{siteConfig.tagline}</div>
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

      <main id="main" className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footerInner">
          <div className="footerTitle">Ready for a quote?</div>
          <div className="footerText">
            {siteConfig.serviceArea} — call or email and we’ll get back to you.
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
