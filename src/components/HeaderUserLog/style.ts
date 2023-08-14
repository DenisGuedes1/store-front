import styled from "styled-components";
export const SpanConteinerInfoUser = styled.span`
    display: flex;
    justify-content: space-around;
    width: 102%;
    max-width: 250px;
    gap: 15%;
    & .verifyIcon {
        margin-left: 85%;
        fill: #0041f7;
    }

    & p {
        font-size: 14px;
        font-family: "Inter", sans-serif;
        font-weight: 600;
        letter-spacing: 2px;
    }
`;
export const SpanSearchinput = styled.span`
    display: flex;
    gap: 30%;
    width: 20%;
    max-width: 20%;
    height: 25px;
    max-height: 10%;
    & .inputSearch {
        border-radius: 14px;
        width: 60%;
        max-width: 60%;
        max-height: 80%;
        height: 30px;
    }
    & .search-icon {
        margin-left: -58px;
        cursor: pointer;
    }
    & .suggestions-list {
        z-index: 1;
        position: fixed;
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 9px;
        background: aliceblue;
        width: 15%;
        max-width: 130px;
    }
    & .suggestion-li {
        font-family: "Inter", sans-serif;
        font-weight: 500;
        font-size: 85%;
        letter-spacing: 2px;
        padding: 2px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
`;
export const ButtonShowCloseInput = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;

    margin-left: -22%;

    ::before {
        content: "Fechar";
        position: absolute;
        top: -30px;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        visibility: hidden;
        background-color: #333;
        color: #fff;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 14px;
        transition: opacity 0.3s, visibility 0.3s;
    }

    &:hover::before {
        opacity: 1;
        visibility: visible;
    }

    &:hover {
        transform: translateY(-5px);
    }
`;
