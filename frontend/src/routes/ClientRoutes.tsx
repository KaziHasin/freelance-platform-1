import { lazy } from "react";
import { Route } from "react-router-dom";
import Layout from "@/components/layout/client/Layout";
import ClientProtectedRoute from "@/components/auth/ClientProtectedRoute";

const Dashboard = lazy(() => import("@/pages/panel/Clients/Dashboard"));
const Packages = lazy(() => import("@/pages/panel/Clients/Packages"));
const PlanSelection = lazy(() => import("@/pages/panel/Clients/PlanSelection"));
const ProcessPayment = lazy(() => import("@/pages/panel/Clients/ProcessPayment"));
const PaymentResult = lazy(() => import("@/pages/panel/Clients/PaymentResult"));


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
        <Route
            path="/client/plan-selection/:id"
            element={
                <ClientProtectedRoute>
                    <Layout>
                        <PlanSelection />
                    </Layout>
                </ClientProtectedRoute>
            }
        />
        <Route />
        <Route
            path="/client/process-payment"
            element={
                <ClientProtectedRoute>
                    <Layout>
                        <ProcessPayment />
                    </Layout>
                </ClientProtectedRoute>
            }
        />
        <Route />

        <Route
            path="/client/payment-result"
            element={
                <ClientProtectedRoute>
                    <Layout>
                        <PaymentResult />
                    </Layout>
                </ClientProtectedRoute>
            }
        />
        <Route />

    </>
);

export default ClientRoutes;
