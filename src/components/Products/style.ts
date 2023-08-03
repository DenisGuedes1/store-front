import styled, { keyframes } from "styled-components";

export const ConteinerDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 7%;
    width: 960px;
    max-width: 70%;
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
    width: 257px;
    max-width: 33.5%;
    height: 340px;
    border: 2px solid #ccc;
`;
export const ImgProducts = styled.img`
    width: 250px;
    height: 250px;
    object-fit: cover;
`;
