import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Button } from 'react-bootstrap'

// Define the props type for clarity
type SidePanelProps = {
  createNewEvent: () => void
}

const SidePanel = ({ createNewEvent }: SidePanelProps) => {
  // --- Updated externalEvents array for an Islamic/Masjid context ---
  const externalEvents = [
    {}
  ]

  return (
    <>
      {/* --- Button to create a new custom event --- */}
      <div className="d-grid">

        <a href={`/event-management/create`} className="btn btn-primary btn-lg">
          <IconifyIcon icon="mdi:plus-circle" /> Create New Event
        </a>
      </div>

      {/* --- List of draggable preset events --- */}
      <div id="external-events" className="mt-3">
        <p className="text-muted">Add event onto the masjid.</p>

      </div>

      {/* --- "How It Works" section with contextual instructions --- */}
      <div className="mt-5 d-none d-xl-block">
        <h5 className="text-center">How to Use the Calendar</h5>
        <ul className="ps-3">
          <li className="text-muted mb-3">
            To schedule a prayer or community event, simply  by clicking the <strong>"Create New Event"</strong> or clik day in calendar button.
          </li>
          <li className="text-muted mb-3">
            For custom entries like a special date far onto future, click the <strong>"Create New Event"</strong> button and fill in the details.
          </li>
          <li className="text-muted mb-3">
            You can <strong>click on any event</strong> already on the calendar to view, edit its details, or remove it.
          </li>
        </ul>
      </div>
    </>
  )
}

export default SidePanel