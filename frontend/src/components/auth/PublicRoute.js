import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Navigate } from "react-router-dom";
import { getClient, getUser } from "@/lib/auth";
import { useGetCurrentUserQuery } from "@/store/slices/authSlice";
const PublicRoute = ({ children }) => {
    const localClient = getClient();
    const localAdmin = getUser();
    const { data: serverUser, isLoading, isError, } = useGetCurrentUserQuery(undefined, {
        skip: !localClient && !localAdmin,
    });
    if (isLoading) {
        return _jsx("div", { children: "Loading..." });
    }
    if ((localClient && serverUser?.role === "CLIENT") && !isError) {
        return _jsx(Navigate, { to: "/client", replace: true });
    }
    if ((localAdmin && serverUser?.role === "ADMIN") && !isError) {
        return _jsx(Navigate, { to: "/admin", replace: true });
    }
    return _jsx(_Fragment, { children: children });
};
export default PublicRoute;
