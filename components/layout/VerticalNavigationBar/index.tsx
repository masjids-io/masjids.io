import LogoBox from '@/components/LogoBox'
import SimplebarReactClient from '@/components/wrappers/SimplebarReactClient'
const AppMenu = lazy(() => import('./components/AppMenu'))
import { getMenuItems } from '@/helpers/menu'
import { lazy, Suspense } from 'react'
import FallbackLoading from '@/components/FallbackLoading'

const VerticalNavigationBar = () => {
  const menuItems = getMenuItems()

  return (
    <div className="leftside-menu" id="leftside-menu-container">
      <LogoBox />

      <SimplebarReactClient data-simplebar>
        <Suspense fallback={<FallbackLoading />}>
          <AppMenu menuItems={menuItems} />
        </Suspense>
      </SimplebarReactClient>
    </div>
  )
}
export default VerticalNavigationBar
