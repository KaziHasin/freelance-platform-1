import { lazy } from "react";
import { Route } from "react-router-dom";
import Layout from "@/components/layout/client/Layout";

const Dashboard = lazy(() => import("@/pages/panel/Clients/Dashboard"));
const Packages = lazy(() => import("@/pages/panel/Clients/Packages"));


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
        <Route
            path="/client/packages"
            element={

                <Layout>
                    <Packages />
                </Layout>
            }
        />
        <Route />

    </>
);

export default ClientRoutes;
