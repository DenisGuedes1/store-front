import { useContext, useState } from "react";
import { HamburgerButton, MenuItem, MenuItems, MenuWrapper } from "./style";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";
export const HamburgerMenu = () => {
    const { setIsModalOpen } = useContext(UserContext);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const logoutUser = () => {
        localStorage.removeItem("tokenUser");
        navigate("/login");
    };
    const modalOpen = () => {
        setIsModalOpen(true);
        console.log("modalAberto");
    };

    return (
        <MenuWrapper>
            <HamburgerButton onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </HamburgerButton>
            {isOpen && (
                <MenuItems>
                    <MenuItem onClick={() => modalOpen()}>Ver Perfil</MenuItem>
                    <MenuItem>Favoritos</MenuItem>
                    <MenuItem onClick={() => logoutUser()}>Sair</MenuItem>
                </MenuItems>
            )}
        </MenuWrapper>
    );
};
