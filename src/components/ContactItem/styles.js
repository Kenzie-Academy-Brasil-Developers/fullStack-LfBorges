import { styled } from "styled-components";

export const StyledcontactItem = styled.li`
    width: 100%;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    border-radius: 4px;
    padding-top: .8125rem;
    padding-bottom: .8125rem;
    padding-right: clamp(.5313rem,1.5vw,1.375rem);
    padding-left: clamp(.5313rem,1.5vw,1.375rem);
    background-color: var(--color-grey4);
    cursor: pointer;
    transition: background 0.5s ease-in-out;
    
    &:hover {
        background-color: var(--color-grey2);
    }
`