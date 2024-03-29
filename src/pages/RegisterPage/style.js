import { styled } from "styled-components";

export const StyledRegisterPage = styled.div`
  width: 100%;
  max-width: 24.5625rem;
  height: 945px;
  padding: 3.0625rem 0.75rem 96px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: clamp(1.125rem, 2.5vw, 2.25rem);

  > div {
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-between;

    >img {
        width: 15rem;
    }
  }
`;
