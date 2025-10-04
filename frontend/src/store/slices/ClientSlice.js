import { createApi } from '@reduxjs/toolkit/query/react';
import { API_ENDPOINTS } from '@/lib/api';
import { baseQueryWithReauth } from '@/lib/baseQueryWithReauth';
// RTK Query API for items
export const clientApi = createApi({
    reducerPath: 'clientApi',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Client'],
    endpoints: (builder) => ({
        getClients: builder.query({
            query: ({ page = 1, limit = 10, search = '', status = '' }) => ({
                url: API_ENDPOINTS.CLIENTS.LIST,
                params: { page, limit, search, status },
            }),
            providesTags: (result) => result
                ? [
                    ...result.items.map(({ _id }) => ({ type: 'Client', id: _id })),
                    { type: 'Client', id: 'LIST' },
                ]
                : [{ type: 'Client', id: 'LIST' }],
        }),
        getClient: builder.query({
            query: (id) => ({
                url: API_ENDPOINTS.CLIENTS.DETAIL(id),
            }),
            providesTags: (result, error, id) => [{ type: 'Client', id }],
        }),
        updateClient: builder.mutation({
            query: ({ id, ...body }) => ({
                url: API_ENDPOINTS.CLIENTS.UPDATE(id),
                method: 'PUT',
                body,
            }),
            invalidatesTags: (result, error, { id }) => [
                { type: 'Client', id },
                { type: 'Client', id: 'LIST' },
            ],
        }),
        updateClientStatus: builder.mutation({
            query: ({ id, status }) => ({
                url: API_ENDPOINTS.USERS.UPDATE_STATUS(id),
                method: 'PATCH',
                body: { status },
            }),
            invalidatesTags: (result, error, { id }) => [
                { type: 'Client', id },
                { type: 'Client', id: 'LIST' },
            ],
        }),
    }),
});
export const { useGetClientsQuery, useGetClientQuery, useUpdateClientMutation, useUpdateClientStatusMutation, } = clientApi;
