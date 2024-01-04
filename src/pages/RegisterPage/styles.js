import { styled } from "styled-components";

export const StyledRegisterPage = styled.div`
    width: 100%;
    max-width: 24.5625rem;
    min-height: 100vh;
    padding: 3.0625rem .75rem 96px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: clamp(1.125rem, 2.5vw, 2.25rem);

    >div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`