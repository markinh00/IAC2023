import styled from "styled-components";
import colors from "../Colors";

const MAX_WIDTH = "1920px";
const MAX_HEIGHT = "80px";
const MARGIN = "16px";
const MARGIN_HALF = "8px";
const HEIGHT = "4em";
const SCREEN_MEDIUM_SIZE = "900px";
const SCREEN_SMALL_SIZE = "500px";
const BORDER_RADIUS = "10px";

const StyledMenuBarContainer = styled.div`
    width: 100vw;
    max-height: ${MAX_HEIGHT};
    height: ${HEIGHT};

    background-color: ${colors.secundary};

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledMenuBarContent = styled.div`
    max-width: ${MAX_WIDTH};
    width: inherit;
    max-height: inherit;
    height: inherit;

    box-sizing: border-box;
    position: relative;
    display: flex;
    align-items: center;
`;

export const StyledMenuBarLogoContainer = styled.div`
    max-width: inherit;
    width: inherit;
    max-height: inherit;
    height: inherit;

    display: flex;
    align-items: center;
    box-sizing: border-box;

    margin-left: ${MARGIN};

`;

export const StyledMenuBarLogo = styled.img`
    max-height: inherit;
    height: inherit;

    box-sizing: border-box;
    padding: ${MARGIN};

    @media (max-width: ${SCREEN_MEDIUM_SIZE}) {
        height: 3em;
        padding: 16px 4px;
    }
    
`;

export const StyledUserProfilePicture = styled.img`
    max-height: inherit;
    height: 45px;

    box-sizing: border-box;
    margin: 0 ${MARGIN};

    &:hover{
        cursor: pointer;
    }
`;

export const StyledUserArea = styled.div`
    height: fit-content;
    width: fit-content;

    box-sizing: border-box;
    padding: ${MARGIN};

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    position: absolute;
    top: ${HEIGHT};
    right: 0;

    background-color: ${colors.primary};
    border-radius: 0 0 0 ${BORDER_RADIUS};

    animation: showUserData .2s;
    z-index: -1;

    @keyframes showUserData {
        from{
            opacity: 0;
            top: 0;
        } 
        to{
            opacity: 1;
            top: ${HEIGHT};
        }
    }

    @media (max-width: ${SCREEN_SMALL_SIZE} ) {
        width: 100vw;
        border-radius: 0;

        align-items: center;
    }
`;

export const StyledUserData = styled.div`
    display: flex;
    flex-direction: column;

    align-items: flex-start;
`;

export const StyledUserText = styled.p`
    margin-block-start: 0;
    margin-block-end: 0;

    margin-bottom: ${MARGIN};

    color: white;

    font-size: 1.3em;
`;

export default StyledMenuBarContainer;