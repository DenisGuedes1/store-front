import styled, { keyframes } from "styled-components";

export const ConteinerDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 7%;
    width: 90%;
    max-width: 960px;
    flex-wrap: wrap;
    height: 750px;
    max-height: 70%;
    margin: 0 auto;
    padding: 2rem;
`;
const loadingDotsAnimation = keyframes`
    0%, 20% {
        content: ".";
    }
    40% {
        content: "..";
    }
    60% {
        content: "...";
    }
    80% {
        content: "";
    }
`;
export const LoadingDots = styled.p`
    font-size: 40px;
    color: #000;
    position: relative;
    margin: 0 auto;
    padding-top: 125px;
    padding-left: 60%;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    background: linear-gradient(to right, blue, #444444);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;

    &::after {
        content: ".";
        white-space: nowrap;
        animation: ${loadingDotsAnimation} 1s infinite;
    }
`;

export const ConteinerDivLoad = styled.div`
    display: flex;
    width: 100%;
    max-width: 750px;
    height: 100%;
    max-height: 729px;
`;
export const UlProductsList = styled.ul`
    width: 40%;
    max-width: 260px;
    height: 60%;
    border: 1px solid #ccc;
    border-radius: 10px;
    max-height: 410px;
    display: flex;
    align-content: center;
    flex-direction: column;
    margin: 0 auto;
`;
export const ImgProducts = styled.img`
    width: 80%;
    max-width: 250px;
    height: 80%;
    max-height: 250px;
    object-fit: cover;
`;
export const NameProducts = styled.p`
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 14px;
`;

export const CategoryProducts = styled.p`
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 12px;
`;

export const PriceProducts = styled.p`
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 14px;
`;
export const SpanInfoPorducts = styled.span`
    display: flex;
    flex-direction: column;
    padding: 3px;
    margin: 0 auto;

    gap: 6px;
`;
export const Liproducts = styled.li`
    width: 100%;
    max-width: 260px;
    height: 90%;
    max-height: 370px;
    padding: 15px;
`;
export const IconWrapper = styled.span`
    position: relative;
    display: inline-block;
    & .heartIcon {
        position: absolute;
        top: -250px;
        left: 170px;
        z-index: 1;
        cursor: pointer;
    }
    & .heartIcon--True {
        background-color: red;
    }
`;

export const AnimatedButton = styled.button`
    width: 50%;
    padding: 0px;
    border-radius: 8px;
    margin: 0 auto;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    height: 25px;
    border: 2px solid blue;
    background-color: transparent;
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
        background-color: #000;
        color: #fff;
        transform: scale(1.1);
    }

    &:focus {
        border-bottom-color: #0041f7;
    }
`;

export const SpanSale = styled.span`
    display: flex;
    width: 73%;
    align-items: center;
    max-width: 201px;
    gap: 3rem;
`;
export const ButtonSaleCart = styled.button`
    border: none;
    background-color: transparent;
`;
