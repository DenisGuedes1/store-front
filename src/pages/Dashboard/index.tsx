import { Link } from "react-router-dom";
import { ContainerDash, DivMenu, Header } from "./style";

export const Dashboard = () => {
    return (
        <ContainerDash>
            <Header>
                <h1>Logo</h1>
                <DivMenu>
                    <p>pablinvitaro@gmail.com</p>
                    <Link to={"/register"}>
                        <span>Cadastrar</span>
                    </Link>
                    <Link to={"/login"}>
                        <span>Login</span>
                    </Link>

                    {/* <HiOutlineMenu /> */}
                </DivMenu>
            </Header>
        </ContainerDash>
    );
};
