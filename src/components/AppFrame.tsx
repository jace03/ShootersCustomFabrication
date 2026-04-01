import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

type Props = {
  children: React.ReactNode
}

function getThemeClassName(pathname: string) {
  if (pathname.startsWith('/bold')) return 'themeBold'
  if (pathname.startsWith('/minimal')) return 'themeMinimal'
  if (pathname.startsWith('/classic')) return 'themeClassic'
  return 'themeSelector'
}

export default function AppFrame({ children }: Props) {
  const location = useLocation()

  const className = useMemo(() => {
    const theme = getThemeClassName(location.pathname)
    return `appFrame ${theme}`
  }, [location.pathname])

  return <div className={className}>{children}</div>
}
