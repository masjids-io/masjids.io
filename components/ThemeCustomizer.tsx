import { Button, Col, Offcanvas, OffcanvasBody, OffcanvasHeader, Row } from 'react-bootstrap'
import SimplebarReactClient from './wrappers/SimplebarReactClient'
import type { LayoutModeType, LayoutPositionType, MenuType, OffcanvasControlType, ThemeType } from '@/types/context'
import { useLayoutContext } from '@/context/useLayoutContext'
import { toSentenceCase } from '@/utils/change-casing'
import Link from 'next/link'
import { buyLink } from '@/context/constants'

const ColorScheme = () => {
  const { theme, changeTheme } = useLayoutContext()
  const colors: ThemeType[] = ['light', 'dark']
  return (
    <>
      <h5 className="mb-3 fs-16 fw-semibold">Color Scheme</h5>
      <Row>
        {colors.map((color, idx) => (
          <Col xs={6} key={color + idx}>
            <div className="form-check mb-1">
              <input
                className="form-check-input border-secondary"
                type="radio"
                name="data-bs-theme"
                id={`layout-color-${color}`}
                onChange={() => changeTheme(color)}
                checked={theme === color}
              />
              <label className="form-check-label" htmlFor={`layout-color-${color}`}>
                {toSentenceCase(color)}
              </label>
            </div>
          </Col>
        ))}
      </Row>
    </>
  )
}

const LayoutMode = () => {
  const { mode, changeMode } = useLayoutContext()
  const modes: LayoutModeType[] = ['fluid', 'boxed']
  return (
    <div id="layout-width">
      <h5 className="my-3 fs-16 fw-semibold">Layout Mode</h5>
      <Row>
        {modes.map((item, idx) => (
          <Col xs={6} key={item + idx}>
            <div className="form-check mb-1">
              <input
                className="form-check-input border-secondary"
                type="radio"
                name="data-layout-item"
                id={`layout-color-${item}`}
                onChange={() => changeMode(item)}
                checked={item === mode}
              />
              <label className="form-check-label" htmlFor={`layout-color-${item}`}>
                {toSentenceCase(item)}
              </label>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}

const TopbarTheme = () => {
  const { topbarTheme, changeTopbarTheme } = useLayoutContext()
  const modes: ThemeType[] = ['light', 'dark']
  return (
    <>
      <h5 className="my-3 fs-16 fw-semibold">Topbar Color</h5>
      <Row>
        {modes.map((mode, idx) => (
          <Col xs={6} key={mode + idx}>
            <div className="form-check mb-1">
              <input
                className="form-check-input border-secondary"
                type="radio"
                name="data-topbar-color"
                id={`topbar-color-${mode}`}
                onChange={() => changeTopbarTheme(mode)}
                checked={topbarTheme === mode}
              />
              <label className="form-check-label" htmlFor={`topbar-color-${mode}`}>
                {toSentenceCase(mode)}
              </label>
            </div>
          </Col>
        ))}
      </Row>
    </>
  )
}

const MenuColor = () => {
  const {
    changeMenu: { theme: changeMenuTheme },
    menu: { theme },
  } = useLayoutContext()
  const modes: ThemeType[] = ['light', 'dark']
  return (
    <>
      <h5 className="my-3 fs-16 fw-semibold">Menu Color</h5>
      <Row>
        {modes.map((mode, idx) => (
          <Col xs={6} key={mode + idx}>
            <div className="form-check mb-1">
              <input
                className="form-check-input border-secondary"
                type="radio"
                name="data-menu-color"
                id={`menu-color-${mode}`}
                onChange={() => changeMenuTheme(mode)}
                checked={theme === mode}
              />
              <label className="form-check-label" htmlFor={`menu-color-${mode}`}>
                {toSentenceCase(mode)}
              </label>
            </div>
          </Col>
        ))}
      </Row>
    </>
  )
}

const SidebarSize = () => {
  const {
    menu: { size: menuSize },
    changeMenu: { size: changeMenuSize },
  } = useLayoutContext()
  const sizes: { size: MenuType['size']; name: string }[] = [
    {
      name: 'Default',
      size: 'default',
    },
    {
      name: 'Compact',
      size: 'compact',
    },
    {
      name: 'Condensed',
      size: 'condensed',
    },
    {
      name: 'Full Layout',
      size: 'full',
    },
  ]
  return (
    <div id="sidebar-size">
      <h5 className="my-3 fs-16 fw-semibold">Sidebar Size</h5>
      <Row className="gap-2">
        {sizes.map((size, idx) => (
          <Col xs={12} key={size.size + idx}>
            <div className="form-check mb-1">
              <input
                className="form-check-input border-secondary"
                type="radio"
                name="data-leftbar-size"
                id={`leftbar-size-${size.size}`}
                onChange={() => changeMenuSize(size.size)}
                checked={menuSize === size.size}
              />
              <label className="form-check-label" htmlFor={`leftbar-size-${size.size}`}>
                {toSentenceCase(size.name)}
              </label>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}

const LayoutPosition = () => {
  const { position, changePosition } = useLayoutContext()
  const modes: LayoutPositionType[] = ['fixed', 'scrollable']
  return (
    <div id="layout-position">
      <h5 className="my-3 fs-16 fw-semibold">Layout Position</h5>
      <Row>
        {modes.map((mode, idx) => (
          <Col xs={6} key={mode + idx}>
            <div className="form-check mb-1">
              <input
                className="form-check-input border-secondary"
                type="radio"
                name="data-layout-position"
                id={`layout-position-${mode}`}
                onChange={() => changePosition(mode)}
                checked={position === mode}
              />
              <label className="form-check-label" htmlFor={`layout-position-${mode}`}>
                {toSentenceCase(mode)}
              </label>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}

const ThemeCustomizer = ({ open, toggle }: OffcanvasControlType) => {
  const { resetSettings, theme } = useLayoutContext()

  return (
    <Offcanvas placement="end" show={open} tabIndex={-1} id="theme-settings-offcanvas" onHide={toggle}>
      <OffcanvasHeader closeVariant="white" closeButton className="d-flex align-items-center bg-primary p-3">
        <h5 className="text-white m-0">Theme Settings</h5>
      </OffcanvasHeader>
      <OffcanvasBody className="p-0">
        <SimplebarReactClient className="h-100">
          <div className="p-3">
            <ColorScheme />

            <LayoutMode />

            <TopbarTheme />
            <div>
              <MenuColor />
            </div>

            <SidebarSize />

            <LayoutPosition />
          </div>
        </SimplebarReactClient>
      </OffcanvasBody>
      <div className="offcanvas-footer border-top p-3 text-center">
        <Row>
          <Col xs={6}>
            <Button type="button" onClick={resetSettings} variant="light" className="w-100" id="reset-layout">
              Reset
            </Button>
          </Col>
          <Col xs={6}>
            <Link href={buyLink} target="_blank" role="button" className="btn btn-primary w-100">
              Buy Now
            </Link>
          </Col>
        </Row>
      </div>
    </Offcanvas>
  )
}
export default ThemeCustomizer
