'use client'

import Image from 'next/image'
import { Dropdown, DropdownHeader, DropdownMenu, DropdownToggle } from 'react-bootstrap'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

import avatar1 from '@/assets/images/users/avatar-1.jpg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'

const ProfileDropdown = () => {
  // Get session data and authentication status
  const { data: session, status } = useSession();

  // Determine the name to display
  // Use the email from the session if available, otherwise show a loading or default state.
  const displayName = status === 'loading' ? 'Loading...' : (session?.user?.email || 'User');

  return (
    <Dropdown>
      <DropdownToggle as="a" className="nav-link arrow-none nav-user" role="button" aria-haspopup="false" aria-expanded="false">
        <span className="account-user-avatar">
          <Image src={avatar1} alt="user-image" width={32} className="rounded-circle" />
        </span>
        <span className="d-lg-block d-none">
          <h5 className="my-0 fw-normal">
            {/* Display the dynamic name from the session */}
            {displayName}
            <IconifyIcon icon="ri:arrow-down-s-line" className="fs-22 d-none d-sm-inline-block align-middle" />
          </h5>
        </span>
      </DropdownToggle>
      <DropdownMenu className="dropdown-menu-end dropdown-menu-animated profile-dropdown">
        <DropdownHeader className="noti-title">
          <h6 className="text-overflow m-0">Welcome !</h6>
        </DropdownHeader>
        <Link href="/profile" className="dropdown-item">
          <IconifyIcon icon="ri:settings-4-line" className="fs-16 align-middle me-1" />
          <span>Settings</span>
        </Link>
        <button onClick={() => signOut({ callbackUrl: '/login' })} className="dropdown-item">
          <IconifyIcon icon="ri:logout-circle-r-line" className="align-middle me-1" />
          <span>Logout</span>
        </button>
      </DropdownMenu>
    </Dropdown>
  )
}

export default ProfileDropdown
