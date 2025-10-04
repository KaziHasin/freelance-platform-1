import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CurrencyDollarIcon, ChartBarIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline';
const StatCard = ({ title, value, change, isIncrease, icon }) => (_jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-colors", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-gray-500 dark:text-gray-400 text-sm font-medium", children: title }), _jsx("p", { className: "text-2xl font-semibold mt-2 text-gray-900 dark:text-white", children: value })] }), _jsx("div", { className: `p-3 rounded-full 
                ${isIncrease
                        ? 'text-green-600 bg-green-100 dark:bg-green-900/40'
                        : 'text-red-600 bg-red-100 dark:bg-red-900/40'}`, children: icon })] }), _jsxs("div", { className: "mt-4 flex items-center", children: [_jsx("span", { className: `text-sm font-medium ${isIncrease ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`, children: change }), _jsx("span", { className: "text-gray-500 dark:text-gray-400 text-sm ml-2", children: "vs last month" })] })] }));
const DashboardStats = () => {
    const stats = [
        {
            title: 'Total Spent',
            value: '$12,500',
            change: '+12.5%',
            isIncrease: true,
            icon: _jsx(CurrencyDollarIcon, { className: "h-6 w-6" })
        },
        {
            title: 'Active Projects',
            value: '8',
            change: '+3.2%',
            isIncrease: true,
            icon: _jsx(ChartBarIcon, { className: "h-6 w-6" })
        },
        {
            title: 'Avg. Project Duration',
            value: '15 days',
            change: '-5.1%',
            isIncrease: false,
            icon: _jsx(ClockIcon, { className: "h-6 w-6" })
        },
        {
            title: 'Hired Freelancers',
            value: '24',
            change: '+8.3%',
            isIncrease: true,
            icon: _jsx(UserGroupIcon, { className: "h-6 w-6" })
        }
    ];
    return (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: stats.map((stat, index) => (_jsx(StatCard, { ...stat }, index))) }));
};
export default DashboardStats;
