import { ContainerContacts, ContainerContactsTitle, ListContainerContacts, ListContacts, ButtonEditContact, ButtonDeleteContact, ButtonAddContact, ImageButton } from "./contactsStyle"
import { StyledH2 } from "../../styles/tipograpy"
import edit from "../../assets/edit.png"
import trash from "../../assets/trash.png"

export const ContactsDiv = ({IsOpen, SetIsOpen}) => {
    return (
        <ContainerContacts>
            <ContainerContactsTitle>
                <StyledH2>Contatos</StyledH2>
                <ButtonAddContact onClick={()=>SetIsOpen(!IsOpen)}>+</ButtonAddContact>
            </ContainerContactsTitle>
            <ListContainerContacts>
                <ListContacts>
                    <StyledH2>Nome</StyledH2> 
                    <StyledH2>Email</StyledH2>
                    <StyledH2>Telefone</StyledH2>
                    <StyledH2>data de registro</StyledH2>
                    <ButtonEditContact onClick={()=>SetIsOpen(!IsOpen)}>
                        <ImageButton src={edit}/>
                    </ButtonEditContact>
                    <ButtonDeleteContact>
                        <ImageButton src={trash}/>
                    </ButtonDeleteContact>
                </ListContacts>
            </ListContainerContacts>
        </ContainerContacts >
    )
}