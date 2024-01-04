import { StyledHomePageContainer, StyledHomePageHeader, StyledHomePageUserContainer } from "./styles";
import logo from "../../assets/img/logo.svg";
import { StyledButtonExit } from "../../styles/button";
import HeaderHome  from "../../components/HeaderHome";
import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/UserContext";
import  ContactContainer  from "../../components/ContactContainer";
import { ContactContext } from "../../providers/ContactContext";
import ModalEdit from "../../components/ModalEdit";
import ModalCreate from "../../components/ModalCreate";


const HomePage = () => {

    const { userLogout } = useContext(UserContext);
    const { loadContact, modalEditOpen, modalCreateOpen } = useContext(ContactContext);
    
    
    useEffect(() => {
        loadContact();
    },[])
 
    return (
        <>
            <StyledHomePageHeader>
                <StyledHomePageContainer>
                    <img src={logo} alt="Logo Kenzie Hub" />
                    <StyledButtonExit onClick={() => {userLogout()}}>
                        Sair
                    </StyledButtonExit>
                </StyledHomePageContainer>
            </StyledHomePageHeader>
            <StyledHomePageUserContainer>
                <HeaderHome />
            </StyledHomePageUserContainer>
            <StyledHomePageContainer>
                <ContactContainer />
            </StyledHomePageContainer>
            {modalEditOpen ? <ModalEdit /> : null};
            {modalCreateOpen ? <ModalCreate /> : null}
        </>
    )
}

export default HomePage;