import styled from "styled-components";
import colors from "../../Colors";


const StyledDataItemContainer = styled.section`
    height: fit-content;

    background-color: white;
    box-shadow: 2px 2px .5px 1px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
`;

export const StyledDataItemTittle = styled.div`
    background-color: ${colors.primary};
    display: flex;
    justify-content: space-between;
    font-weight: bold;

    border-radius: 20px 20px 0 0;

    min-height: 50px;
    box-sizing: border-box;
    padding: 16px;

    p {
        color: white;
    }
    & p:nth-child(2){
        color: ${colors.tertiary};
    }
`;

export const StyledDataItemText = styled.p`
    margin-block-start: 3px;
    margin-block-end: 3px;

    font-size: 1.3em;
`;

export const StyledDataItemContent = styled.div`
    box-sizing: border-box;
    padding: 16px;
`;

export const StyledDataItemButtomContainer = styled.div`
    height: 3em;
    margin-top: 16px;
    box-shadow: 2px 2px .5px 1px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
`;

export const StyledDataItemButtomLeft = styled.button`
    width: 50%;
    height: 100%;
    
    border-radius: 15px 0 0 15px;
    border: none;
    
    text-transform: uppercase;
    font-weight: bold;

    background-color: ${colors.secundary};
    color: white;

    &:hover{
        cursor: pointer;
    }

    &:active{
        background-color: ${colors.secundaryShadow};
    }
`;

export const StyledDataItemButtomRight = styled.button`
    width: 50%;
    height: 100%;
    
    border-radius: 0 15px 15px 0;
    border: none;
    
    text-transform: uppercase;
    font-weight: bold;
    
    background-color: ${colors.secundary};
    color: white;

    &:hover{
        cursor: pointer;
    }

    &:active{
        background-color: ${colors.secundaryShadow};
    }
`;

export default StyledDataItemContainer;