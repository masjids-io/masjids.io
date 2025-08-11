'use client';

import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './BootstrapPhoneInput.css';

interface BootstrapPhoneInputNoFormikProps {
    value: string;
    onChange: (value: string) => void;
    country?: string;
}

const BootstrapPhoneInputNoFormik: React.FC<BootstrapPhoneInputNoFormikProps> = ({ value, onChange, country = 'us' }) => {
    return (
        <PhoneInput
            country={country}
            value={value}
            onChange={(phone) => {
                const e164 = `+${phone.replace(/\D/g, '')}`;
                onChange(e164);
            }}
            inputClass="form-control"
        />
    );
};

export default BootstrapPhoneInputNoFormik;
