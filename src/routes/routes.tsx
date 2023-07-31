import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";
import { AdminPage } from "../pages/AdminPage";
import { DashBoardNotLogin } from "../components/DashboardUser";

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<DashBoardNotLogin />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="admin" element={<AdminPage />} />
        </Routes>
    );
};
