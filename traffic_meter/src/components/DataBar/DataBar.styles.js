import styled, { css } from "styled-components";
import colors from "../Colors";

const StyledDataBarContainer = styled.div`
max-width: 1920px;
    width: 100%;
    height: fit-content;

    box-sizing: border-box;
    padding: 8px 16px;
`;

export const StyledDataBarTittle = styled.h1`
    margin-bottom: 16px;
    font-size: 1.5em;

    font-weight: bold;
`;

export const StyledDataBarContent = styled.div`
    width: 99.5%;
    height: 30px;

    border: solid;
    border-color: black;
    border-radius: 15px;

    transform-style: preserve-3d;
`;

export const StyledDataBarValue = styled.div`
    background-color: ${props => props.alert? colors.error : colors.tertiary};

    height: inherit;
    width: ${props => props.value ? props.value + "%" : null};
    border-radius: 10px;

    transform: translateZ(-10px);
`;

export const StyledDataBarTextArea = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 8px;

    @media (max-width: 450px) {
        flex-direction: column;
    }
`;

export const StyledDataBarTextContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledDataBarButtonContainer = styled.div`
    display: flex;
`;

export const StyledDataBarButton = styled.button`
    border-radius: 20px;
    border: none;
    background-color: ${colors.secundary};

    box-sizing: border-box;
    margin: 0 3px;
    padding: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        cursor: pointer;
    }
    &:active{
        background-color: ${colors.primary};
    }
`;

export const StyledDataBarButtonIcon = styled.img`
    width: 2em;
`;

export const StyledDataBarText = styled.p`
    font-size: 1.3em;
    text-transform: uppercase;
`;

const isFirefox = typeof InstallTrigger !== 'undefined';

const forFirefox = css`
    -moz-appearance: textfield;
`;

const forElse = css`
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

export const StyledDataBarMaxValue = styled.input`
    width: ${props => props.setSize ? props.setSize + "5px" : null};
    font-size: 1em;

    border: none;

    ${isFirefox ? forFirefox : forElse}
`;

export default StyledDataBarContainer;