import logo from "../../assets/logoTexto.png";
import { StyledRegisterPage } from "./style";
import { Link } from "react-router-dom";
import { StyledButtonSecond } from "../../styles/button";
import { RegisterForm } from "../../components/RegisterForm";

export const RegisterPage = () => {
  return (
    <StyledRegisterPage>
      <div>
        <img src={logo} alt="logo MyContacts" />
        <Link to="/">
          <StyledButtonSecond size={"68px"} color="#212529" border="none">
            Voltar
          </StyledButtonSecond>
        </Link>
      </div>
      <RegisterForm />
    </StyledRegisterPage>
  );
};
