import { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import {
    DivModal,
    Formuser,
    ButtonCloseModal,
    SpanModal,
    TitleModal,
} from "./styled";
import { useForm } from "react-hook-form";
import { LabelAll, InputAll } from "../FormRegister/style";
import { CloseSquare, Edit2, ProfileDelete } from "iconsax-react";
import { z } from "zod";
export const Modal = () => {
    const { setIsModalOpen, userInfo } = useContext(UserContext);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const userSchema = z.object({
        name: z.string().min(3),
        email: z.string().email(),
        password: z.string().min(6),
    });
    const [userData, setUserData] = useState(userInfo);
    const onSubmit = async (data: any) => {
        setIsModalOpen(false);
        // data = {
        //     ...userData,
        // };
        console.log(data);
    };

    return (
        <>
            <DivModal onClick={() => setIsModalOpen(false)}>
                <Formuser onSubmit={handleSubmit(onSubmit)}>
                    <SpanModal>
                        <TitleModal>Informações</TitleModal>

                        <ButtonCloseModal onClick={() => setIsModalOpen(false)}>
                            <CloseSquare color="#555555" />
                        </ButtonCloseModal>
                    </SpanModal>
                    <LabelAll htmlFor="name">Nome</LabelAll>
                    <InputAll
                        type="text"
                        id="name"
                        value={userData?.name}
                        onClick={(e) => e.stopPropagation()}
                        {...register("name")}
                    />

                    <LabelAll htmlFor="email">Email</LabelAll>
                    <InputAll
                        type="email"
                        id="email"
                        value={userData?.email}
                        onClick={(e) => e.stopPropagation()}
                        {...register("email")}
                    />
                    <LabelAll htmlFor="passsword">Senha</LabelAll>
                    <InputAll
                        type="password"
                        id="password"
                        onClick={(e) => e.stopPropagation()}
                        value={userData?.password}
                        {...register("password")}
                    />
                    <span>
                        <Edit2 size="32" color="#555555" variant="Bold" />
                        <ProfileDelete
                            size="32"
                            color="#555555"
                            variant="Bold"
                        />
                    </span>
                </Formuser>
            </DivModal>
        </>
    );
};
