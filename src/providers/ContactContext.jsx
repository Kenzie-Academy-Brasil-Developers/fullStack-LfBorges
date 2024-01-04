import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const ContactContext = createContext({});

export const ContactProvider = ({ children }) => {
    const [contact, setContact] = useState([]);
    const [modalEditOpen, setModalEditOpen] = useState(false);
    const [modalCreateOpen, setModalCreateOpen] = useState(false);
    const [contactTarget,setContactTarget] = useState(null);
    const [idTarget,setIdTarget] = useState(null);
    const token = localStorage.getItem("@TOKEN");
    const user = localStorage.getItem("@USERID");

    const { toastySuccess, toastyError } = useContext(UserContext);


    const closeModalEdit = () => {
        setModalEditOpen(false);
        setIdTarget(null);
        setContactTarget(null);
    }

    const closeModalCreate = () => {
        setModalCreateOpen(false);
    }

    const openModalEdit = (item) => {
        setIdTarget(item.id);
        setContactTarget(item.title);
        setModalEditOpen(true);
    }

    const openModalCreate = () => {
        setModalCreateOpen(true);
    }

    const createContact = async (formData, setIsLoading) => {
        try {
            setIsLoading(true);
            const {data} = await api.post(`/user/${user}/contact`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            loadContact();
            toastySuccess("Tecnologia cadastrada com sucesso!");
            setModalCreateOpen(false);
        } catch (error) {
            toastyError("Ops! Algum erro ao cadastrar a tecnologia.");
        } finally {
            setIsLoading(false);
        }
    }


    const editContact =  async (formData, setIsLoadingForm) => {
        try {
            setIsLoadingForm(true);
            const {data} = await api.patch(`/contacts/${idTarget}`,formData,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            loadContact();
            toastySuccess("Tecnologia atualizada com sucesso!");
            setModalEditOpen(false);
        } catch (error) {
            toastyError("Ops! Algum erro ao atualizar a tecnologia.");
        } finally {
            setIsLoadingForm(false);
        }
    }

    const deleteContact = async (setIsLoadingDelete) => {
        try {
            setIsLoadingDelete(true);
            const { data } = await api.delete(`/contacts/${idTarget}`,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            loadContact();
            toastySuccess("Tecnologia deletada com sucesso!");
            setModalEditOpen(false);
        } catch (error) {
            toastyError("Ops! Algum erro ao deletar a tecnologia.");
        } finally {
            setIsLoadingDelete(false);
        }
    }
    
    
    const loadContact = async () => {
        try {
            const {data} = await api.get(`/user/${user}`,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setContact(data.user.contacts);
        } catch (error) {
            toastyError("Ops! Aconteceu algum erro!");
        }
    }

    return (
        <ContactContext.Provider value={{
            contact, 
            modalEditOpen, 
            modalCreateOpen, 
            contactTarget,
            editContact,
            createContact,
            deleteContact, 
            openModalEdit, 
            openModalCreate, 
            closeModalCreate, 
            closeModalEdit, 
            setModalEditOpen, 
            loadContact
            }}>
            {children}
        </ContactContext.Provider>
    )
}