import { DeleteModalStyle } from "./style";
import { Typography } from "../../styles/typography";
import { MdClose } from "react-icons/md";
import { useContext, useState } from "react";
import { ButtonMain } from "../../styles/button";
import { ContactContext } from "../../providers/ContactContext";

export const DeleteModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { target, closeDeleteModal, deleteContact } = useContext(ContactContext);

  return (
    <DeleteModalStyle role="dialog">
      <div>
        <header>
          <div>
            <Typography typographystyle="title3">
              Deletar Contato
            </Typography>
            <MdClose
              size={20}
              color="#868E96"
              onClick={() => closeDeleteModal()}
            />
          </div>
        </header>
        <div>
          <Typography typographystyle="headline">
            Deseja deletar o contato de
          </Typography>
          <Typography typographystyle="headlineBold">
            " {target.full_name} "
          </Typography>
          <ButtonMain disabled={isLoading} onClick={()=>deleteContact(setIsLoading)}>
            {isLoading ? "Deletando Contato..." : "Deletar Contato"}
          </ButtonMain>
        </div>
      </div>
    </DeleteModalStyle>
  );
};