import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import { logout, setCredentials } from "@/store/slices/authSlice";
import { API_ENDPOINTS } from "@/lib/api";
import type { User } from "@/store/slices/authSlice";

interface RefreshResponse {
    user: User;
}

const rawBaseQuery = fetchBaseQuery({
    baseUrl: "/api",
    credentials: "include",
    prepareHeaders: (headers) => {
        headers.set("Content-Type", "application/json");
        return headers;
    },
});

export const baseQueryWithReauth: BaseQueryFn<
    string | { url: string; method?: string; body?: any },
    unknown,
    unknown
> = async (args, api, extraOptions) => {
    let result = await rawBaseQuery(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
        const refreshResult = await rawBaseQuery(
            { url: API_ENDPOINTS.AUTH.REFRESH, method: "POST" },
            api,
            extraOptions
        ) as { data?: RefreshResponse };


        if (refreshResult.data?.user) {
            api.dispatch(setCredentials({ user: refreshResult.data.user }));

            result = await rawBaseQuery(args, api, extraOptions);
        } else {
            api.dispatch(logout());
        }
    }

    return result;
};
