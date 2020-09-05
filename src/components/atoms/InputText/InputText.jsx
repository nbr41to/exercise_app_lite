import React from 'react';
import StyledInputText from "./InputText.styled"

export default function InputText({ value, type, name, placeholder, autoComplete, label, onChange }) {
    return (
        <StyledInputText
            value={value}
            type={type}
            name={name}
            placeholder={placeholder}
            autoComplete={autoComplete}
            id={label}
            onChange={onChange}
        />
    );
}

