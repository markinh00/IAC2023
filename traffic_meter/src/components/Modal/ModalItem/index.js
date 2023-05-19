import React from "react";
import StyedModalItemContainer, {StyledModalItemText} from "./ModalItem.styles";

export default function ModalItem({ data }) {
    const hasKey = data.hasOwnProperty('host');
    
    return (
        hasKey ? (
            <StyedModalItemContainer>
                <StyledModalItemText>download: {data.download}</StyledModalItemText>
                <StyledModalItemText>host: {data.host}</StyledModalItemText>
                <StyledModalItemText>upload: {data.upload}</StyledModalItemText>
            </StyedModalItemContainer>
        ) : (
            <StyedModalItemContainer>
                <StyledModalItemText>download: {data.download}</StyledModalItemText>
                <StyledModalItemText>protocol: {data.protocol}</StyledModalItemText>
                <StyledModalItemText>upload: {data.upload}</StyledModalItemText>
            </StyedModalItemContainer>
        )
    )
}