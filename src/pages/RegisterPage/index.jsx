import { StyledRegisterPage } from "./styles";
import logo from "../../assets/img/logo.svg"
import { StyledButtonSecond } from "../../styles/button";
import RegisterForm from "../../components/RegisterForm";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    return (
        <>
        <StyledRegisterPage>
            <div>
                <img src={logo} alt="Logo Kenzie Hub" />
                <Link to="/">
                <StyledButtonSecond size={"68px"} color="#212529" border="none" >
                    Voltar
                </StyledButtonSecond>
                </Link>
            </div>
            <RegisterForm />
        </StyledRegisterPage>
        </>
    )
}

export default RegisterPage;