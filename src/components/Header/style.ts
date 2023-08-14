import styled from "styled-components";

export const DivHeader = styled.div`
    width: 100%;
    max-width: 100%;
    height: 72px;
    box-shadow: 1px;
    border-bottom: 2px solid #ccc;
    align-items: center;
`;
export const LogoImg = styled.img`
    width: 70px;
    max-width: 50px;
    display: flex;
    justify-content: space-between;
    padding: 5px;
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 90%;
    max-width: 100%;
    padding: 24px;
    align-items: center;
    &.SeachNormal1 {
        cursor: pointer;
    }
`;

export const SpanButtonLogin = styled.span`
    display: flex;
    justify-content: space-between;
    width: 80px;
    max-width: 40%;
    gap: 10px;
`;
export const ButtonAndLogin = styled.button`
    width: 100%;
    padding: 0px;
    border-radius: 8px;
    margin: 0 auto;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    height: 25px;
    border: 2px solid blue;
    background-color: transparent;

    &:hover {
        background-color: #000;
        color: #ffff;
    }

    &:focus {
        border-bottom-color: #0041f7;
    }
`;
