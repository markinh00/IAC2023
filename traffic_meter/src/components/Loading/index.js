import React from "react";
import FadeLoader from "react-spinners/FadeLoader";
import StyledLoadingContainer from "./Loading.styles";
import colors from "../Colors";

export default function Loading({color=colors.tertiary, loading, size=30}) {
    return (
        <StyledLoadingContainer>
            <FadeLoader
                color={color}
                loading={loading}
                size={size}
            />
        </StyledLoadingContainer>
    );
}