import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

import adminRoutes from "./adminRoutes";
const Home = lazy(() => import("@/pages/home/Home"));
const Signin = lazy(() => import("@/pages/home/auth/Signin"));
const Signup = lazy(() => import("@/pages/home/auth/Signup"));
const AdminLogin = lazy(() => import("@/pages/auth/AdminLogin"));

const AppRoutes = () => {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <Routes>
                {/* Public */}
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />

                {/* Admin login */}
                <Route path="/admin/login" element={<AdminLogin />} />

                {/* Grouped Routes */}
                {adminRoutes}

                {/* Catch-all */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
