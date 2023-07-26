import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="admin" />
    </Routes>
  );
};
