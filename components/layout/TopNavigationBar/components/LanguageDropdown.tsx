import { languagesData } from '@/assets/data/topbar'
import usFlag from '@/assets/images/flags/us.jpg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap'

const LanguageDropdown = () => {
  return (
    <Dropdown>
      <DropdownToggle as="a" className="nav-link arrow-none" role="button" aria-haspopup="false" aria-expanded="false">
        <Image src={usFlag} alt="user-image" className="me-0 me-sm-1 w-auto" height={12} />
        <span className="align-middle d-none d-lg-inline-block">English</span>
        <IconifyIcon icon="mdi:chevron-down" className="fs-22 d-none d-sm-inline-block align-middle" />
      </DropdownToggle>
      <DropdownMenu className="dropdown-menu-end dropdown-menu-animated">
        {languagesData.map((language, idx) => (
          <DropdownItem href="" key={idx}>
            <Image src={language.flag} alt="user-image" className="me-1" height={12} /> <span className="align-middle">{language.name}</span>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}
export default LanguageDropdown
