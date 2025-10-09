import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useGetCurrentUserQuery } from "@/store/slices/authSlice";
import { getUser } from "@/lib/auth";
import LoadingSpinner from "../ui/LoadingSpinner";

interface DeveloperProtectedRouteProps {
    children: React.ReactNode;
}

const DeveloperProtectedRoute: React.FC<DeveloperProtectedRouteProps> = ({ children }) => {
    const location = useLocation();

    const localDeveloper = getUser();

    const {
        data: serverDeveloper,
        isLoading,
        isError,
    } = useGetCurrentUserQuery(undefined, {
        skip: !localDeveloper,
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
    if (!localDeveloper || isError || !serverDeveloper) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }

    if (serverDeveloper.role !== 'DEVELOPER') {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
};

export default DeveloperProtectedRoute;
