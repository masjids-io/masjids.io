import { lazy, Suspense } from 'react'

import FallbackLoading from '@/components/FallbackLoading'
import Footer from '@/components/layout/Footer'
import type { ChildrenType } from '@/types/component-props'
import AuthProtectionWrapper from '@/components/wrappers/AuthProtectionWrapper'
import AppProvidersWrapper from '@/components/wrappers/AppProvidersWrapper'

const TopNavigationBar = lazy(() => import('@/components/layout/TopNavigationBar'))
const VerticalNavigationBar = lazy(() => import('@/components/layout/VerticalNavigationBar'))
import '@/assets/scss/app.scss'

const AdminLayout = ({ children }: ChildrenType) => {
  return (
    <AppProvidersWrapper>
      <div>
        <AuthProtectionWrapper>
        <div className="wrapper">
          <Suspense fallback={<FallbackLoading />}>
            <TopNavigationBar />
          </Suspense>

          <Suspense fallback={<FallbackLoading />}>
            <VerticalNavigationBar />
          </Suspense>

          <div className="content-page">
            <div className="content">
              <div className="container-fluid">
                <Suspense>{children}</Suspense>
              </div>

              <Footer />
            </div>
          </div>
        </div>
        </AuthProtectionWrapper>
      </div>
    </AppProvidersWrapper>
  )
}

export default AdminLayout
