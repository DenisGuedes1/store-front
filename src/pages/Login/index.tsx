import { Link } from "react-router-dom";
import { FormLogin } from "../../components/FormLogin";
import { ContainerForm, DivMenu, Header } from "./style";

export const Login = () => {
  return (
    <ContainerForm>
      <Header>
        <h1>Logo</h1>
        <DivMenu>
          <Link to={"/"}>
            <span>Inicio</span>
          </Link>
          <Link to={"/register"}>
            <span>Cadastrar</span>
          </Link>

          {/* <HiOutlineMenu /> */}
        </DivMenu>
      </Header>
      <FormLogin />
    </ContainerForm>
  );
};
