import styled from "styled-components";
import colors from "../Colors";


const StyledModalContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    background-color: rgba(0,0,0,0.3);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StyledModalExitButtom = styled.button`
    background-color: white;
    border: none;
    border-radius: 10px;
    
    padding: 8px;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        cursor: pointer;
    }
`;

export const StyledModalExitButtomImg = styled.img`
    &:active{
        opacity: 0.5;
    }
`;

export const StyledModalContent = styled.div`
    max-width: 1000px;
    width: fit-content;

    max-height: 70%;
    height: fit-content;

    
    background-color: white;
    

    box-sizing: border-box;
    
    margin: 16px;

    border-radius: 10px;
    border-radius: 20px;
    
`;

export const StyledModalTittle = styled.h1`
    min-height: 65px;
    height: 10%;
    min-width: 250px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${colors.primary};
    border-radius: 20px 20px 0 0;

    p{
        color: white;
        font-size: 1.5em;
        font-weight: bold;
        text-transform: uppercase;
    }
`;

export const StyledModalData = styled.div`
    max-width: 1000px;
    width: fit-content;

    max-height: 90%;
    height: fit-content;
    overflow-y: scroll;
    overflow-x: hidden;

    box-sizing: border-box;
    padding: 16px;

    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(4, 1fr);
    
    @media (max-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 750px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 450px) {
        grid-template-columns: 1fr;
    }

    &::-webkit-scrollbar{
        width: .5em;
    } 
    &::-webkit-scrollbar-track{
        margin-bottom: 1em;
    }
    &::-webkit-scrollbar-thumb{
        background-color: ${colors.secundary};
        border-radius: 10px;
    }
`;

export default StyledModalContainer;