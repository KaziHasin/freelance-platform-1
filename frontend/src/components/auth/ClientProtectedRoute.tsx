import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useGetCurrentUserQuery } from "@/store/slices/authSlice";
import { getUser } from "@/lib/auth";

interface ClientProtectedRouteProps {
    children: React.ReactNode;
}

const ClientProtectedRoute: React.FC<ClientProtectedRouteProps> = ({ children }) => {
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
                    <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                    <p className="text-gray-600 dark:text-gray-400">Verifying session...</p>
                </div>
            </div>
        );
    }
    if (!localUser || isError || !serverUser) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }

    if (serverUser.role !== 'CLIENT') {
        return <Navigate to="/client" replace />;
    }

    return <>{children}</>;
};

export default ClientProtectedRoute;
