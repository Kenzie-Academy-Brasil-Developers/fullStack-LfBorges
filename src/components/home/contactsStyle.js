import styled from "styled-components";

export const ContainerContacts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    padding-top: 20px;
    height: fit-content;
    padding-left: clamp(40px, 50%, 200px);
    padding-right: clamp(40px, 50%, 200px);
`

export const ContainerContactsTitle = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    justify-content: space-between;
    width: 100%;
    height: 32px;
`
export const ButtonAddContact = styled.button`
    width: 32.49px;
    height: 32px;
    color: var(--color-grey-0);
    font-size: 20px;
    background: var(--color-grey-3);
    border: 2px solid var(--color-grey-3);
    border-radius: 4px;
    transition: all 0.6s ease 0s;
    cursor: pointer;
    &:hover{
        background: var(--color-grey-2);
        border: 2px solid var(--color-grey-2);
    }
`

export const ListContainerContacts = styled.ul`
    display: flex;
    padding: 10px;
    flex-direction: column;
    gap: 20px;
    overflow-y: auto;
    width: 100%;
    height: 616px;
    border: 2px solid var(--color-grey-4);
    border-radius: 4px;
    background: var(--color-grey-3);
`

export const ListContacts = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    width: 100%;
    height: 49px;
    border: 2px solid var(--color-grey-4);
    border-radius: 4px;
    background: var(--color-grey-4);
    transition: all 0.6s ease 0s;
`

export const ButtonDeleteContact = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32.49px;
    height: 32px;
    color: var(--color-grey-0);
    font-size: 20px;
    background: var(--color-grey-3);
    border: 2px solid var(--color-grey-3);
    border-radius: 4px;
    transition: all 0.6s ease 0s;
    cursor: pointer;
    &:hover{
        background: var(--color-negative);
        border: 2px solid var(--color-negative);
    }
`

export const ButtonEditContact = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32.49px;
    height: 32px;
    color: var(--color-grey-0);
    font-size: 20px;
    background: var(--color-grey-3);
    border: 2px solid var(--color-grey-3);
    border-radius: 4px;
    transition: all 0.6s ease 0s;
    cursor: pointer;
    &:hover{
        background: var(--color-grey-2);
        border: 2px solid var(--color-grey-2);
    }
`

export const ImageButton = styled.img`
    width: 20px;
    height: 20px;
`