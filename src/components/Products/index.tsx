import { useContext, useState } from "react";
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
    IconWrapper,
    AnimatedButton,
    SpanSale,
    ButtonSaleCart,
} from "./style";
import { HeartAdd, BagTick2 } from "iconsax-react";
import { toast } from "react-toastify";
export const ProductsList = () => {
    const { Products } = useContext(UserContext);
    console.log(Products, "*****produtos");

    const [favoriteProducts, setFavoriteProducts] = useState<string[]>([]);

    const idProducts = (id: string) => {
        toggleFavorite(id);
    };

    const toggleFavorite = (productId: string) => {
        if (favoriteProducts.includes(productId)) {
            toast.warning("Item removido dos favoritos");
            setFavoriteProducts(
                favoriteProducts.filter((id) => id !== productId)
            );
        } else {
            toast.success("Item adicionado aos favoritos");
            setFavoriteProducts([...favoriteProducts, productId]);
        }
    };

    const iconStyle = (productId: string) => ({
        background: favoriteProducts.includes(productId)
            ? "#ff0000"
            : "#ffffff",
        borderRadius: "85%",
    });

    return (
        <>
            <ButtonsFilter />
            {Array.isArray(Products) && Products.length > 0 ? (
                <ConteinerDiv>
                    {Products.map((product: IProducts) => (
                        <UlProductsList>
                            <Liproducts key={product.id}>
                                <IconWrapper>
                                    <HeartAdd
                                        style={iconStyle(product.id)}
                                        onClick={() => idProducts(product.id)}
                                        size="32"
                                        color="#040404"
                                        variant="Outline"
                                        className="heartIcon"
                                    />
                                </IconWrapper>
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
                                    <SpanSale>
                                        <AnimatedButton>Comprar</AnimatedButton>
                                        <ButtonSaleCart>
                                            {
                                                <BagTick2
                                                    size="32"
                                                    color="#040404"
                                                    variant="TwoTone"
                                                />
                                            }{" "}
                                        </ButtonSaleCart>
                                    </SpanSale>
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
