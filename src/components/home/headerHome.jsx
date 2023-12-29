import React from "react";
import { ButtonHeader, HeaderDiv } from "./headerStyle";
import { LogoStyle } from "../../styles/tipograpy";
import { useNavigate } from "react-router-dom"; // Importe useHistory

export const HeaderHome = () => {
    const navigate = useNavigate();

    const UserLogout = () => {
      localStorage.removeItem("@TOKEN");
      navigate("/");
    };  

  return (
    <HeaderDiv>
      <LogoStyle>FullStackHub</LogoStyle>
      <ButtonHeader onClick={UserLogout}>Sair</ButtonHeader>
    </HeaderDiv>
  );
};
