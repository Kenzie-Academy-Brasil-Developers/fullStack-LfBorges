import { LogoStyle, StyledH1, Styledlabel } from "../../styles/tipograpy"
import { Form, ContainerDiv, ContainerLabel, InputStyle, ButtonSend, ButtonRegister, ErrorLogin} from "./styleLoginForm"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { loginFormSchema } from "./loginFormSchema";

export const LoginForm = () => {
    const {register, handleSubmit, reset, formState:{errors}} = useForm({
        resolver: zodResolver(loginFormSchema)
    });

    const loginForm = async (data) => {
        userLogin(data);
    };

    const navigate = useNavigate();

    const userLogin = async (formData) =>{
        try{
            const {data} = await api.post("/login", formData)
            localStorage.setItem("@TOKEN", data.token)
            console.log(data);
            reset();
            navigate("/homepage")
        }catch(error){
            console.log(error);
        }
    }
    return (
        <ContainerDiv>
            <LogoStyle>FullStack</LogoStyle>
            <Form onSubmit={handleSubmit(loginForm)}>
                <StyledH1>Login</StyledH1>
                <ContainerLabel>
                    <Styledlabel htmlFor="emailLogin">Email</Styledlabel>
                    <InputStyle type="email" id="emailLogin" placeholder="Coloque seu email aqui"{...register('email')}/>
                    {errors.email ? <ErrorLogin>{errors.email.message}</ErrorLogin> : null}
                    <Styledlabel htmlFor="passwordLogin">Senha</Styledlabel>
                    <InputStyle type="password" id="passwordLogin" placeholder="Coloque sua senha aqui" {...register('password')}/>
                    {errors.password ? <ErrorLogin>{errors.password.message}</ErrorLogin> : null}
                </ContainerLabel>
                <ButtonSend type="submit">Enviar</ButtonSend>
                <Styledlabel htmlFor="registerLogin">Ainda não possui uma conta?</Styledlabel>
                <ButtonRegister  id="registerLogin" href="register">Registrar</ButtonRegister>
            </Form>
        </ContainerDiv>
    )
}
