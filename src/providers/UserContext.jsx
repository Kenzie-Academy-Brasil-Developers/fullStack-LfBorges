import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [loading,setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const { reset } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const id = localStorage.getItem("@USERID");

    const loadUser = async () => {
        try {
            setLoading(true);
            const {data} = await api.get(`/user/${id}`,{headers: {Authorization: `Bearer ${token}`}});
            setUser(data);
            navigate("/home");
        } catch (error) {
          toastyError("Ops! Aconteceu algum erro!");
        } finally {
          setLoading(false)
        }
    }

    if (token && id) {
        loadUser();
    }
  }, []);

  const toastySuccess = (text) => {
    toast.success(text, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const toastyError = (text) => {
    toast.error(text, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const userRegister = async (FormData, setIsLoading) => {
    try {
      setIsLoading(true);
      const { data } = await api.post(`/user`, FormData);
      reset();
      toastySuccess("Cadastro realizado com sucesso!");
      navigate("/");
    } catch (error) {
      toastyError("Ops! Ocorreu um erro ao cadastrar!");
    } finally {
      setIsLoading(false);
    }
  };

  const userLogin = async (FormData, setIsLoading) => {
    try {
      setIsLoading(true);
      const { data } = await api.post(`/login`, FormData);
      console.log(data);
      localStorage.setItem("@TOKEN", data.token);
      localStorage.setItem("@USERID", data.userId);
      setUser(data.user);
      reset();
      toastySuccess("Login realizado com sucesso!");
      navigate("/home");
    } catch (error) {
      toastyError("Ops! Usuario ou senha incorreto!");
    } finally {
      setIsLoading(false);
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    navigate("/");
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{ user,loading, userLogin, userRegister, userLogout, toastySuccess, toastyError }}>
      {children}
    </UserContext.Provider>
  );
};
