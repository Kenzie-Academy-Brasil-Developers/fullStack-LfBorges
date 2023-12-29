import { useForm } from "react-hook-form";
import { LogoStyle, StyledH1, StyledH3, Styledlabel } from "../../styles/tipograpy"
import { registerFormSchema } from "./registerFormSchema";
import { ContainerDiv, FormRegister, ButtonBack, ContainerTitle, ContainerInput, InputStylerRegister, ButtonRegister, ErrorRegister } from "./styleRegisterForm"
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export const RegisterForm = () => {
    const {register, handleSubmit, reset, formState:{errors}} = useForm({
        resolver: zodResolver(registerFormSchema)
    });
    
    const submiteForm = async (data) => {
        userRegister(data);
    }

    const navigate = useNavigate();

    const userRegister = async (formData) => {
        try{
            const {data} = await api.post("/user", formData)
            console.log(data);
            reset();
            navigate("/")
        }catch(error){
            console.log(error);
        }
    }
    return(
        <ContainerDiv>
            <ContainerTitle>
                <LogoStyle>FullStack</LogoStyle>
                <ButtonBack href="/">Voltar</ButtonBack>
            </ContainerTitle>
            <FormRegister onSubmit={handleSubmit(submiteForm)}>
                <StyledH1>Crie Sua Conta</StyledH1>
                <StyledH3>Rápido e grátis</StyledH3>
                <ContainerInput>
                   <Styledlabel for="nameInput">Nome</Styledlabel>
                    <InputStylerRegister type="text" id="nameInput" placeholder="Coloque seu nome aqui" {...register('full_name')}/>
                    {errors.full_name ? <ErrorRegister>{errors.full_name.message}</ErrorRegister> : null}
                    <Styledlabel for="emailInput">Email</Styledlabel>
                    <InputStylerRegister type="email" id="emailInput" placeholder="Coloque seu Email aqui" {...register('email')}/>
                    {errors.email ? <ErrorRegister>{errors.email.message}</ErrorRegister> : null}
                    <Styledlabel for="passwordInput">Senha</Styledlabel>
                    <InputStylerRegister type="password" id="passwordInput" placeholder="Coloque sua senha aqui" {...register('password')}/>
                    {errors.password ? <ErrorRegister>{errors.password.message}</ErrorRegister> : null}
                    <Styledlabel for="phoneInput">Numero de celular</Styledlabel>
                    <InputStylerRegister type="tel" id="phoneInput" placeholder="(xx) xxxxx-xxxx" {...register('phone_number')}/>
                    {errors.phone_number ? <ErrorRegister>{errors.phone_number.message}</ErrorRegister> : null}
                </ContainerInput>
                <ButtonRegister type="submit">Cadastrar</ButtonRegister>
            </FormRegister>
        </ContainerDiv>
    )
}