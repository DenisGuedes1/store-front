import styled from "styled-components";

export const Footer = styled.footer`
    max-width: 1365px;
    width: 100%;
    height: 70px;
    margin: auto;
    margin-top: 45px;
    display: flex;
    gap: 25%;
    background-color: #031d65;
    & a {
        display: flex;
        align-items: center;
        width: 30%;
        max-width: 325px;
        height: 0px;
    }
    & .icone {
        margin-top: 30%;
        color: #fff;
    }
    & h3 {
        background: linear-gradient(to right, #fff, #444444);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        font-family: "Inter", sans-serif;
        font-weight: 600;
        font-size: 90%;
    }
    & p {
        background: linear-gradient(to right, #fff, #444444);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        font-family: "Inter", sans-serif;
        font-weight: 600;
        font-size: 90%;
    }
`;
