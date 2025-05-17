import React, { useState, ChangeEvent, FormEvent } from 'react';
import FormInput from './form_input';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<string>('');

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!values.name) errs.name = 'Name is required';
    if (!/^\S+@\S+\.\S+$/.test(values.email)) errs.email = 'Invalid email';
    if (!values.message) errs.message = 'Message is required';
    return errs;
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));

    setStatus('');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      setStatus('Please fix the errors.');
      return;
    }

    try {
      await new Promise((r) => setTimeout(r, 1000));
      setStatus('Your message has been sent. Thank you!');
      setValues({ name: '', email: '', message: '' });
    } catch {
      setStatus('Error sending your message.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-12 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Contact Us
      </h2>

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Name */}
        <FormInput
          label="Name"
          value={values.name}
          onChange={(val: string) =>
            handleChange({ target: { name: 'name', value: val } } as ChangeEvent<HTMLInputElement>)
          }
          placeholder="John Doe"
          validateFn={(val: string) => !!val}
          errorMsg={errors.name}
          required
        />

        {/* Email */}
        <FormInput
          type="email"
          label="Email"
          value={values.email}
          onChange={(val: string) =>
            handleChange({ target: { name: 'email', value: val } } as ChangeEvent<HTMLInputElement>)
          }
          placeholder="john@example.com"
          validateFn={(val: string) => /^\S+@\S+\.\S+$/.test(val)}
          errorMsg={errors.email}
          required
        />

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message..."
            rows={5}
            value={values.message}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 
              bg-white border border-[#135D66] 
              rounded-md text-sm shadow-sm 
              placeholder-slate-400 
              focus:outline-none focus:border-[#135D66] focus:ring-1 focus:ring-[#135D66] 
              ${
                errors.message
                  ? 'border-red-500 text-red-600 focus:border-red-500 focus:ring-red-500'
                  : ''
              }`}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-2 bg-[#135D66] hover:bg-[#349aa7] text-white font-medium rounded-md transition-colors duration-200"
          >
            Send Message
          </button>
        </div>

        {/* Status */}
        {status && (
          <p
            className={`text-center text-sm mt-4 ${
              status.includes('Error') ? 'text-red-600' : 'text-teal-600'
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </div>
  );
}
