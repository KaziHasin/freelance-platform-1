import { createApi } from '@reduxjs/toolkit/query/react';
import { API_ENDPOINTS } from '@/lib/api';
import { baseQueryWithReauth } from '@/lib/baseQueryWithReauth';
// RTK Query API for users
export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['User'],
    endpoints: (builder) => ({
        // Get all users with pagination
        getUsers: builder.query({
            query: ({ page = 1, limit = 10, search = '', role = '', status = '' }) => ({
                url: API_ENDPOINTS.USERS.LIST,
                params: { page, limit, search, role, status },
            }),
            providesTags: (result) => result
                ? [
                    ...result.items.map(({ _id }) => ({ type: 'User', _id })),
                    { type: 'User', id: 'LIST' },
                ]
                : [{ type: 'User', id: 'LIST' }],
        }),
        // Get user by ID
        getUserById: builder.query({
            query: (id) => `/users/${id}`,
            providesTags: (result, error, id) => [{ type: 'User', id }],
        }),
        // Create new user
        createUser: builder.mutation({
            query: (userData) => ({
                url: API_ENDPOINTS.AUTH.REGISTER,
                method: 'POST',
                body: userData,
            }),
            invalidatesTags: [{ type: 'User', id: 'LIST' }],
        }),
        // Update user
        updateUser: builder.mutation({
            query: ({ id, ...userData }) => ({
                url: `/users/${id}`,
                method: 'PUT',
                body: userData,
            }),
            invalidatesTags: (result, error, { id }) => [
                { type: 'User', id },
                { type: 'User', id: 'LIST' },
            ],
        }),
        // Delete user
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/users/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'User', id: 'LIST' }],
        }),
        // Get user profile
        getUserProfile: builder.query({
            query: () => '/users/profile',
            providesTags: ['User'],
        }),
        // Update user profile
        updateUserProfile: builder.mutation({
            query: (profileData) => ({
                url: '/users/profile',
                method: 'PUT',
                body: profileData,
            }),
            invalidatesTags: ['User'],
        }),
        // Change password
        changePassword: builder.mutation({
            query: (passwordData) => ({
                url: '/users/change-password',
                method: 'POST',
                body: passwordData,
            }),
        }),
    }),
});
export const { useGetUsersQuery, useGetUserByIdQuery, useCreateUserMutation, useUpdateUserMutation, useDeleteUserMutation, useGetUserProfileQuery, useUpdateUserProfileMutation, useChangePasswordMutation, } = userApi;
