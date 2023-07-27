import styled from "styled-components";

export const ContainerDash = styled.main`
  width: 100%;
  height: 100vh;
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
  width: 70%;
  max-width: 230px;
  font-size: 10px;

  span {
    color: #fff;
  }
`;
