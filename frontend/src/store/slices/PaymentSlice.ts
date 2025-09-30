import { createApi } from '@reduxjs/toolkit/query/react';
import { API_ENDPOINTS } from '@/lib/api';
import { baseQueryWithReauth } from '@/lib/baseQueryWithReauth';

export interface PaymentRequest {
    paymentMethod: string;
    planInterval: string;
    amount: number;
    currency: string;
    clientId: string;
    packageId: string;
    packageTitle: string;
    paymentDetails?: any;
}

export interface PaymentResponse {
    status: "success" | "failure";
    transactionId?: string;
    message?: string;
    amount?: number;
    packageTitle?: string;
    planInterval?: string;
}

export const paymentApi = createApi({
    reducerPath: 'paymentApi',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Payment'],

    endpoints: (builder) => ({
        checkoutPayment: builder.mutation<PaymentResponse, PaymentRequest>({
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
