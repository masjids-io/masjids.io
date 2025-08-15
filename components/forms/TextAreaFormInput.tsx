import { FormControl, FormGroup, FormLabel, type FormControlProps } from 'react-bootstrap'
import Feedback from 'react-bootstrap/esm/Feedback'
import { Controller, type FieldPath, type FieldValues, type PathValue } from 'react-hook-form'

import type { FormInputProps } from '@/types/component-props'

type TextAreaFormInputProps = { rows?: number }

const TextAreaFormInput = <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({
  name,
  rows = 3,
  containerClassName,
  control,
  id,
  label,
  noValidate,
  ...other
}: FormInputProps<TFieldValues> & FormControlProps & TextAreaFormInputProps) => {
  return (
    <Controller<TFieldValues, TName>
      name={name as TName}
      defaultValue={'' as PathValue<TFieldValues, TName>}
      control={control}
      render={({ field, fieldState }) => (
        <FormGroup className={containerClassName ?? ''}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl id={id} rows={rows} as="textarea" {...other} {...field} isInvalid={Boolean(fieldState.error?.message)} />
          {!noValidate && fieldState.error?.message && <Feedback type="invalid">{fieldState.error?.message}</Feedback>}
        </FormGroup>
      )}
    />
  )
}

export default TextAreaFormInput
