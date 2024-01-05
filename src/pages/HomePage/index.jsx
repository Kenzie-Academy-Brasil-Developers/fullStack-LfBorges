import { StyledHomePage } from "./style";
import { ButtonExit } from "../../styles/button";
import { HeaderHome} from "../../components/HeaderHome";
import { ContactContainer } from "../../components/ContactContainer"
import { useContext } from "react";
import { ContactContext } from "../../providers/ContactContext";
import { CreateModal } from "../../components/CreateModal";
import { UserContext } from "../../providers/UserContext";
import { Typography } from "../../styles/typography";

export const HomePage = () => {
    const { isOpenModalCreate } = useContext(ContactContext);
    const { userLogout } = useContext(UserContext);

    return (
        <StyledHomePage>
            <header>
                <div>
                <Typography typographystyle="title1">
                    ContactHub
                </Typography>
                    <ButtonExit onClick={() => {userLogout()}}>
                        Sair
                    </ButtonExit>
                </div>
            </header>
            <div className="bannerContainer">
                <HeaderHome />
            </div>
            <main>
                <ContactContainer/>
            </main>
            {isOpenModalCreate&&(<CreateModal />)}
        </StyledHomePage>
    )
}