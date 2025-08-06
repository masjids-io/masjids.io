'use client';

import { useState, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import * as Icon from 'react-feather';
// Assuming you have a Layout component
import Layout from '@/components/layout/Layout';

// Validation schema using Yup for Formik
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required'),
});

// Loading component with Bootstrap 5 styling
const LoadingSpinner = () => (
  <div className="d-flex justify-content-center align-items-center vh-100">
    <div className="text-center">
      <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="mt-3 text-muted">Loading...</p>
    </div>
  </div>
);

export default function Login() {
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession();

  // Check if user is already authenticated
  useEffect(() => {
    if (status === 'authenticated' && session) {
      // User is already logged in, redirect to home
      window.location.href = '/home';
    }
  }, [status, session, router]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setError(null);

      const result = await signIn('credentials', {
        // Important: Prevent automatic redirect to handle the result manually
        redirect: false,
        email: values.email,
        password: values.password,
      });

      setSubmitting(false);

      if (result?.ok) {
        // On success, redirect to the home page
        window.location.href = '/home';
      } else {
        // On failure, display a user-friendly error message
        setError('The email or password you entered is incorrect. Please try again.');
      }
    },
  });

  // Show loading spinner while checking authentication status
  if (status === 'loading') {
    return <LoadingSpinner />;
  }

  // If user is authenticated, don't render the login form (will redirect)
  if (status === 'authenticated') {
    return <LoadingSpinner />;
  }

  // Only render login form if user is unauthenticated
  return (
    <Layout headerLayout={11} logo="logo-flat">
      <section className="overflow-hidden h-screen md:h-auto md:mt-112 sm:mt-80">
        <div className="row x-gap-120 h-1/1 items-center">
          {/* Background Image Column */}
          <div className="col-lg-6 h-1/1 relative md:h-300">
            <div className="bg-image absolute-full-center" style={{ backgroundImage: 'url("/img/forms/bg.png")', filter: 'blur(1px)' }} />
            <div className="pl-60 md:pl-0 absolute-full-center z-2">
              <div className="pl-120 lg:pl-48 md:pl-45 pt-120 md:pt-80">
                  <div className="md:container">
                    <h1 className="text-4xl md:text-3xl text-white">Welcome to<br /> masjids.io</h1>
                  </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="col-lg-5">
            <div className="md:container py-48">
              <h1 className="text-4xl md:text-3xl">Login</h1>
              <p className="mt-16">
                Don't have an account?{' '}
                <Link className="decoration-none text-accent fw-600" href="/register">
                  Register here
                </Link>
              </p>

              <form className="contact-form row y-gap-32 pt-48" onSubmit={formik.handleSubmit} noValidate>
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
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-danger text-sm mt-1">{formik.errors.email}</div>
                  ) : null}
                </div>

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
                      className="pr-12"
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500">
                      {showPassword ? <Icon.EyeOff className="icon" /> : <Icon.Eye className="icon" />}
                    </button>
                  </div>
                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-danger text-sm mt-1">{formik.errors.password}</div>
                  ) : null}
                </div>

                <div className="col-12">
                  <button type="submit" className="button -md -accent -uppercase text-white" disabled={formik.isSubmitting}>
                    {formik.isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Logging in...
                      </>
                    ) : (
                      'Login'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}