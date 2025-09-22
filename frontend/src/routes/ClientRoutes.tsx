import { lazy } from "react";
import { Route } from "react-router-dom";
import Layout from "@/components/layout/client/Layout";

const Dashboard = lazy(() => import("@/pages/panel/Clients/Dashboard"));


const ClientRoutes = (
    <>
        <Route
            path="/client"
            element={

                <Layout>
                    <Dashboard />
                </Layout>
            }
        />
        <Route />

    </>
);

export default ClientRoutes;
