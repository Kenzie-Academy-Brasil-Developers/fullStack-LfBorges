import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { useForm } from "react-hook-form";
import { UserContext } from "./UserContext";

export const ContactContext = createContext({});

export const ContactProvider = ({ children }) => {
    const [ isOpenModalCreate, setIsOpenModalCreate ] = useState(false);
    const token = localStorage.getItem("@TOKEN");
    const userId = localStorage.getItem("@USERID");
    const { reset } = useForm();

    const { loadUser } = useContext(UserContext);

    const createContact = async (formData, setIsLoading) => {
        try {
            setIsLoading(true);
            const { data } = await api.post(`/user/${userId}/contact/`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            loadUser(token, userId);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    const editContact = async (formData, setIsLoading) => {
        try {
            setIsLoading(true);
            const { data } = await api.put(`/contact/${userId}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            loadUser(token, userId);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    const deleteContact = async (setIsLoadingDelete) => {
        try {
            setIsLoadingDelete(true);
            const { data } = await api.delete(`/contacs/${idTarget}`, { headers: { Authorization: `Bearer ${token}` }});
            loadUser();
            toastySuccess("contato deletado com sucesso!");
            setModalEditOpen(false);
        } catch (error) {
            toastyError("Ops! Algum erro ao deletar o contato.");
        } finally {
            setIsLoadingDelete(false);
        }
    }

    return (
        <ContactContext.Provider value={{isOpenModalCreate,setIsOpenModalCreate,createContact, editContact, deleteContact}}>
            {children}
        </ContactContext.Provider>
    )
}