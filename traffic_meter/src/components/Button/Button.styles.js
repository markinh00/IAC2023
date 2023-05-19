import styled from "styled-components";
import colors from "../Colors";

const StyledButton = styled.button`
    min-width: 100px;
    width: fit-content;
    
    max-height: 100px;
    height: 2em;

    margin: 5px;

    box-shadow: 1px 1px .5px 1px rgba(0, 0, 0, 0.3);
    background-color: ${colors.tertiary};
    color: white;

    border: none;
    border-radius: 10px;

    text-transform: uppercase;
    font-weight: bold;

    &:active{
        background-color: ${colors.tertiaryShadow};
    }
    &:hover{
        cursor: pointer;
    }
`;

export default StyledButton;