import styled from "styled-components";

export const HeaderDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 72px;
    justify-content: space-between;
    padding-top: 20px;
    padding-left: clamp(40px, 50%, 200px);
    padding-right: clamp(40px, 50%, 200px);
`

export const ButtonHeader = styled.button`
    width: 79.54px;
    height: 31.95px;
    font-family: Inter;
    background: var(--color-grey-3);
    border: 2px solid var(--color-grey-3);
    border-radius: 4px;
    color: var(--color-grey-0);
    font-weight: 600;
    font-size: 12px;
    line-height: 23px;
    transition: all 0.6s ease 0s;
    cursor: pointer;
    &:hover{
        border: 2px solid var(--color-grey-0);
    }
`