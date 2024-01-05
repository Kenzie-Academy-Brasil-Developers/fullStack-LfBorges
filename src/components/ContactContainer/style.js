import { styled } from "styled-components";

export const StyledContactContainer = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 2rem;
  gap: 20px;

  > div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    >svg{
        color: var(--color-grey1);
        font-size: 20px;
        cursor: pointer;
        transition: color 1.5s;

        &:hover{
            color: var(--color-grey2);
        }
    }
  }
`;
