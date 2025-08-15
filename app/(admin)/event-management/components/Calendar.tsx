import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, { type DateClickArg, type DropArg } from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import bootstrapPlugin from '@fullcalendar/bootstrap'

import type { CalendarProps } from '@/types/component-props'
import type { EventClickArg, EventDropArg } from '@fullcalendar/core/index.js'

const Calendar = ({ events, onDateClick, onDrop, onEventClick, onEventDrop }: CalendarProps) => {
  // You can modify these events as per your needs
  const handleDateClick = (arg: DateClickArg) => {
    // onDateClick(arg)
  }
  const handleEventClick = (arg: EventClickArg) => {
    // onEventClick(arg)
  }
  const handleDrop = (arg: DropArg) => {
    // onDrop(arg)
  }
  const handleEventDrop = (arg: EventDropArg) => {
    // onEventDrop(arg)
  }

  return (
    <div className="mt-4 mt-lg-0">
      <div id="calendar">
        <FullCalendar
          initialView="dayGridMonth"
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin, bootstrapPlugin]}
          themeSystem="bootstrap"
          bootstrapFontAwesome={false}
          handleWindowResize={true}
          slotDuration="00:15:00"
          slotMinTime="08:00:00"
          slotMaxTime="19:00:00"
          buttonText={{
            today: 'Today',
            month: 'Month',
            week: 'Week',
            day: 'Day',
            list: 'List',
            prev: 'Prev',
            next: 'Next',
          }}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,listMonth',
          }}
          // height={height - 200}
          dayMaxEventRows={1}
          editable={true}
          selectable={true}
          droppable={true}
          events={events}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
          drop={handleDrop}
          eventDrop={handleEventDrop}
        />
      </div>
    </div>
  )
}

export default Calendar
