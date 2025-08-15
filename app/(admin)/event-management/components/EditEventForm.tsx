'use client'

import React, { useState, useEffect } from 'react'
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Button, Card, Col, Form, Row, Alert, Spinner } from 'react-bootstrap'
import { useRouter } from 'next/navigation'

// Tipe untuk Masjid (untuk dropdown)
type Masjid = {
  id: string
  name: string
  location: string
  address: {
    city: string
    addressLine1: string
  }
  phoneNumber: {
    countryCode: string
    number: string
  }
}

// Tipe untuk Event
type Event = {
  id: string;
  masjid_id: string;
  name: string;
  description: string;
  start_time: string;
  end_time: string;
  gender_restriction: string;
  is_paid: boolean;
  requires_rsvp: boolean;
  max_participants: number;
  livestream_link?: string;
}

// Skema validasi menggunakan Yup
const eventValidationSchema = Yup.object().shape({
  masjid_id: Yup.string().required('Masjid is required'),
  name: Yup.string().required('Event name is required'),
  description: Yup.string().required('Description is required'),
  start_time: Yup.date().required('Start time is required'),
  end_time: Yup.date()
    .required('End time is required')
    .min(Yup.ref('start_time'), 'End time must be after start time'),

  max_participants: Yup.number()
    .typeError('Must be a number')
    .min(0, 'Cannot be negative')
    .integer('Must be an integer'),
  livestream_link: Yup.string().url('Must be a valid URL'),
})

// Props untuk formulir edit
type EditEventFormProps = {
  eventId: string;
};

export default function EditEventForm({ eventId }: EditEventFormProps) {
  const router = useRouter()
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [masjids, setMasjids] = useState<Masjid[]>([])
  const [loadingMasjids, setLoadingMasjids] = useState(true)
  const [initialData, setInitialData] = useState<Partial<Event> | null>(null)
  const [loadingEvent, setLoadingEvent] = useState(true)

  // Mengambil daftar masjid dan data event
  useEffect(() => {
    const fetchData = async () => {
      // Fetch masjids
      try {
        // --- FIX: URL API diperbaiki ---
        const masjidsRes = await fetch('/api/masjids/get')
        if (!masjidsRes.ok) throw new Error('Failed to fetch masjids')
        const masjidsResult = await masjidsRes.json()
        if (masjidsResult.listMasjidResponse?.masjids) {
          setMasjids(masjidsResult.listMasjidResponse.masjids)
        }
      } catch (error) {
        setErrorMessage('Could not load masjids list.')
      } finally {
        setLoadingMasjids(false)
      }

      // Fetch event data
      try {
        const eventRes = await fetch(`/api/event/${eventId}`)
        if (!eventRes.ok) throw new Error('Failed to fetch event data')
        const eventResult = await eventRes.json()

        interface ToLocalISOString {
          (dateString: string | undefined): string;
        }

        const toLocalISOString: ToLocalISOString = (dateString) => {
          if (!dateString) return '';
          const date = new Date(dateString);
          const offset = date.getTimezoneOffset();
          const localDate = new Date(date.getTime() - (offset * 60 * 1000));
          return localDate.toISOString().slice(0, 16);
        };
        if (eventResult.event) {
          // Format tanggal untuk input datetime-local
          const event = eventResult.event;
          event.start_time = toLocalISOString(event.startTime)
          event.end_time = toLocalISOString(event.endTime);
          // Ganti nama properti agar sesuai dengan formulir
          event.masjid_id = event.masjidId;
          // event.requires_rsvp = event.requiresRsvp
          event.max_participants = event.maxParticipants;
          event.livestream_link = event.livestreamLink;
          setInitialData(event)
        } else {
          throw new Error('Event data not found in API response.')
        }
      } catch (error: any) {
        setErrorMessage(error.message || 'Could not load event data.')
      } finally {
        setLoadingEvent(false)
      }
    }
    fetchData()
  }, [eventId])

  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    console.log('Submitting values:', values);

    setErrorMessage(null)

    const eventPayload = {
      masjidId: values.masjid_id,
      name: values.name,
      description: values.description,
      // Convert local datetime string to full ISO string (YYYY-MM-DDTHH:mm:ss.sssZ)
      startTime: new Date(values.start_time).toISOString(),
      endTime: new Date(values.end_time).toISOString(),
      requiresRsvp: values.requires_rsvp,
      maxParticipants: values.max_participants,
      livestreamLink: values.livestream_link,
      // Note: We are only sending the fields the API expects for an update.
      // Fields like is_paid and gender_restriction are omitted unless the API needs them.
    };
    try {

      const requestBody = {
        event: eventPayload,
      };

      const response = await fetch(`/api/event/update/${eventId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || `Request failed with status ${response.status}`)
      }

      alert('Event updated successfully!')
      router.push('/event-management')
    } catch (error: any) {
      setErrorMessage(error.message || 'Failed to submit the form.')
    } finally {
      setSubmitting(false)
    }
  }

  const FormField = ({ name, label, type = 'text', as = 'input', children, ...props }: any) => (
    <Form.Group as={Col} md="6" controlId={name} className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Field name={name} type={type} as={as === 'select' ? Form.Select : as === 'textarea' ? Form.Control : Form.Control} {...props}>
        {children}
      </Field>
      <ErrorMessage name={name} component={Form.Text} className="text-danger" />
    </Form.Group>
  )

  if (loadingEvent || !initialData) {
    return <div className="text-center p-5"><Spinner /></div>
  }

  return (
    <Card>
      <Card.Header>
        <h4 className="header-title">Edit Event</h4>
        <p className="text-muted mb-0">Update the event details below.</p>
      </Card.Header>
      <Card.Body>
        <Formik
          initialValues={initialData}
          validationSchema={eventValidationSchema}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {({ isSubmitting, errors, touched }) => (
            <FormikForm>
              <h5 className="mb-3">Event Details</h5>
              <Row>
                <FormField name="masjid_id" label="Masjid" as="select" disabled={loadingMasjids}>
                  <option value="">{loadingMasjids ? 'Loading masjids...' : 'Select a Masjid'}</option>
                  {masjids.map((masjid) => (
                    <option key={masjid.id} value={masjid.id}>
                      {masjid.name} - {masjid.address.addressLine1} (+{masjid.phoneNumber.countryCode} {masjid.phoneNumber.number})
                    </option>
                  ))}
                </FormField>
                <FormField name="name" label="Event Name" placeholder="e.g., Grand Recitation" />
              </Row>
              <Row>
                <FormField name="description" label="Description" as="textarea" rows={3} placeholder="Enter a brief description of the event" />
              </Row>

              <hr className="my-4" />

              <h5 className="mb-3">Date and Time</h5>
              <Row>
                <FormField name="start_time" label="Start Time" type="datetime-local" />
                <FormField name="end_time" label="End Time" type="datetime-local" />
              </Row>

              <hr className="my-4" />

              <h5 className="mb-3">Logistics & Restrictions</h5>
              <Row>
                <FormField name="max_participants" label="Max Participants" type="number" placeholder="e.g., 100" />
              </Row>
              <Row>
                <FormField name="livestream_link" label="Livestream Link (Optional)" type="url" placeholder="https://..." />
              </Row>
              <Row className="align-items-center">
              </Row>

              <div className="mt-3">
                {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                <Button type="submit" disabled={isSubmitting} variant="primary">
                  {isSubmitting ? (
                    <><Spinner as="span" animation="border" size="sm" /> Submitting...</>
                  ) : (
                    'Update Event'
                  )}
                </Button>

                {Object.keys(errors).length > 0 && Object.keys(touched).length > 0 && (
                  <Alert variant="danger" className="mb-3">
                    <div className="fw-bold">Please correct the following errors:</div>
                    <ul>
                      {Object.values(errors).map((error, index) => (
                        <li key={index}>{error}</li>
                      ))}
                    </ul>
                  </Alert>
                )}
              </div>
            </FormikForm>
          )}
        </Formik>
      </Card.Body>
    </Card>
  )
}
