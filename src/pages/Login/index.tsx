import { FormLogin } from "../../components/FormLogin";
import { ContainerForm } from "./style";
import { Headers } from "../../components/Header";

export const Login = () => {
  return (
    <ContainerForm>
      <Headers isLogin={true} />
      <FormLogin />
    </ContainerForm>
  );
};
