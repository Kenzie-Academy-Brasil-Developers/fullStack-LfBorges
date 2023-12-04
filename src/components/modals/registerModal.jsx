import { DialogMainDiv, RegisterTitle, FormRegisterModal, InputRegisterModal, ButtonRegisterModal, RegisterStyleModal,  ButtonRegisterModalClose } from "./registerModalStyle"

import { LogoStyle, Styledlabel } from "../../styles/tipograpy"

export const RegisterModal = ({SetIsOpen, IsOpen}) => {

    return(
        <DialogMainDiv>
            <RegisterStyleModal >
                <RegisterTitle>
                    <LogoStyle>Detalhes dos contatos</LogoStyle>
                    < ButtonRegisterModalClose onClick={()=>SetIsOpen(!IsOpen)}>x</ ButtonRegisterModalClose>
                </RegisterTitle>
                <FormRegisterModal>
                    <Styledlabel  for="nameInput">Nome</Styledlabel >
                    <InputRegisterModal type="text" id="nameInput" required placeholder="Coloque seu nome aqui"/>
                    <Styledlabel  for="emailInput">Email</Styledlabel >
                    <InputRegisterModal type="email" id="emailInput" required placeholder="Coloque seu Email aqui"/>
                    <Styledlabel  for="passwordInput">Senha</Styledlabel >
                    <InputRegisterModal type="password" id="passwordInput" required placeholder="Coloque sua senha aqui"/>
                    <Styledlabel  for="phoneInput">Numero de celular</Styledlabel >
                    <InputRegisterModal type="tel" id="phoneInput" required placeholder="(xx) xxxxx-xxxx"/>
                    <ButtonRegisterModal type="submit">Confirmar</ButtonRegisterModal>
                </FormRegisterModal>
            </RegisterStyleModal >
        </DialogMainDiv>
    )
}