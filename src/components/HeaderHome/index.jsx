import { StyledHeaderHome } from "./style";
import { StyledTypography } from "../../styles/typography";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

const HeaderHome = () => {

    const { user } = useContext(UserContext);

    return (
        <StyledHeaderHome>
            <StyledTypography typographystyle="title1">
                Olá, {user.full_name}
            </StyledTypography>
            <StyledTypography typographystyle="headlineBold" color="#868E96">
                {user.email}
            </StyledTypography>
        </StyledHeaderHome>
    )
}

export default HeaderHome;