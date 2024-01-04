import { styled } from "styled-components";

export const StyledcontactList = styled.ul`
    width: 100%;
    background-color: var(--color-grey3);
    padding-top: 1.4375rem;
    padding-bottom: 1.4375rem;
    padding-right: clamp(.5313rem,1.5vw,1.375rem);
    padding-left: clamp(.5313rem,1.5vw,1.375rem);
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 4px;
    gap: .875rem;
    margin-bottom: 50px;
`