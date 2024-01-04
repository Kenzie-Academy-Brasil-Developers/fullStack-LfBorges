import { StyledModalCreate } from "./styles";
import { StyledTypography } from "../../styles/typography";
import { MdClose } from 'react-icons/md';
import { useContext, useState } from "react";
import { ContactContext } from "../../providers/ContactContext";
import Input from "../Input";
import { StyledButtonMain } from "../../styles/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { modalCreateSchema } from "./modalCreateSchema";


const ModalCreate = () => {

    const [ isLoading,setIsLoading] = useState(false);
    const { closeModalCreate, createcontact } = useContext(ContactContext);
    const { register, handleSubmit, formState:{errors} } = useForm({
        resolver: zodResolver(modalCreateSchema),
    });

    const submit = (formData) => {
        createcontact(formData,setIsLoading);
    }
    return (
        <StyledModalCreate role="dialog">
            <div>
                <header>
                    <div>
                        <StyledTypography typographystyle="title3">
                            Cadastrar Tecnologia
                        </StyledTypography>
                        <MdClose size={20} color="#868E96" onClick={() => closeModalCreate()} />
                    </div>
                </header>
                <form onSubmit={handleSubmit(submit)}>
                    <Input 
                        label="Nome do Contato" 
                        id="name" 
                        placeholder="Digite a tecnologia"
                        helper={errors.full_name ? <p>{errors.full_name.message}</p> : null}
                        {...register("full_name")} 
                    />
                    <Input 
                        label="Email do Contato" 
                        id="name" 
                        placeholder="Digite a tecnologia"
                        helper={errors.email? <p>{errors.email.message}</p> : null}
                        {...register("email")} 
                    />
                    <Input 
                        label="Celular do Contato" 
                        id="name" 
                        placeholder="Digite a tecnologia"
                        helper={errors.phone_number ? <p>{errors.phone_number.message}</p> : null}
                        {...register("phone_number")} 
                    />
                    <StyledButtonMain disabled={isLoading}>
                        {isLoading ? "Cadastrando Contato..." : "Cadastrar Contato"}
                    </StyledButtonMain>
                </form>
            </div>
        </StyledModalCreate>
    )
}

export default ModalCreate;
