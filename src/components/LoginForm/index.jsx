import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import { StyledLoginForm } from "./style";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import { StyledTypography } from "../../styles/typography";
import { StyledButtonMain } from "../../styles/button";
import { StyledButtonSecond } from "../../styles/button";
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
      <StyledTypography typographystyle="title1">Login</StyledTypography>
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
      <StyledButtonMain disabled={isLoading}>
        {isLoading ? "Logando..." : "Entrar"}
      </StyledButtonMain>
      <StyledTypography typographystyle="headlineBold" color="#868E96">
        Ainda não possui uma conta?
      </StyledTypography>
      <Link to="/register">
        <StyledButtonSecond type="button">Cadastre-se</StyledButtonSecond>
      </Link>
    </StyledLoginForm>
  );
};
