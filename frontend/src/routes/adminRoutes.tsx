import { lazy } from "react";
import { Route } from "react-router-dom";
import AdminProtectedRoute from "@/components/auth/AdminProtectedRoute";
import Layout from "@/components/layout/admin/Layout";

const Dashboard = lazy(() => import("@/pages/Dashboard"));
const Packages = lazy(() => import("@/pages/packages/Index"));
const CreatePackage = lazy(() => import("@/pages/packages/Create"));
const EditPackage = lazy(() => import("@/pages/packages/Edit"));
const Users = lazy(() => import("@/pages/users/Index"));
const CreateUser = lazy(() => import("@/pages/users/Create"));
const UserProfile = lazy(() => import("@/pages/users/Profile"));
const Clients = lazy(() => import('@/pages/clients/Index'));
const ClientView = lazy(() => import('@/pages/clients/View'));
const Developers = lazy(() => import('@/pages/developers/Index'));
const DeveloperView = lazy(() => import('@/pages/developers/View'));

const adminRoutes = (
    <>
        <Route
            path="/admin"
            element={
                <AdminProtectedRoute>
                    <Layout>
                        <Dashboard />
                    </Layout>
                </AdminProtectedRoute>
            }
        />
        <Route
            path="/admin/packages"
            element={
                <AdminProtectedRoute>
                    <Layout>
                        <Packages />
                    </Layout>
                </AdminProtectedRoute>
            }
        />
        <Route
            path="/admin/packages/create"
            element={
                <AdminProtectedRoute>
                    <Layout>
                        <CreatePackage />
                    </Layout>
                </AdminProtectedRoute>
            }
        />
        <Route
            path="/admin/packages/edit/:id"
            element={
                <AdminProtectedRoute>
                    <Layout>
                        <EditPackage />
                    </Layout>
                </AdminProtectedRoute>
            }
        />
        <Route
            path="/admin/users"
            element={
                <AdminProtectedRoute>
                    <Layout>
                        <Users />
                    </Layout>
                </AdminProtectedRoute>
            }
        />
        <Route
            path="/admin/users/create"
            element={
                <AdminProtectedRoute>
                    <Layout>
                        <CreateUser />
                    </Layout>
                </AdminProtectedRoute>
            }
        />
        <Route
            path="/admin/users/profile"
            element={
                <AdminProtectedRoute>
                    <Layout>
                        <UserProfile />
                    </Layout>
                </AdminProtectedRoute>
            }
        />

        {/* Clients */}
        <Route
            path="/admin/users/clients"
            element={
                <AdminProtectedRoute>
                    <Layout>
                        <Clients />
                    </Layout>
                </AdminProtectedRoute>
            }
        />
        <Route
            path="/admin/users/clients/:id"
            element={
                <AdminProtectedRoute>
                    <Layout>
                        <ClientView />
                    </Layout>
                </AdminProtectedRoute>
            }
        />

        {/* Developers */}
        <Route
            path="/admin/users/developers"
            element={
                <AdminProtectedRoute>
                    <Layout>
                        <Developers />
                    </Layout>
                </AdminProtectedRoute>
            }
        />
        <Route
            path="/admin/users/developers/:id"
            element={
                <AdminProtectedRoute>
                    <Layout>
                        <DeveloperView />
                    </Layout>
                </AdminProtectedRoute>
            }
        />
    </>
);

export default adminRoutes;
