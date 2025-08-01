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
        <ul className="topbar-menu d-flex align-items-center gap-3">


          <NotificationDropdown notifications={notifications} />

          <ProfileDropdown />
        </ul>
      </div>
    </div>
  )
}
export default TopNavigationBar
