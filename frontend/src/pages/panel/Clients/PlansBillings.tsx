import React, { useState } from 'react';
import {
    useGetSubscriptionQuery,
    useCancelSubscriptionMutation
} from '@/store/slices/SubscriptionSlice';
import SubscriptionDetails from '@/components/clients/SubscriptionDetails';
import { Spinner } from '@/components/ui/Spinner';
import Tabs from '@/components/ui/Tabs';

const PlansBillings: React.FC = () => {
    const [page, setPage] = useState(1);
    const [limit] = useState(10);

    const {
        data: subscription,
        isLoading: isLoadingSubscription,
        isError: isSubscriptionError
    } = useGetSubscriptionQuery(
        {
            page,
            limit,
            status: 'ACTIVE'
        }
    );

    const {
        data: scheduleSubscription,
        isLoading: isScheduleLoadingSubscription,
        isError: isScheduleSubscriptionError
    } = useGetSubscriptionQuery(
        {
            page,
            limit,
            status: 'SCHEDULED'
        }
    );

    const {
        data: historySubscription,
        isLoading: isHistoryLoadingSubscription,
        isError: isHistorySubscriptionError
    } = useGetSubscriptionQuery(
        {
            page,
            limit,
            status: 'EXPIRED'
        }
    );

    console.log(subscription, scheduleSubscription, historySubscription);


    const [cancelSubscription] = useCancelSubscriptionMutation();

    const handleCancelSubscription = async () => {
        if (subscription) {
            try {
                await cancelSubscription(subscription.items[0]._id);
            } catch (error) {
                console.error('Failed to cancel subscription:', error);
            }
        }
    };

    if (isLoadingSubscription || isHistorySubscriptionError || isScheduleLoadingSubscription) {
        return (
            <div className="flex justify-center items-center h-64">
                <Spinner size="lg" />
            </div>
        );
    }

    if (isSubscriptionError) {
        return (
            <div className="text-center text-red-500 p-4">
                Failed to load subscription details
            </div>
        );
    }

    const tabData = [
        {
            label: "Current Subscription",
            content: <SubscriptionDetails subscription={subscription.items[0]} onCancel={handleCancelSubscription} />,
        },
        {
            label: "Scheduled",
            content: scheduleSubscription && scheduleSubscription.items.length > 0
                ? <SubscriptionDetails subscription={scheduleSubscription.items[0]} onCancel={handleCancelSubscription} />
                : <p>No scheduled subscriptions</p>,
        },
        {
            label: "Payment History",
            content: historySubscription && historySubscription.items.length > 0
                ? <SubscriptionDetails subscription={historySubscription.items[0]} onCancel={handleCancelSubscription} />
                : <p>No payment history</p>,
        },

    ];

    return (
        <div className="space-y-6">
            <div className="mx-auto">
                {/* Page Header */}
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Plans & Billings
                    </h1>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Manage your subscription and view payment history
                    </p>
                </div>

                <Tabs tabs={tabData} />

            </div>
        </div>
    );
};

export default PlansBillings;