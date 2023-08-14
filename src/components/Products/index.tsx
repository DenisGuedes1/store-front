import { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { IProducts } from "../../Contexts/interfaces/products.interface";
import { ButtonsFilter } from "../ButtonFilter";
import { Carousel } from "react-responsive-carousel";
import {
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
    DivConteinerProductsAside,
    ButtonBackToHome,
    ButtonSaleSelectViewSuggestion,
} from "./style";
import { HeartAdd, BagTick2, Back } from "iconsax-react";
import { toast } from "react-toastify";

export const ProductsList = () => {
    const { Products, selectedProduct, setSelectedProduct } =
        useContext(UserContext);
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
    const backToProductList = () => {
        setSelectedProduct(null);
    };
    return (
        <>
            <DivConteinerProductsAside>
                <ButtonsFilter />

                {selectedProduct ? (
                    <UlProductsList>
                        <Carousel
                            showArrows={false}
                            emulateTouch={true}
                            showThumbs={false}
                        >
                            {[
                                selectedProduct.foto1,
                                selectedProduct.foto2,
                                selectedProduct.foto3,
                            ].map((foto, index) => (
                                <div key={index}>
                                    <ImgProducts src={foto} alt="" />
                                </div>
                            ))}
                        </Carousel>
                        <SpanInfoPorducts>
                            <NameProducts>{selectedProduct.name}</NameProducts>
                            <CategoryProducts>
                                {selectedProduct.category}
                            </CategoryProducts>
                            <CategoryProducts>
                                {selectedProduct.descricao}
                            </CategoryProducts>
                            <PriceProducts>
                                R$
                                {parseFloat(selectedProduct.price).toFixed(2)}
                            </PriceProducts>
                            <SpanSale>
                                <ButtonSaleSelectViewSuggestion>
                                    Comprar
                                </ButtonSaleSelectViewSuggestion>
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

                        <ButtonBackToHome onClick={() => backToProductList()}>
                            <Back size="32" color="#555555" variant="Broken" />
                        </ButtonBackToHome>
                    </UlProductsList>
                ) : (
                    <UlProductsList>
                        {Array.isArray(Products) && Products.length > 0 ? (
                            Products.map((product: IProducts) => (
                                <Liproducts key={product.id}>
                                    <IconWrapper>
                                        <HeartAdd
                                            style={iconStyle(product.id)}
                                            onClick={() =>
                                                idProducts(product.id)
                                            }
                                            size="32"
                                            color="#040404"
                                            variant="Outline"
                                            className="heartIcon"
                                        />
                                    </IconWrapper>
                                    <ImgProducts src={product.foto1} alt="" />
                                    <SpanInfoPorducts>
                                        <NameProducts>
                                            {product.name}
                                        </NameProducts>
                                        <CategoryProducts>
                                            {product.category}
                                        </CategoryProducts>
                                        <CategoryProducts>
                                            {product.descricao}
                                        </CategoryProducts>
                                        <PriceProducts>
                                            R$
                                            {parseFloat(product.price).toFixed(
                                                2
                                            )}
                                        </PriceProducts>
                                        <SpanSale>
                                            <AnimatedButton>
                                                Comprar
                                            </AnimatedButton>
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
                            ))
                        ) : (
                            <ConteinerDivLoad>
                                <LoadingDots className="loading-dots">
                                    Carregando Produtos
                                </LoadingDots>
                            </ConteinerDivLoad>
                        )}
                    </UlProductsList>
                )}
            </DivConteinerProductsAside>
        </>
    );
};
