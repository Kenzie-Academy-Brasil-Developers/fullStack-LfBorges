import { styled } from "styled-components";

export const StyledContactContainer = styled.div`
   width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  padding: 3rem 1rem 2rem;
  gap: 1.3125rem;

  > div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    >svg{
        color: var(--color-grey1);
        font-size: 1.1rem;
        cursor: pointer;
        transition: color 0.5s ease-in-out;

        &:hover{
            color: var(--color-grey2);
        }
    }
  }
`;
