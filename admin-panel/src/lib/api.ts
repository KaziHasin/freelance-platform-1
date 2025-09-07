import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const API_TIMEOUT = 30000;

export const baseQuery = fetchBaseQuery({
    baseUrl: '/api',
    timeout: API_TIMEOUT,
    credentials: "include",
    prepareHeaders: (headers) => {
        headers.set("Content-Type", "application/json");
        return headers;
    },
});

export const API_ENDPOINTS = {
    AUTH: {
        LOGIN: '/auth/email/login',
        LOGOUT: '/auth/email/logout',
        REFRESH: '/auth/refresh',
        ME: '/auth/me',
        REGISTER: '/auth/email/signup',
        FORGOT_PASSWORD: '/auth/forgot-password',
        RESET_PASSWORD: '/auth/reset-password',
    },
    USERS: {
        LIST: '/users',
        DETAIL: (id: string) => `/users/${id}`,
        PROFILE: '/users/profile',
        CHANGE_PASSWORD: '/users/change-password',
        UPLOAD_AVATAR: '/users/upload-avatar',
    },
    CLIENTS: {
        LIST: '/clients',
        DETAIL: (id: string) => `/clients/${id}`,
        CREATE: '/clients',
        UPDATE: (id: string) => `/clients/${id}`,
        DELETE: (id: string) => `/clients/${id}`,
    },
};
