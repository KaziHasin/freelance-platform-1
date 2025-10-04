import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import AdminRoutes from "./AdminRoutes";
import ClientRoutes from "./ClientRoutes";
import PublicRoute from "@/components/auth/PublicRoute";
import DeveloperRoutes from "./DeveloperRoutes";
const Home = lazy(() => import("@/pages/home/Home"));
const Signin = lazy(() => import("@/pages/home/auth/Signin"));
const Signup = lazy(() => import("@/pages/home/auth/Signup"));
const AdminLogin = lazy(() => import("@/pages/auth/AdminLogin"));
const AppRoutes = () => {
    return (_jsx(Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/signin", element: _jsx(PublicRoute, { children: _jsx(Signin, {}) }) }), _jsx(Route, { path: "/signup", element: _jsx(PublicRoute, { children: _jsx(Signup, {}) }) }), _jsx(Route, { path: "/admin/login", element: _jsx(PublicRoute, { children: _jsx(AdminLogin, {}) }) }), AdminRoutes, ClientRoutes, DeveloperRoutes, _jsx(Route, { path: "*", element: _jsx(Navigate, { to: "/" }) })] }) }));
};
export default AppRoutes;
