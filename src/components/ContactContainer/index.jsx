import { StyledcontactContainer } from "./styles";
import { StyledTypography } from "../../styles/typography";
import plusBtn from "../../assets/img/button-plus.svg";
import ContactList from "../contactList"
import { useContext } from "react";
import { ContactContext } from "../../providers/ContactContext";

const ContactContainer = () => {

    const { openModalCreate } = useContext(ContactContext);

    return (
        <StyledcontactContainer>
            <div>
                <StyledTypography typographystyle="headlineBold">
                    Tecnologias
                </StyledTypography>
                <img src={plusBtn} onClick={() => openModalCreate()} />
            </div>
            <ContactList />
        </StyledcontactContainer>
    )
}

export default ContactContainer;