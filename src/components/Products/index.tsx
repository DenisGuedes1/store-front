import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { IProducts } from "../../Contexts/interfaces/products.interface";
import { ButtonsFilter } from "../ButtonFilter";
import {
    ConteinerDiv,
    ConteinerDivLoad,
    LoadingDots,
    UlProductsList,
    ImgProducts,
} from "./style";

export const ProductsList = () => {
    const { Products, getProducts } = useContext(UserContext);
    const getProduct = async () => {
        await getProducts();
    };
    console.log(Products, "****************produ");
    getProduct();
    return (
        <>
            <ButtonsFilter />
            {Products.length > 0 ? ( // Verifique se o array Products contém algum produto
                <ConteinerDiv>
                    {Products.map((product: IProducts) => (
                        <UlProductsList>
                            <li key={product.id}>
                                <ImgProducts src={product.foto1} alt="" />
                                <span>
                                    <p>{product.name}</p>
                                    <p>{product.category}</p>
                                    <p>{product.descricao}</p>
                                    <p>
                                        R${parseFloat(product.price).toFixed(2)}
                                    </p>
                                </span>
                            </li>
                        </UlProductsList>
                    ))}
                </ConteinerDiv>
            ) : (
                <ConteinerDivLoad>
                    <LoadingDots className="loading-dots">
                        Carregando Produtos
                    </LoadingDots>
                </ConteinerDivLoad>
            )}
        </>
    );
};
