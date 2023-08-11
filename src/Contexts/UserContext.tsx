import React, {
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../api/api";
import {
  IUserREgister,
  IuserInfo,
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
  userInfo: IuserInfo | null;
  logout: () => void;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
  
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [User, setUser] = useState<iUserResponse | null>(null);
  const [userInfo, setUserInfo] = useState<IuserInfo | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@tokenUser");
      if (!token) {
        setLoading(false);
      }
      try {
        const response = await api.get("store/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserInfo(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, [User]);

  const loginUser = async (formDataLogin: IuserLogin) => {
    try {
      const response = await api.post("store/login", formDataLogin);

      setUser(response.data);

      window.localStorage.setItem("@tokenUser", response.data);

      navigate("/dashboard/user");
      toast.success("Você está logado");
    } catch (error) {
      console.log(error);
      toast.error("Email ou senha incorretas");
    }
  };

  const registerUser = async (formData: IUserREgister) => {
    try {
      setLoading(true);
      await api.post("store/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

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

  const logout = () => {
    window.localStorage.removeItem("@tokenUser");
    navigate("/login");
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
        userInfo,
        logout,
        setIsModalOpen,
        isModalOpen,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
