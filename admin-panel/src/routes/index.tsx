import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from "@/components/auth/ProtectedRoute";

const Login = lazy(() => import('@/pages/auth/Login'));
const Layout = lazy(() => import('@/components/layout/Layout'));
const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Subjects = lazy(() => import('@/pages/subjects/Index'));
const Users = lazy(() => import('@/pages/users/Index'));
const CreateUser = lazy(() => import('@/pages/users/Create'));
const UserProfile = lazy(() => import('@/pages/users/Profile'));


const Roles = lazy(() => import('@/pages/acl/roles/Index'));




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
                <Route
                    path="/subjects"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <Subjects />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
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
                <Route
                    path="access-control/roles"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <Roles />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                {/* Catch all route */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes; 