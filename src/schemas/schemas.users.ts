import { z } from "zod";
export const registerUserSchema = z
    .object({
        name: z
            .string()
            .nonempty("Nome Obrigatorio")
            .regex(/^[A-Za-z]+$/i, "Apenas letras são permitidos"),
        email: z.string().email().nonempty("Email requirido"),
        password: z
            .string()
            .regex(
                /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+*!=]).*$/,
                "A senha deve conter uma letra maiuscúla e uma caracteres especial. "
            ),
        confirmPassword: z.string().nonempty("Voce precisa confirmar a senha."),
        avatar: z.unknown(),
    })
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
        message: "As senhas precisam ser iguais.",
        path: ["confirmPassword"],
    });
// name: yup.string().required("Nome Obrigatorio"),
// email: yup.string().required("email obrigatório"),
// password: yup
//     .string()
//     .required(
//         "Digite uma senha com 8 digito e um caracteres especial ex:#$%"
//     )
//     .matches(
//         /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+*!=]).*$/,
//         "A senha deve conter pelo menos 8 caracteres, uma letra minúscula, uma letra maiúscula e um caractere especial (@#$%^&+*!=)"
//     ),
// confirmPassword: yup
//     .string()
//     .required("Os campos de senha deve ser iguais")
//     .oneOf([yup.ref("password"), "Os campos nao correspondem", ""]),
// avatar: yup.string(),
