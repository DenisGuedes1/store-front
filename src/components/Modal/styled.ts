import styled from "styled-components";

export const DivModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Formuser = styled.form`
    width: 31%;
    height: 47%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 13px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    background-color: white;
`;
export const SpanModal = styled.span`
    display: flex;
    gap: 20%;
`;

export const TitleModal = styled.h2`
    background: linear-gradient(to right, blue, #444444);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 90%;
    font-size: 19px;
`;
export const ButtonCloseModal = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    position: relative;

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
