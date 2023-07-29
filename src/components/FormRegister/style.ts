import styled from "styled-components";

export const ConteinerForm = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 725px;
    width: 100%;
    height: 410px;
    align-items: center;
    margin: 0 auto;
    padding: 8rem;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    // max-width: 30%;
    width: 35%;
    // height: 100%;
    gap: 8px;
    margin: 0 auto;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0 0 0 1px transparent, 0 0 0 2px #0041f7;
    background-color: #e5e5e5;
`;
export const SpanConteiner = styled.span`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;
export const Title = styled.h1`
    font-family: "Inter", sans-serif;
    background-image: linear-gradient(90deg, #000, #0041f7);
    -webkit-background-clip: text;
    color: transparent;
    font-size: 140%;
`;
export const SubTitle = styled.h2`
    font-family: "Inter", sans-serif;
    background-image: linear-gradient(90deg, #000, #0041f7);
    -webkit-background-clip: text;
    color: transparent;
    font-size: 120%;
`;

export const LabelAll = styled.label`
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 500;
`;

export const NotificationsError = styled.p`
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 700;
    color: #ff0000;
`;
export const InputAll = styled.input`
    width: 80%;
    padding: 7px;
    border: none;
    border-bottom: 2px solid #ccc;
    outline: none;
    border-radius: 4px;
    font-size: 16px;
    transition: border-bottom-color 0.3s;

    ::placeholder {
        color: #999;
    }

    &:hover {
        border-bottom-color: #007bff;
    }

    &:focus {
        border-bottom-color: #0041f7;
    }
`;
export const ButtonRegistrar = styled.button`
    width: 86%;
    padding: 7px;
    border-radius: 4px;
    border: none;
    margin: 0 auto;
    font-family: "Inter", sans-serif;
    font-weight: 500;

    &:hover {
        background-color: #ffff;
        color: #0041f7;
    }

    &:focus {
        border-bottom-color: #0041f7;
    }
`;
