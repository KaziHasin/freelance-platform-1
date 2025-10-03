import { createApi } from '@reduxjs/toolkit/query/react';
import { API_ENDPOINTS } from '@/lib/api';
import { baseQueryWithReauth } from '@/lib/baseQueryWithReauth';
import { SubscriptionResponse } from '@/types/subscription';



export const subscriptionApi = createApi({
    reducerPath: 'subscriptionApi',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Subscription', 'Payment'],
    endpoints: (builder) => ({
        getSubscription: builder.query<SubscriptionResponse, { page?: number; limit?: number; status?: string | boolean }>({
            query: ({ page = 1, limit = 10, status = '' }) => ({
                url: API_ENDPOINTS.SUBSCRIPTIONS.CLIENT,
                params: { page, limit, status },
            }),
        }),
        cancelSubscription: builder.mutation<void, string>({
            query: (subscriptionId) => ({
                url: API_ENDPOINTS.SUBSCRIPTIONS.CANCEL(subscriptionId),
                method: 'POST',
            }),
        }),
    }),
});

export const {
    useGetSubscriptionQuery,
    useCancelSubscriptionMutation,
} = subscriptionApi;