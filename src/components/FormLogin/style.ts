import styled from "styled-components";

export const Form = styled.form`
  margin: 0 auto;
  margin-top: 70px;
  width: 80%;
  max-width: 300px;
  height: 400px;
  border-radius: 4px;
  padding: 15px;
  box-shadow: 0 0 0 1px transparent, 0 0 0 2px #0041f7;
  background-color: #e5e5e5;

  h3 {
    margin: 20px 0 0 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    gap: 20px;

    label {
      margin-right: 220px;
      font-size: 12px;
    }
    input {
      width: 80%;
      padding: 7px;
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
    }

    button {
      width: 86%;
      padding: 7px;
    }

    span {
      color: #00008b;
      font-size: 12px;
    }

    p {
      font-size: 10px;
      color: red;
      height: 1px;
    }
    a{
      width: 98%;
    }
  }
`;

export const BtnRegister = styled.button`
  width: 100%;
  padding: 7px;
  margin-left: 20px;
`;
