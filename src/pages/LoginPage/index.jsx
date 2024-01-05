import { LoginForm } from "../../components/LoginForm"
import { StyledLoginPage } from "./style"
import { Typography } from "../../styles/typography";

export const LoginPage = () => {
    return (
        <StyledLoginPage>
            <Typography typographystyle="title1">
                    ContactHub
            </Typography>
            <LoginForm />
        </StyledLoginPage>
    )
}