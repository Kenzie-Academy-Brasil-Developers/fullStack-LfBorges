import { StyledRegisterPage } from "./style";
import { Link } from "react-router-dom";
import { StyledButtonSecond } from "../../styles/button";
import { RegisterForm } from "../../components/RegisterForm";
import { StyledTypography } from "../../styles/typography";

export const RegisterPage = () => {
  return (
    <StyledRegisterPage>
      <div>
        <StyledTypography typographystyle="title1">
          ContactHub
        </StyledTypography>
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
