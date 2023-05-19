import styled from "styled-components";
import colors from "../../components/Colors";

const SCREEN_MAX_WIDTH = "1000px";
const BORDER_RADIUS = "10px";
const PADDING = "10px";
const MARGIN = "10px";
const MARGIN_HALF = "5px";

const StyledLoginScreenContainer = styled.div`
    height: 100vh;
    width: 100vw;

    background-color: ${colors.primary};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StyledLoginScreenContent = styled.div`
    display: flex;
    box-shadow: 7px 7px 2px 1px rgba(0, 0, 0, 0.2);

    @media (min-width: ${SCREEN_MAX_WIDTH}) {
        max-width: ${SCREEN_MAX_WIDTH};
        width: fit-content;

        background-color: ${colors.secundary};
        margin: ${MARGIN};

        border-radius: ${BORDER_RADIUS};
    }
`;

export const StyledLoginScreenForm = styled.form`
    display: flex;
    flex-direction: column;

    max-height: 100vh;
    height: fit-content;

    max-width: 500px;
    width: calc(100vw - 2 * ${PADDING});

    box-sizing: border-box;
    padding: ${PADDING};

    background-color: white;

    border-radius: ${BORDER_RADIUS};

    @media (min-width: ${SCREEN_MAX_WIDTH}) {
        border-radius: ${BORDER_RADIUS} 0 0 ${BORDER_RADIUS};
        height: inherit;

        justify-content: end;
    }
`;

export const StyledinputConteiner = styled.div`
    margin: ${MARGIN} 0;

    display: flex;
    flex-direction: column;
`;

export const StyledRedirect = styled.div`
    display: flex;

    align-items: center;
    justify-content: end;
`;

export const StyledRedirectText = styled.p`
    margin-block-start: 0;
    margin-block-end: 0;

    margin: 0 ${MARGIN_HALF};
`;

export const StyledLoginImageContainer = styled.div`
    visibility: hidden;
    width: 0;
    height: 0;

    @media (min-width: ${SCREEN_MAX_WIDTH}) {
        visibility: visible;
        max-height: 100vh;
        height: 460px;

        max-width: 500px;
        width: calc(100vw - 2 * ${MARGIN});

        border-radius: 0 ${BORDER_RADIUS} ${BORDER_RADIUS} 0;

        display: flex;
        flex-direction: column;

        justify-content: space-around;
        align-items: center;

    }
`;

export const StyledLoginImg = styled.img`
    max-width: 400px;
    max-height: 400px;

`;

export default StyledLoginScreenContainer;