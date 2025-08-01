'use client'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { useLayoutContext } from '@/context/useLayoutContext'
import { lazy, useState } from 'react'
const ThemeCustomizer = lazy(() => import('@/components/ThemeCustomizer'))

const ThemeCustomizerToggle = () => {
  const {
    themeCustomizer: { open, toggle },
  } = useLayoutContext()
  const [hasOpenedOnce, setHasOpenedOnce] = useState(open)

  const toggleThemeCustomizerOffcanvas = () => {
    if (!hasOpenedOnce) setHasOpenedOnce(true)
    toggle()
  }
  return (
    <>
      <li className="d-none d-sm-inline-block">
        <span role="button" className="nav-link" onClick={toggleThemeCustomizerOffcanvas}>
          <IconifyIcon icon="ri:settings-3-line" className="fs-22" />
        </span>
      </li>
      {hasOpenedOnce && <ThemeCustomizer open={open} toggle={toggleThemeCustomizerOffcanvas} />}
    </>
  )
}
export default ThemeCustomizerToggle
