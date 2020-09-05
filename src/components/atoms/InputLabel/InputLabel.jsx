import React from 'react';
import StyledInputLabel from "./InputLabel.styled"

export default function InputLabel({ labelTitle, label }) {

    return (
        <StyledInputLabel htmlFor={label}>
            {labelTitle}
        </StyledInputLabel>
    );
}

