import { StyledContactContainer } from "./style";
import { Typography } from "../../styles/typography";
import { FaPlusCircle } from "react-icons/fa";
import { ContactList } from "../ContactList";
import { useContext } from "react";
import { ContactContext } from "../../providers/ContactContext";

export const ContactContainer = () => {
  const { setIsOpenModalCreate } = useContext(ContactContext)
  return (
    <StyledContactContainer>
      <div>
        <Typography typographystyle="headlineBold">
          Contatos
        </Typography>
        <FaPlusCircle onClick={()=>{setIsOpenModalCreate(true)}}/>
      </div>
      <ContactList/>
    </StyledContactContainer>
  );
};
