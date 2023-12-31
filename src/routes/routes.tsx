import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { AdminPage } from "../pages/AdminPage";
import { DashBoardNotLogin } from "../components/DashboardUser";
import { DashUserLog } from "../pages/DashboardUserLog";

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<DashBoardNotLogin />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="admin" element={<AdminPage />} />
            <Route path="dashboard/user" element={<DashUserLog />} />
        </Routes>
    );
};
