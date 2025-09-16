import { createApi } from '@reduxjs/toolkit/query/react';
import { API_ENDPOINTS } from '@/lib/api';
import { DeveloperListResponse } from '@/types/developer';
import { baseQueryWithReauth } from '@/lib/baseQueryWithReauth';


// RTK Query API for items
export const developerApi = createApi({
    reducerPath: 'developerApi',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Developer'],
    endpoints: (builder) => ({
        getDevelopers: builder.query<DeveloperListResponse, { page?: number; limit?: number; search?: string; roleId?: string; status?: string | boolean }>({
            query: ({ page = 1, limit = 10, search = '', status = '' }) => ({
                url: API_ENDPOINTS.DEVELOPERS.LIST,
                params: { page, limit, search, status },
            }),
            providesTags: (result) =>
                result
                    ? [
                        ...result.items.map(({ _id }) => ({ type: 'Developer' as const, id: _id })),
                        { type: 'Developer', id: 'LIST' },
                    ]
                    : [{ type: 'Developer', id: 'LIST' }],
        }),

        getDeveloper: builder.query<any, string>({
            query: (id) => ({
                url: API_ENDPOINTS.DEVELOPERS.DETAIL(id),
            }),
            providesTags: (result, error, id) => [{ type: 'Developer', id }],
        }),

        updateDeveloperStatus: builder.mutation<any, { id: string; status: string }>(
            {
                query: ({ id, status }) => ({
                    url: API_ENDPOINTS.USERS.UPDATE_STATUS(id),
                    method: 'PATCH',
                    body: { status },
                }),
                invalidatesTags: (result, error, { id }) => [
                    { type: 'Developer', id },
                    { type: 'Developer', id: 'LIST' },
                ],
            }
        ),

        updateVerificationStatus: builder.mutation<any, { id: string; status: string }>(
            {
                query: ({ id, status }) => ({
                    url: API_ENDPOINTS.DEVELOPERS.REVIEW_STATUS(id),
                    method: 'PATCH',
                    body: { status },
                }),
                invalidatesTags: (result, error, { id }) => [
                    { type: 'Developer', id },
                    { type: 'Developer', id: 'LIST' },
                ],
            }
        ),
    }),
});

export const {
    useGetDevelopersQuery,
    useGetDeveloperQuery,
    useUpdateDeveloperStatusMutation,
    useUpdateVerificationStatusMutation
} = developerApi;
