import React from "react";
import StyledDataItemContainer, { StyledDataItemButtomContainer, StyledDataItemButtomLeft, StyledDataItemButtomRight, StyledDataItemContent, StyledDataItemText, StyledDataItemTittle } from "./DataItem.styles";
import { useModalContext } from "../../../contexts/ModalContext";

export default function DataItem({ data }) {
    const [, setModalData] = useModalContext();

    return (
        <StyledDataItemContainer>
            <StyledDataItemTittle>
                <StyledDataItemText>Name: {data.name}</StyledDataItemText>
                <StyledDataItemText>Pid: {data.pid}</StyledDataItemText>
            </StyledDataItemTittle>
            <StyledDataItemContent>
                <StyledDataItemText>Create time: {data.create_time}</StyledDataItemText>
                <StyledDataItemText>Last time updated: {data.last_time_update}</StyledDataItemText>
                <StyledDataItemText>Download: {data.download}</StyledDataItemText>
                <StyledDataItemText>Download speed: {data.download_speed}</StyledDataItemText>
                <StyledDataItemText>Upload: {data.upload}</StyledDataItemText>
                <StyledDataItemText>Upload speed: {data.upload_speed}</StyledDataItemText>
                <StyledDataItemButtomContainer>
                    <StyledDataItemButtomLeft onClick={() => setModalData({tittle: "host traffic", data: data.host_traffic})}>
                        host traffic
                    </StyledDataItemButtomLeft>
                    <StyledDataItemButtomRight onClick={() => setModalData({tittle: "protocol traffic", data: data.protocol_traffic})}>
                        protocol traffic
                    </StyledDataItemButtomRight>
                </StyledDataItemButtomContainer>
            </StyledDataItemContent>
        </StyledDataItemContainer>
    )
}