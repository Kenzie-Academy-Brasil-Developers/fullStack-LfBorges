import { styled } from "styled-components";

export const StyledCreateModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  inset: 0;
  background-color: #00000030;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  > div {
    max-width: 20.3125rem;
    width: 100%;
    height: fit-content;
    background-color: var(--color-grey3);
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: clamp(1.0625rem, 1.5vw, 1.125rem);
    > header {
      width: 100%;
      height: fit-content;
      padding-top: clamp(0.625rem, 1vw, 0.75rem);
      padding-bottom: clamp(0.625rem, 1vw, 0.75rem);
      padding-left: 1rem;
      padding-right: 1rem;
      background-color: var(--color-grey2);
      > div {
        max-width: 21.25rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;

        > svg {
          cursor: pointer;
        }
      }
    }
    > form {
      width: 100%;
      display: flex;
      gap: clamp(1.0813rem, 1.5vw, 1.375rem);
      flex-direction: column;
      padding-top: clamp(0.875rem, 1.2vw, 1.125rem);
      padding-bottom: clamp(1.5625rem, 1vw, 2rem);
      padding-left: clamp(0.875rem, 1.2vw, 1.375rem);
      padding-right: clamp(0.875rem, 1.2vw, 1.375rem);
    }
  }
`;