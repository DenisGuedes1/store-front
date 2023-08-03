import { ReactNode, createContext, useContext, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../api/api";

import { AuthContextProductsType } from "./interfaces/context.interface";

export const UserContext = createContext<AuthContextProductsType>(
    {} as AuthContextProductsType
);

interface AuthProviderProps {
    children: ReactNode;
}
export const ProductsProvider = ({ children }: AuthProviderProps) => {
    const { SetProducts } = useContext(UserContext);
    const getProducts = async () => {
        try {
            const response = await api.get("/products");
            console.log(response, "response get");
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
                SetProducts,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
