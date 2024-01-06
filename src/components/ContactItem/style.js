import { styled } from "styled-components";

export const StyledContactItem = styled.li`
     width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  gap: 1rem;

  @media screen and (max-width: 900px) {
      align-items: center;
    }

    @media screen and (max-width: 400px) {
      flex-direction: column;
      align-items: center;
    }

  > .nameContainer {
    display: flex;
    gap: 0.5rem;

    @media screen and (max-width: 900px) {
      flex-direction: column;
    }

    
    > div {
        width: 250px;
        line-break: normal;
        text-align: start;
        @media screen and (max-width: 400px) {
          text-align: center;
        }
    }
  }

  > .iconContainer {
    display: flex;
    gap: 1.5rem;
    > svg {
      cursor: pointer;
      color: var(--color-grey1);
      transition: color 0.5s ease-in-out;

      &:hover {
        color: var(--color-grey0);
      }
    }
  }

  .name {
    text-transform: capitalize;
  }

  .email {
    text-transform: lowercase;
  }
`