import React, { useState } from "react";
import { HamburgerButton, MenuItem, MenuItems, MenuWrapper } from "./style";
import { useNavigate } from "react-router-dom";
export const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const logoutUser = () => {
        localStorage.removeItem("tokenUser");
        navigate("/login");
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
                    <MenuItem>Ver Perfil</MenuItem>
                    <MenuItem>Favoritos</MenuItem>
                    <MenuItem onClick={() => logoutUser()}>Sair</MenuItem>
                </MenuItems>
            )}
        </MenuWrapper>
    );
};
