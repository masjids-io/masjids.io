import { EventInput } from '@fullcalendar/core'

/**
 * Default events for the calendar, themed for a Masjid community.
 * Dates are set for August 2025 for a realistic demonstration.
 */
export const defaultEvents: EventInput[] = [
  {
    id: '1',
    title: 'Jumu\'ah Prayer (Friday Sermon)',
    // Friday, August 15, 2025, at 12:30 PM
    start: new Date('2025-08-15T12:30:00'),
    end: new Date('2025-08-15T13:30:00'),
    className: 'bg-success',
  },
  {
    id: '2',
    title: 'Special Lecture: The Seerah of the Prophet',
    // Saturday, August 16, 2025, at 7:00 PM (after Isha)
    start: new Date('2025-08-16T19:00:00'),
    end: new Date('2025-08-16T20:30:00'),
    className: 'bg-primary',
  },
  {
    id: '3',
    title: 'Weekly Tafsir Class',
    // Thursday, August 14, 2025, at 6:30 PM (after Maghrib)
    start: new Date('2025-08-14T18:30:00'),
    end: new Date('2025-08-14T19:30:00'),
    className: 'bg-info',
  },
  {
    id: '4',
    title: 'Youth Halaqa & Pizza Night',
    // Friday, August 15, 2025, at 7:30 PM
    start: new Date('2025-08-15T19:30:00'),
    end: new Date('2025-08-15T21:00:00'),
    className: 'bg-warning',
  },
  {
    id: '5',
    title: 'Community Cleanup Day',
    // All-day event on Sunday, August 17, 2025
    start: new Date('2025-08-17'),
    allDay: true,
    className: 'bg-danger',
  },
]