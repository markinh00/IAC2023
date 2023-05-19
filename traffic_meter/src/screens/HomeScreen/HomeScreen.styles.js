import styled from "styled-components";
import colors from "../../components/Colors";

const HEIGHT = "4em";

const StyledHomeScreenContainer = styled.div`
    width: 100vw;
    height: calc(100vh - ${HEIGHT});
    
    box-sizing: border-box;
    padding-top: 8px;
    position: absolute;
    top: ${HEIGHT};
    right: 0;
    z-index: -2;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar{
        width: .5em;
    }
    &::-webkit-scrollbar-thumb{
        background-color: ${colors.primary};
        border-radius: 10px;
    }
`;

export default StyledHomeScreenContainer;