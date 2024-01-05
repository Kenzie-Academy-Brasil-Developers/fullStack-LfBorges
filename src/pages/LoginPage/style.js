import { styled } from "styled-components";

export const StyledLoginPage = styled.div`
    width: 100%;
    max-width: 24.5625rem;
    min-height: 100vh;
    padding: 0 .75rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: clamp(1.125rem, 2.5vw, 2.25rem);

    >img {
        width: 15rem;
    }
`