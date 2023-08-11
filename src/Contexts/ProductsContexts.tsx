import { ReactNode, createContext, useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../api/api";
import { AuthContextProductsType } from "./interfaces/context.interface";
import { IProducts } from "./interfaces/products.interface";

export const ProductsContext = createContext<AuthContextProductsType>(
  {} as AuthContextProductsType
);

interface AuthProviderProps {
  children: ReactNode;
}
export const ProductsProvider = ({ children }: AuthProviderProps) => {
  const [Products, SetProducts] = useState<IProducts | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      // await getProducts();
      const intervalId = setInterval(getProducts, 9000);

      return () => clearInterval(intervalId);
    };

    fetchData();
  }, []);

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
    fetchData();
  }, []);
  const filterProducts = (category: string) => {
    if (category === "Todos") {
      SetProducts(Products);
    } else {
      const filtered = Products.filter((product: IProducts) =>
        product.category.includes(category)
      );
      SetProducts(filtered);
    }

    console.log(Products);
  };
  return (
    <ProductsContext.Provider
      value={{
        getProducts,
        filterProducts,
        Products,
        SetProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
