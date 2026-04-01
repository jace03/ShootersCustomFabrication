import { Link, useLocation } from 'react-router-dom'

type Props = {
  children: React.ReactNode
}

function getThemeClassName(pathname: string) {
  if (pathname.startsWith('/bold')) return 'themeBold'
  if (pathname.startsWith('/minimal')) return 'themeMinimal'
  if (pathname.startsWith('/classic')) return 'themeClassic'
  return 'themeSelector'
}

type DesignKey = 'classic' | 'bold' | 'minimal'

function getDesignKey(pathname: string): DesignKey | null {
  if (pathname.startsWith('/classic')) return 'classic'
  if (pathname.startsWith('/bold')) return 'bold'
  if (pathname.startsWith('/minimal')) return 'minimal'
  return null
}

function getDesignBasePath(key: DesignKey) {
  if (key === 'classic') return '/classic'
  if (key === 'bold') return '/bold'
  return '/minimal'
}

function getSubPath(pathname: string, design: DesignKey) {
  const base = getDesignBasePath(design)
  const rest = pathname.slice(base.length)
  return rest.length > 0 ? rest : ''
}

export default function AppFrame({ children }: Props) {
  const location = useLocation()

  const theme = getThemeClassName(location.pathname)
  const design = getDesignKey(location.pathname)
  const showSwitcher = design !== null
  const subPath = design ? getSubPath(location.pathname, design) : ''
  const suffix = `${subPath}${location.search}${location.hash}`

  const classicTo = `/classic${suffix}`
  const boldTo = `/bold${suffix}`
  const minimalTo = `/minimal${suffix}`

  const className = `appFrame ${theme}${showSwitcher ? ' appFrameHasSwitcher' : ''}`

  return (
    <div className={className}>
      {showSwitcher && (
        <div className="designSwitcher" role="navigation" aria-label="Website switcher">
          <div className="designSwitcherInner">
            <Link
              className={design === 'classic' ? 'designSwitchLink designSwitchLinkActive' : 'designSwitchLink'}
              to={classicTo}
            >
              Website 1
            </Link>
            <Link
              className={design === 'bold' ? 'designSwitchLink designSwitchLinkActive' : 'designSwitchLink'}
              to={boldTo}
            >
              Website 2
            </Link>
            <Link
              className={design === 'minimal' ? 'designSwitchLink designSwitchLinkActive' : 'designSwitchLink'}
              to={minimalTo}
            >
              Website 3
            </Link>
          </div>
        </div>
      )}

      {children}
    </div>
  )
}
