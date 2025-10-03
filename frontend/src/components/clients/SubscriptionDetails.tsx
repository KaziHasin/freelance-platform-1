import React, { useState } from 'react';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/Badge';
import { Subscription } from '@/types/subscription';

interface SubscriptionDetailsProps {
    subscription: Subscription;
    onCancel: () => void;
}

type TabType = 'subscription' | 'package' | 'payment';

const SubscriptionDetails: React.FC<SubscriptionDetailsProps> = ({ subscription, onCancel }) => {
    const [activeTab, setActiveTab] = useState<TabType>('subscription');

    const statusVariants = {
        ACTIVE: 'success',
        EXPIRED: 'error',
        CANCELLED: 'default',
    } as const;

    const currencySymbols: Record<string, string> = {
        INR: '₹',
        USD: '$',
        EUR: '€',
    };

    const tabs = [
        { id: 'subscription', label: 'Subscription Info' },
        { id: 'package', label: 'Package Details' },
        { id: 'payment', label: 'Payment Info' },
    ] as const;

    const renderTabContent = () => {
        switch (activeTab) {
            case 'subscription':
                return (
                    <dl className="divide-y divide-gray-200 dark:divide-gray-700">
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Status</dt>
                            <dd className="mt-1 sm:col-span-2 sm:mt-0">
                                <Badge variant={statusVariants[subscription.status]}>
                                    {subscription.status}
                                </Badge>
                                {subscription.isTrial && (
                                    <Badge variant="info" className="ml-2">Trial</Badge>
                                )}
                            </dd>
                        </div>
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Start Date</dt>
                            <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:col-span-2 sm:mt-0">
                                {format(new Date(subscription.startDate), 'PPP')}
                            </dd>
                        </div>
                        {subscription.endDate && (
                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">End Date</dt>
                                <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:col-span-2 sm:mt-0">
                                    {format(new Date(subscription.endDate), 'PPP')}
                                </dd>
                            </div>
                        )}
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Created</dt>
                            <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:col-span-2 sm:mt-0">
                                {format(new Date(subscription.createdAt), 'PPP')}
                            </dd>
                        </div>
                    </dl>
                );
            case 'package':
                return (
                    <dl className="divide-y divide-gray-200 dark:divide-gray-700">
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Package Name</dt>
                            <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:col-span-2 sm:mt-0">
                                {subscription.packageId.title}
                            </dd>
                        </div>
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Package Type</dt>
                            <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:col-span-2 sm:mt-0">
                                <Badge variant="info">{subscription.packageId.code}</Badge>
                            </dd>
                        </div>
                        <div className="py-4">
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Price Options</dt>
                            <dd className="mt-1 grid grid-cols-3 gap-4">
                                {Object.entries(subscription.packageId.prices).map(([currency, amount]) => (
                                    <div key={currency} className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{currency}</p>
                                        <p className="text-lg font-semibold text-gray-900 dark:text-white">
                                            {currencySymbols[currency]}{amount}
                                        </p>
                                    </div>
                                ))}
                            </dd>
                        </div>
                    </dl>
                );
            case 'payment':
                return (
                    <dl className="divide-y divide-gray-200 dark:divide-gray-700">
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Amount</dt>
                            <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:col-span-2 sm:mt-0">
                                {currencySymbols[subscription.paymentId.currency]}{subscription.paymentId.amount}
                            </dd>
                        </div>
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Payment Method</dt>
                            <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:col-span-2 sm:mt-0 capitalize">
                                {subscription.paymentId.paymentMethod}
                            </dd>
                        </div>
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Plan Interval</dt>
                            <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:col-span-2 sm:mt-0 capitalize">
                                {subscription.paymentId.planInterval}
                            </dd>
                        </div>
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Transaction ID</dt>
                            <dd className="mt-1 text-sm font-mono text-gray-900 dark:text-white sm:col-span-2 sm:mt-0">
                                {subscription.paymentId.transactionId}
                            </dd>
                        </div>
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Status</dt>
                            <dd className="mt-1 sm:col-span-2 sm:mt-0">
                                <Badge variant={subscription.paymentId.status === 'success' ? 'success' : 'error'}>
                                    {subscription.paymentId.status}
                                </Badge>
                            </dd>
                        </div>
                    </dl>
                );
        }
    };

    return (
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
            {/* Tabs */}
            <div className="border-b border-gray-200 dark:border-gray-700">
                <nav className="flex -mb-px" aria-label="Tabs">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`
                                py-4 px-6 text-sm font-medium
                                ${activeTab === tab.id
                                    ? 'border-b-2 border-green-500 text-green-600 dark:text-green-400'
                                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                                }
                            `}
                        >
                            {tab.label}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Content */}
            <div className="p-6">
                {renderTabContent()}

                {/* Cancel Button */}
                {subscription.status === 'ACTIVE' && activeTab === 'subscription' && (
                    <div className="mt-6">
                        <button
                            onClick={onCancel}
                            className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            Cancel Subscription
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SubscriptionDetails;