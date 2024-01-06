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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);

    if (!validateFn(inputValue)) {
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
        className="mt-1 block w-full px-3 py-2 
        bg-white border border-lime-300 
        rounded-md text-sm shadow-sm 
        placeholder-slate-400 
        focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500 
        invalid:border-red-500 invalid:text-red-600
        focus:invalid:border-red-500 focus:invalid:ring-red-500"
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
