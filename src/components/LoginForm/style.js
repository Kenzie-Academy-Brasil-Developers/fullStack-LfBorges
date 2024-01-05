import { styled } from "styled-components";

export const StyledLoginForm = styled.form`
  padding: 2.625rem 1.375rem;
  display: flex;
  flex-direction: column;
  gap: 1.375rem;
  width: 100%;
  align-items: center;
  background-color: var(--color-grey3);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  height: fit-content;

  > a {
    width: 100%;
  }
`;
