import { StyledContactContainer } from "./style";
import { StyledTypography } from "../../styles/typography";
import { FaPlusCircle } from "react-icons/fa";
import { ContactList } from "../ContactList";
import { useContext } from "react";
import { ContactContext } from "../../providers/ContactContext";

export const ContactContainer = () => {
  const { setIsOpenModalCreate } = useContext(ContactContext)
  return (
    <StyledContactContainer>
      <div>
        <StyledTypography typographystyle="headlineBold">
          Contatos
        </StyledTypography>
        <FaPlusCircle onClick={()=>{setIsOpenModalCreate(true)}}/>
      </div>
      <ContactList/>
    </StyledContactContainer>
  );
};
