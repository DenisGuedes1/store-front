import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import * as yup from "yup";
import { Headers } from "../../components/Header/index";
import { UserContext } from "../../Contexts/UserContext";
import {
    ConteinerForm,
    Form,
    Title,
    SubTitle,
    LabelAll,
    NotificationsError,
    SpanConteiner,
    InputAll,
    ButtonRegistrar,
    InputFile,
} from "./style";
import { FooterPage } from "../Footer";
import { IUserREgister } from "../../Contexts/interfaces/user.interfaces";

export const FormRegister = () => {
    const { registerUser, setCardFile, cardFile } = useContext(UserContext);
    const formSchema = yup.object().shape({
        name: yup.string().required("Nome Obrigatorio"),
        email: yup.string().required("email obrigatório"),
        password: yup
            .string()
            .required(
                "Digite uma senha com 8 digito e um caracteres especial ex:#$%"
            )
            .matches(
                /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+*!=]).*$/,
                "A senha deve conter pelo menos 8 caracteres, uma letra minúscula, uma letra maiúscula e um caractere especial (@#$%^&+*!=)"
            ),
        confirmPassword: yup
            .string()
            .required("Os campos de senha deve ser iguais")
            .oneOf([yup.ref("password"), "Os campos nao correspondem", ""]),
        avatar: yup.string(),
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    const onSubmitFunction = async (data: IUserREgister) => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("password", data.password);
        formData.append("avatar", cardFile!);

        await registerUser(data);
    };

    const handleUploadFile = (e: any) => setCardFile(e.target.files[0]);

    return (
        <>
            <Headers isLogin={false} />
            <ConteinerForm>
                <Form onSubmit={handleSubmit(onSubmitFunction)}>
                    <Title>Outlet Store</Title>
                    <SubTitle>Cadastro</SubTitle>
                    <SpanConteiner>
                        <LabelAll htmlFor="nome">Nome</LabelAll>
                        <InputAll
                            type="text"
                            id="nome"
                            placeholder="Digite seu nome"
                            {...register("name")}
                        />
                        <NotificationsError className="error">
                            {" "}
                            {errors.name?.message}
                        </NotificationsError>
                    </SpanConteiner>
                    <SpanConteiner>
                        <LabelAll htmlFor="email">E-mail</LabelAll>
                        <InputAll
                            type="email"
                            id="email"
                            placeholder="Digite seu melhor e-mail"
                            {...register("email")}
                        />
                        <NotificationsError className="error">
                            {" "}
                            {errors.email?.message}
                        </NotificationsError>
                    </SpanConteiner>

                    <SpanConteiner>
                        <LabelAll htmlFor="password">Senha</LabelAll>
                        <InputAll
                            type="password"
                            placeholder="digite sua senha"
                            {...register("password")}
                        />
                        <NotificationsError className="error">
                            {" "}
                            {errors.password?.message}
                        </NotificationsError>
                    </SpanConteiner>

                    <SpanConteiner>
                        <LabelAll htmlFor="confirmPassword">
                            {" "}
                            Confirme sua senha
                        </LabelAll>
                        <InputAll
                            type="password"
                            id="confirmPassword"
                            placeholder="Confirme sua senha.."
                            {...register("confirmPassword")}
                        />
                        <NotificationsError className="error">
                            {" "}
                            {errors.confirmPassword?.message}
                        </NotificationsError>
                    </SpanConteiner>

                    <SpanConteiner>
                        <LabelAll htmlFor="avatar">Avatar</LabelAll>
                        <InputFile
                            type="file"
                            id="Avatar"
                            onChange={handleUploadFile}
                            placeholder="Escolha sua melhor foto"
                            // {...register("avatar")}
                        />
                    </SpanConteiner>

                    <ButtonRegistrar
                        type="submit"
                        onClick={handleSubmit(onSubmitFunction)}
                    >
                        Registrar
                    </ButtonRegistrar>
                </Form>
            </ConteinerForm>
            <FooterPage />
        </>
    );
};
