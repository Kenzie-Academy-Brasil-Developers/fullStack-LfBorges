import { LogoStyle, StyledH1 , StyledH3, Styledlabel } from "../../styles/tipograpy"
import { Form, ContainerDiv, ContainerLabel, InputStyle, ButtonSend, ButtonRegister} from "./styleLoginForm"

export const LoginForm = () => {
    return (
        <ContainerDiv>
            <LogoStyle>FullStack</LogoStyle>
            <Form>
                <StyledH1>Login</StyledH1>
                <ContainerLabel>
                    <Styledlabel for="emailLogin">Email</Styledlabel>
                    <InputStyle type="email" id="emailLogin" placeholder="Coloque seu email aqui"/>
                    <Styledlabel for="passwordLogin">Senha</Styledlabel>
                    <InputStyle type="password" id="passwordLogin" placeholder="Coloque sua senha aqui"/>
                </ContainerLabel>
               <ButtonSend type="submit">
                    <StyledH3>
                        Enviar
                    </StyledH3>
                </ButtonSend>
                <Styledlabel for="registerLogin">Ainda não possui uma conta?</Styledlabel>
                <ButtonRegister  id="registerLogin" href="register">Registrar</ButtonRegister>
            </Form>
        </ContainerDiv>
    )
}