import { DialogMainEditDiv, EditStyleModal, EditTitleDiv, ButtonCloseEdit, FormEditModal, InputEditModal, ButtonSaveEdit, DivButtonEdit } from "./editModalStyle"
import { LogoStyle, Styledlabel} from "../../styles/tipograpy"

export const EditModal = ({SetIsOpen, IsOpen}) => {
    return (
        <DialogMainEditDiv>
            <EditStyleModal>
                <EditTitleDiv>
                    <LogoStyle>Alterar informações</LogoStyle>
                    <ButtonCloseEdit onClick={() => { SetIsOpen(false)}}>x</ButtonCloseEdit>
                </EditTitleDiv>
                <FormEditModal>
                    <Styledlabel for="nameInput">Nome</Styledlabel>
                    <InputEditModal type="text" id="nameInput" required placeholder="Coloque seu nome aqui"/>
                    <Styledlabel for="emailInput">Email</Styledlabel>
                    <InputEditModal type="email" id="emailInput" required placeholder="Coloque seu Email aqui"/>
                    <Styledlabel for="passwordInput">Senha</Styledlabel>
                    <InputEditModal type="password" id="passwordInput" required placeholder="Coloque sua senha aqui"/>
                    <Styledlabel for="phoneInput">Numero de celular</Styledlabel>
                    <InputEditModal type="tel" id="phoneInput" required placeholder="(xx) xxxxx-xxxx"/>
                    <DivButtonEdit>
                        <ButtonSaveEdit type="submit">Salvar</ButtonSaveEdit>
                    </DivButtonEdit>
                </FormEditModal>
            </EditStyleModal>
        </DialogMainEditDiv>
    )
}