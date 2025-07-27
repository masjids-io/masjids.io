"use client";

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import * as Icon from 'react-feather';

// 1. Define a validation schema with Yup
const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .required('Password is required'),
});

export default function Login() {
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    // -- 1. Add state for password visibility --
    const [showPassword, setShowPassword] = useState(false);

    // 2. Set up Formik
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: LoginSchema,
        onSubmit: async (values, { setSubmitting }) => {
            setError(null);

            const result = await signIn('credentials', {
                redirect: false,
                email: values.email,
                password: values.password,
            });

            if (result?.error) {
                setError(result.error);
                setSubmitting(false); // Manually set submitting to false on error
            } else if (result?.ok) {
                router.push('/');
                // On success, Formik automatically handles the end of submission
            }
        },
    });

    return (
        <>
            <Layout
                headerLayout={11}
                logo="logo-flat"
            >
                <section className="overflow-hidden h-screen md:h-auto md:mt-112 sm:mt-80">
                    <div className="row x-gap-120 h-1/1 items-center">
                        <div className="col-lg-6 h-1/1 relative md:h-300">
                            <div className="bg-image absolute-full-center md:bg-pos-top js-lazy" style={{ backgroundImage: 'url("/img/forms/bg.png")', filter: 'blur(1px)' }} />
                            <div className="pl-60 md:pl-0 absolute-full-center z-2">
                                <div className="pl-120 lg:pl-48 md:pl-0 pt-120 md:pt-100">
                                    <div className="pt-120 md:pt-0">
                                        <div className="md:container sm:w-screen">
                                            <h1 className="text-4xl md:text-3xl text-white">Selamat Datang di<br /> masjids.io</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="md:container py-48">
                                <h1 className="text-4xl md:text-3xl">Login</h1>
                                <p className="mt-16">Belum punya akun? <Link className="decoration-none text-accent fw-600" href="register">Buat di sini</Link></p>
                                
                                {/* 3. Connect Formik to the form element */}
                                <form className="contact-form row y-gap-32 pt-48" onSubmit={formik.handleSubmit}>

                                    {error && (
                                        <div className="col-12">
                                            <div className="alert -error">
                                                <div className="alert__content">
                                                    <div className="alert__title text-sm">{error}</div>
                                                    <div className="alert__icon"><Icon.X className="icon" onClick={() => setError(null)} /></div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <div className="col-12">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Email"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.email}
                                        />
                                        {/* Display validation errors */}
                                        {formik.touched.email && formik.errors.email ? (
                                            <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                                        ) : null}
                                    </div>

                                    {/* -- 2. Update password input with visibility toggle -- */}
                                    <div className="col-12">
                                        <div className="relative">
                                            <input
                                                id="password"
                                                name="password"
                                                type={showPassword ? 'text' : 'password'}
                                                placeholder="Password"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.password}
                                                className="pr-12" // Add padding to prevent text from overlapping the icon
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500"
                                                aria-label="Toggle password visibility"
                                            >
                                                {showPassword ? (
                                                    <Icon.EyeOff className="icon" />
                                                ) : (
                                                    <Icon.Eye className="icon" />
                                                )}
                                            </button>
                                        </div>
                                        {formik.touched.password && formik.errors.password ? (
                                            <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
                                        ) : null}
                                    </div>

                                    <div className="col-12">
                                        <div className="row justify-between">
                                            <div className="col-auto">
                                                <div className="form-checkbox">
                                                    <div className="checkbox">
                                                        <input type="checkbox" />
                                                        <div className="checkbox__mark"><Icon.Check className="checkbox__icon" /></div>
                                                    </div>
                                                    <label htmlFor="items">Ingat saya</label>
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <a className="decoration-none text-accent" href="#">Lupa kata sandi Anda?</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        {/* 4. Use Formik's 'isSubmitting' for loading state */}
                                        <button 
                                            type="submit" 
                                            className="button -md -accent -uppercase text-white"
                                            disabled={formik.isSubmitting}
                                        >
                                            {formik.isSubmitting ? 'Logging in...' : 'Login'}
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