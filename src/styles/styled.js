import styled, {css} from "styled-components";

export const SpanBar = styled.span`
    display: block;
    border-radius: 4px;
    height: 30px;
    ${({width, color})=> css`
        width: ${width};
        background-color: ${color};
    `}
`