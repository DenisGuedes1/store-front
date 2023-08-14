import { ChangeEvent, Key, useContext, useState } from "react";
import { LogoText } from "../FormRegister/style";
import { DivHeader, Nav, SpanButtonLogin } from "../Header/style";
import { HamburgerMenu } from "../MenuHamburguer";
import { UserContext } from "../../Contexts/UserContext";
import {
    BagTick2,
    HeartAdd,
    SearchNormal1,
    CloseSquare,
    Verify,
} from "iconsax-react";
import {
    SpanConteinerInfoUser,
    SpanSearchinput,
    ButtonShowCloseInput,
} from "./style";

import { IProducts } from "../../Contexts/interfaces/products.interface";
export const HeaderUserLog = () => {
    const {
        userInfo,
        setSearchValue,
        searchValue,
        Products,
        setSearchResults,
        searchResults,
        setSelectedProduct,
    } = useContext(UserContext);

    const handleClickProducts = (productSelect: IProducts) => {
        setSelectedProduct(productSelect);
        SetShowInput(false);
    };

    const [showInput, SetShowInput] = useState(false);
    const handleClickIcon = () => {
        SetShowInput(true);
    };

    const handleEventChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setSearchValue(event.target.value);
        const filterResult = Products.filter((prod: IProducts) =>
            prod.name.toLowerCase().startsWith(inputValue.toLowerCase())
        );
        console.log(filterResult, "filter result");
        setSearchResults(filterResult);
    };

    return (
        <>
            <DivHeader>
                <Nav>
                    <LogoText>Outlet Store</LogoText>
                    <BagTick2 size="32" color="#040404" variant="TwoTone" />
                    <HeartAdd
                        size="32"
                        color="#040404"
                        variant="Outline"
                        className="heartIcon"
                    />
                    {showInput ? (
                        <>
                            <SpanSearchinput>
                                <input
                                    type="text"
                                    value={searchValue}
                                    onChange={handleEventChangeInput}
                                    placeholder="Digite sua pesquisa"
                                    className="inputSearch"
                                />
                                {searchResults.length > 0 && (
                                    <ul className="suggestions-list">
                                        {searchResults.map(
                                            (
                                                product: IProducts,
                                                index: Key | null | undefined
                                            ) => (
                                                <li
                                                    className="suggestion-li"
                                                    key={index}
                                                    onClick={() =>
                                                        handleClickProducts(
                                                            product
                                                        )
                                                    }
                                                >
                                                    {product.name}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                )}

                                <button className="search-icon">
                                    <SearchNormal1
                                        size="20"
                                        color="#555555"
                                        variant="Broken"
                                        className="search-icon"
                                    />
                                </button>
                                <ButtonShowCloseInput
                                    onClick={() => SetShowInput(false)}
                                >
                                    <CloseSquare color="#555555" />
                                </ButtonShowCloseInput>
                            </SpanSearchinput>
                        </>
                    ) : (
                        <SearchNormal1
                            size="32"
                            color="#555555"
                            variant="Broken"
                            style={{ cursor: "pointer" }}
                            onClick={handleClickIcon}
                        />
                    )}

                    <SpanButtonLogin>
                        <SpanConteinerInfoUser>
                            <HamburgerMenu />
                            {userInfo && (
                                <p>
                                    <Verify />
                                    Bem-vindo, {userInfo.email}
                                </p>
                            )}
                        </SpanConteinerInfoUser>
                    </SpanButtonLogin>
                </Nav>
            </DivHeader>
        </>
    );
};
