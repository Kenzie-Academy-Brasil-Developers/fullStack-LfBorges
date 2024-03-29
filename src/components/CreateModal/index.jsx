import { StyledCreateModal } from "./style";
import { MdClose } from "react-icons/md";
import { Typography } from "../../styles/typography";
import { useContext, useState } from "react";
import { ButtonMain } from "../../styles/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createModalSchema } from "./createModalSchema";
import { ContactContext } from "../../providers/ContactContext";
import { Input } from "../Input";

export const CreateModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createModalSchema),
  });
  const { setIsOpenModalCreate, createContact } = useContext(ContactContext);

  const submit = (formData) => {
    const updatedData = {
        full_name: `${formData.full_name}`,
        email: formData.email,
        phone_number: formData.phone_number,
    }

    createContact(updatedData,setIsLoading);
  }

  return (
    <StyledCreateModal role="dialog">
      <div>
        <header>
          <div>
            <Typography typographystyle="title3">
              Cadastrar Contato
            </Typography>
            <MdClose
              size={20}
              color="#868E96"
              onClick={() => {
                setIsOpenModalCreate(false);
              }}
            />
          </div>
        </header>
        <form onSubmit={handleSubmit(submit)}>
          <Input
            label="Nome"
            id="full_name"
            placeholder="Digite o nome do contato."
            type="text"
            helper={errors.full_name?.message}
            {...register("full_name")}
          />
          <Input
            label="E-mail"
            id="email"
            placeholder="Digite o email do contato."
            type="text"
            helper={errors.email?.message}
            {...register("email")}
          />
          <Input
            label="Telefone"
            id="phone"
            placeholder="Digite o telefone do contato."
            type="text"
            helper={errors.phone_number?.message}
            {...register("phone_number")}
          />
          <ButtonMain type="submit" disabled={isLoading}>
            {isLoading ? "Cadastrando Contato..." : "Cadastrar Contato"}
          </ButtonMain>
        </form>
      </div>
    </StyledCreateModal>
  );
};
