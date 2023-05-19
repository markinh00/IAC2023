import styled from "styled-components";


const StyedModalItemContainer = styled.div`
    margin: 16px;
    animation: showUserData .3s;

    @keyframes showModal {
        from{
            opacity: 0;
        } 
        to{
            opacity: 1;
        }
    }
`;

export const StyledModalItemText = styled.p`
    font-size: 1.3em;
    margin-block-start: .2em;
    margin-block-end: .2em;
`;

export default StyedModalItemContainer;