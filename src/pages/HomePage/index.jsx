import { StyledHomePage } from "./style";
import { ButtonExit } from "../../styles/button";
import { HeaderHome} from "../../components/HeaderHome";
import { ContactContainer } from "../../components/ContactContainer"
import { useContext, useEffect } from "react";
import { ContactContext } from "../../providers/ContactContext";
import { CreateModal } from "../../components/CreateModal";
import { UserContext } from "../../providers/UserContext";
import { Typography } from "../../styles/typography";
import { EditModal } from "../../components/EditModal";
import { DeleteModal } from "../../components/DeleteModal";

export const HomePage = () => {
    const { isOpenModalCreate, isOpenModalEdit, isOpenModalDelete } = useContext(ContactContext);
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
            {isOpenModalEdit&&(<EditModal />)}
            {isOpenModalDelete&&(<DeleteModal />)}
        </StyledHomePage>
    )
}