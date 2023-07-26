import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="admin" />
    </Routes>
  );
};
