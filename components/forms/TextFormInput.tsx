import { type InputHTMLAttributes, ReactNode } from 'react'
import { FormControl, FormGroup, FormLabel, type FormControlProps } from 'react-bootstrap'
import Feedback from 'react-bootstrap/esm/Feedback'
import { Controller, type FieldPath, type FieldValues, type PathValue } from 'react-hook-form'

import type { FormInputProps } from '@/types/component-props'

const TextFormInput = <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({
  name,
  containerClassName: containerClass,
  control,
  id,
  label,
  noValidate,
  labelClassName: labelClass,
  ...other
}: FormInputProps<TFieldValues> & FormControlProps & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <Controller<TFieldValues, TName>
      name={name as TName}
      defaultValue={'' as PathValue<TFieldValues, TName>}
      control={control}
      render={({ field, fieldState }) => (
        <FormGroup className={containerClass}>
          {label &&
            (typeof label === 'string' ? (
              <FormLabel htmlFor={id ?? name} className={labelClass}>
                {label}
              </FormLabel>
            ) : (
              <>{label}</>
            ))}
          <FormControl id={id ?? name} {...other} {...field} isInvalid={Boolean(fieldState.error?.message)} />
          {!noValidate && fieldState.error?.message && <Feedback type="invalid">{fieldState.error?.message}</Feedback>}
        </FormGroup>
      )}
    />
  )
}

export default TextFormInput
