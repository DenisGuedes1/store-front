import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonAndLogin, DivHeader, Nav, SpanButtonLogin } from "./style";
import { LogoText } from "../FormRegister/style";

interface HeadersProps {
    isLogin: boolean;
}
export const Headers: React.FC<HeadersProps> = ({ isLogin }) => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        if (isLogin) {
            navigate("/register");
        } else {
            navigate("/login");
        }
    };
    const showBothButtons =
        location.pathname === "/" || location.pathname === "/dashboard";
    return (
        <>
            <DivHeader>
                <Nav>
                    <LogoText>Outlet Store</LogoText>
                    <SpanButtonLogin>
                        {showBothButtons ? (
                            <>
                                <ButtonAndLogin
                                    onClick={() => navigate("/login")}
                                >
                                    Login
                                </ButtonAndLogin>
                                <ButtonAndLogin
                                    onClick={() => navigate("/register")}
                                >
                                    Register
                                </ButtonAndLogin>
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
