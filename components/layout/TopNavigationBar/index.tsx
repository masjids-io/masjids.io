'use client'

import LogoBox from '@/components/LogoBox'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import ThemeCustomizerToggle from './components/ThemeCustomizerToggle'
import LeftSidebarToggle from './components/LeftSidebarToggle'
import LanguageDropdown from './components/LanguageDropdown'
import { Dropdown, DropdownMenu, DropdownToggle } from 'react-bootstrap'
import MessagesDropdown from './components/MessagesDropdown'
import NotificationDropdown from './components/NotificationDropdown'
import { messages, notifications } from '@/assets/data/topbar'
import ThemeModeToggle from './components/ThemeModeToggle'
import ProfileDropdown from './components/ProfileDropdown'
import TopbarTitle from './components/TopbarTitle'

const TopNavigationBar = () => {
  return (
    <div className="navbar-custom">
      <div className="topbar container-fluid">
        <div className="d-flex align-items-center gap-1">
          <div className="logo-topbar">
            <LogoBox />
          </div>
          <LeftSidebarToggle />
          <TopbarTitle />
        </div>

        {/* Search for larger screens */}
        <div className="d-none d-lg-flex align-items-center">
          <form 
            className="position-relative" 
            action="/masjid-detail/search" 
            method="GET"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              const query = formData.get('q') as string;
              if (query.trim()) {
                window.location.href = `/masjid-detail/search/${encodeURIComponent(query)}`;
              }
            }}
          >
            <input 
              type="search" 
              name="q"
              className="form-control pe-5" 
              placeholder="Search masjids..." 
              aria-label="Search masjids"
              style={{ minWidth: '300px' }}
            />
            <IconifyIcon 
              icon="mdi:magnify" 
              className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted"
            />
          </form>
        </div>

        <ul className="topbar-menu d-flex align-items-center gap-3">
          <Dropdown as={'li'} className="d-lg-none">
            <DropdownToggle
              as={'a'}
              className="nav-link  arrow-none"
              data-bs-toggle="dropdown"
              role="button"
              aria-haspopup="false"
              aria-expanded="false">
              <IconifyIcon icon="mdi:magnify" className="fs-2" />
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-animated dropdown-lg p-0">
              <form 
                className="p-3" 
                action="/masjid-detail/search" 
                method="GET"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  const query = formData.get('q') as string;
                  if (query.trim()) {
                    window.location.href = `/masjid-detail/search/${encodeURIComponent(query)}`;
                  }
                }}
              >
                <input 
                  type="search" 
                  name="q"
                  className="form-control" 
                  placeholder="Search masjids..." 
                  aria-label="Search masjids"
                />
              </form>
            </DropdownMenu>
          </Dropdown>
          
          <NotificationDropdown notifications={notifications} />
          <ProfileDropdown />
        </ul>
      </div>
    </div>
  )
}

export default TopNavigationBar