import { lazy } from "react";
import { Route } from "react-router-dom";
import Layout from "@/components/layout/client/Layout";
import ClientProtectedRoute from "@/components/auth/ClientProtectedRoute";

const Dashboard = lazy(() => import("@/pages/panel/Clients/Dashboard"));
const Packages = lazy(() => import("@/pages/panel/Clients/Packages"));


const ClientRoutes = (
    <>
        <Route
            path="/client"
            element={
                <ClientProtectedRoute>
                    <Layout>
                        <Dashboard />
                    </Layout>
                </ClientProtectedRoute>
            }
        />
        <Route />
        <Route
            path="/client/packages"
            element={
                <ClientProtectedRoute>
                    <Layout>
                        <Packages />
                    </Layout>
                </ClientProtectedRoute>
            }
        />
        <Route />

    </>
);

export default ClientRoutes;
