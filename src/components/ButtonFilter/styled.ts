import styled from "styled-components";

export const DivConteinerButtons = styled.aside`
    display: flex;
    flex-direction: row;
    overflow-y: scroll;
    width: 100%;
    max-width: 250px;
    gap: 35px;
    align-items: center;
    margin: 70px 0 0 30px;
    height: 50%;

    button {
        padding: 5px;
        width: 40%;
    }

    @media (min-width: 768px) {
        flex-direction: column;
        overflow-y: hidden;
    }
    & button {
        font-family: "Inter", sans-serif;
    }
`;
export const ButtonFilter = styled.button`
    width: 44%;
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
        color: #fff;
        transform: scale(1.1);
    }

    &:focus {
        border-bottom-color: #0041f7;
    }
`;
