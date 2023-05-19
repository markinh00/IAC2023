import styled from "styled-components";

const MAX_WIDTH = "1920px";
const PADDING = "16px";

const StyledDataListContainer = styled.div`
    max-width: ${MAX_WIDTH};
    width: 100%;
    height: fit-content;
    
    display: grid;
    grid-gap: ${PADDING};
    box-sizing: border-box;
    padding: ${PADDING};
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: 1600px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 750px) {
        grid-template-columns: 1fr;
    }
`;

export default StyledDataListContainer;