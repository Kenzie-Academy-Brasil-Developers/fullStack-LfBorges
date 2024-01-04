import Input from "../Input";
import InputPassword from "../InputPassword";
import { useForm } from "react-hook-form";
import { StyledLoginForm } from "./styles";
import { StyledTypography } from "../../styles/typography";
import { StyledButtonMain } from "../../styles/button";
import { StyledButtonSecond } from "../../styles/button";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";

const LoginForm = ()=>{
    const [isLoading,setIsLoading] = useState(false);

    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(loginFormSchema),
    });

    const { userLogin } = useContext(UserContext);

    const submit = (formData) => {
      userLogin(formData, setIsLoading);
    }

    return (
        <>
            <StyledLoginForm onSubmit={handleSubmit(submit)}>
                <StyledTypography typographystyle="title1">
                    Login
                </StyledTypography>
                <Input 
                    label="Email" 
                    id="email" 
                    placeholder="Digite o seu email" 
                    type="email"
                    helper={errors.email ? <p>{errors.email.message}</p> : null}
                    {...register("email")}
                />
                <InputPassword
                    label="Senha"
                    id="password"
                    placeholder="Digite a sua senha"
                    helper={errors.password ? <p>{errors.password.message}</p> : null}
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
        </>
    )
}

export default LoginForm;