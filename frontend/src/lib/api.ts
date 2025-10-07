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
        DETAIL: (id: string) => `/users/${id}`,
        UPDATE_STATUS: (id: string) => `/users/${id}/status`,
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
    DEVELOPERS: {
        LIST: '/developers',
        DETAIL: (id: string) => `/developers/${id}`,
        CREATE: '/developers',
        REVIEW_STATUS: (id: string) => `/developers/${id}/review`,
        DELETE: (id: string) => `/developers/${id}`,
    },
    PACKAGES: {
        LIST: 'packages',
        DETAIL: (id: string) => `packages/${id}`,
        CREATE: '/packages',
        UPDATE: (id: string) => `/packages/${id}`,
        DELETE: (id: string) => `/packages/${id}`,
    },
    PAYMENT: {
        CHECKOUT: '/payments/checkout',
    },
    SUBSCRIPTIONS: {
        CLIENT: '/subscriptions/client',
        CANCEL: (id: string) => `/subscriptions/${id}/cancel`,
    },
    SKILLS: {
        LIST: "/skills",
        RESOLVE: "/skills/resolve",
    },
    PROJECTS: {
        LIST: "/projects",
        CREATE: "/projects",
        DETAIL: (id: string) => `/projects/${id}`,
        UPDATE: (id: string) => `/projects/${id}`,
        DELETE: (id: string) => `/projects/${id}`
    },
};
