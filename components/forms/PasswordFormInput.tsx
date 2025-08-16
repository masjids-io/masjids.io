'use client'
import { useState, type InputHTMLAttributes } from 'react'
import { FormControl, FormGroup, FormLabel, type FormControlProps } from 'react-bootstrap'
import Feedback from 'react-bootstrap/esm/Feedback'
import { Controller, type FieldPath, type FieldValues, type PathValue } from 'react-hook-form'

import type { FormInputProps } from '@/types/component-props'
import IconifyIcon from '../wrappers/IconifyIcon'

const PasswordFormInput = <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({
  name,
  containerClassName: containerClass,
  control,
  id,
  labelClassName: labelClass,
  label,
  noValidate,
  ...other
}: FormInputProps<TFieldValues> & FormControlProps & InputHTMLAttributes<HTMLInputElement>) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Controller<TFieldValues, TName>
      name={name as TName}
      defaultValue={'' as PathValue<TFieldValues, TName>}
      control={control}
      render={({ field, fieldState }) => (
        <FormGroup className={containerClass ?? ''}>
          {label &&
            (typeof label === 'string' ? (
              <FormLabel htmlFor={id ?? name} className={labelClass}>
                {label}
              </FormLabel>
            ) : (
              <>{label}</>
            ))}
          <div className="position-relative">
            <FormControl id={id} type={showPassword ? 'text' : 'password'} {...other} {...field} isInvalid={Boolean(fieldState.error?.message)} />
            {!noValidate && fieldState.error?.message && <Feedback type="invalid">{fieldState.error?.message}</Feedback>}
            <span className="d-flex position-absolute top-50 end-0 translate-middle-y p-0 pe-2 me-1" onClick={() => setShowPassword(!showPassword)}>
              {!fieldState.error &&
                (showPassword ? (
                  <IconifyIcon icon="ri:eye-off-line" height={18} width={18} className="cursor-pointer" />
                ) : (
                  <IconifyIcon icon="ri:eye-line" height={18} width={18} className="cursor-pointer" />
                ))}
            </span>
          </div>
        </FormGroup>
      )}
    />
  )
}

export default PasswordFormInput
