import React from "react";
import { Navigate } from "react-router-dom";
import { getClient, getUser } from "@/lib/auth";
import { useGetCurrentUserQuery } from "@/store/slices/authSlice";

interface PublicRouteProps {
    children: React.ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
    const localClient = getClient();
    const localAdmin = getUser();

    const {
        data: serverUser,
        isLoading,
        isError,
    } = useGetCurrentUserQuery(undefined, {
        skip: !localClient && !localAdmin,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if ((localClient && serverUser?.role === "CLIENT") && !isError) {
        return <Navigate to="/client" replace />;
    }

    if ((localAdmin && serverUser?.role === "ADMIN") && !isError) {
        return <Navigate to="/admin" replace />;
    }

    return <>{children}</>;
};

export default PublicRoute;
