'use client'
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

import useLocalStorage from '@/hooks/useLocalStorage'
import useQueryParams from '@/hooks/useQueryParams'
import type { ChildrenType } from '@/types/component-props'
import type {
  LayoutModeType,
  LayoutOffcanvasStatesType,
  LayoutPositionType,
  LayoutState,
  LayoutType,
  MenuType,
  OffcanvasControlType,
  ThemeType,
} from '@/types/context'
import { toggleDocumentAttribute } from '@/utils/layout'

const ThemeContext = createContext<LayoutType | undefined>(undefined)

const useLayoutContext = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useLayoutContext can only be used within LayoutProvider')
  }
  return context
}

// const getPreferredTheme = (): ThemeType => (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

const LayoutProvider = ({ children }: ChildrenType) => {
  const params = useQueryParams()

  const override = !!(params.layout_theme || params.topbar_theme || params.menu_theme || params.menu_size || params.layout_mode || params.layout_position)

  const INIT_STATE: LayoutState = {
    theme: params['layout_theme'] ? (params['layout_theme'] as ThemeType) : 'light',
    topbarTheme: params['topbar_theme'] ? (params['topbar_theme'] as ThemeType) : 'light',
    menu: {
      theme: params['menu_theme'] ? (params['menu_theme'] as MenuType['theme']) : 'light',
      size: params['menu_size'] ? (params['menu_size'] as MenuType['size']) : 'default',
    },
    position: params['layout_position'] ? (params['layout_position'] as LayoutPositionType) : 'fixed',
    mode: params['layout_mode'] ? (params['layout_mode'] as LayoutModeType) : 'fluid',
  }

  const [settings, setSettings] = useLocalStorage<LayoutState>('__masjids.io_NEXT_CONFIG__', INIT_STATE, override)
  const [offcanvasStates, setOffcanvasStates] = useState<LayoutOffcanvasStatesType>({
    showThemeCustomizer: false,
    showBackdrop: false,
  })

  // update settings
  const updateSettings = (_newSettings: Partial<LayoutState>) => setSettings({ ...settings, ..._newSettings })

  // update theme mode
  const changeTheme = (newTheme: ThemeType) => {
    updateSettings({ theme: newTheme })
  }

  const changePosition = (newLayoutPosition: LayoutPositionType) => {
    updateSettings({ position: newLayoutPosition })
  }

  const changeMode = (newMode: LayoutModeType) => {
    updateSettings({ mode: newMode })
  }

  // change topbar theme
  const changeTopbarTheme = (newTheme: ThemeType) => {
    updateSettings({ topbarTheme: newTheme })
  }

  // change menu theme
  const changeMenuTheme = (newTheme: MenuType['theme']) => {
    updateSettings({ menu: { ...settings.menu, theme: newTheme } })
  }

  // change menu theme
  const changeMenuSize = (newSize: MenuType['size']) => {
    updateSettings({ menu: { ...settings.menu, size: newSize } })
  }

  // toggle theme customizer offcanvas
  const toggleThemeCustomizer: OffcanvasControlType['toggle'] = () => {
    setOffcanvasStates({ ...offcanvasStates, showThemeCustomizer: !offcanvasStates.showThemeCustomizer })
  }

  const themeCustomizer: LayoutType['themeCustomizer'] = {
    open: offcanvasStates.showThemeCustomizer,
    toggle: toggleThemeCustomizer,
  }

  // toggle backdrop
  const toggleBackdrop = useCallback(() => {
    const htmlTag = document.getElementsByTagName('html')[0]
    if (offcanvasStates.showBackdrop) htmlTag.classList.remove('sidebar-enable')
    else htmlTag.classList.add('sidebar-enable')
    setOffcanvasStates({ ...offcanvasStates, showBackdrop: !offcanvasStates.showBackdrop })
  }, [offcanvasStates.showBackdrop])

  useEffect(() => {
    toggleDocumentAttribute('data-bs-theme', settings.theme)
    toggleDocumentAttribute('data-topbar-color', settings.topbarTheme)
    toggleDocumentAttribute('data-menu-color', settings.menu.theme)
    toggleDocumentAttribute('data-sidenav-size', settings.menu.size)
    toggleDocumentAttribute('data-layout-position', settings.position)
    toggleDocumentAttribute('data-layout-mode', settings.mode)
    return () => {
      toggleDocumentAttribute('data-bs-theme', settings.theme, true)
      toggleDocumentAttribute('data-topbar-color', settings.topbarTheme, true)
      toggleDocumentAttribute('data-menu-color', settings.menu.theme, true)
      toggleDocumentAttribute('data-sidenav-size', settings.menu.size, true)
      toggleDocumentAttribute('data-layout-position', settings.position, true)
      toggleDocumentAttribute('data-layout-mode', settings.mode, true)
    }
  }, [settings])

  const resetSettings = () => updateSettings(INIT_STATE)

  return (
    <ThemeContext.Provider
      value={useMemo(
        () => ({
          ...settings,
          themeMode: settings.theme,
          changeTheme,
          changeTopbarTheme,
          changePosition,
          changeMode,
          changeMenu: {
            theme: changeMenuTheme,
            size: changeMenuSize,
          },
          themeCustomizer,
          toggleBackdrop,
          resetSettings,
        }),
        [settings, offcanvasStates],
      )}>
      {children}
      {offcanvasStates.showBackdrop && <div className="offcanvas-backdrop fade show" onClick={toggleBackdrop} />}
    </ThemeContext.Provider>
  )
}

export { LayoutProvider, useLayoutContext }
