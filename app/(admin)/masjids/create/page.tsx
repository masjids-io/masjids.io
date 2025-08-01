'use client';

import React, { useState } from 'react';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  Card,
  Col,
  Form,
  Row,
  Alert,
  Spinner,
} from 'react-bootstrap';

// Validation Schema using Yup to match the nested JSON structure
const masjidValidationSchema = Yup.object().shape({
  name: Yup.string().required('Masjid name is required'),
  location: Yup.string().required('Location is required'),
  is_verified: Yup.boolean().required('Verification status is required'),
  address: Yup.object().shape({
    address_line_1: Yup.string().required('Address Line 1 is required'),
    address_line_2: Yup.string(), // Optional
    zone_code: Yup.string().required('Zone code is required'),
    postal_code: Yup.string().required('Postal code is required'),
    city: Yup.string().required('City is required'),
    country_code: Yup.string().required('Country code is required').length(2, 'Must be 2 characters'),
  }),
  phoneNumber: Yup.object().shape({
    country_code: Yup.string().required('Country code is required'),
    number: Yup.string().required('Phone number is required'),
    extension: Yup.string(), // Optional
  }),
  prayerConfig: Yup.object().shape({
    method: Yup.string().required('Prayer method is required'),
    fajrAngle: Yup.number().typeError('Must be a number').required('Fajr angle is required'),
    ishaAngle: Yup.number().typeError('Must be a number').required('Isha angle is required'),
    ishaInterval: Yup.number().typeError('Must be a number').required('Isha interval is required'),
    asrMethod: Yup.string().required('Asr method is required'),
    highLatitudeRule: Yup.string().required('High latitude rule is required'),
    adjustments: Yup.object().shape({
        fajrAdjustment: Yup.number().typeError('Must be a number').required('Fajr adjustment is required'),
        dhuhrAdjustment: Yup.number().typeError('Must be a number').required('Dhuhr adjustment is required'),
        asrAdjustment: Yup.number().typeError('Must be a number').required('Asr adjustment is required'),
        maghribAdjustment: Yup.number().typeError('Must be a number').required('Maghrib adjustment is required'),
        ishaAdjustment: Yup.number().typeError('Must be a number').required('Isha adjustment is required'),
    })
  }),
});

// Main Form Component
export default function CreateMasjidForm() {
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  // Default values for the form fields
  const initialValues = {
    name: '',
    location: 'Indonesia',
    is_verified: true,
    address: {
      address_line_1: '',
      address_line_2: '',
      zone_code: '',
      postal_code: '',
      city: 'Mataram',
      country_code: 'ID',
    },
    phoneNumber: {
      country_code: '62',
      number: '',
      extension: '',
    },
    prayerConfig: {
      method: 'MUSLIM_WORLD_LEAGUE',
      fajrAngle: 18,
      ishaAngle: 17,
      ishaInterval: 0,
      asrMethod: 'SHAFI_HANBALI_MALIKI',
      highLatitudeRule: 'MIDDLE_OF_THE_NIGHT',
      adjustments: {
        fajrAdjustment: 0,
        dhuhrAdjustment: 5,
        asrAdjustment: 0,
        maghribAdjustment: 0,
        ishaAdjustment: 7,
      },
    },
  };

  const handleSubmit = async (values: typeof initialValues, { setSubmitting, resetForm }: any) => {
    setFormStatus(null);
    try {
      // The form will post to our Next.js API route, which then securely forwards the request.
      const response = await fetch('/api/masjids', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (!response.ok) {
        // Use the error message from the backend if available
        throw new Error(result.error || `Request failed with status ${response.status}`);
      }

      setFormStatus({ type: 'success', message: 'Masjid created successfully!' });
      resetForm();

    } catch (error: any) {
      setFormStatus({ type: 'error', message: error.message || 'Failed to submit the form.' });
    } finally {
      setSubmitting(false);
    }
  };

  // Reusable helper component for form fields. It now accepts children.
  const FormField = ({ name, label, type = 'text', as = 'input', children }: { name: string, label: string, type?: string, as?: string, children?: React.ReactNode }) => (
    <Form.Group as={Col} md="6" controlId={name} className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Field
        name={name}
        type={type}
        as={as === 'select' ? Form.Select : Form.Control}
      >
        {/* This will now correctly render children ONLY for select elements */}
        {children}
      </Field>
      <ErrorMessage name={name} component={Form.Text} className="text-danger" />
    </Form.Group>
  );

  return (
    <Card>
      <Card.Body>
        <Formik
          initialValues={initialValues}
          validationSchema={masjidValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <FormikForm>
              <h5 className="mb-3">Basic Information</h5>
              <Row>
                <FormField name="name" label="Masjid Name" />
                <FormField name="location" label="Location" />
              </Row>
              <Form.Group className="mb-4">
                 <Field as={Form.Check} type="checkbox" name="is_verified" id="is_verified" label="Is Verified" />
              </Form.Group>
              
              <hr />
              <h5 className="mb-3">Address</h5>
              <Row>
                <FormField name="address.address_line_1" label="Address Line 1" />
                <FormField name="address.address_line_2" label="Address Line 2 (Optional)" />
              </Row>
              <Row>
                <FormField name="address.city" label="City" />
                <FormField name="address.zone_code" label="Zone Code" />
              </Row>
              <Row>
                <FormField name="address.postal_code" label="Postal Code" />
                <FormField name="address.country_code" label="Country Code" />
              </Row>

              <hr />
              <h5 className="mb-3">Phone Number</h5>
              <Row>
                <FormField name="phoneNumber.country_code" label="Country Code" />
                <FormField name="phoneNumber.number" label="Number" />
                <FormField name="phoneNumber.extension" label="Extension (Optional)" />
              </Row>

              <hr />
              <h5 className="mb-3">Prayer Configuration</h5>
               <Row>
                {/* UPDATED: Calculation Method is now a select dropdown */}
                <FormField name="prayerConfig.method" label="Calculation Method" as="select">
                    <option value="MUSLIM_WORLD_LEAGUE">Muslim World League</option>
                    <option value="EGYPTIAN">Egyptian</option>
                    <option value="KARACHI">Karachi</option>
                    <option value="UMM_AL_QURA">Umm Al-Qura</option>
                    <option value="DUBAI">Dubai</option>
                    <option value="MOON_SIGHTING_COMMITTEE">Moon Sighting Committee</option>
                    <option value="NORTH_AMERICA">North America</option>
                    <option value="KUWAIT">Kuwait</option>
                    <option value="QATAR">Qatar</option>
                    <option value="SINGAPORE">Singapore</option>
                    <option value="UOIF">UOIF</option>
                    <option value="OTHER">Other</option>
                </FormField>
                {/* UPDATED: Asr Method is now a select dropdown */}
                <FormField name="prayerConfig.asrMethod" label="Asr Method" as="select">
                    <option value="SHAFI_HANBALI_MALIKI">Shafi/Hanbali/Maliki</option>
                    <option value="HANAFI">Hanafi</option>
                </FormField>
              </Row>
               <Row>
                <FormField name="prayerConfig.fajrAngle" label="Fajr Angle" type="number" />
                <FormField name="prayerConfig.ishaAngle" label="Isha Angle" type="number" />
              </Row>
               <Row>
                <FormField name="prayerConfig.ishaInterval" label="Isha Interval" type="number" />
                {/* UPDATED: High Latitude Rule is now a select dropdown */}
                <FormField name="prayerConfig.highLatitudeRule" label="High Latitude Rule" as="select">
                    <option value="MIDDLE_OF_THE_NIGHT">Middle of the Night</option>
                    <option value="SEVENTH_OF_THE_NIGHT">Seventh of the Night</option>
                    <option value="TWILIGHT_ANGLE">Twilight Angle</option>
                    <option value="NO_HIGH_LATITUDE_RULE">No High Latitude Rule</option>
                </FormField>
              </Row>
              
              <h6 className="mt-4 mb-3">Prayer Adjustments (minutes)</h6>
              <Row>
                <FormField name="prayerConfig.adjustments.fajrAdjustment" label="Fajr" type="number" />
                <FormField name="prayerConfig.adjustments.dhuhrAdjustment" label="Dhuhr" type="number" />
                <FormField name="prayerConfig.adjustments.asrAdjustment" label="Asr" type="number" />
              </Row>
              <Row>
                <FormField name="prayerConfig.adjustments.maghribAdjustment" label="Maghrib" type="number" />
                <FormField name="prayerConfig.adjustments.ishaAdjustment" label="Isha" type="number" />
              </Row>

              <div className="mt-4">
                {formStatus && (
                  <Alert variant={formStatus.type}>
                    {formStatus.message}
                  </Alert>
                )}
                <Button type="submit" disabled={isSubmitting} variant="primary">
                  {isSubmitting ? <><Spinner as="span" animation="border" size="sm" /> Submitting...</> : 'Create Masjid'}
                </Button>
              </div>
            </FormikForm>
          )}
        </Formik>
      </Card.Body>
    </Card>
  );
}
