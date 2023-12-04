import styled from "styled-components";

export const NameStyleDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 131px;
    padding: 12px clamp(40px, 50%, 200px);
    background: var(--color-grey-4);
    border-top: 1px solid var(--color-grey-3);
    border-radius: 4px;
    border-bottom: 1px solid var(--color-grey-3);
`