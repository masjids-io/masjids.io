'use client'
import { useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'
import { Suspense, useEffect } from 'react' // Import useEffect

import type { ChildrenType } from '@/types/component-props'
import FallbackLoading from '../FallbackLoading'

const AuthProtectionWrapper = ({ children }: ChildrenType) => {
  const { status } = useSession()
  const { push } = useRouter()
  // The pathname is not used in the logic, so it can be removed if not needed elsewhere.
  // const pathname = usePathname()

  useEffect(() => {
    // This effect runs when the 'status' changes.
    // If the user is unauthenticated, redirect them to the login page.
    if (status === 'unauthenticated') {
      push(`/login`)
    }
  }, [status, push]) // Dependency array ensures this runs only when status or push changes.

  // While the session is being checked, show a loading indicator.
  if (status === 'loading') {
    return <FallbackLoading />
  }

  // If the user is authenticated, render the children.
  // The unauthenticated case is handled by the redirect in useEffect.
  if (status === 'authenticated') {
    return <Suspense>{children}</Suspense>
  }

  // Render a fallback for the unauthenticated case while redirecting.
  return <FallbackLoading />
}

export default AuthProtectionWrapper