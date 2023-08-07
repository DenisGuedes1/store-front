import React, { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import {
    DivModal,
    Formuser,
    ButtonCloseModal,
    SpanModal,
    TitleModal,
} from "./styled";
import { LabelAll, InputAll } from "../FormRegister/style";
import { CloseSquare } from "iconsax-react";
export const Modal = () => {
    const { setIsModalOpen, userInfo } = useContext(UserContext);
    const [userData, setUserData] = useState(userInfo);

    // const handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     setUserData((prevUserData) => ({
    //         ...prevUserData,
    //         [name]: value,
    //     }));
    // };
    const handleUpdateUserInfo = async (event) => {
        event.preventDefault();

        // await updateUser(userData);
        setIsModalOpen(false);
    };
    return (
        <>
            <DivModal onClick={() => setIsModalOpen(false)}>
                <Formuser action="">
                    <SpanModal>
                        <TitleModal>Informações</TitleModal>

                        <ButtonCloseModal onClick={() => setIsModalOpen(false)}>
                            <CloseSquare color="#555555" />
                        </ButtonCloseModal>
                    </SpanModal>
                    <LabelAll htmlFor="name">Nome</LabelAll>
                    <InputAll
                        type="text"
                        name="name"
                        value={userData?.name}
                        onClick={(e) => e.stopPropagation()}
                        // onChange={handleInputChange}
                    />

                    <LabelAll htmlFor="email">Email</LabelAll>
                    <InputAll
                        type="email"
                        name="email"
                        value={userData?.email}
                        onClick={(e) => e.stopPropagation()}
                        // onChange={handleInputChange}
                    />
                    <LabelAll htmlFor="passsword">Senha</LabelAll>
                    <InputAll
                        type="password"
                        name="password"
                        onClick={(e) => e.stopPropagation()}
                        value={userData?.password}
                    />
                </Formuser>
            </DivModal>
        </>
    );
};
