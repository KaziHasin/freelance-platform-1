import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery, API_ENDPOINTS } from '@/lib/api';
import { User } from '@/types';
import { baseQueryWithReauth } from '@/lib/baseQueryWithReauth';
// Types
export interface CreateUserRequest {
    email: string;
    name: string;
    password: string;
    phone: string,
    role: number;
}

export interface UpdateUserRequest {
    id: string;
    email?: string;
    name?: string;
    role?: string;
    isActive?: boolean;
}

export interface UserListResponse {
    items: User[];
    total: number;
    page: number;
    limit: number;
}

// RTK Query API for users
export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['User'],
    endpoints: (builder) => ({
        // Get all users with pagination
        getUsers: builder.query<UserListResponse, { page?: number; limit?: number; search?: string; role?: string; status?: string | boolean }>(
            {
                query: ({ page = 1, limit = 10, search = '', role = '', status = '' }) => ({
                    url: API_ENDPOINTS.USERS.LIST,
                    params: { page, limit, search, role, status },
                }),
                providesTags: (result) =>
                    result
                        ? [
                            ...result.items.map(({ _id }) => ({ type: 'User' as const, _id })),
                            { type: 'User', id: 'LIST' },
                        ]
                        : [{ type: 'User', id: 'LIST' }],
            }
        ),


        // Get user by ID
        getUserById: builder.query<User, string>({
            query: (id) => `/users/${id}`,
            providesTags: (result, error, id) => [{ type: 'User', id }],
        }),

        // Create new user
        createUser: builder.mutation<User, CreateUserRequest>({
            query: (userData) => ({
                url: API_ENDPOINTS.AUTH.REGISTER,
                method: 'POST',
                body: userData,
            }),
            invalidatesTags: [{ type: 'User', id: 'LIST' }],
        }),

        // Update user
        updateUser: builder.mutation<User, UpdateUserRequest>({
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
        deleteUser: builder.mutation<void, string>({
            query: (id) => ({
                url: `/users/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'User', id: 'LIST' }],
        }),

        // Get user profile
        getUserProfile: builder.query<User, void>({
            query: () => '/users/profile',
            providesTags: ['User'],
        }),

        // Update user profile
        updateUserProfile: builder.mutation<User, Partial<Omit<User, 'id' | 'role' | 'createdAt' | 'updatedAt'>>>({
            query: (profileData) => ({
                url: '/users/profile',
                method: 'PUT',
                body: profileData,
            }),
            invalidatesTags: ['User'],
        }),

        // Change password
        changePassword: builder.mutation<void, { currentPassword: string; newPassword: string }>({
            query: (passwordData) => ({
                url: '/users/change-password',
                method: 'POST',
                body: passwordData,
            }),
        }),
    }),
});

export const {
    useGetUsersQuery,
    useGetUserByIdQuery,
    useCreateUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation,
    useGetUserProfileQuery,
    useUpdateUserProfileMutation,
    useChangePasswordMutation,
} = userApi; 