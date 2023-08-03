import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonAndLogin, DivHeader, Nav, SpanButtonLogin } from "./style";
import { LogoText } from "../FormRegister/style";
import { UserContext } from "../../Contexts/UserContext";
interface HeadersProps {
  isLogin: boolean;
}
export const Headers: React.FC<HeadersProps> = ({ isLogin }) => {
  const { userInfo, logout } = useContext(UserContext);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    if (isLogin) {
      navigate("/register");
    } else {
      navigate("/login");
    }
  };
  const showBothButtons = location.pathname === "/";
  return (
    <>
      <DivHeader>
        <Nav>
          <LogoText>Outlet Store</LogoText>
          <SpanButtonLogin>
            {showBothButtons ? (
              <>
                <span>{userInfo?.email}</span>
                <ButtonAndLogin onClick={() => logout()}>Sair</ButtonAndLogin>
              </>
            ) : (
              <ButtonAndLogin onClick={handleButtonClick}>
                {isLogin ? "Register" : "Login"}
              </ButtonAndLogin>
            )}
          </SpanButtonLogin>
        </Nav>
      </DivHeader>
    </>
  );
};
