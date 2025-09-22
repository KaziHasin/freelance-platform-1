import { lazy } from "react";
import { Route } from "react-router-dom";
import ClientProtectedRoute from "@/components/auth/ClientProtectedRoute";
import Layout from "@/components/layout/client/Layout";

const Dashboard = lazy(() => import("@/pages/panel/Clients/Dashboard"));


const ClientRoutes = (
    <>
        <Route
            path="/client"
            element={
                // <ClientProtectedRoute>
                <Layout>
                    <Dashboard />
                </Layout>
                // </ClientProtectedRoute>
            }
        />
        <Route />

    </>
);

export default ClientRoutes;
