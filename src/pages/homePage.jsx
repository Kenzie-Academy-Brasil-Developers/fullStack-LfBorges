import { RegisterModal } from "../components/modals/registerModal"
import { EditModal } from "../components/modals/editModal"
import { NameDiv } from "../components/home/nameDiv"
import { HeaderHome } from "../components/home/headerHome"
import { ContactsDiv } from "../components/home/contactsDiv"
import { useEffect, useState } from "react"
import { api } from "../services/api"

export const HomePage = () => {
  const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const getToken = localStorage.getItem('@TOKEN');
      try {
        const response = await api.get('/user', { headers: { Authorization: `Bearer ${getToken}` } });
        const data = response.data;
        console.log(data);
        setRegisterModalIsOpen(true);
        setTimeout(() => {
          setEditModalIsOpen(true);
        }, 5000);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {registerModalIsOpen && <RegisterModal SetIsOpen={setRegisterModalIsOpen} IsRegisterOpen={registerModalIsOpen} />}
      {editModalIsOpen && <EditModal SetIsOpen={setEditModalIsOpen} IsEditOpen={editModalIsOpen} />}
      <HeaderHome />
      <NameDiv />
      <ContactsDiv 
        SetRegisterIsOpen={setRegisterModalIsOpen}
        IsRegisterOpen={registerModalIsOpen}
        SetEditIsOpen={setEditModalIsOpen}
        IsEditOpen={editModalIsOpen}
      />
    </div>
  );
};
