import styled from "styled-components"

export const DialogMainEditDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    flex-direction: column;
    position: absolute;
`

export const EditStyleModal = styled.div`
    display: flex;
    top: 250px;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    max-width: 325px;
    width: 100%;
    height: fit-content;
    background: var(--color-grey-3);
    position: absolute;
`

export const EditTitleDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    padding: 10px;
    background: var(--color-grey-2);
`
export const ButtonCloseEdit = styled.button`
    width: 30px;
    height: 30px;
    font-family: Inter, sans-serif;
    color: var(--color-grey-0);
    font-size: 20px;
    background: none;
    border: none;
`

export const FormEditModal = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    width: 100%;
    padding: 20px;
`

export const InputEditModal = styled.input`
    width: 100%;
    height: 48px;
    font-family: Inter, sans-serif;
    color: var(--color-grey-0);
    background: var(--color-grey-2);
    border: 2px solid var(--color-grey-2);
    border-radius: 4px;
`

export const ButtonSaveEdit = styled.button`
    width: 100%;
    height: 48px;
    font-family: Inter, sans-serif;
    background: var(--color-color-primary);
    border: 2px solid var(--color-color-primary);
    color: var(--color-grey-0);
    border-radius: 4px;
    transition: all 0.6s ease 0s;
    &:hover{
        background-color: var(--color-color-primary);
        border: 1.5px solid var(--color-color-primary);
        border: 2px solid var(--color-grey-0);
    }
`

export const DivButtonEdit = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
`