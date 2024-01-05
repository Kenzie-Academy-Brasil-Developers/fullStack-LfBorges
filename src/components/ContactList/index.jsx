import { useContext, useEffect } from "react";
import { StyledContactList } from "./style";
import { UserContext } from "../../providers/UserContext";
import { ContactItem } from "../ContactItem";

export const ContactList = () => {
    const { contacts } = useContext(UserContext)

    return (
        <StyledContactList>
            {contacts.length > 0 
            ? contacts.map((contact,index) => (
                <ContactItem key={index} contact={contact}/>
            ))
            : <p>Sem Nenhum Contato adicionado!</p>}
        </StyledContactList>
    )
}