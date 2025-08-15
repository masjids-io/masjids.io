// src/hooks/useCalendar.ts

'use client'
import { EventInput, EventClickArg, EventDropArg, DateInput } from '@fullcalendar/core'
import { DateClickArg, Draggable, type DropArg } from '@fullcalendar/interaction'
import { useEffect, useState } from 'react'

// You might not need defaultEvents anymore, or you can keep it as a fallback.
// import { defaultEvents } from './data' 

export type SubmitEventType = {
  title: string
  category: string
}

// Type for the raw API event data
interface ApiEvent {
  id: string;
  name: string;
  startTime: string;
  endTime: string;
  // ... any other properties from your API
}


const useCalendar = () => {
  // --- STATE MANAGEMENT ---
  const [show, setShow] = useState<boolean>(false)
  const [isEditable, setIsEditable] = useState<boolean>(false)

  // Add loading and error states for API calls
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // This will now be populated from the API
  const [events, setEvents] = useState<EventInput[]>([]) 
  const [eventData, setEventData] = useState<EventInput>()
  const [dateInfo, setDateInfo] = useState<DateClickArg>()

  // --- API DATA FETCHING ---
  useEffect(() => {
    const fetchAndSetEvents = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/event/get'); // Your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        
        // Transform the API data to match FullCalendar's format
        const formattedEvents = result.data.map((event: ApiEvent): EventInput => ({
          id: event.id,
          title: event.name,
          start: event.startTime,
          end: event.endTime,
          // You can map other properties to `className` or `extendedProps`
          // className: 'bg-primary' 
        }));

        setEvents(formattedEvents);
        setError(null);
      } catch (err: any) {
        setError(err.message);
        console.error("Failed to fetch events:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAndSetEvents();
  }, []); // Empty dependency array ensures this runs only once


  // --- Draggable Events Effect (No changes needed here) ---
  useEffect(() => {
    const draggableEl = document.getElementById('external-events')
    if (draggableEl) {
      new Draggable(draggableEl, {
        itemSelector: '.external-event',
      })
    }
  }, [])


  // --- MODAL & EVENT HANDLERS (with API calls) ---
  
  const onCloseModal = () => {
    setEventData(undefined)
    setDateInfo(undefined)
    setShow(false)
  }

  const onOpenModal = () => setShow(true)

  const onDateClick = (arg: DateClickArg) => {
    setDateInfo(arg)
    onOpenModal()
    setIsEditable(false)
  }

  const onEventClick = (arg: EventClickArg) => {
    const event = {
      id: String(arg.event.id),
      title: arg.event.title,
      className: arg.event.classNames[0],
      start: arg.event.startStr,
      end: arg.event.endStr
    }
    setEventData(event)
    setIsEditable(true)
    onOpenModal()
  }

  // This function adds a new event
  const onAddEvent = async (data: SubmitEventType) => {
    const newEventData = {
      name: data.title, // Maps to `name` in your API
      startTime: dateInfo?.dateStr || new Date().toISOString(),
      // You may need an endTime as well depending on your API
      // endTime: ..., 
      description: '...', // Other required fields
    };

    try {
      // 1. Call your API to create the event
      // const response = await fetch('/api/event/create', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(newEventData),
      // });
      // if (!response.ok) throw new Error('Failed to save event');
      // const savedEvent = await response.json(); // The event returned from the API with the final ID

      // 2. Update local state with the successful response (Optimistic update shown below)
      console.log('TODO: Call POST API with:', newEventData);
      const tempEvent = {
        id: String(Date.now()), // Use a temporary ID, or the one from `savedEvent`
        title: data.title,
        start: dateInfo?.date ?? new Date(),
        className: data.category,
      }
      setEvents([...events, tempEvent]);

      onCloseModal();

    } catch (error) {
      console.error("Error adding event:", error);
      // Optionally show an error message to the user
    }
  }

  // This function updates an existing event
  const onUpdateEvent = async (data: SubmitEventType) => {
    try {
      // 1. Call your API to update the event
      // const response = await fetch(`/api/event/update/${eventData?.id}`, {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ name: data.title, ... }),
      // });
      // if (!response.ok) throw new Error('Failed to update event');
      
      // 2. Update local state on success
      console.log(`TODO: Call PUT API for event ${eventData?.id} with:`, data);
      setEvents(
        events.map((e) => e.id === eventData?.id ? { ...e, title: data.title, className: data.category } : e)
      );
      
      onCloseModal();
      setIsEditable(false);

    } catch (error) {
      console.error("Error updating event:", error);
    }
  }

  // This function removes an event
  const onRemoveEvent = async () => {
    try {
      // 1. Call your API to delete the event
      // const response = await fetch(`/api/event/delete/${eventData?.id}`, { method: 'DELETE' });
      // if (!response.ok) throw new Error('Failed to delete event');

      // 2. Update local state on success
      console.log(`TODO: Call DELETE API for event ${eventData?.id}`);
      setEvents(events.filter((e) => e.id !== eventData?.id));
      onCloseModal();

    } catch (error) {
      console.error("Error removing event:", error);
    }
  }
  
  // This function updates an event after dragging and dropping
  const onEventDrop = async (arg: EventDropArg) => {
    const { id, start, end } = arg.event;
    try {
        // 1. Call API to update the date
        // await fetch(`/api/event/update/${id}`, {
        //   method: 'PUT',
        //   body: JSON.stringify({ startTime: start?.toISOString(), endTime: end?.toISOString() })
        // });
        
        // 2. Update local state
        console.log(`TODO: Call PUT API to update dates for event ${id}`);
        const updatedEvents = events.map(e => e.id === id ? { ...e, start, end } : e);
        // setEvents(updatedEvents);
        
    } catch(error) {
        console.error("Error updating event drop:", error);
        // If the API call fails, revert the change in the UI
        arg.revert();
    }
  }

  // --- RETURN VALUES ---
  // Return the new loading and error states for the UI to use
  return {
    events,
    loading,
    error,
    show,
    isEditable,
    eventData,
    onCloseModal,
    onDateClick,
    onEventClick,
    onEventDrop,
    onAddEvent,
    onUpdateEvent,
    onRemoveEvent,
    // No changes to these handlers
    onDrop: () => {},
    createNewEvent: () => {
      setIsEditable(false)
      onOpenModal()
    }
  }
}

export default useCalendar