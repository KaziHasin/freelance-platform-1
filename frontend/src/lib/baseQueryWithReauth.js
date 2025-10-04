import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout, setCredentials } from "@/store/slices/authSlice";
import { API_ENDPOINTS } from "@/lib/api";
const rawBaseQuery = fetchBaseQuery({
    baseUrl: "/api",
    credentials: "include",
    prepareHeaders: (headers) => {
        headers.set("Content-Type", "application/json");
        return headers;
    },
});
export const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await rawBaseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 401) {
        const refreshResult = await rawBaseQuery({ url: API_ENDPOINTS.AUTH.REFRESH, method: "POST" }, api, extraOptions);
        if (refreshResult.data?.user) {
            api.dispatch(setCredentials({ user: refreshResult.data.user }));
            result = await rawBaseQuery(args, api, extraOptions);
        }
        else {
            api.dispatch(logout());
        }
    }
    return result;
};
