import { useForm } from "react-hook-form";
import { StyledTypography } from "../../styles/typography";
import Input from "../Input";
import { StyledRegisterForm } from "./styles";
import InputPassword from "../InputPassword";
import { useContext, useState } from "react";
import { StyledButtonMain } from "../../styles/button";
import { registerFormSchema } from "./registerFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContext } from "../../providers/UserContext";

const RegisterForm = () => {
  const [isLoading,setIsLoading] = useState(false);

  const {register, handleSubmit, formState: { errors }} = useForm({resolver: zodResolver(registerFormSchema),});

  const { optionsItem , userRegister } = useContext(UserContext);

  const submit = async (formData) => {
    userRegister(formData,setIsLoading);
  };

  return (
    <>
      <StyledRegisterForm onSubmit={handleSubmit(submit)}>
        <StyledTypography typographystyle="title1">
          Crie sua conta
        </StyledTypography>
        <StyledTypography typographystyle="headline" color="#868E96">
          Rapido e grátis, vamos nessa
        </StyledTypography>
        <Input
          label="Nome"
          id="name"
          placeholder="Digite aqui seu nome"
          type="text"
          helper={errors.full_name ? <p>{errors.full_name.message}</p> : null}
          {...register("name")}
        />
        <Input
          label="Email"
          id="email"
          placeholder="Digite aqui seu email"
          type="text"
          helper={errors.email ? <p>{errors.email.message}</p> : null}
          {...register("email")}
        />
        <InputPassword
          label="Senha"
          id="password"
          placeholder="Digite aqui sua senha"
          helper={errors.password ? <p>{errors.password.message}</p> : null}
          {...register("password")}
        />
        <InputPassword
          label="Confirmar Senha"
          id="passwordConfirm"
          placeholder="Digite novamente sua senha"
          helper={errors.confirm ? <p>{errors.confirm.message}</p> : null}
          {...register("confirm")}
        />
        <Input
          label="Contato"
          id="contact"
          placeholder="Opção de contato"
          type="text"
          helper={errors.phone_number ? <p>{errors.phone_number.message}</p> : null}
          {...register("contact")}
        />
        <StyledButtonMain disabled={isLoading}>
          {isLoading ? "Cadastrando..." : "Cadastrar"}
        </StyledButtonMain>
      </StyledRegisterForm>
    </>
  );
};

export default RegisterForm;
