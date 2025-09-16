import { createApi } from '@reduxjs/toolkit/query/react';
import { API_ENDPOINTS } from '@/lib/api';
import { ClientListResponse } from '@/types/client';
import { baseQueryWithReauth } from '@/lib/baseQueryWithReauth';


// RTK Query API for items
export const clientApi = createApi({
    reducerPath: 'clientApi',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Client'],
    endpoints: (builder) => ({
        getClients: builder.query<ClientListResponse, { page?: number; limit?: number; search?: string; roleId?: string; status?: string | boolean }>({
            query: ({ page = 1, limit = 10, search = '', status = '' }) => ({
                url: API_ENDPOINTS.CLIENTS.LIST,
                params: { page, limit, search, status },
            }),
            providesTags: (result) =>
                result
                    ? [
                        ...result.items.map(({ _id }) => ({ type: 'Client' as const, id: _id })),
                        { type: 'Client', id: 'LIST' },
                    ]
                    : [{ type: 'Client', id: 'LIST' }],
        }),

        getClient: builder.query<any, string>({
            query: (id) => ({
                url: API_ENDPOINTS.CLIENTS.DETAIL(id),
            }),
            providesTags: (result, error, id) => [{ type: 'Client', id }],
        }),

        updateClient: builder.mutation<any, { id: string; name: string; email: string; status: string }>(
            {
                query: ({ id, ...body }) => ({
                    url: API_ENDPOINTS.CLIENTS.UPDATE(id),
                    method: 'PUT',
                    body,
                }),
                invalidatesTags: (result, error, { id }) => [
                    { type: 'Client', id },
                    { type: 'Client', id: 'LIST' },
                ],
            }
        ),

        updateClientStatus: builder.mutation<any, { id: string; status: string }>(
            {
                query: ({ id, status }) => ({
                    url: API_ENDPOINTS.USERS.UPDATE_STATUS(id),
                    method: 'PATCH',
                    body: { status },
                }),
                invalidatesTags: (result, error, { id }) => [
                    { type: 'Client', id },
                    { type: 'Client', id: 'LIST' },
                ],
            }
        ),
    }),
});

export const {
    useGetClientsQuery,
    useGetClientQuery,
    useUpdateClientMutation,
    useUpdateClientStatusMutation,
} = clientApi;
