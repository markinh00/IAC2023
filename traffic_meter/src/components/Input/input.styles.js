import styled from "styled-components"
import colors from "../Colors"


const StyledInput = styled.input`
    max-height: 30px;
    height: 1.5rem;

    width: inherit;
    max-width: calc(100vw - 20px - 10px);

    margin: 5px;
    
    box-shadow: 1px 1px .5px 1px rgba(0, 0, 0, 0.3);
    border-color: ${colors.primary};
    border-radius: 10px;
`;

export default StyledInput;