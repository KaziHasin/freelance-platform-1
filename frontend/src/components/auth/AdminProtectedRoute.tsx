import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useGetCurrentUserQuery } from "@/store/slices/authSlice";
import { getUser } from "@/lib/auth";
import LoadingSpinner from "../ui/LoadingSpinner";

interface AdminProtectedRouteProps {
    children: React.ReactNode;
}

const AdminProtectedRoute: React.FC<AdminProtectedRouteProps> = ({ children }) => {
    const location = useLocation();

    const localUser = getUser();

    const {
        data: serverUser,
        isLoading,
        isError,
    } = useGetCurrentUserQuery(undefined, {
        skip: !localUser,
    });


    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center space-y-4">
                    <LoadingSpinner fullScreen={true} />
                    <p className="text-gray-600 dark:text-gray-400">Verifying session...</p>
                </div>
            </div>
        );
    }
    if (!localUser || isError || !serverUser) {
        return <Navigate to="/admin/login" state={{ from: location }} replace />;
    }

    if (serverUser.role !== 'ADMIN') {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
};

export default AdminProtectedRoute;
