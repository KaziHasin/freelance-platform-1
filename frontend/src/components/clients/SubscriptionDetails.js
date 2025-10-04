import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/Badge';
const SubscriptionDetails = ({ subscription, onCancel }) => {
    const [activeTab, setActiveTab] = useState('subscription');
    const statusVariants = {
        ACTIVE: 'success',
        EXPIRED: 'error',
        CANCELLED: 'default',
    };
    const currencySymbols = {
        INR: '₹',
        USD: '$',
        EUR: '€',
    };
    const tabs = [
        { id: 'subscription', label: 'Subscription Info' },
        { id: 'package', label: 'Package Details' },
        { id: 'payment', label: 'Payment Info' },
    ];
    const renderTabContent = () => {
        switch (activeTab) {
            case 'subscription':
                return (_jsxs("dl", { className: "divide-y divide-gray-200 dark:divide-gray-700", children: [_jsxs("div", { className: "py-4 sm:grid sm:grid-cols-3 sm:gap-4", children: [_jsx("dt", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: "Status" }), _jsxs("dd", { className: "mt-1 sm:col-span-2 sm:mt-0", children: [_jsx(Badge, { variant: statusVariants[subscription.status], children: subscription.status }), subscription.isTrial && (_jsx(Badge, { variant: "info", className: "ml-2", children: "Trial" }))] })] }), _jsxs("div", { className: "py-4 sm:grid sm:grid-cols-3 sm:gap-4", children: [_jsx("dt", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: "Start Date" }), _jsx("dd", { className: "mt-1 text-sm text-gray-900 dark:text-white sm:col-span-2 sm:mt-0", children: format(new Date(subscription.startDate), 'PPP') })] }), subscription.endDate && (_jsxs("div", { className: "py-4 sm:grid sm:grid-cols-3 sm:gap-4", children: [_jsx("dt", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: "End Date" }), _jsx("dd", { className: "mt-1 text-sm text-gray-900 dark:text-white sm:col-span-2 sm:mt-0", children: format(new Date(subscription.endDate), 'PPP') })] })), _jsxs("div", { className: "py-4 sm:grid sm:grid-cols-3 sm:gap-4", children: [_jsx("dt", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: "Created" }), _jsx("dd", { className: "mt-1 text-sm text-gray-900 dark:text-white sm:col-span-2 sm:mt-0", children: format(new Date(subscription.createdAt), 'PPP') })] })] }));
            case 'package':
                return (_jsxs("dl", { className: "divide-y divide-gray-200 dark:divide-gray-700", children: [_jsxs("div", { className: "py-4 sm:grid sm:grid-cols-3 sm:gap-4", children: [_jsx("dt", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: "Package Name" }), _jsx("dd", { className: "mt-1 text-sm text-gray-900 dark:text-white sm:col-span-2 sm:mt-0", children: subscription.packageId.title })] }), _jsxs("div", { className: "py-4 sm:grid sm:grid-cols-3 sm:gap-4", children: [_jsx("dt", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: "Package Type" }), _jsx("dd", { className: "mt-1 text-sm text-gray-900 dark:text-white sm:col-span-2 sm:mt-0", children: _jsx(Badge, { variant: "info", children: subscription.packageId.code }) })] }), _jsxs("div", { className: "py-4", children: [_jsx("dt", { className: "text-sm font-medium text-gray-500 dark:text-gray-400 mb-2", children: "Price Options" }), _jsx("dd", { className: "mt-1 grid grid-cols-3 gap-4", children: Object.entries(subscription.packageId.prices).map(([currency, amount]) => (_jsxs("div", { className: "bg-gray-50 dark:bg-gray-700 p-3 rounded-lg", children: [_jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: currency }), _jsxs("p", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: [currencySymbols[currency], amount] })] }, currency))) })] })] }));
            case 'payment':
                return (_jsxs("dl", { className: "divide-y divide-gray-200 dark:divide-gray-700", children: [_jsxs("div", { className: "py-4 sm:grid sm:grid-cols-3 sm:gap-4", children: [_jsx("dt", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: "Amount" }), _jsxs("dd", { className: "mt-1 text-sm text-gray-900 dark:text-white sm:col-span-2 sm:mt-0", children: [currencySymbols[subscription.paymentId.currency], subscription.paymentId.amount] })] }), _jsxs("div", { className: "py-4 sm:grid sm:grid-cols-3 sm:gap-4", children: [_jsx("dt", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: "Payment Method" }), _jsx("dd", { className: "mt-1 text-sm text-gray-900 dark:text-white sm:col-span-2 sm:mt-0 capitalize", children: subscription.paymentId.paymentMethod })] }), _jsxs("div", { className: "py-4 sm:grid sm:grid-cols-3 sm:gap-4", children: [_jsx("dt", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: "Plan Interval" }), _jsx("dd", { className: "mt-1 text-sm text-gray-900 dark:text-white sm:col-span-2 sm:mt-0 capitalize", children: subscription.paymentId.planInterval })] }), _jsxs("div", { className: "py-4 sm:grid sm:grid-cols-3 sm:gap-4", children: [_jsx("dt", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: "Transaction ID" }), _jsx("dd", { className: "mt-1 text-sm font-mono text-gray-900 dark:text-white sm:col-span-2 sm:mt-0", children: subscription.paymentId.transactionId })] }), _jsxs("div", { className: "py-4 sm:grid sm:grid-cols-3 sm:gap-4", children: [_jsx("dt", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: "Status" }), _jsx("dd", { className: "mt-1 sm:col-span-2 sm:mt-0", children: _jsx(Badge, { variant: subscription.paymentId.status === 'success' ? 'success' : 'error', children: subscription.paymentId.status }) })] })] }));
        }
    };
    return (_jsxs("div", { className: "bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden", children: [_jsx("div", { className: "border-b border-gray-200 dark:border-gray-700", children: _jsx("nav", { className: "flex -mb-px", "aria-label": "Tabs", children: tabs.map((tab) => (_jsx("button", { onClick: () => setActiveTab(tab.id), className: `
                                py-4 px-6 text-sm font-medium
                                ${activeTab === tab.id
                            ? 'border-b-2 border-green-500 text-green-600 dark:text-green-400'
                            : 'text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'}
                            `, children: tab.label }, tab.id))) }) }), _jsxs("div", { className: "p-6", children: [renderTabContent(), subscription.status === 'ACTIVE' && activeTab === 'subscription' && (_jsx("div", { className: "mt-6", children: _jsx("button", { onClick: onCancel, className: "inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500", children: "Cancel Subscription" }) }))] })] }));
};
export default SubscriptionDetails;
