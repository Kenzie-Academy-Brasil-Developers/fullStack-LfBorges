import { LogoStyle, StyledH1, StyledH3, Styledlabel } from "../../styles/tipograpy"
import { ContainerDiv, FormRegister, ButtonBack, ContainerTitle, ContainerInput, InputStylerRegister, ButtonRegister } from "./styleRegisterForm"

export const RegisterForm = () => {
    return(
        <ContainerDiv>
            <ContainerTitle>
                <LogoStyle>FullStack</LogoStyle>
                <ButtonBack href="/">Voltar</ButtonBack>
            </ContainerTitle>
            <FormRegister>
                <StyledH1>Crie Sua Conta</StyledH1>
                <StyledH3>Rápido e grátis</StyledH3>
                <ContainerInput>
                   <Styledlabel for="nameInput">Nome</Styledlabel>
                    <InputStylerRegister type="text" id="nameInput" required placeholder="Coloque seu nome aqui"/>
                    <Styledlabel for="emailInput">Email</Styledlabel>
                    <InputStylerRegister type="email" id="emailInput" required placeholder="Coloque seu Email aqui"/>
                    <Styledlabel for="passwordInput">Senha</Styledlabel>
                    <InputStylerRegister type="password" id="passwordInput" required placeholder="Coloque sua senha aqui"/>
                    <Styledlabel for="phoneInput">Numero de celular</Styledlabel>
                    <InputStylerRegister type="tel" id="phoneInput" required placeholder="(xx) xxxxx-xxxx"/>
                </ContainerInput>
                <ButtonRegister type="submit">Cadastrar</ButtonRegister>
            </FormRegister>
        </ContainerDiv>
    )
}