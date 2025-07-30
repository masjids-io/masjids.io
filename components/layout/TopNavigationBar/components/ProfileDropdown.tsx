'use client'
import Image from 'next/image'
import { Dropdown, DropdownHeader, DropdownMenu, DropdownToggle } from 'react-bootstrap'

import avatar1 from '@/assets/images/users/avatar-1.jpg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Link from 'next/link'
import { signOut } from 'next-auth/react'

const ProfileDropdown = () => {
  return (
    <Dropdown>
      <DropdownToggle as="a" className="nav-link arrow-none nav-user" role="button" aria-haspopup="false" aria-expanded="false">
        <span className="account-user-avatar">
          <Image src={avatar1} alt="user-image" width={32} className="rounded-circle" />
        </span>
        <span className="d-lg-block d-none">
          <h5 className="my-0 fw-normal">
            Mabruk
            <IconifyIcon icon="ri:arrow-down-s-line" className="fs-22 d-none d-sm-inline-block align-middle" />
          </h5>
        </span>
      </DropdownToggle>
      <DropdownMenu className="dropdown-menu-end dropdown-menu-animated profile-dropdown">
        <DropdownHeader className="noti-title">
          <h6 className="text-overflow m-0">Welcome !</h6>
        </DropdownHeader>
        <Link href="/pages/profile" className="dropdown-item">
          <IconifyIcon icon="ri:settings-4-line" className="fs-16 align-middle me-1" />
          <span>Settings</span>
        </Link>
        <Link href="/auth/logout" onClick={() => signOut({ redirect: false })} className="dropdown-item">
          <IconifyIcon icon="ri:logout-circle-r-line" className="align-middle me-1" />
          <span>Logout</span>
        </Link>
      </DropdownMenu>
    </Dropdown>
  )
}
export default ProfileDropdown
