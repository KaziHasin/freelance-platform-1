import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Navigate, useLocation } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useGetCurrentUserQuery } from "@/store/slices/authSlice";
import { getUser } from "@/lib/auth";
const AdminProtectedRoute = ({ children }) => {
    const location = useLocation();
    const localUser = getUser();
    const { data: serverUser, isLoading, isError, } = useGetCurrentUserQuery(undefined, {
        skip: !localUser,
    });
    if (isLoading) {
        return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900", children: _jsxs("div", { className: "flex flex-col items-center space-y-4", children: [_jsx(Loader2, { className: "h-8 w-8 animate-spin text-blue-600" }), _jsx("p", { className: "text-gray-600 dark:text-gray-400", children: "Verifying session..." })] }) }));
    }
    if (!localUser || isError || !serverUser) {
        return _jsx(Navigate, { to: "/admin/login", state: { from: location }, replace: true });
    }
    if (serverUser.role !== 'ADMIN') {
        return _jsx(Navigate, { to: "/", replace: true });
    }
    return _jsx(_Fragment, { children: children });
};
export default AdminProtectedRoute;
