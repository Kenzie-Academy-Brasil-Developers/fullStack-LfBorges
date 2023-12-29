import { ContainerContacts, ContainerContactsTitle, ListContainerContacts, ListContacts, ButtonEditContact, ButtonDeleteContact, ButtonAddContact, ImageButton } from "./contactsStyle"
import { StyledH2 } from "../../styles/tipograpy"
import edit from "../../assets/edit.png"
import trash from "../../assets/trash.png"

export const ContactsDiv = ({ IsRegisterOpen, SetRegisterIsOpen, IsEditOpen, SetEditIsOpen }) => {
    return (
      <ContainerContacts>
        <ContainerContactsTitle>
          <StyledH2>Contatos</StyledH2>
          <ButtonAddContact onClick={() => {SetRegisterIsOpen(!IsRegisterOpen)}}>+</ButtonAddContact>
        </ContainerContactsTitle>
        <ListContainerContacts>
          <ListContacts>
            <StyledH2>Nome</StyledH2>
            <StyledH2>Email</StyledH2>
            <StyledH2>Telefone</StyledH2>
            <StyledH2>data de registro</StyledH2>
            <ButtonEditContact onClick={() => {SetEditIsOpen(!IsEditOpen)}}>
              <ImageButton src={edit} />
            </ButtonEditContact>
            <ButtonDeleteContact>
              <ImageButton src={trash} />
            </ButtonDeleteContact>
          </ListContacts>
        </ListContainerContacts>
      </ContainerContacts>
    );
  };
  
  