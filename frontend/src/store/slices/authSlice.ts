import { createApi } from '@reduxjs/toolkit/query/react';
import { createSlice, } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { API_ENDPOINTS } from '@/lib/api';
import { setUser, clearAuth, setClient, clearClientAuth } from '@/lib/auth';
import { baseQueryWithReauth } from '@/lib/baseQueryWithReauth';

// Types
export interface User {
    id: string;
    email: string;
    name: string;
    role: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
    name: string,
    email: string;
    password: string;
    role: 'CLIENT' | 'DEVELOPER';
    provider: string
}

export interface LoginResponse {
    user: User;
}

export interface AuthState {
    user: User | null;
    isLoading: boolean;
}

export interface RefreshTokenResponse {
    access_token: string;
    refresh_token: string;
}

// Initial state
const initialState: AuthState = {
    user: null,
    isLoading: false,
};

// Auth slice for state management
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<{ user: User; }>) => {
            const { user } = action.payload;
            state.user = user;
            console.log(state.user);

            if (state.user.role === 'ADMIN') {
                setUser(user);
            } else if (state.user.role === 'CLIENT') {
                setClient(user);
            }

        },
        logout: (state) => {
            if (state.user.role === 'ADMIN') {
                clearAuth();
            } else if (state.user.role === 'CLIENT') {
                clearClientAuth();
            }
            state.user = null;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        updateUser: (state, action: PayloadAction<User>) => {
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
        register: builder.mutation<LoginResponse, RegisterRequest>({
            query: (credentials) => ({
                url: API_ENDPOINTS.AUTH.REGISTER,
                method: 'POST',
                body: credentials,
            }),
            invalidatesTags: ['Auth'],
        }),
        login: builder.mutation<LoginResponse, LoginRequest>({
            query: (credentials) => ({
                url: API_ENDPOINTS.AUTH.LOGIN,
                method: 'POST',
                body: credentials,
            }),
            invalidatesTags: ['Auth'],
        }),
        logout: builder.mutation<void, void>({
            query: () => ({
                url: API_ENDPOINTS.AUTH.LOGOUT,
                method: 'POST',
            }),
            invalidatesTags: ['Auth'],
        }),
        getCurrentUser: builder.query<User, void>({
            query: () => API_ENDPOINTS.AUTH.ME,
            providesTags: ['Auth'],
        }),
    }),
});

export const {
    useRegisterMutation,
    useLoginMutation,
    useLogoutMutation,
    useGetCurrentUserQuery,
} = authApi;

export default authSlice.reducer;
