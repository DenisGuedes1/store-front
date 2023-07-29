import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import * as yup from "yup";
import { UserContext } from "../../Contexts/UserContext";
import { IUserREgister } from "../../Contexts/interfaces/user.interfaces";
export const FormRegister = () => {
    const { registerUser } = useContext(UserContext);
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
            <div>
                <form onSubmit={handleSubmit(onSubmitFunction)}>
                    <h1>Outlet Store</h1>
                    <h2>Register</h2>
                    <label htmlFor="nome">None</label>
                    <input
                        type="text"
                        id="nome"
                        placeholder="Digite seu nome"
                        {...register("name")}
                    />
                    <h4 className="error"> {errors.name?.message}</h4>

                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Digite seu melhor e-mail"
                        {...register("email")}
                    />
                    <h4 className="error"> {errors.email?.message}</h4>

                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        placeholder="digite sua senha"
                        {...register("password")}
                    />
                    <h4 className="error"> {errors.password?.message}</h4>

                    <label htmlFor="confirmPassword"> Confirme sua senha</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder="Confirme sua senha.."
                        {...register("confirmPassword")}
                    />
                    <h4 className="error">
                        {" "}
                        {errors.confirmPassword?.message}
                    </h4>
                    <label htmlFor="avatar">Avatar</label>
                    <input
                        type="image"
                        id="Avatar"
                        placeholder="Escolha sua melhor foto"
                    />

                    <button
                        type="submit"
                        onClick={handleSubmit(onSubmitFunction)}
                    >
                        Registrar
                    </button>
                </form>
            </div>
        </>
    );
};
