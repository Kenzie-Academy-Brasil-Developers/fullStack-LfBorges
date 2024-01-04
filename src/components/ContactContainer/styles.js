import { styled } from "styled-components";

export const StyledcontactContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: .6875rem;
    gap: 1.3125rem;

    > div {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;

        > img {
            cursor: pointer;
        }
    }
`