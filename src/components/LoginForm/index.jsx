import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import { StyledLoginForm } from "./style";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import { Typography } from "../../styles/typography";
import { ButtonMain } from "../../styles/button";
import { ButtonSecond } from "../../styles/button";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });
  const { userLogin } = useContext(UserContext);
  const submit = (FormData) => {
    userLogin(FormData, setIsLoading);
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit(submit)}>
      <Typography typographystyle="title1">Login</Typography>
      <Input
        label="E-mail"
        id="email"
        placeholder="Digite o seu email"
        type="email"
        helper={errors.email?.message}
        {...register("email")}
      />
      <Input
        label="Senha"
        id="password"
        placeholder="Digite a sua senha"
        password={true}
        helper={errors.password?.message}
        {...register("password")}
      />
      <ButtonMain disabled={isLoading}>
        {isLoading ? "Logando..." : "Entrar"}
      </ButtonMain>
      <Typography typographystyle="headlineBold" color="#868E96">
        Ainda não possui uma conta?
      </Typography>
      <Link to="/register">
        <ButtonSecond type="button">Cadastre-se</ButtonSecond>
      </Link>
    </StyledLoginForm>
  );
};
