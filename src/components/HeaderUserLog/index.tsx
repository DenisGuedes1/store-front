import { useContext } from "react";
import { LogoText } from "../FormRegister/style";
import { DivHeader, Nav, SpanButtonLogin } from "../Header/style";
import { HamburgerMenu } from "../MenuHamburguer";
import { UserContext } from "../../Contexts/UserContext";
import { Verify } from "iconsax-react";
import { SpanConteinerInfoUser } from "./style";
export const HeaderUserLog = () => {
    const { userInfo } = useContext(UserContext);
    console.log(userInfo, "userInfo");
    return (
        <>
            <DivHeader>
                <Nav>
                    <LogoText>Outlet Store</LogoText>
                    <SpanButtonLogin>
                        <SpanConteinerInfoUser>
                            <HamburgerMenu />
                            {userInfo && (
                                <p>
                                    <Verify />
                                    Seja Bem-vindo, {userInfo.email}
                                </p>
                            )}
                        </SpanConteinerInfoUser>
                    </SpanButtonLogin>
                </Nav>
            </DivHeader>
        </>
    );
};
