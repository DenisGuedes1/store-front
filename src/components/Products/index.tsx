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
    NameProducts,
    CategoryProducts,
    PriceProducts,
    SpanInfoPorducts,
    Liproducts,
} from "./style";

export const ProductsList = () => {
    const { Products, getProducts } = useContext(UserContext);
    const getProduct = async () => {
        await getProducts();
    };
    getProduct();
    return (
        <>
            <ButtonsFilter />
            {Array.isArray(Products) && Products.length > 0 ? (
                <ConteinerDiv>
                    {Products.map((product: IProducts) => (
                        <UlProductsList>
                            <Liproducts key={product.id}>
                                <ImgProducts src={product.foto1} alt="" />
                                <SpanInfoPorducts>
                                    <NameProducts>{product.name}</NameProducts>
                                    <CategoryProducts>
                                        {product.category}
                                    </CategoryProducts>
                                    <CategoryProducts>
                                        {product.descricao}
                                    </CategoryProducts>
                                    <PriceProducts>
                                        R${parseFloat(product.price).toFixed(2)}
                                    </PriceProducts>
                                </SpanInfoPorducts>
                            </Liproducts>
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
