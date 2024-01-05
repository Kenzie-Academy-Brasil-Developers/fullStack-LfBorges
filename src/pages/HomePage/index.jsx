import logo from "../../assets/logoImg.png";
import { StyledHomePage } from "./style";
import { ButtonExit } from "../../styles/button";
import { HeaderHome} from "../../components/HeaderHome";
import { ContactContainer } from "../../components/ContactContainer"
import { useContext } from "react";
import { ContactContext } from "../../providers/ContactContext";
import { CreateModal } from "../../components/CreateModal";
import { UserContext } from "../../providers/UserContext";

export const HomePage = () => {
    const { isOpenModalCreate } = useContext(ContactContext);
    const { userLogout } = useContext(UserContext);

    return (
        <StyledHomePage>
            <header>
                <div>
                    <img src={logo} alt="Logo MyContact" />
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