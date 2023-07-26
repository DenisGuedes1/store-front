import { Route, Routes } from "react-router-dom";
import { FormLogin } from "../components/FormLogin";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<FormLogin />} />
      <Route path="register" />
      <Route path="login" />
      <Route path="admin" />
    </Routes>
  );
};
