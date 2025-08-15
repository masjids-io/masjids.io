'use client'

import { useState, lazy } from 'react' // --- 1. Import useState ---
import { Row, Col, Spinner, Alert, Button, ButtonGroup } from 'react-bootstrap' // --- 2. Import Button components ---

// --- Import your local components ---
import SidePanel from './SidePanel'

import AddEditEvent from './AddEditEvent'
import useCalendar from '../../../../hooks/useCalendar'


const EventDataTable = lazy(() => import('./EventDataTable'))
const Calendar = lazy(() => import('./Calendar'))

const CalendarPage = () => {
  // --- Call the hook to get all state and functions ---
  const {
    loading,
    error,
    events,
    show,
    isEditable,
    eventData,
    createNewEvent,
    onCloseModal,
    onDateClick,
    onEventClick,
    onEventDrop,
    onAddEvent,
    onUpdateEvent,
    onRemoveEvent,
    onDrop,
  } = useCalendar()

  // --- 3. State to manage the current view ('calendar' or 'table') ---
  const [view, setView] = useState('calendar')

  // --- Handle Loading State ---
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
        <Spinner animation="border" variant="primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <h4 className="ms-3">Loading Events...</h4>
      </div>
    )
  }

  // --- Handle Error State ---
  if (error) {
    return (
      <Alert variant="danger" className="mt-4 mx-auto" style={{ maxWidth: '800px' }}>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>Could not fetch calendar events. Please try again later.</p>
        <hr />
        <p className="mb-0">
          <strong>Details:</strong> {error}
        </p>
      </Alert>
    )
  }

  // --- Render the full UI on success ---
  return (
    <Row>
      <Col lg={3}>
        <SidePanel createNewEvent={createNewEvent} />
      </Col>

      <Col lg={9}>
        {/* --- 4. Add buttons to toggle the view --- */}
        <div className="d-flex justify-content-end mb-3">
          <ButtonGroup>
            <Button
              variant={view === 'calendar' ? 'primary' : 'outline-primary'}
              onClick={() => setView('calendar')}
            >
              Calendar View
            </Button>
            <Button
              variant={view === 'table' ? 'primary' : 'outline-primary'}
              onClick={() => setView('table')}
            >
              Table View
            </Button>
          </ButtonGroup>
        </div>

        {/* --- 5. Conditionally render Calendar or Table based on the view state --- */}
        {view === 'calendar' ? (
          <Calendar
            events={events}
            onDateClick={onDateClick}
            onDrop={onDrop}
            onEventClick={onEventClick}
            onEventDrop={onEventDrop}
          />
        ) : (
          <EventDataTable 
          />
        )}
      </Col>

      {/* The Add/Edit modal is rendered here, but only visible when `show` is true */}
      <AddEditEvent
        eventData={eventData}
        isEditable={isEditable}
        onAddEvent={onAddEvent}
        onRemoveEvent={onRemoveEvent}
        onUpdateEvent={onUpdateEvent}
        open={show}
        toggle={onCloseModal}
      />
    </Row>
  )
}

export default CalendarPage