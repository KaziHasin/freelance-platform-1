import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useGetSubscriptionQuery, useCancelSubscriptionMutation } from '@/store/slices/SubscriptionSlice';
import SubscriptionDetails from '@/components/clients/SubscriptionDetails';
import { Spinner } from '@/components/ui/Spinner';
import Tabs from '@/components/ui/Tabs';
const PlansBillings = () => {
    const [page, setPage] = useState(1);
    const [limit] = useState(10);
    const { data: subscription, isLoading: isLoadingSubscription, isError: isSubscriptionError } = useGetSubscriptionQuery({
        page,
        limit,
        status: 'ACTIVE'
    });
    const { data: scheduleSubscription, isLoading: isScheduleLoadingSubscription, isError: isScheduleSubscriptionError } = useGetSubscriptionQuery({
        page,
        limit,
        status: 'SCHEDULED'
    });
    const { data: historySubscription, isLoading: isHistoryLoadingSubscription, isError: isHistorySubscriptionError } = useGetSubscriptionQuery({
        page,
        limit,
        status: 'EXPIRED'
    });
    console.log(subscription, scheduleSubscription, historySubscription);
    const [cancelSubscription] = useCancelSubscriptionMutation();
    const handleCancelSubscription = async () => {
        if (subscription) {
            try {
                await cancelSubscription(subscription.items[0]._id);
            }
            catch (error) {
                console.error('Failed to cancel subscription:', error);
            }
        }
    };
    if (isLoadingSubscription || isHistorySubscriptionError || isScheduleLoadingSubscription) {
        return (_jsx("div", { className: "flex justify-center items-center h-64", children: _jsx(Spinner, { size: "lg" }) }));
    }
    if (isSubscriptionError) {
        return (_jsx("div", { className: "text-center text-red-500 p-4", children: "Failed to load subscription details" }));
    }
    const tabData = [
        {
            label: "Current Subscription",
            content: _jsx(SubscriptionDetails, { subscription: subscription.items[0], onCancel: handleCancelSubscription }),
        },
        {
            label: "Scheduled",
            content: scheduleSubscription && scheduleSubscription.items.length > 0
                ? _jsx(SubscriptionDetails, { subscription: scheduleSubscription.items[0], onCancel: handleCancelSubscription })
                : _jsx("p", { children: "No scheduled subscriptions" }),
        },
        {
            label: "Payment History",
            content: historySubscription && historySubscription.items.length > 0
                ? _jsx(SubscriptionDetails, { subscription: historySubscription.items[0], onCancel: handleCancelSubscription })
                : _jsx("p", { children: "No payment history" }),
        },
    ];
    return (_jsx("div", { className: "space-y-6", children: _jsxs("div", { className: "mx-auto", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900 dark:text-white", children: "Plans & Billings" }), _jsx("p", { className: "mt-2 text-sm text-gray-600 dark:text-gray-400", children: "Manage your subscription and view payment history" })] }), _jsx(Tabs, { tabs: tabData })] }) }));
};
export default PlansBillings;
