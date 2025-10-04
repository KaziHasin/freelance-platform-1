import { createApi } from '@reduxjs/toolkit/query/react';
import { API_ENDPOINTS } from '@/lib/api';
import { baseQueryWithReauth } from '@/lib/baseQueryWithReauth';
export const subscriptionApi = createApi({
    reducerPath: 'subscriptionApi',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Subscription', 'Payment'],
    endpoints: (builder) => ({
        getSubscription: builder.query({
            query: ({ page = 1, limit = 10, status = '' }) => ({
                url: API_ENDPOINTS.SUBSCRIPTIONS.CLIENT,
                params: { page, limit, status },
            }),
        }),
        cancelSubscription: builder.mutation({
            query: (subscriptionId) => ({
                url: API_ENDPOINTS.SUBSCRIPTIONS.CANCEL(subscriptionId),
                method: 'POST',
            }),
        }),
    }),
});
export const { useGetSubscriptionQuery, useCancelSubscriptionMutation, } = subscriptionApi;
