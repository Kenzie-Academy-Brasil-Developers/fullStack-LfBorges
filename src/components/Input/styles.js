import { styled } from "styled-components";

export const StyledInput = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.375rem;
    font-weight: 400;
    font-size: .75rem;

    label {
        line-height: 0px;
        color: var(--color-grey0);
    }

    input {
        height: 3rem;
        background-color: var(--color-grey2);
        border: 1px solid var(--color-grey2);
        border-radius: 4px;
        width: 100%;
        padding: 0 1rem;
        color: var(--color-grey0);
        transition: border-color 0.5s ease-in-out;
    }

    input:focus {
        border-color: var(--color-grey0);
    }

    input::placeholder {
        color: var(--color-grey1);
    }

    p {
        font-size: .6345rem;
        line-height: 0px; 
        color: var(--color-grey1);
    }
`