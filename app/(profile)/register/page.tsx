// CHANGE 1: Add 'use client' at the very top of the file
'use client';

import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
// CHANGE 2: Import useRouter from 'next/navigation' instead of 'next/router'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// Define the validation schema with Yup
const RegistrationSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('First name is required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Last name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    phoneNumber: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(8, 'Must be at least 8 digits')
        .required('Phone number is required'),
    gender: Yup.string()
        .oneOf(['MALE', 'FEMALE'], 'Please select a gender')
        .required('Gender is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
    // Note: Using `null` here is slightly more robust than `undefined`
    confirm_password: Yup.string()
        .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
        .required('Confirming your password is required'),
});


export default function Register() {
    const router = useRouter();
    const [formError, setFormError] = useState('');

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            gender: '',
            password: '',
            confirm_password: '',
        },
        validationSchema: RegistrationSchema,
        onSubmit: async (values, { setSubmitting }) => {
            setFormError(''); // Clear previous errors
            try {
                // Prepare data and send with Axios
                const payload = {
                    email: values.email,
                    username: values.email,
                    password: values.password,
                    isEmailVerified: false,
                    firstName: values.firstName,
                    lastName: values.lastName,
                    phoneNumber: values.phoneNumber,
                    gender: values.gender,
                };

                const apiUrl = `/api/register`;
                const response = await axios.post(apiUrl, payload);

                console.log('Registration successful:', response.data);
                router.push('/login');

            } catch (error) {
                // This is a good way to handle Axios errors specifically
                if (axios.isAxiosError(error)) {
                    console.error('Registration failed:', error.response?.data || error.message);
                    setFormError(error.response?.data?.message || 'An unexpected error occurred. Please try again.');
                } else {
                    console.error('Registration failed with a non-Axios error:', error);
                    setFormError('An unexpected error occurred. Please try again.');
                }
                setSubmitting(false);
            }
        },
    });

    return (
        <>
            <Layout headerLayout={11} logo="logo-flat">
                <section className="overflow-hidden h-screen md:h-auto md:mt-112 sm:mt-80">
                    <div className="row x-gap-120 h-1/1 items-center">
                        {/* Left side background */}
                        <div className="col-lg-6 h-1/1 relative md:h-300">
                            <div className="bg-image absolute-full-center md:bg-pos-top js-lazy" style={{ backgroundImage: 'url("/img/forms/bg.png")', filter: 'blur(1px)' }} />
                            <div className="pl-60 md:pl-0 absolute-full-center z-2">
                                <div className="pl-120 lg:pl-48 md:pl-0 pt-120 md:pt-100">
                                    <div className="pt-120 md:pt-0">
                                        <div className="md:container sm:w-screen">
                                            <h1 className="text-4xl md:text-3xl text-white">Get started with<br /> masjids.io</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right side form */}
                        <div className="col-lg-5">
                            <div className="md:container py-48">
                                <h1 className="text-4xl md:text-3xl">Register</h1>
                                <p className="mt-16">Already have an account? <Link className="decoration-none text-accent fw-600" href="/login">Login here</Link></p>
                                
                                <form className="contact-form row y-gap-32 pt-48" onSubmit={formik.handleSubmit}>
                                    {/* First Name */}
                                    <div className="col-12 col-md-6">
                                        <input type="text" name="firstName" placeholder="First Name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstName} />
                                        {formik.touched.firstName && formik.errors.firstName ? <div className="text-danger text-sm mt-1">{formik.errors.firstName}</div> : null}
                                    </div>

                                    {/* Last Name */}
                                    <div className="col-12 col-md-6">
                                        <input type="text" name="lastName" placeholder="Last Name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastName} />
                                        {formik.touched.lastName && formik.errors.lastName ? <div className="text-danger text-sm mt-1">{formik.errors.lastName}</div> : null}
                                    </div>

                                    {/* Email */}
                                    <div className="col-12 col-md-6">
                                        <input type="email" name="email" placeholder="Email Address" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                                        {formik.touched.email && formik.errors.email ? <div className="text-danger text-sm mt-1">{formik.errors.email}</div> : null}
                                    </div>

                                    {/* Phone Number */}
                                    <div className="col-12 col-md-6">
                                        <input type="text" name="phoneNumber" placeholder="Phone number" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phoneNumber} />
                                        {formik.touched.phoneNumber && formik.errors.phoneNumber ? <div className="text-danger text-sm mt-1">{formik.errors.phoneNumber}</div> : null}
                                    </div>

                                    {/* Role */}
  

                                    {/* Gender */}
                                    <div className="col-12 col-md-6">
                                        <select name="gender" className="form-select" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.gender}>
                                            <option value="" disabled>Select Gender</option>
                                            <option value="MALE">Male</option>
                                            <option value="FEMALE">Female</option>
                                        </select>
                                        {formik.touched.gender && formik.errors.gender ? <div className="text-danger text-sm mt-1">{formik.errors.gender}</div> : null}
                                    </div>

                                    {/* Password */}
                                    <div className="col-12 col-md-6">
                                        <input type="password" name="password" placeholder="Password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
                                        {formik.touched.password && formik.errors.password ? <div className="text-danger text-sm mt-1">{formik.errors.password}</div> : null}
                                    </div>

                                    {/* Confirm Password */}
                                    <div className="col-12 col-md-6">
                                        <input type="password" name="confirm_password" placeholder="Confirm Password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirm_password} />
                                        {formik.touched.confirm_password && formik.errors.confirm_password ? <div className="text-danger text-sm mt-1">{formik.errors.confirm_password}</div> : null}
                                    </div>

                                    {/* General Form Error */}
                                    {formError && <div className="col-12 text-danger">{formError}</div>}

                                    <div className="col-12">
                                        <button type="submit" name="submit" className="button -md -accent -uppercase text-white" disabled={formik.isSubmitting}>
                                            {formik.isSubmitting ? 'Registering...' : 'Register'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}