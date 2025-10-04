import { createApi } from '@reduxjs/toolkit/query/react';
import { API_ENDPOINTS } from '@/lib/api';
import { baseQueryWithReauth } from '@/lib/baseQueryWithReauth';
export const paymentApi = createApi({
    reducerPath: 'paymentApi',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Payment'],
    endpoints: (builder) => ({
        checkoutPayment: builder.mutation({
            query: (data) => ({
                url: API_ENDPOINTS.PAYMENT.CHECKOUT,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: [{ type: 'Payment', id: 'LIST' }],
        }),
    }),
});
export const { useCheckoutPaymentMutation } = paymentApi;
