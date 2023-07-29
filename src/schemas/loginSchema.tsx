import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup.string().required(" o email é obrigatorio"),
  password: yup.string().required("Senha obrigatoria"),
});
