import { css, styled } from "styled-components";

export const StyledTypography = styled.p`

    color: ${({ color }) => (color ? color : "#F8F9FA")};

    ${({typographystyle}) => {
        if (typographystyle === "title1") {
            return css`
                font-weight: 700;
                font-size: 1.125rem;
                line-height: 1.75rem; 
            `
        } else if (typographystyle === "title2") {
            return css`
                font-weight: 600;
                font-size: 1rem;
                line-height: 1.625rem; 
            `
        } else if (typographystyle === "title3") {
            return css`
                font-weight: 700;
                font-size: .875rem;
                line-height: 1.5rem; 
            `
        } else if (typographystyle === "headline") {
            return css`
                font-weight: 400;
                font-size: .75rem;
                line-height: 1.375rem; 
            `
        } else if (typographystyle === "headlineBold") {
            return css`
                font-weight: 600;
                font-size: .75rem;
                line-height: 1.125rem;
            `
        } else {
            return css`
                font-weight: 400;
                font-size: .75rem;
                line-height: 1.125rem;
                font-style: italic;
            `
        }
    }}
`