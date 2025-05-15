import React, { FC, useState } from 'react';

interface FormInputProps {
  label: string;
  type?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  autocomplete?: string;
  validateFn?: (value: string) => boolean;
  errorMsg?: string;
  required?: boolean;
  disabled?: boolean;
  helperText?: string;
  [key: string]: any;
}

const FormInput: FC<FormInputProps> = ({
  label,
  type = 'text',
  value = '',
  onChange,
  placeholder,
  autocomplete = '',
  validateFn = (value: string) => true,
  errorMsg = undefined,
  required = false,
  disabled = false,
  ...otherProps
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [error, setError] = useState<string | undefined>(undefined);
  const [hasTouched, setHasTouched] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setHasTouched(true);

    if (hasTouched && !validateFn(event.target.value)) {
      setError(errorMsg);
    } else {
      setError(undefined);
    }

    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div className="pt-2 pb-2">
      <label className="block text-sm font-sans text-slate-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        id={label}
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        autoComplete={autocomplete}
        aria-invalid={!!error}
        aria-describedby={error ? 'error-message' : null}
        className={`mt-1 block w-full px-3 py-2 
        bg-white border border-[#135D66] 
        rounded-md text-sm shadow-sm 
        placeholder-slate-400 
        focus:outline-none focus:border-[#135D66] focus:ring-1 focus:ring-[#135D66] 
        ${error ? 'border-red-500 text-red-600 focus:border-red-500 focus:ring-red-500' : ''}`}
        {...otherProps}
      />
      {error && (
        <span
          id="error-message"
          className="block text-sm font-sans text-red-500 mb-1"
        >
          {error}
        </span>
      )}
    </div>
  );
};
export default FormInput;
