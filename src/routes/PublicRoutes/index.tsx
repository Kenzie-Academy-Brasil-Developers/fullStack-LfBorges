import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";

export const PublicRoutes = () => {
    const Token = localStorage.getItem("@TOKEN");
    const { user, contact } = useContext(UserContext);

    return  (!Token && !user )  ? <Outlet /> : <Navigate to="/home" />
}