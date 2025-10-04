import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const recentActivity = [
    {
        id: 1,
        type: 'milestone',
        project: 'E-commerce Website',
        description: 'Frontend development milestone completed',
        amount: '+$1,200',
        date: '2h ago'
    },
    {
        id: 2,
        type: 'message',
        project: 'Mobile App UI',
        description: 'New message from Sarah Wilson',
        date: '5h ago'
    },
    {
        id: 3,
        type: 'payment',
        project: 'SEO Optimization',
        description: 'Payment released for final delivery',
        amount: '-$800',
        date: '1d ago'
    },
    {
        id: 4,
        type: 'review',
        project: 'Content Writing',
        description: 'Received 5-star review from freelancer',
        date: '2d ago'
    }
];
const ActivityItem = ({ activity }) => (_jsxs("div", { className: "flex items-start space-x-4 py-4", children: [_jsxs("div", { className: "min-w-0 flex-1", children: [_jsx("p", { className: "text-sm font-medium text-gray-900 dark:text-white", children: activity.project }), _jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: activity.description })] }), _jsxs("div", { className: "flex-shrink-0 flex flex-col items-end", children: [activity.amount && (_jsx("p", { className: `text-sm font-medium ${activity.amount.startsWith('+')
                        ? 'text-green-600 dark:text-green-400'
                        : 'text-red-600 dark:text-red-400'}`, children: activity.amount })), _jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: activity.date })] })] }));
const RecentActivity = () => {
    return (_jsx("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow transition-colors", children: _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 dark:text-white", children: "Recent Activity" }), _jsx("div", { className: "mt-6 flow-root", children: _jsx("ul", { className: "-my-5 divide-y divide-gray-200 dark:divide-gray-700", children: recentActivity.map((activity) => (_jsx("li", { children: _jsx(ActivityItem, { activity: activity }) }, activity.id))) }) }), _jsx("div", { className: "mt-6", children: _jsx("button", { type: "button", className: "w-full flex justify-center items-center px-4 py-2 \r\n                                   border border-gray-300 dark:border-gray-600 \r\n                                   shadow-sm text-sm font-medium \r\n                                   rounded-md text-gray-700 dark:text-gray-200 \r\n                                   bg-white dark:bg-gray-700 \r\n                                   hover:bg-gray-50 dark:hover:bg-gray-600 \r\n                                   transition-colors", children: "View all activity" }) })] }) }));
};
export default RecentActivity;
