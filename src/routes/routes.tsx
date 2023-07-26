import { Route, Routes } from "react-router-dom";
import { FormLogin } from "../components/FormLogin";
import { FormRegister } from "../components/FormRegister";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route path="register" element={<FormRegister />} />
      <Route path="login" element={<FormLogin />} />
      <Route path="admin" />
    </Routes>
  );
};
