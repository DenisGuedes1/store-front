import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { Form } from "./style";
import { LoginSchema } from "../../schemas/loginSchema";
import { yupResolver } from "@hookform/resolvers/yup";

interface iLoginFormValue {
    email: string;
    password: string;
}

export const FormLogin = () => {
    const { loginUser } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<iLoginFormValue>({
        resolver: yupResolver(LoginSchema),
    });

    const submitLogin: SubmitHandler<iLoginFormValue> = (data) => {
        loginUser(data);
    };

    return (
        <>
            <Form onSubmit={handleSubmit(submitLogin)}>
                <h3>Login</h3>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder="Digite seu email"
                        {...register("email")}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        placeholder="Digite sua senha"
                        {...register("password")}
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                    <button>Logar</button>
                    <span> esqueci minha senha</span>
                    <button>Cadastrar</button>
                </div>
            </Form>
        </>
    );
};
