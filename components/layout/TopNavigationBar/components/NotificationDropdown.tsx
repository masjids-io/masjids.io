import IconifyIcon from '@/components/wrappers/IconifyIcon'
import SimplebarReactClient from '@/components/wrappers/SimplebarReactClient'
import type { NotificationType } from '@/types/data'
import { timeSince } from '@/utils/date'
import Link from 'next/link'
import { Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap'

const NotificationDropdown = ({ notifications }: { notifications: NotificationType[] }) => {
  return (
    <Dropdown className="notification-list">
      <DropdownToggle className="nav-link arrow-none" as={'a'} role="button" aria-haspopup="false" aria-expanded="false">
        <IconifyIcon icon="ri:notification-3-line" className=" fs-22" />
        <span className="noti-icon-badge badge text-bg-pink">3</span>
      </DropdownToggle>
      <DropdownMenu className="dropdown-menu-end dropdown-menu-animated dropdown-lg py-0">
        <div className="p-2 border-top-0 border-start-0 border-end-0 border-dashed border">
          <Row className="align-items-center">
            <Col>
              <h6 className="m-0 fs-16 fw-semibold"> Notification</h6>
            </Col>
            <Col xs="auto">
              <Link href="" className="text-dark text-decoration-underline">
                <small>Clear All</small>
              </Link>
            </Col>
          </Row>
        </div>
        <SimplebarReactClient style={{ maxHeight: 300 }}>
          {notifications.map((notification, idx) => (
            <DropdownItem className="notify-item" key={idx}>
              <div className={`notify-icon bg-${notification.variant}-subtle`}>
                <IconifyIcon icon={notification.icon.icon} className={`text-${notification.variant}`} />
              </div>
              <p className="notify-details">
                {notification.title}
                <small className="noti-time">{timeSince(notification.time)}</small>
              </p>
            </DropdownItem>
          ))}
        </SimplebarReactClient>
        <DropdownItem className="text-center text-primary text-decoration-underline fw-bold notify-item border-top border-light py-2">
          View All
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
export default NotificationDropdown
