import React from 'react';
import InputLabel from "../../atoms/InputLabel"
import InputText from "../../atoms/InputText"
import StyleInputArea from "./InputArea.styled"

export default function InputArea({
    value,
    labelTitle,
    type,
    name,
    placeholder,
    autoComplete,
    label,
    onChange
}) {

    return (
        <StyleInputArea>
            <InputLabel labelTitle={labelTitle} label={label} />
            <InputText
                value={value}
                type={type}
                name={name}
                placeholder={placeholder}
                autoComplete={autoComplete}
                id={label}
                onChange={onChange}
            />
        </StyleInputArea>
    );
}

