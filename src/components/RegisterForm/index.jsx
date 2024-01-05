import { useForm } from "react-hook-form";
import { StyledTypography } from "../../styles/typography";
import { Input } from "../Input";
import { StyledRegisterForm } from "./style";
import { useContext, useState } from "react";
import { StyledButtonMain } from "../../styles/button";
import { registerFormSchema } from "./registerFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContext } from "../../providers/UserContext";

export const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });
  const { userRegister } = useContext(UserContext);
  const submit = async (formData) => {
    const updatedData = {
      full_name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      password: formData.password,
      phone_number: formData.phone_number,
    }
    userRegister(updatedData, setIsLoading);
  };

  return (
    <StyledRegisterForm onSubmit={handleSubmit(submit)}>
      <StyledTypography typographystyle="title1">
        Crie sua conta
      </StyledTypography>
      <StyledTypography typographystyle="headline" color="#868E96">
        Rapido e grátis, vamos nessa
      </StyledTypography>
      <Input
        label="Nome"
        id="firstName"
        placeholder="Digite aqui seu nome."
        type="text"
        helper={errors.firstName?.message}
        {...register("firstName")}
      />
      <Input
        label="Sobrenome"
        id="lastName"
        placeholder="Digite aqui seu sobrenome."
        type="text"
        helper={errors.lastName?.message}
        {...register("lastName")}
      />
      <Input
        label="E-mail"
        id="email"
        placeholder="Digite aqui seu email."
        type="text"
        helper={errors.email?.message}
        {...register("email")}
      />
      <Input
        label="Senha"
        id="password"
        placeholder="Digite aqui sua senha."
        password={true}
        helper={errors.password?.message}
        {...register("password")}
      />
      <Input
        label="Confirme a senha"
        id="confirm"
        placeholder="Confirme aqui sua senha."
        password={true}
        helper={errors.confirm?.message}
        {...register("confirm")}
      />
      <Input
        label="Telefone de contato"
        id="phone"
        placeholder="Digite aqui seu telefone."
        type="text"
        helper={errors.phone_number?.message}
        {...register("phone_number")}
      />
      <StyledButtonMain disabled={isLoading}>
        {isLoading ? "Cadastrando..." : "Cadastrar"}
      </StyledButtonMain>
    </StyledRegisterForm>
  );
};
