import React from "react"
import StyledInput from "./input.styles"

export default function Input({Children, placeholder, name, id, type, value, onChange, required=false, onBlur}){
    return(
        <StyledInput
            name={name}
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            required={required}
        >
            {Children}
        </StyledInput>
    )
}