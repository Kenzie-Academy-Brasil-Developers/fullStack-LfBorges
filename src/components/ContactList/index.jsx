import { useContext } from "react";
import { StyledContactList } from "./style";
import { UserContext } from "../../providers/UserContext";
import { ContactItem } from "../ContactItem";
import { Typography } from "../../styles/typography";

export const ContactList = () => {
    const { contacts } = useContext(UserContext)

    return (
        <StyledContactList>
            {contacts.length > 0 
            ? contacts.map((contact,index) => (
                <ContactItem key={index} contact={contact}/>
            ))
            : <Typography typographystyle="title1">Sem Nenhum Contato adicionado!</Typography>}
        </StyledContactList>
    )
}