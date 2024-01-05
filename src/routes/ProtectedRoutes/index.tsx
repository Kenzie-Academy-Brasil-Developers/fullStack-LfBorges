import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";

export const ProtectedRoutes = () => {
    const Token = localStorage.getItem("@TOKEN");
    const { user, contact } = useContext(UserContext);

    return  (Token && user)  ? <Outlet /> : <Navigate to="/" />
}