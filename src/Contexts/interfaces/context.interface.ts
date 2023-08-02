import { toast } from "react-toastify";
import { IProducts } from "./products.interface";
import { IUserREgister, IuserLogin, iUserResponse } from "./user.interfaces";

export interface AuthContextType {
    registerUser: (formData: IUserREgister) => Promise<void>;
    loginUser: (formDataLogin: IuserLogin) => Promise<void>;
    User: iUserResponse | null;
    toast: typeof toast;
    loading: boolean;
    setCardFile: any;
    cardFile: any;
    getProducts: () => void;
    Products: IProducts[];
    SetProducts: any;
}
export interface AuthContextProductsType {
    getProducts: () => void;
    SetProducts: any;
}
