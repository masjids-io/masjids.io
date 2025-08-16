'use client'

import React, { useState, useEffect } from 'react'
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Button, Card, Col, Form, Row, Alert, Spinner } from 'react-bootstrap'
import { useRouter } from 'next/navigation'

// --- PERUBAHAN: Tipe diperbarui untuk menyertakan phoneNumber ---
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

// Skema validasi menggunakan Yup
const eventValidationSchema = Yup.object().shape({
  masjid_id: Yup.string().required('Masjid is required'),
  name: Yup.string().required('Event name is required'),
  description: Yup.string().required('Description is required'),
  start_time: Yup.date().required('Start time is required'),
  end_time: Yup.date()
    .required('End time is required')
    .min(Yup.ref('start_time'), 'End time must be after start time'),
  gender_restriction: Yup.string().required('Gender restriction is required'),
  is_paid: Yup.boolean(),
  requires_rsvp: Yup.boolean(),
  max_participants: Yup.number()
    .typeError('Must be a number')
    .min(0, 'Cannot be negative')
    .integer('Must be an integer'),
  livestream_link: Yup.string().url('Must be a valid URL'),
})

// Komponen Formulir Utama
export default function CreateEventForm() {
  const router = useRouter()
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [masjids, setMasjids] = useState<Masjid[]>([])
  const [loadingMasjids, setLoadingMasjids] = useState(true)

  // Mengambil daftar masjid saat komponen dimuat
  useEffect(() => {
    const fetchMasjids = async () => {
      try {
        const response = await fetch('/api/masjids/get')
        if (!response.ok) {
          throw new Error('Failed to fetch masjids')
        }
        const result = await response.json()
        if (result.listMasjidResponse?.masjids) {
          setMasjids(result.listMasjidResponse.masjids)
        }
      } catch (error) {
        setErrorMessage('Could not load masjids list.')
      } finally {
        setLoadingMasjids(false)
      }
    }
    fetchMasjids()
  }, [])

  // Nilai awal untuk formulir
  const initialValues = {
    masjid_id: '',
    name: '',
    description: '',
    start_time: '',
    end_time: '',
    gender_restriction: 'NO_RESTRICTION',
    is_paid: false,
    requires_rsvp: true,
    max_participants: 100,
    livestream_link: '',
  }

  const handleSubmit = async (values: typeof initialValues, { setSubmitting }: any) => {
    setErrorMessage(null)
    try {

        const payload = {
        ...values,
        start_time: new Date(values.start_time).toISOString(),
        end_time: new Date(values.end_time).toISOString(),
      };

      const response = await fetch('/api/event/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || `Request failed with status ${response.status}`)
      }

      alert('Event created successfully!')
      router.push('/event-management') // Arahkan ke halaman daftar event setelah berhasil
    } catch (error: any) {
      setErrorMessage(error.message || 'Failed to submit the form.')
    } finally {
      setSubmitting(false)
    }
  }

  // Komponen bantuan untuk kolom formulir
  const FormField = ({ name, label, type = 'text', as = 'input', children, ...props }: any) => (
    <Form.Group as={Col} md="6" controlId={name} className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Field name={name} type={type} as={as === 'select' ? Form.Select : as === 'textarea' ? Form.Control : Form.Control} {...props}>
        {children}
      </Field>
      <ErrorMessage name={name} component={Form.Text} className="text-danger" />
    </Form.Group>
  )

  return (
    <Card>
      <Card.Header>
        <h4 className="header-title">Create New Event</h4>
        <p className="text-muted mb-0">Fill out the form below to add a new event.</p>
      </Card.Header>
      <Card.Body>
        <Formik initialValues={initialValues} validationSchema={eventValidationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <FormikForm>
              <h5 className="mb-3">Event Details</h5>
              <Row>
                <FormField name="masjid_id" label="Masjid" as="select" disabled={loadingMasjids}>
                  <option value="">{loadingMasjids ? 'Loading masjids...' : 'Select a Masjid'}</option>
                  {/* --- PERUBAHAN: Label dropdown diperbarui untuk menyertakan nomor telepon --- */}
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
                <FormField name="gender_restriction" label="Gender Restriction" as="select">
                  <option value="NO_RESTRICTION">No Restriction</option>
                  <option value="MALE_ONLY">Male Only</option>
                  <option value="FEMALE_ONLY">Female Only</option>
                </FormField>
                <FormField name="max_participants" label="Max Participants" type="number" placeholder="e.g., 100" />
              </Row>
              <Row>
                <FormField name="livestream_link" label="Livestream Link (Optional)" type="url" placeholder="https://..." />
              </Row>
              <Row className="align-items-center">
                <Col md={6} className="mb-3">
                  <Field as={Form.Check} type="checkbox" name="is_paid" id="is_paid" label="This is a paid event" />
                </Col>
                <Col md={6} className="mb-3">
                  <Field as={Form.Check} type="checkbox" name="requires_rsvp" id="requires_rsvp" label="Requires RSVP" />
                </Col>
              </Row>

              <div className="mt-3">
                {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                <Button type="submit" disabled={isSubmitting} variant="primary">
                  {isSubmitting ? (
                    <>
                      <Spinner as="span" animation="border" size="sm" /> Submitting...
                    </>
                  ) : (
                    'Create Event'
                  )}
                </Button>
              </div>
            </FormikForm>
          )}
        </Formik>
      </Card.Body>
    </Card>
  )
}
