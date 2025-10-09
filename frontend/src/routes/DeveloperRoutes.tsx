import { lazy } from "react";
import { Route } from "react-router-dom";
import Layout from "@/components/layout/developer/Layout";
import DeveloperProtectedRoute from "@/components/auth/DeveloperProtectedRoute";

const Dashboard = lazy(() => import("@/pages/panel/Developers/Dashboard"));

const DeveloperRoutes = (
    <>
        <Route
            path="/developer"
            element={
                <DeveloperProtectedRoute>
                    <Layout>
                        <Dashboard />
                    </Layout>
                </DeveloperProtectedRoute>
            }
        />
        <Route />

    </>
);

export default DeveloperRoutes;
