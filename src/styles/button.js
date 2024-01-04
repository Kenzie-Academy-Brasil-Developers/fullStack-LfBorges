import { styled } from "styled-components";

const Button = styled.button`
    width: ${({size}) => size ? size : "100%"};
    height: 3rem;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #FFFFFF;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
`

export const StyledButtonMain = styled(Button)`
    
    border: 1.2182px solid var(--color-main);
    background: var(--color-main);
    &:hover {
        background: var(--color-main-focus); 
        border: 1.2182px solid var(--color-main-focus);
    }
`

export const StyledButtonMainNegative = styled(Button)`
    
    background: var(--color-main-negative);
    border: 1.2182px solid var(--color-main-negative);
    &:hover {
        background: var(--color-main-focus); 
        border: 1.2182px solid var(--color-main-focus);
    }
`

export const StyledButtonSecond = styled(Button)`
    background: ${({color}) => color ? color : "var(--color-grey1)"};
    border: 1.2182px solid;
    border-color: ${({border}) => border==="none" ? "transparent": "var(--color-grey1)"};
    &:hover {
        background: var(--color-grey2);
        border: 1.2182px solid var(--color-grey2);
    }
`

export const StyledButtonExit = styled.button`
    height: 2rem;
    border-radius: 4px;
    padding: 0 1rem;
    background: var(--color-grey3);
    border: none;
    font-weight: 600;
    font-size: .75rem;
    line-height: 1.75rem;
    color: var(--color-grey0);
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    &:hover {
        background: var(--color-grey2);
    }
`