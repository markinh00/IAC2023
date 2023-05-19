import React from "react";
import StyledErrorText from "./ErrorText.styles";


export default function ErrorText({children}){
    return(
        <StyledErrorText hidden={children? false : true} >{children}</StyledErrorText>
    )
}