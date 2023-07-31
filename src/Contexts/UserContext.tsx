import { ReactNode, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../api/api";
import {
    IUserREgister,
    IuserLogin,
    iUserResponse,
} from "./interfaces/user.interfaces";

export interface AuthContextType {
    registerUser: (formData: IUserREgister) => Promise<void>;
    loginUser: (formDataLogin: IuserLogin) => Promise<void>;
    User: iUserResponse | null;
    toast: typeof toast;
    loading: boolean;
    setCardFile: any;
    cardFile: any;
}
// export const AuthContext = createContext({});
export const UserContext = createContext<AuthContextType>(
    {} as AuthContextType
);

interface AuthProviderProps {
    children: ReactNode;
}
export const UserProvider = ({ children }: AuthProviderProps) => {
    const [loading, setLoading] = useState(true);
    const [cardFile, setCardFile] = useState();
    const navigate = useNavigate();
    const [User, setUser] = useState<iUserResponse | null>(null);

    useEffect(() => {
        const loadUser = async () => {
            const token = localStorage.getItem("@tokenUser");
            if (!token) {
                setLoading(false);
                return;
            }
            try {
                const { data } = await api.get("/profile", {
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
        loadUser();
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
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <UserContext.Provider
            value={{
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
