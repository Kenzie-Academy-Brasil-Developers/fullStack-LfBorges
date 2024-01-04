import { useContext } from "react";
import { StyledcontactItem } from "./styles";
import { ContactContext } from "../../providers/ContactContext";

const ContactItem = ({item,children}) => {
    const { openModalEdit } = useContext(ContactContext);

    return (
        <StyledcontactItem onClick={() => openModalEdit(item)}>
            {children}
        </StyledcontactItem>
    )
}

export default ContactItem;