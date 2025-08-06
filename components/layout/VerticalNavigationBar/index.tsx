'use client'

import LogoBox from '@/components/LogoBox'
import SimplebarReactClient from '@/components/wrappers/SimplebarReactClient'
import { getMenuItems } from '@/helpers/menu'
import { lazy, Suspense, useState, useEffect } from 'react' // Import useState and useEffect
import FallbackLoading from '@/components/FallbackLoading'
import type { MenuItemType } from '@/types/menu' // Import the type for state

const AppMenu = lazy(() => import('./components/AppMenu'))

// --- Mock API Fetch Function ---
// In your real application, this logic might be in a separate file
// or handled by a state management library like Redux or Zustand.
const fetchUserProfile = async () => {
  // This simulates the API call to /api/profile/me
  const response = await fetch('/api/profile/me')

  if (!response.ok) {
    // This will be caught by the .catch() block below
    throw new Error('User not authenticated or API error')
  }

  const data = await response.json()
  return data.getUserResponse // e.g., { id, email, role: 'MASJID_ADMIN' }
}

const VerticalNavigationBar = () => {
  // 1. Create state to hold the menu items. Initialize with an empty array.
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([])
  // 2. Create a loading state to show a fallback while we fetch user data.
  const [loading, setLoading] = useState(true)

  // 3. Use useEffect to fetch data when the component is first mounted.
  useEffect(() => {
    const initializeMenu = async () => {
      try {
        // Fetch the user's profile to get their role
        const userProfile = await fetchUserProfile()
        const userRole = userProfile.role // This will be 'MASJID_ADMIN'

        // Generate the menu dynamically based on the user's role
        const accessibleMenu = getMenuItems(userRole)
        setMenuItems(accessibleMenu)
      } catch (error) {
        console.error('Could not fetch user profile, showing public menu.', error)
        // If the fetch fails (e.g., user not logged in), get the default public menu
        const publicMenu = getMenuItems() // Call with no role
        setMenuItems(publicMenu)
      } finally {
        // 4. Once done, set loading to false to render the menu.
        setLoading(false)
      }
    }

    initializeMenu()
  }, []) // The empty dependency array [] means this effect runs only once.

  // 5. While fetching data, show a loading indicator.
  // This prevents the menu from rendering with an empty list.
  if (loading) {
    return (
      <div className="leftside-menu" id="leftside-menu-container">
        <LogoBox />
        <FallbackLoading />
      </div>
    )
  }

  // 6. Once loading is false, render the menu with the correct items.
  return (
    <div className="leftside-menu" id="leftside-menu-container">
      <LogoBox />

      <SimplebarReactClient data-simplebar>
        {/* The Suspense here handles the lazy loading of the AppMenu component's code,
            while our `loading` state above handles the async fetching of the menu *data*. */}
        <Suspense fallback={<FallbackLoading />}>
          <AppMenu menuItems={menuItems} />
        </Suspense>
      </SimplebarReactClient>
    </div>
  )
}

export default VerticalNavigationBar