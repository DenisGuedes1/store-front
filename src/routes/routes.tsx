import { Route, Routes } from "react-router-dom";
import { FormRegister } from "../components/FormRegister";
import { Login } from "../pages/Login";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route path="register" element={<FormRegister />} />
      <Route path="login" element={<Login />} />
      <Route path="admin" />
    </Routes>
  );
};
