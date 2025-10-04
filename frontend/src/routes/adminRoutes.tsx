import { lazy } from "react";
import { Route } from "react-router-dom";
import AdminProtectedRoute from "@/components/auth/AdminProtectedRoute";
import Layout from "@/components/layout/admin/Layout";

const Dashboard = lazy(() => import("@/pages/panel/Admins/Dashboard"));
const Packages = lazy(() => import("@/pages/panel/Admins/packages/Index"));
const CreatePackage = lazy(() => import("@/pages/panel/Admins/packages/Create"));
const EditPackage = lazy(() => import("@/pages/panel/Admins/packages/Edit"));
const Users = lazy(() => import("@/pages/panel/Admins/users/Index"));
const UserProfile = lazy(() => import("@/pages/panel/Admins/users/Profile"));
const Clients = lazy(() => import('@/pages/panel/Admins/clients/Index'));
const ClientView = lazy(() => import('@/pages/panel/Admins/clients/View'));
const Developers = lazy(() => import('@/pages/panel/Admins/developers/Index'));
const DeveloperView = lazy(() => import('@/pages/panel/Admins/developers/View'));

const AdminRoutes = (
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

export default AdminRoutes;
