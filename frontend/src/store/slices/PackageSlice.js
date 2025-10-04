import { createApi } from '@reduxjs/toolkit/query/react';
import { API_ENDPOINTS } from '@/lib/api';
import { baseQueryWithReauth } from '@/lib/baseQueryWithReauth';
// RTK Query API for items
export const packageApi = createApi({
    reducerPath: 'packageApi',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Package'],
    endpoints: (builder) => ({
        getPackages: builder.query({
            query: ({ page = 1, limit = 10, search = '', status = '' }) => ({
                url: API_ENDPOINTS.PACKAGES.LIST,
                params: { page, limit, search, status },
            }),
            providesTags: (result) => result
                ? [
                    ...result.items.map(({ _id }) => ({ type: 'Package', id: _id })),
                    { type: 'Package', id: 'LIST' },
                ]
                : [{ type: 'Package', id: 'LIST' }],
        }),
        getPackage: builder.query({
            query: (id) => ({
                url: API_ENDPOINTS.PACKAGES.DETAIL(id),
            }),
            providesTags: (result, error, id) => [{ type: 'Package', id }],
        }),
        createPackage: builder.mutation({
            query: (data) => ({
                url: API_ENDPOINTS.PACKAGES.CREATE,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: [{ type: 'Package', id: 'LIST' }],
        }),
        updatePackage: builder.mutation({
            query: ({ id, ...body }) => ({
                url: API_ENDPOINTS.PACKAGES.UPDATE(id),
                method: 'PUT',
                body,
            }),
            invalidatesTags: (result, error, { id }) => [
                { type: 'Package', id },
                { type: 'Package', id: 'LIST' },
            ],
        }),
        deletePackage: builder.mutation({
            query: (id) => ({
                url: API_ENDPOINTS.PACKAGES.DELETE(id),
                method: "DELETE",
            }),
            invalidatesTags: (result, error, id) => [
                { type: "Package", id },
                { type: "Package", id: "LIST" },
            ],
        }),
    }),
});
export const { useGetPackagesQuery, useGetPackageQuery, useCreatePackageMutation, useUpdatePackageMutation, useDeletePackageMutation, } = packageApi;
