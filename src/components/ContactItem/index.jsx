import { StyledContactItem } from "./style";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { Typography } from "../../styles/typography";

export const ContactItem = ({ contact }) => {
  
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
      </div>
      <div className="iconContainer">
        <FaPencilAlt />
        <FaTrashAlt />
      </div>
    </StyledContactItem>
  );
};
