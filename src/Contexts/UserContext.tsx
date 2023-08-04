import { ReactNode, createContext, useEffect, useState } from "react";
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
import { IProducts } from "./interfaces/products.interface";

export interface AuthContextType {
  registerUser: (formData: IUserREgister) => Promise<void>;
  loginUser: (formDataLogin: IuserLogin) => Promise<void>;
  User: iUserResponse | null;
  toast: typeof toast;
  loading: boolean;
  setCardFile: any;
  cardFile: any;
  getProducts: any;
  Products: IProducts | [];
  userInfo: IuserInfo | null;
  logout: () => void;
  SetProducts: React.Dispatch<React.SetStateAction<IProducts | []>>
  
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
  const [userInfo, setUserInfo] = useState<IuserInfo | null>(null);
  const [Products, SetProducts] = useState<IProducts | []>([]);
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

      navigate("/");
      toast.success("Você está logado");
      console.log(response);
    } catch (error) {
      console.log(error);
      toast.error("Email ou senha incorretas");
    }
  };

  const registerUser = async (formData: IUserREgister) => {
    try {
      setLoading(true);
      const response = await api.post("store/register", formData, {
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
  const getProducts = async () => {
    try {
      const response = await api.get("products");

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
    fetchData()
  }, []);

  const logout = () => {
    window.localStorage.removeItem("@tokenUser");
    navigate("/login");
  };


  //   useEffect(() => {
  //     const fetchData = async () => {
  //     //   await getProducts();
  //       const intervalId = setInterval(getProducts, 9000);

  //       return () => clearInterval(intervalId);
  //     };

  //     fetchData();
  //   }, []);

  return (
    <UserContext.Provider
      value={{
        getProducts,
        registerUser,
        loginUser,
        cardFile,
        User,
        setCardFile,
        toast,
        loading,
        userInfo,
        Products,
        logout,
        SetProducts
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
