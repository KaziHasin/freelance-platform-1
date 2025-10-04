import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { lazy } from "react";
import { Route } from "react-router-dom";
import Layout from "@/components/layout/developer/Layout";
const Dashboard = lazy(() => import("@/pages/panel/Developers/Dashboard"));
const DeveloperRoutes = (_jsxs(_Fragment, { children: [_jsx(Route, { path: "/developer", element: _jsx(Layout, { children: _jsx(Dashboard, {}) }) }), _jsx(Route, {})] }));
export default DeveloperRoutes;
