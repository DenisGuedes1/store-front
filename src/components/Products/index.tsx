import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { IProducts } from "../../Contexts/interfaces/products.interface";
import { ButtonsFilter } from "../ButtonFilter";
import { ConteinerDiv } from "./style";

export const ProductsList = () => {
    const { Products, getProducts } = useContext(UserContext);
    const getProduct = async () => {
        await getProducts();
    };
    getProduct();
    return (
        <>
            <ButtonsFilter />
            {Products !== null ? (
                <ConteinerDiv>
                    {Products.map((product: IProducts) => (
                        <ul>
                            <li key={product.id}>
                                <img src={product.foto1} alt="" />
                                <span>
                                    <p>{product.name} </p>
                                    <p>{product.category}</p>
                                    <p>{product.descricao}</p>
                                    <p>{product.price} </p>
                                </span>
                            </li>
                        </ul>
                    ))}
                </ConteinerDiv>
            ) : (
                // Caso os produtos sejam null (ainda não foram carregados), mostre uma mensagem de carregamento
                <div>Carregando produtos...</div>
            )}
        </>
    );
};
