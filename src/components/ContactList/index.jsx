import { useContext } from "react";
import { StyledcontactList } from "./styles"
import { ContactContext } from "../../providers/ContactContext";
import  ContactItem  from "../ContactItem";
import { StyledTypography } from "../../styles/typography";

const ContactList = () => {
    const { contact } = useContext(ContactContext);

    return (
        <StyledcontactList>
            {contact.map((item)=>(
                <ContactItem key={item.id} item={item}>
                    <StyledTypography typographystyle={"title3"} color="#FFF">
                        {item.full_name}
                    </StyledTypography>
                    <StyledTypography typographystyle={"headline"}>
                        {item.email}
                    </StyledTypography>
                    <StyledTypography typographystyle={"headline"}>
                        {item.phone_number}
                    </StyledTypography>
                    <StyledTypography typographystyle={"headline"}>
                        {item.registration_date }
                    </StyledTypography>
                </ContactItem>
            ))}
        </StyledcontactList>
    )
}

export default ContactList;