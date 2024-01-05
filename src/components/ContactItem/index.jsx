import { StyledContactItem } from "./style";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { Typography } from "../../styles/typography";
import { useContext } from "react";
import { ContactContext } from "../../providers/ContactContext";

export const ContactItem = ({ contact }) => {

  const { openEditModal, openDeleteModal } = useContext(ContactContext);

  return (
    <StyledContactItem>
      <div className="nameContainer">
        <div>
          <Typography typographystyle={"headline"}>
            {contact.full_name}
          </Typography>
        </div>
        <div>
          <Typography typographystyle={"headline"}>
            {contact.email}
          </Typography>
        </div>
        <div>
          <Typography typographystyle={"headline"}>
            {contact.phone_number}
          </Typography>
        </div>
        <div>
          <Typography typographystyle={"headline"}>
            {contact.registration_date}
          </Typography>
        </div>
      </div>
      <div className="iconContainer">
        <FaPencilAlt onClick={() => openEditModal(contact)} />
        <FaTrashAlt onClick={() => openDeleteModal(contact)} />
      </div>
    </StyledContactItem>
  );
};
