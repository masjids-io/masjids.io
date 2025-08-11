'use client'

import React, { useState } from 'react'
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Button, Card, Col, Form, Row, Alert, Spinner } from 'react-bootstrap'
import { useRouter } from 'next/navigation'
import BootstrapPhoneInput from '@/components/forms/BootstrapPhoneInput'


// --- FIX: Define a complete and accurate Masjid type ---
// It's recommended to move this to a shared types file (e.g., @/types/index.ts)
export type Masjid = {
  id: string;
  name: string;
  location: string;
  isVerified: boolean;
  address: {
    addressLine1: string;
    addressLine2?: string;
    zoneCode: string;
    postalCode: string;
    city: string;
    countryCode: string;
  };
  phoneNumber: {
    countryCode: string;
    number: string;
    extension?: string;
  };
  prayerConfig: {
    method: string;
    fajrAngle: number;
    ishaAngle: number;
    ishaInterval: number;
    asrMethod: string;
    highLatitudeRule: string;
    adjustments: {
      fajrAdjustment: number;
      dhuhrAdjustment: number;
      asrAdjustment: number;
      maghribAdjustment: number;
      ishaAdjustment: number;
    };
  };
  createTime?: string;
  updateTime?: string;
};

// Updated validation schema - simplified phone number validation since BootstrapPhoneInput handles formatting
const masjidValidationSchema = Yup.object().shape({
  name: Yup.string().required('Masjid name is required'),
  location: Yup.string().required('Location is required'),
  isVerified: Yup.boolean().required('Verification status is required'),
  address: Yup.object().shape({
    addressLine1: Yup.string().required('Address Line 1 is required'),
    addressLine2: Yup.string(), // Optional
    zoneCode: Yup.string().required('Zone code is required'),
    postalCode: Yup.string().required('Postal code is required'),
    city: Yup.string().required('City is required'),
    countryCode: Yup.string().required('Country code is required').length(2, 'Must be 2 characters'),
  }),
  // Simplified phone validation - BootstrapPhoneInput returns E.164 format
  phoneNumber: Yup.string()
    .required('Phone number is required')
    .matches(/^\+[1-9]\d{1,14}$/, 'Please enter a valid phone number'),
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

// Helper function to convert phone object to E.164 string
const convertPhoneToE164 = (phoneObj: any): string => {
  if (!phoneObj || typeof phoneObj === 'string') return phoneObj || '';
  
  const { countryCode, number } = phoneObj;
  if (!countryCode || !number) return '';
  
  // Clean the number and ensure it starts with country code
  const cleanNumber = number.replace(/\D/g, '');
  return `+${countryCode}${cleanNumber}`;
};

// Helper function to convert E.164 string back to phone object
const convertE164ToPhoneObject = (e164: string) => {
  if (!e164 || !e164.startsWith('+')) {
    return { countryCode: '62', number: '', extension: '' };
  }
  
  // Extract country code (assumes 1-3 digits after +)
  const match = e164.match(/^\+(\d{1,3})(.*)$/);
  if (!match) {
    return { countryCode: '62', number: '', extension: '' };
  }
  
  return {
    countryCode: match[1],
    number: match[2],
    extension: ''
  };
};

// The form now accepts props to handle edit mode
type MasjidFormProps = {
  isEditMode?: boolean
  initialData?: Partial<Masjid> | null // Allow partial data for robustness
}

// Helper function to collect all error messages from a nested errors object
const collectErrorMessages = (obj: any): string[] => {
    let messages: string[] = [];
    for (const key in obj) {
        const value = obj[key];
        if (typeof value === 'string') {
            messages.push(value);
        } else if (typeof value === 'object' && value !== null) {
            messages = messages.concat(collectErrorMessages(value));
        }
    }
    return messages;
};

export default function CreateMasjidForm({ isEditMode = false, initialData = null }: MasjidFormProps) {
  const router = useRouter()
  const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  // Default values using camelCase
  const defaultValues = {
    name: '',
    location: 'Indonesia',
    isVerified: true,
    address: {
      addressLine1: '',
      addressLine2: '',
      zoneCode: '',
      postalCode: '',
      city: 'Mataram',
      countryCode: 'ID',
    },
    phoneNumber: '', // Now a simple string for E.164 format
    prayerConfig: {
      method: 'MUSLIM_WORLD_LEAGUE',
      fajrAngle: 18,
      ishaAngle: 17,
      ishaInterval: 0,
      asrMethod: 'SHAFI_HANBALI_MALIKI',
      highLatitudeRule: 'MIDDLE_OF_THE_NIGHT',
      adjustments: {
        fajrAdjustment: 0,
        dhuhrAdjustment: 0,
        asrAdjustment: 0,
        maghribAdjustment: 0,
        ishaAdjustment: 0,
      },
    },
  }

  // Prepare initial values based on mode
  const getInitialValues = () => {
    if (isEditMode && initialData) {
      return {
        ...defaultValues,
        name: initialData.name || '',
        location: initialData.location || 'Indonesia',
        isVerified: initialData.isVerified ?? true,
        address: {
          addressLine1: initialData.address?.addressLine1 || '',
          addressLine2: initialData.address?.addressLine2 || '',
          zoneCode: initialData.address?.zoneCode || '',
          postalCode: initialData.address?.postalCode || '',
          city: initialData.address?.city || 'Mataram',
          countryCode: initialData.address?.countryCode || 'ID',
        },
        // Convert phone object to E.164 string for the phone input
        phoneNumber: convertPhoneToE164(initialData.phoneNumber),
        prayerConfig: {
          method: initialData.prayerConfig?.method || 'MUSLIM_WORLD_LEAGUE',
          fajrAngle: initialData.prayerConfig?.fajrAngle || 18,
          ishaAngle: initialData.prayerConfig?.ishaAngle || 17,
          ishaInterval: initialData.prayerConfig?.ishaInterval || 0,
          asrMethod: initialData.prayerConfig?.asrMethod || 'SHAFI_HANBALI_MALIKI',
          highLatitudeRule: initialData.prayerConfig?.highLatitudeRule || 'MIDDLE_OF_THE_NIGHT',
          adjustments: {
            fajrAdjustment: initialData.prayerConfig?.adjustments?.fajrAdjustment || 0,
            dhuhrAdjustment: initialData.prayerConfig?.adjustments?.dhuhrAdjustment || 0,
            asrAdjustment: initialData.prayerConfig?.adjustments?.asrAdjustment || 0,
            maghribAdjustment: initialData.prayerConfig?.adjustments?.maghribAdjustment || 0,
            ishaAdjustment: initialData.prayerConfig?.adjustments?.ishaAdjustment || 0,
          },
        },
      };
    }
    return defaultValues;
  };

  const handleSubmit = async (values: ReturnType<typeof getInitialValues>, { setSubmitting }: any) => {
    setFormStatus(null)
    
    try {
      // Transform the phone number back to your expected object format
      const transformedValues = {
        ...values,
        phoneNumber: convertE164ToPhoneObject(values.phoneNumber)
      };

      const url = isEditMode ? `/api/masjids/update/${initialData?.id}` : '/api/masjids'
      const method = isEditMode ? 'PATCH' : 'POST'

      const response = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(transformedValues),
      })

      if (!response.ok) {
        const result = await response.json()
        throw new Error(result.error || 'Request failed')
      }

      router.push('/masjids')
    } catch (error: any) {
      setFormStatus({ type: 'error', message: error.message })
    } finally {
      setSubmitting(false)
    }
  }
  
  const FormField = ({ name, label, type = 'text', as = 'input', children }: { name: string, label: string, type?: string, as?: string, children?: React.ReactNode }) => (
    <Form.Group as={Col} md="6" controlId={name} className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Field name={name} type={type} as={as === 'select' ? Form.Select : Form.Control}>
        {children}
      </Field>
      <ErrorMessage name={name} component={Form.Text} className="text-danger" />
    </Form.Group>
  );

  const formInitialValues = getInitialValues();

  return (
    <Formik
      initialValues={formInitialValues}
      validationSchema={masjidValidationSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ isSubmitting, errors, isValid, submitCount }) => (
        <FormikForm>
          <h5 className="mb-3">Basic Information</h5>
          <Row>
            <FormField name="name" label="Masjid Name" />
            <FormField name="location" label="Location" />
          </Row>
          <Form.Group className="mb-4">
              <Field as={Form.Check} type="checkbox" name="isVerified" id="isVerified" label="Is Verified" />
          </Form.Group>
          
          <hr />
          <h5 className="mb-3">Address</h5>
          <Row>
            <FormField name="address.addressLine1" label="Address Line 1" />
            <FormField name="address.addressLine2" label="Address Line 2 (Optional)" />
          </Row>
          <Row>
            <FormField name="address.city" label="City" />
            <FormField name="address.zoneCode" label="Zone Code" />
          </Row>
          <Row>
            <FormField name="address.postalCode" label="Postal Code" />
            <FormField name="address.countryCode" label="Country Code" />
          </Row>

          <hr />
          <h5 className="mb-3">Phone Number</h5>
          <Row>
            <Form.Group as={Col} md="12" className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Field name="phoneNumber" component={BootstrapPhoneInput} />
            </Form.Group>
          </Row>

          <hr />
          <h5 className="mb-3">Prayer Configuration</h5>
            <Row>
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
            <Button type="submit" disabled={isSubmitting} variant="primary">
              {isSubmitting ? (
                <>
                  <Spinner as="span" animation="border" size="sm" /> 
                  {isEditMode ? 'Updating...' : 'Submitting...'}
                </>
              ) : (
                isEditMode ? 'Update Masjid' : 'Create Masjid'
              )}
            </Button>
          </div>

          {!isValid && submitCount > 0 && (
            <Alert variant="danger" className="mt-3">
                <h6 className="alert-heading">Please correct the following errors before submitting:</h6>
                <ul>
                    {collectErrorMessages(errors).map((message, index) => (
                        <li key={index}>{message}</li>
                    ))}
                </ul>
            </Alert>
          )}

          {formStatus && formStatus.type === 'error' && (
            <Alert variant="danger" className="mt-3">
                {formStatus.message}
            </Alert>
          )}

        </FormikForm>
      )}
    </Formik>
  )
}

