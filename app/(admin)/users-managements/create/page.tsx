'use client';

import React, { useState } from 'react';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Card, Col, Form, Row, Alert, Spinner } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
// You can add custom styles for the phone input here if needed
// import './BootstrapPhoneInput.css';

import type { FieldInputProps, FormikProps, FieldMetaProps } from 'formik';

//================================================================================
// Bootstrap Phone Input Component
//================================================================================
interface BootstrapPhoneInputProps {
    field: FieldInputProps<any>;
    form: FormikProps<any>;
    meta?: FieldMetaProps<any>;
}

const BootstrapPhoneInput: React.FC<BootstrapPhoneInputProps> = ({ field, form }) => {
    const { name, value } = field;
    const { touched, errors, setFieldValue } = form;

    // Check if the field has been touched and if there's an error
    const errorMsg = touched[name] && errors[name];

    return (
        <div>
            <PhoneInput
                country={'us'} // Default country selection
                value={value}
                onChange={(phone) => {
                    // Set the field value in E.164 format (e.g., +12133734253)
                    setFieldValue(name, `+${phone}`);
                }}
                // Apply Bootstrap's 'is-invalid' class when there's an error
                inputClass={`form-control ${errorMsg ? 'is-invalid' : ''}`}
                inputProps={{ name }}
            />
            {/* Display the error message if it exists */}
            {typeof errorMsg === 'string' && (
                <div className="invalid-feedback d-block">{errorMsg}</div>
            )}
        </div>
    );
};


//================================================================================
// Main Create User Form Component
//================================================================================

// Validation schema for the user registration form
const userValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    username: Yup.string().required('Username is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    // Add a validation rule for the phone number
    phoneNumber: Yup.string().required('Phone number is required').min(10, 'Phone number seems too short'),
    gender: Yup.string().oneOf(['MALE', 'FEMALE']).required('Gender is required'),
    role: Yup.string().required('Role is required'),
});

export default function CreateUserForm() {
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
    };

    const handleSubmit = async (values: typeof initialValues, { setSubmitting }: any) => {
        setErrorMessage(null);
        try {
            // The form will post to your Next.js API route
            const response = await fetch('/api/user/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            });

            const result = await response.json();

            if (!response.ok) {
                // Use the error message from the backend if available
                throw new Error(result.message || `Request failed with status ${response.status}`);
            }

            // On success, redirect to the users management page
            router.push('/users-managements');
        } catch (error: any) {
            setErrorMessage(error.message || 'Failed to submit the form.');
        } finally {
            setSubmitting(false);
        }
    };

    // Reusable helper component for standard form fields
    const FormField = ({ name, label, type = 'text', as = 'input', children }: { name: string; label: string; type?: string; as?: string; children?: React.ReactNode }) => (
        <Field name={name}>
            {({ field, meta }: { field: any; meta: any }) => (
                <Form.Group as={Col} md="6" controlId={name} className="mb-3">
                    <Form.Label>{label}</Form.Label>
                    {as === 'select' ? (
                        <Form.Select
                            {...field}
                            isInvalid={meta.touched && !!meta.error}
                        >
                            {children}
                        </Form.Select>
                    ) : (
                        <Form.Control
                            {...field}
                            type={type}
                            isInvalid={meta.touched && !!meta.error}
                        />
                    )}
                    <ErrorMessage name={name} component={Form.Text} className="text-danger" />
                </Form.Group>
            )}
        </Field>
    );

    return (
        <Card>
            <Card.Body>
                <Formik initialValues={initialValues} validationSchema={userValidationSchema} onSubmit={handleSubmit}>
                    {({ isSubmitting, errors, touched }) => (
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
                                {/* --- Custom Phone Input Field --- */}
                                <Form.Group as={Col} md="6" controlId="phoneNumber" className="mb-3">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Field
                                        name="phoneNumber"
                                        component={BootstrapPhoneInput}
                                    />
                                     {/* ErrorMessage is handled inside BootstrapPhoneInput, but you could have a fallback here if needed */}
                                </Form.Group>
                                {/* --- End Custom Phone Input Field --- */}
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
                                            <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> Submitting...
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
    );
}
