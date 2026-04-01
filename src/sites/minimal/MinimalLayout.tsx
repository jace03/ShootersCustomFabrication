import { Link, NavLink, Outlet } from 'react-router-dom'
import { siteConfig } from '../../siteConfig'
import '../../App.css'

function getNavLinkClassName({ isActive }: { isActive: boolean }) {
  return isActive ? 'navLink navLinkActive' : 'navLink'
}

export default function MinimalLayout() {
  return (
    <div className="layout layoutMinimal">
      <a className="skipLink" href="#main">
        Skip to content
      </a>

      <header className="header headerMinimal">
        <div className="headerInner headerInnerMinimal">
          <Link className="brand brandLink" to="/" aria-label="All designs">
            <div className="brandName">{siteConfig.businessName}</div>
            <div className="brandTagline">{siteConfig.serviceArea}</div>
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
              Call
            </a>
          </div>
        </div>
      </header>

      <main id="main" className="main mainMinimal">
        <Outlet />
      </main>

      <footer className="footer footerMinimal">
        <div className="footerInner">
          <div className="footerFinePrint">
            Call {siteConfig.phoneDisplay} • Email {siteConfig.email}
          </div>
          <div className="footerFinePrint">
            © {new Date().getFullYear()} {siteConfig.businessName}
          </div>
        </div>
      </footer>
    </div>
  )
}
