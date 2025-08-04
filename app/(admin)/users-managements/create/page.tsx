'use client'

import React, { useState } from 'react'
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Button, Card, Col, Form, Row, Alert, Spinner } from 'react-bootstrap'
import { useRouter } from 'next/navigation'

// Validation schema for the user registration form
const userValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  username: Yup.string().required('Username is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  phoneNumber: Yup.string().required('Phone number is required'),
  gender: Yup.string().oneOf(['MALE', 'FEMALE']).required('Gender is required'),
  role: Yup.string().required('Role is required'),
})

// Main Form Component
export default function CreateUserForm() {
  const router = useRouter()
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  // Default values for the form fields
  const initialValues = {
    email: '',
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    gender: 'MALE',
    role: 'MASJID_MEMBER',
  }

  const handleSubmit = async (values: typeof initialValues, { setSubmitting }: any) => {
    setErrorMessage(null)
    try {
      // The form will post to your Next.js API route
      const response = await fetch('/api/user/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })

      const result = await response.json()

      if (!response.ok) {
        // Use the error message from the backend if available
        throw new Error(result.message || `Request failed with status ${response.status}`)
      }

      // On success, redirect to the login page
      router.push('/users-managements')
    } catch (error: any) {
      setErrorMessage(error.message || 'Failed to submit the form.')
    } finally {
      setSubmitting(false)
    }
  }

  // Reusable helper component for form fields
  const FormField = ({ name, label, type = 'text', as = 'input', children }: { name: string; label: string; type?: string; as?: string; children?: React.ReactNode }) => (
    <Form.Group as={Col} md="6" controlId={name} className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Field name={name} type={type} as={as === 'select' ? Form.Select : Form.Control}>
        {children}
      </Field>
      <ErrorMessage name={name} component={Form.Text} className="text-danger" />
    </Form.Group>
  )

  return (
    <Card>
      <Card.Body>
        <Formik initialValues={initialValues} validationSchema={userValidationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <FormikForm>
              <h5 className="mb-3">User Information</h5>
              <Row>
                <FormField name="firstName" label="First Name" />
                <FormField name="lastName" label="Last Name" />
              </Row>
              <Row>
                <FormField name="email" label="Email" type="email" />
                <FormField name="username" label="Username" />
              </Row>
              <Row>
                <FormField name="password" label="Password" type="password" />
                <FormField name="phoneNumber" label="Phone Number" />
              </Row>
              <Row>
                <FormField name="gender" label="Gender" as="select">
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                </FormField>
                <FormField name="role" label="Role" as="select">
                  <option value="MASJID_MEMBER">Masjid Member</option>
                  <option value="MASJID_VOLUNTEER">Masjid Volunteer</option>
                  <option value="MASJID_ADMIN">Masjid Admin</option>
                  <option value="MASJID_IMAM">Masjid Imam</option>
                  <option value="UNSPECIFIED">Unspecified</option>
                </FormField>
              </Row>

              <div className="mt-4">
                {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                <Button type="submit" disabled={isSubmitting} variant="primary">
                  {isSubmitting ? (
                    <>
                      <Spinner as="span" animation="border" size="sm" /> Submitting...
                    </>
                  ) : (
                    'Create User'
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
