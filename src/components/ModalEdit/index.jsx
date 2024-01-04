import { useContext, useState } from "react";
import { StyledTypography } from "../../styles/typography";
import Input from "../Input";
import { StyledModalEdit } from "./styles";
import { MdClose } from 'react-icons/md';
import { ContactContext } from "../../providers/ContactContext";
import { StyledButtonMainNegative, StyledButtonSecond } from "../../styles/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { modalEditSchema } from "./modalEditSchema";

const ModalEdit = () => {

    const [ isLoadingForm, setIsLoadingFrom] = useState(false)
    const [ isLoadingdelete, setIsLoadingdelete] = useState(false)
    const { closeModalEdit, contactTarget, editcontact, deletecontact } = useContext(ContactContext);
    const { register, handleSubmit, formState: {errors} } =useForm({
        resolver: zodResolver(modalEditSchema),
    });

    const submit = (formData) => {
        editcontact(formData, setIsLoadingFrom);
    }

    return (
        <StyledModalEdit role="dialog">
            <div>
                <header>
                    <div>
                        <StyledTypography typographystyle="title3">
                            Tecnologia Detalhes
                        </StyledTypography>
                        <MdClose size={20} color="#868E96" onClick={() => closeModalEdit()} />
                    </div>
                </header>
                <form onSubmit={handleSubmit(submit)}>
                    <Input 
                        label="Nome do projeto" 
                        id="name" 
                        value={contactTarget}
                        disabled
                    />
                    <div className="btnContainer">
                        <StyledButtonMainNegative className="negative" type="submit" disabled={(isLoadingForm||isLoadingdelete)?true:false}>
                            {isLoadingForm ? "Salvando..." : "Salvar alterações"}
                        </StyledButtonMainNegative>
                        < StyledButtonSecond type="button" disabled={(isLoadingForm||isLoadingdelete)?true:false} onClick={() => deletecontact(setIsLoadingdelete)}>
                           {isLoadingdelete ? "Excluindo..." : " Excluir"}
                        </StyledButtonSecond>
                    </div>
                </form>
            </div>
        </StyledModalEdit>
    )
}

export default ModalEdit;