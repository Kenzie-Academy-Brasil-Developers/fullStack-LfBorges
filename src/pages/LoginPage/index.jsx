import { LoginForm } from "../../components/LoginForm"
import { StyledLoginPage } from "./style"
import { StyledTypography } from "../../styles/typography";

export const LoginPage = () => {
    return (
        <StyledLoginPage>
            <StyledTypography typographystyle="title1">
                    ContactHub
            </StyledTypography>
            <LoginForm />
        </StyledLoginPage>
    )
}