import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

import adminRoutes from "./adminRoutes";
const Home = lazy(() => import("@/pages/home/Home"));
const Login = lazy(() => import("@/pages/auth/Login"));

const AppRoutes = () => {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <Routes>
                {/* Public */}
                <Route path="/" element={<Home />} />

                {/* Admin login */}
                <Route path="/admin/login" element={<Login />} />

                {/* Grouped Routes */}
                {adminRoutes}

                {/* Catch-all */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
