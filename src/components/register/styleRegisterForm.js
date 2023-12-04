import styled from "styled-components"

export const ContainerDiv = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

export const ContainerTitle = styled.div`
    display: flex;
    width: 370px;
    justify-content: space-between;
`

export const ButtonBack = styled.a`
    display: flex;
    width: 80px;
    height: 32px;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    background-color: var(--color-grey-3);
    border: 2px solid var(--color-grey-3);
    border-radius: 4px;
    color: var(--color-grey-0);
    transition: all 0.6s;
    &:hover{
        border: 2px solid var(--color-grey-0);
    }
`

export const FormRegister = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: var(--color-grey-3);
    border: 2px solid var(--color-grey-3);
    gap: 20px;
    width: 370px;
    height: 495px;
    padding: 20px;
`

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 10px;
`

export const InputStylerRegister = styled.input`
    width: 100%;
    height: 38.38px;
    color: var(--color-grey-0);
    padding: 0px 12.9865px;
    background: var(--color-grey-2);
    border: 1px solid var(--color-grey-2);
    border-radius: 3px;
    transition: all 0.6s ease 0s;
    &:hover{
        border: 2px solid var(--color-grey-0);
    }
`

export const ButtonRegister = styled.button`
    width: 100%;
    height: 48px;
    font-family: Inter, sans-serif;
    color: var(--color-grey-0);
    background: var(--color-color-primary-50);
    border: 2px solid var(--color-color-primary-50);
    border-radius: 4px;
    transition: all 0.6s ease 0s;
    &:hover{
        background-color: var(--color-color-primary);
        border: 1.5px solid var(--color-color-primary);
        border: 2px solid var(--color-grey-0);
    }
`