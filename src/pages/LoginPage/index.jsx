import LoginForm from "../../components/LoginForm";
import logo from "../../assets/img/logo.svg"
import { StyledLoginPage } from "./styles";

const LoginPage = () => {
    return (
        <StyledLoginPage>
            <img src={logo} alt="Logo da Kenzie Hub" />
            <LoginForm />
        </StyledLoginPage>
        
    )
}

export default LoginPage;