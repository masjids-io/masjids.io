import IconifyIcon from '@/components/wrappers/IconifyIcon'
import SimplebarReactClient from '@/components/wrappers/SimplebarReactClient'
import type { MessageType } from '@/types/data'
import { timeSince } from '@/utils/date'
import Image from 'next/image'
import Link from 'next/link'
import { CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap'

const MessagesDropdown = ({ messages }: { messages: MessageType[] }) => {
  return (
    <Dropdown as="li" className="notification-list">
      <DropdownToggle as={'a'} className="nav-link arrow-none" role="button" aria-haspopup="false" aria-expanded="false">
        <IconifyIcon icon="ri:mail-line" className="fs-22" />
        <span className="noti-icon-badge badge text-bg-purple">4</span>
      </DropdownToggle>
      <DropdownMenu className="dropdown-menu-end dropdown-menu-animated dropdown-lg py-0">
        <div className="p-2 border-top-0 border-start-0 border-end-0 border-dashed border">
          <Row className="align-items-center">
            <Col>
              <h6 className="m-0 fs-16 fw-semibold"> Messages</h6>
            </Col>
            <Col xs="auto">
              <Link href="" className="text-dark text-decoration-underline">
                <small>Clear All</small>
              </Link>
            </Col>
          </Row>
        </div>
        <SimplebarReactClient style={{ maxHeight: 300 }}>
          {messages.map((message, idx) => (
            <DropdownItem className="p-0 notify-item read-noti card m-0 shadow-none" key={idx}>
              <CardBody>
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <div className="notify-icon">
                      <Image src={message.avatar} className="img-fluid rounded-circle" alt="image" />
                    </div>
                  </div>
                  <div className="flex-grow-1 text-truncate ms-2">
                    <h5 className="noti-item-title fw-semibold fs-14">
                      {message.name}
                      <small className="fw-normal text-muted float-end ms-1">{timeSince(message.createdAt)}</small>
                    </h5>
                    <small className="noti-item-subtitle text-muted">{message.description}</small>
                  </div>
                </div>
              </CardBody>
            </DropdownItem>
          ))}
        </SimplebarReactClient>
        <Link href="" className="dropdown-item text-center text-primary text-decoration-underline fw-bold notify-item border-top border-light py-2">
          View All
        </Link>
      </DropdownMenu>
    </Dropdown>
  )
}
export default MessagesDropdown
