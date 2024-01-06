import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";

export const ProtectedRoutes = () => {
    const token = localStorage.getItem("@TOKEN");

    return token ? <Outlet /> : <Navigate to="/" />
}