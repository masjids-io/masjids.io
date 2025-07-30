'use client'
import { useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'
import { Suspense, useState } from 'react'

import type { ChildrenType } from '@/types/component-props'
import FallbackLoading from '../FallbackLoading'

const AuthProtectionWrapper = ({ children }: ChildrenType) => {
  const { status } = useSession()
  const { push } = useRouter()
  const pathname = usePathname()

  if (status == 'unauthenticated') {
    push(`/auth/login?redirectTo=${pathname}`)
    return <FallbackLoading />
  }

  return <Suspense>{children}</Suspense>
}

export default AuthProtectionWrapper
