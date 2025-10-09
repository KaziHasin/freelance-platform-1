import React from "react";
import { Navigate } from "react-router-dom";
import { getUser } from "@/lib/auth";
import { useGetCurrentUserQuery } from "@/store/slices/authSlice";
import LoadingSpinner from "../ui/LoadingSpinner";

interface PublicRouteProps {
    children: React.ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
    const localUser = getUser();

    const {
        data: serverUser,
        isLoading,
        isError,
    } = useGetCurrentUserQuery(undefined, {
        skip: !localUser,
    });

    if (isLoading) {
        return <LoadingSpinner fullScreen={true} />;
    }

    if ((localUser && serverUser?.role === "ADMIN") && !isError) {
        return <Navigate to="/admin" replace />;
    }

    if ((localUser && serverUser?.role === "CLIENT") && !isError) {
        return <Navigate to="/client" replace />;
    }

    if ((localUser && serverUser?.role === "DEVELOPER") && !isError) {
        return <Navigate to="/developer" replace />;
    }


    return <>{children}</>;
};

export default PublicRoute;
