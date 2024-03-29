import { styled } from "styled-components";

export const StyledHeaderHome = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media screen and (max-width: 390px) {
      flex-direction: column;
    }

  .name {
    text-transform: capitalize;
  }
`;
