import { LoginForm } from "../../components/LoginForm"
import logo from "../../assets/logoTexto.png"
import { StyledLoginPage } from "./style"

export const LoginPage = () => {
    return (
        <StyledLoginPage>
            <img src={logo} alt="Logo MyContact" />
            <LoginForm />
        </StyledLoginPage>
    )
}