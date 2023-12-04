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

export const Form = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: var(--color-grey-3);
    border: 2px solid var(--color-grey-3);
    padding: 15px;
    gap: 30px;
    border-radius: 4px;
    width: 340px;
    height: 440px;
`

export const ContainerLabel = styled.div`
    display: flex;
    align-items: flex-start;
    width: 100%;
    flex-direction: column;
    gap: 5px;
`

export const InputStyle = styled.input`
    width: 100%;
    height: 38.5px;
    background-color: var(--color-grey-2);
    border: 2px solid var(--color-grey-3);
    border-radius: 5px;
    color: var(--color-grey-0);
    padding: 0px 13.0293px;
    transition: all 0.6s ease 0s;
    &:hover{
        border: 2px solid var(--color-grey-0);
    }
`

export const ButtonSend = styled.button`
    width: 100%;
    height: 55px;
    background-color: var(--color-color-primary-50);
    border: 1.5px solid var(--color-color-primary-50);
    border-radius: 4px;
    font-family: Inter;
    font-weight: 500;
    font-size: 12.8347px;
    transition: all 0.6s ease 0s;
    line-height: 21px;
    &:hover{
        background-color: var(--color-color-primary);
        border: 1.5px solid var(--color-color-primary);
        border: 2px solid var(--color-grey-0);
    }
`

export const ButtonRegister = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 55px;
    background-color: var(--color-color-primary-50);
    border: 1.5px solid var(--color-grey-2);
    border-radius: 4px;
    font-family: Inter;
    font-weight: 500;
    font-size: 15px;
    color: var(--color-grey-0);
    transition: all 0.6s ease 0s;
    text-decoration: none;
    line-height: 21px;
    &:hover{
        background-color: var(--color-color-primary);
        border: 1.5px solid var(--color-color-primary);
        border: 2px solid var(--color-grey-0);
    }
`