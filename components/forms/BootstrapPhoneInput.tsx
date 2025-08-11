'use client';

import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './BootstrapPhoneInput.css';

import type { FieldInputProps, FormikProps, FieldMetaProps } from 'formik';

interface BootstrapPhoneInputProps {
    field: FieldInputProps<any>;
    form: FormikProps<any>;
    meta?: FieldMetaProps<any>;
}

const BootstrapPhoneInput: React.FC<BootstrapPhoneInputProps> = ({ field, form }) => {
    const { name, value } = field;
    const { touched, errors, setFieldValue } = form;

    const errorMsg = touched[name] && errors[name];

    return (
        <div>
            <PhoneInput
                country={'us'} // default selection only
                value={value}
                onChange={(phone, country) => {
                    const e164 = `+${phone.replace(/\D/g, '')}`;
                    setFieldValue(name, e164);
                }}
                inputClass={`form-control ${errorMsg ? 'is-invalid' : ''}`}
                inputProps={{ name }}
            />
            {typeof errorMsg === 'string' && (
                <div className="invalid-feedback d-block">{errorMsg}</div>
            )}
        </div>
    );
};

export default BootstrapPhoneInput;
