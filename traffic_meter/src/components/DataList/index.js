import React from "react";
import StyledDataListContainer from "./DataList.styled";
import DataItem from "./DataItem";

export default function DataList({ data }) {
    return (
        <StyledDataListContainer>
            {data.map((item, index) => (
                <DataItem data={item} key={index} />
            ))}
        </StyledDataListContainer>
    )
}