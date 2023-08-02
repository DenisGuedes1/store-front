import { ReactNode, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../api/api";
import {
    CardFile,
    IuserLogin,
    iUserResponse,
} from "./interfaces/user.interfaces";
import {
    Category,
    Gender,
    IProducts,
    Tamanho,
} from "./interfaces/products.interface";
import { AuthContextType } from "./interfaces/context.interface";

export const UserContext = createContext<AuthContextType>(
    {} as AuthContextType
);

interface AuthProviderProps {
    children: ReactNode;
}
export const UserProvider = ({ children }: AuthProviderProps) => {
    const [loading, setLoading] = useState(true);
    const [cardFile, setCardFile] = useState<CardFile>(null);
    const navigate = useNavigate();
    const [User, setUser] = useState<iUserResponse | null>(null);
    const [Products, SetProducts] = useState<IProducts[]>([
        // {
        //     id: "",
        //     name: "",
        //     descricao: "",
        //     foto1: "",
        //     foto2: "",
        //     foto3: "",
        //     price: 0,
        //     isActive: true,
        //     promotion: true,
        //     category: Category.Camisas,
        //     gender: Gender.Masculino,
        //     quantity: 2,
        //     tamanho: Tamanho.GG,
        // },
    ]);
    useEffect(() => {
        const loadUser = async () => {
            const token = localStorage.getItem("@tokenUser");
            if (!token) {
                setLoading(false);
                return;
            }
            try {
                const { data } = await api.get("/user", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                //
                setUser(data);
                //
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        // loadUser();
    }, []);

    const loginUser = async (formDataLogin: IuserLogin) => {
        try {
            const response = await api.post("/admin/login", formDataLogin);
            const { token, user: UserResponse } = response.data;

            setUser(UserResponse);

            localStorage.setItem("@tokenUser", token);

            navigate("/dashboard");
        } catch (error) {
            console.log(error);
            // toast.error(error);
        }
    };
    const registerUser = async (userData: any) => {
        const formData = new FormData();
        formData.append("name", userData.name);
        formData.append("email", userData.email);
        formData.append("password", userData.password);
        formData.append("avatar", cardFile!);
        try {
            setLoading(true);

            const response = await api.post("/store/register", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log(response, "response requisição");

            setTimeout(() => {
                navigate("/login", { replace: true });
            }, 2000);
            toast("Usuário registrado com sucesso!");
        } catch (error) {
            toast.error("Ops algo deu errado");
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    const getProducts = async () => {
        try {
            const response = await api.get("/products");

            SetProducts(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            await getProducts();
            const intervalId = setInterval(getProducts, 9000);

            return () => clearInterval(intervalId);
        };

        // fetchData();
    }, []);

    return (
        <UserContext.Provider
            value={{
                getProducts,
                Products,
                SetProducts,
                registerUser,
                loginUser,
                cardFile,
                User,
                setCardFile,
                toast,
                loading,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
