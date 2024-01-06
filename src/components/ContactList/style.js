import { styled } from "styled-components";

export const StyledContactList = styled.ul`
    width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;

  > li:nth-child(odd) {
    background-color: var(--color-grey2);
    border-radius: 55px;
    
  }

  > li:nth-child(even) {
    background-color: var(--color-grey3);
    border-radius: 55px;

  }

  > li:nth-child(odd) , > li:nth-child(even) {
    @media screen and (max-width: 900px) {
            border-radius: 5px;
    }
  }
    
  >.emptyText {
    color: var(--color-grey0);
  }
`