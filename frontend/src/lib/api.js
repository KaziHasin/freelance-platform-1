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
        LOGOUT: '/auth/logout',
        REFRESH: '/auth/refresh',
        ME: '/auth/me',
        REGISTER: '/auth/email/signup',
        FORGOT_PASSWORD: '/auth/forgot-password',
        RESET_PASSWORD: '/auth/reset-password',
    },
    USERS: {
        LIST: '/users',
        DETAIL: (id) => `/users/${id}`,
        UPDATE_STATUS: (id) => `/users/${id}/status`,
        PROFILE: '/users/profile',
        CHANGE_PASSWORD: '/users/change-password',
        UPLOAD_AVATAR: '/users/upload-avatar',
    },
    CLIENTS: {
        LIST: '/clients',
        DETAIL: (id) => `/clients/${id}`,
        CREATE: '/clients',
        UPDATE: (id) => `/clients/${id}`,
        DELETE: (id) => `/clients/${id}`,
    },
    DEVELOPERS: {
        LIST: '/developers',
        DETAIL: (id) => `/developers/${id}`,
        CREATE: '/developers',
        REVIEW_STATUS: (id) => `/developers/${id}/review`,
        DELETE: (id) => `/developers/${id}`,
    },
    PACKAGES: {
        LIST: 'packages',
        DETAIL: (id) => `packages/${id}`,
        CREATE: '/packages',
        UPDATE: (id) => `/packages/${id}`,
        DELETE: (id) => `/packages/${id}`,
    },
    PAYMENT: {
        CHECKOUT: '/payments/checkout',
    },
    SUBSCRIPTIONS: {
        CLIENT: '/subscriptions/client',
        CANCEL: (id) => `/subscriptions/${id}/cancel`,
    },
};
