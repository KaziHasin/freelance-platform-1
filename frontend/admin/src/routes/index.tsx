import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from "@/components/auth/ProtectedRoute";

const Login = lazy(() => import('@/pages/auth/Login'));
const Layout = lazy(() => import('@/components/layout/Layout'));
const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Packages = lazy(() => import('@/pages/packages/Index'));
const CreatePackage = lazy(() => import('@/pages/packages/Create'))
const EditPackage = lazy(() => import('@/pages/packages/Edit'))
const Users = lazy(() => import('@/pages/users/Index'));
const Clients = lazy(() => import('@/pages/clients/Index'));
const ClientView = lazy(() => import('@/pages/clients/View'));
const Developers = lazy(() => import('@/pages/developers/Index'));
const DeveloperView = lazy(() => import('@/pages/developers/View'));
const CreateUser = lazy(() => import('@/pages/users/Create'));
const UserProfile = lazy(() => import('@/pages/users/Profile'));



const LoadingSpinner = () => (
    <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
    </div>
);

const AppRoutes = () => {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <Routes>
                <Route
                    path="/login"
                    element={
                        <Login />
                    }
                />
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <Dashboard />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                {/* Start Packages route  */}
                <Route
                    path="/packages"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <Packages />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/packages/create"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <CreatePackage />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/packages/edit/:id"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <EditPackage />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                {/* End Packages route  */}
                <Route
                    path="/users/all"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <Users />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/users/create"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <CreateUser />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="users/profile"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <UserProfile />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                {/* Start Client routes  */}
                <Route
                    path="/users/clients"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <Clients />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/users/clients/:id"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <ClientView />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                {/* End Client routes  */}

                {/* Start Developers routes  */}
                <Route
                    path="/users/developers"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <Developers />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/users/developers/:id"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <DeveloperView />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                {/* End Developers routes  */}

                {/* Catch all route */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes; 