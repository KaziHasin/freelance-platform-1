import { lazy } from "react";
import { Route } from "react-router-dom";
import Layout from "@/components/layout/developer/Layout";

const Dashboard = lazy(() => import("@/pages/panel/Developers/Dashboard"));


const DeveloperRoutes = (
    <>
        <Route
            path="/developer"
            element={
                <Layout>
                    <Dashboard />
                </Layout>
            }
        />
        <Route />

    </>
);

export default DeveloperRoutes;
