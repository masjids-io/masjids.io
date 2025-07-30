'use client'

import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { useLayoutContext } from '@/context/useLayoutContext'

const ThemeModeToggle = () => {
  const { changeTheme, themeMode } = useLayoutContext()

  return (
    <li className="d-none d-sm-inline-block" onClick={() => (themeMode === 'dark' ? changeTheme('light') : changeTheme('dark'))}>
      <div className="nav-link" id="light-dark-mode">
        {themeMode === 'light' ? <IconifyIcon icon="ri:moon-line" className="fs-22" /> : <IconifyIcon icon="ri:sun-line" className="fs-22" />}
      </div>
    </li>
  )
}
export default ThemeModeToggle
