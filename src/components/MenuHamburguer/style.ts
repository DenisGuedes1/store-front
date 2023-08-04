import styled from "styled-components";

export const MenuWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const HamburgerButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 20px;
    cursor: pointer;

    div {
        width: 100%;
        height: 4px;
        background-color: #333;
    }

    /* @media (min-width: 768px) {
        display: none; 
    } */
`;

export const MenuItems = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50px;
    background-color: #f9f9f9;
    padding: 11px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 1;
    /* margin: 0 auto; */
    margin-left: -2.5%;
`;

export const MenuItem = styled.div`
    padding: 5px;
    cursor: pointer;

    &:hover {
        background-color: #ddd;
    }
`;
