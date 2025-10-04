import { createApi } from '@reduxjs/toolkit/query/react';
import { createSlice, } from '@reduxjs/toolkit';
import { API_ENDPOINTS } from '@/lib/api';
import { setUser, clearAuth, setClient, clearClientAuth } from '@/lib/auth';
import { baseQueryWithReauth } from '@/lib/baseQueryWithReauth';
// Initial state
const initialState = {
    user: null,
    isLoading: false,
};
// Auth slice for state management
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { user } = action.payload;
            state.user = user;
            if (state.user.role === 'ADMIN') {
                setUser(user);
            }
            else if (state.user.role === 'CLIENT') {
                setClient(user);
            }
        },
        logout: (state) => {
            if (state.user.role === 'ADMIN') {
                clearAuth();
            }
            else if (state.user.role === 'CLIENT') {
                clearClientAuth();
            }
            state.user = null;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        updateUser: (state, action) => {
            state.user = action.payload;
            setUser(action.payload);
        },
    },
});
export const { setCredentials, logout, setLoading, updateUser } = authSlice.actions;
// RTK Query API for auth
export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Auth'],
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (credentials) => ({
                url: API_ENDPOINTS.AUTH.REGISTER,
                method: 'POST',
                body: credentials,
            }),
            invalidatesTags: ['Auth'],
        }),
        login: builder.mutation({
            query: (credentials) => ({
                url: API_ENDPOINTS.AUTH.LOGIN,
                method: 'POST',
                body: credentials,
            }),
            invalidatesTags: ['Auth'],
        }),
        logout: builder.mutation({
            query: () => ({
                url: API_ENDPOINTS.AUTH.LOGOUT,
                method: 'POST',
            }),
            invalidatesTags: ['Auth'],
        }),
        getCurrentUser: builder.query({
            query: () => API_ENDPOINTS.AUTH.ME,
            providesTags: ['Auth'],
        }),
    }),
});
export const { useRegisterMutation, useLoginMutation, useLogoutMutation, useGetCurrentUserQuery, } = authApi;
export default authSlice.reducer;
