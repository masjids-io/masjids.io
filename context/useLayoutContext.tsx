'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'

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

const LayoutProvider = ({ children }: ChildrenType) => {
  const params = useQueryParams()
  const isInitialMount = useRef(true)

  const override = !!(params.layout_theme || params.topbar_theme || params.menu_theme || params.menu_size || params.layout_mode || params.layout_position)

  const INIT_STATE: LayoutState = useMemo(() => ({
    theme: params['layout_theme'] ? (params['layout_theme'] as ThemeType) : 'light',
    topbarTheme: params['topbar_theme'] ? (params['topbar_theme'] as ThemeType) : 'light',
    menu: {
      theme: params['menu_theme'] ? (params['menu_theme'] as MenuType['theme']) : 'light',
      size: params['menu_size'] ? (params['menu_size'] as MenuType['size']) : 'default',
    },
    position: params['layout_position'] ? (params['layout_position'] as LayoutPositionType) : 'fixed',
    mode: params['layout_mode'] ? (params['layout_mode'] as LayoutModeType) : 'fluid',
  }), [params])

  const [settings, setSettings] = useLocalStorage<LayoutState>('__masjids.io_NEXT_CONFIG__', INIT_STATE, override)
  const [offcanvasStates, setOffcanvasStates] = useState<LayoutOffcanvasStatesType>({
    showThemeCustomizer: false,
    showBackdrop: false,
  })

  const stableFunctions = useRef({
    updateSettings: (newSettings: Partial<LayoutState>) => {
      setSettings(prev => ({ ...prev, ...newSettings }))
    },
    changeTheme: (newTheme: ThemeType) => {
      setSettings(prev => ({ ...prev, theme: newTheme }))
    },
    changeTopbarTheme: (newTheme: ThemeType) => {
      setSettings(prev => ({ ...prev, topbarTheme: newTheme }))
    },
    changePosition: (newLayoutPosition: LayoutPositionType) => {
      setSettings(prev => ({ ...prev, position: newLayoutPosition }))
    },
    changeMode: (newMode: LayoutModeType) => {
      setSettings(prev => ({ ...prev, mode: newMode }))
    },
    changeMenuTheme: (newTheme: MenuType['theme']) => {
      setSettings(prev => ({
        ...prev,
        menu: { ...prev.menu, theme: newTheme }
      }))
    },
    changeMenuSize: (newSize: MenuType['size']) => {
      setSettings(prev => ({
        ...prev,
        menu: { ...prev.menu, size: newSize }
      }))
    },
    toggleThemeCustomizer: () => {
      setOffcanvasStates(prev => ({
        ...prev,
        showThemeCustomizer: !prev.showThemeCustomizer
      }))
    },
    toggleBackdrop: () => {
      setOffcanvasStates(prev => ({
        ...prev,
        showBackdrop: !prev.showBackdrop
      }))
    },
    resetSettings: () => {
      setSettings(INIT_STATE)
    }
  })

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
      return
    }

    const htmlTag = document.getElementsByTagName('html')[0]
    if (offcanvasStates.showBackdrop) {
      htmlTag.classList.add('sidebar-enable')
    } else {
      htmlTag.classList.remove('sidebar-enable')
    }
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
  }, [
    settings.theme,
    settings.topbarTheme,
    settings.menu.theme,
    settings.menu.size,
    settings.position,
    settings.mode
  ])

  const contextValue: LayoutType = useMemo(() => ({
    ...settings,
    themeMode: settings.theme,
    changeTheme: stableFunctions.current.changeTheme,
    changeTopbarTheme: stableFunctions.current.changeTopbarTheme,
    changePosition: stableFunctions.current.changePosition,
    changeMode: stableFunctions.current.changeMode,
    changeMenu: {
      theme: stableFunctions.current.changeMenuTheme,
      size: stableFunctions.current.changeMenuSize,
    },
    themeCustomizer: {
      open: offcanvasStates.showThemeCustomizer,
      toggle: stableFunctions.current.toggleThemeCustomizer,
    },
    toggleBackdrop: stableFunctions.current.toggleBackdrop,
    resetSettings: stableFunctions.current.resetSettings,
  }), [
    settings.theme,
    settings.topbarTheme,
    settings.menu.theme,
    settings.menu.size,
    settings.position,
    settings.mode,
    offcanvasStates.showThemeCustomizer,
  ])

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
      {offcanvasStates.showBackdrop && (
        <div
          className="offcanvas-backdrop fade show"
          onClick={stableFunctions.current.toggleBackdrop}
        />
      )}
    </ThemeContext.Provider>
  )
}

export { LayoutProvider, useLayoutContext }
