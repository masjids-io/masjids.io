'use client'

import React, { useState, useEffect } from 'react' // FIX: Corrected the import statement
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Button, Card, Col, Form, Row, Alert, Spinner } from 'react-bootstrap'
import { useParams, useRouter } from 'next/navigation'

// Define a complete and accurate User type
// It's recommended to move this to a shared types file (e.g., @/types/index.ts)
type User = {
    id: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: 'MALE' | 'FEMALE' | 'UNSPECIFIED';
    role: string;
    password?: string;
};


// Validation schema for the user form (now only for editing)
const userValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    username: Yup.string().required('Username is required'),
    // Password is now always optional for editing
    password: Yup.string().min(6, 'Password must be at least 6 characters'),
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    gender: Yup.string().oneOf(['MALE', 'FEMALE', 'UNSPECIFIED']).required('Gender is required'),
    role: Yup.string().required('Role is required'),
});

// Props for the Edit User form


// Renamed component to better reflect its single purpose
export default function EditUserForm() {
    const params = useParams();
    const id = params.id as string
    const router = useRouter()
    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    // State for fetching data
    const [initialData, setInitialData] = useState<Partial<User> | null>(null);
    const [loading, setLoading] = useState(true);

    // useEffect to fetch data for editing
    useEffect(() => {
        if (id) {
            const fetchUser = async () => {
                setLoading(true);
                try {
                    const response = await fetch(`/api/user/get/${id}`);
                    console.log(response);

                    if (!response.ok) {
                        throw new Error('Failed to fetch user data.');
                    }
                    const result = await response.json();
                    if (result.getUserResponse) {
                        setInitialData(result.getUserResponse);
                    } else {
                        throw new Error('User data not found in API response.');
                    }
                } catch (err: any) {
                    setErrorMessage(err.message);
                } finally {
                    setLoading(false);
                }
            };
            fetchUser();
        }
    }, [id]);

    // Default values to merge with fetched data
    const defaultValues: Omit<User, 'id'> = {
        email: '',
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        gender: 'MALE',
        role: 'MASJID_MEMBER',
    }

    // Ensure formInitialValues is never null and handles nested objects safely
    const formInitialValues = initialData ? { ...defaultValues, ...initialData, password: '' } : defaultValues;

    const handleSubmit = async (values: typeof defaultValues, { setSubmitting }: any) => {
        setErrorMessage(null)

        const url = `/api/user/update/${id}`;
        const method = 'PATCH';

        const submissionValues = { ...values };
        // If the password field is empty, don't send it in the request
        if (!submissionValues.password) {
            delete submissionValues.password;
        }

        try {
            const response = await fetch(url, {
                method: method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(submissionValues),
            })

            const result = await response.json()

            if (!response.ok) {
                throw new Error(result.message || `Request failed with status ${response.status}`)
            }

            // alert('User updated successfully!');
            router.push('/users-managements'); // Redirect after successful update

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

    // Show spinner only while fetching. The form will render with defaults initially.
    if (loading) {
        return (
            <div className="text-center p-5">
                <Spinner animation="border" />
                <p className="mt-2">Loading user data...</p>
            </div>
        );
    }

    return (
        <Card>
            <Card.Body>
                <Formik
                    initialValues={formInitialValues}
                    validationSchema={userValidationSchema}
                    onSubmit={handleSubmit}
                    enableReinitialize // This is crucial for populating the form with fetched data
                >
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
                                <FormField name="password" label="New Password (Optional)" type="password" />
                                <FormField name="phoneNumber" label="Phone Number" />
                            </Row>
                            <Row>
                                <FormField name="gender" label="Gender" as="select">
                                    <option value="MALE">Male</option>
                                    <option value="FEMALE">Female</option>
                                    <option value="UNSPECIFIED">Unspecified</option>
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
                                        <><Spinner as="span" animation="border" size="sm" /> Submitting...</>
                                    ) : (
                                        'Update User'
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
