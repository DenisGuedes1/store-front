import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import * as yup from "yup";
import { AuthContext } from "../../Contexts/UserContext";
import { IUserREgister } from "../../Contexts/interfaces/user.interfaces";
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
} from "./style";
export const FormRegister = () => {
    const { registerUser } = useContext(AuthContext);
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
        avatar: yup.string().optional(),
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });
    console.log(errors);

    const onSubmitFunction = async (data: IUserREgister) => {
        const dadosNewUser = {
            name: data.name,
            email: data.email,
            password: data.password,
            avatar: data.avatar,
        };
        await registerUser(dadosNewUser);
    };

    return (
        <>
            {/* ///chamar o header */}
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
                        <InputAll
                            type="url"
                            id="Avatar"
                            placeholder="Escolha sua melhor foto"
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
        </>
    );
};
