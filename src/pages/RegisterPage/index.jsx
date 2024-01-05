import { StyledRegisterPage } from "./style";
import { Link } from "react-router-dom";
import { ButtonSecond } from "../../styles/button";
import { RegisterForm } from "../../components/RegisterForm";
import { Typography } from "../../styles/typography";

export const RegisterPage = () => {
  return (
    <StyledRegisterPage>
      <div>
        <Typography typographystyle="title1">
          ContactHub
        </Typography>
        <Link to="/">
          <ButtonSecond size={"68px"} color="#212529" border="none">
            Voltar
          </ButtonSecond>
        </Link>
      </div>
      <RegisterForm />
    </StyledRegisterPage>
  );
};
