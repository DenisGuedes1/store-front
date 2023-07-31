import styled from "styled-components";

export const ContainerForm = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(#d3d3d3, #808080, #00008b);
`;


export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #000;
  opacity: 73%;
  color: #fff;
  width: 100%;
  height: 12%;
  align-items: center;

  h1 {
    font-size: 22px;
    margin-left: 20px;
  }
`;

export const DivMenu = styled.div`
  display: flex;
  gap: 10px;
  width: 10%;
  max-width: 230px;
  font-size: 10px;

  span {
    color: #fff;
    font-size: 12px;
  }
`;
