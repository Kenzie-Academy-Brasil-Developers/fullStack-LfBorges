import { StyledHeaderHome } from "./style";
import { Typography } from "../../styles/typography";
import { useContext} from "react";
import { UserContext } from "../../providers/UserContext";

export const HeaderHome = () => {

    const { user } = useContext(UserContext);

    return (
        <StyledHeaderHome>
            <Typography typographystyle="title1">
                Olá, {user.full_name}
            </Typography>
            <Typography typographystyle="headlineBold" color="#868E96">
                {user.email}
            </Typography>
        </StyledHeaderHome>
    )
}
