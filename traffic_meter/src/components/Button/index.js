import React from "react";
import StyledButton from "./Button.styles";


export default function Button({children, onClick, type, onSubmit}){
    return(
        <StyledButton
            onClick={onClick}
            type={type}
            onSubmit={onSubmit}
        >
            {children}
        </StyledButton>
    )
}