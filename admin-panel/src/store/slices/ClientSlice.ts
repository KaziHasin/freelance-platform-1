import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery, API_ENDPOINTS } from '@/lib/api';
import { ClientListResponse } from '@/types/client';


// RTK Query API for items
export const clientApi = createApi({
    reducerPath: 'clientApi',
    baseQuery,
    tagTypes: ['Client'],
    endpoints: (builder) => ({

        getUsers: builder.query<ClientListResponse, { page?: number; limit?: number; search?: string; roleId?: string; status?: string | boolean }>(
            {
                query: ({ page = 1, limit = 10, search = '', status = '' }) => ({
                    url: API_ENDPOINTS.CLIENTS.LIST,
                    params: { page, limit, search, status },
                }),
                providesTags: (result) =>
                    result
                        ? [
                            ...result.items.map(({ _id }) => ({ type: 'Client' as const, _id })),
                            { type: 'Client', id: 'LIST' },
                        ]
                        : [{ type: 'Client', id: 'LIST' }],
            }
        ),
    }),
});

export const {
    useGetUsersQuery,
} = clientApi; 