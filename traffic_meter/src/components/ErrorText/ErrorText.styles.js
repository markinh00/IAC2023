import styled from "styled-components"
import colors from "../Colors";


const StyledErrorText = styled.p`
    margin-block-start: 0;
    margin-block-end: 0;

    margin: 0 5px;

    font-weight: bold;
    font-size: small;
    color: ${colors.error};
`;

export default StyledErrorText;