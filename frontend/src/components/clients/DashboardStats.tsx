import React from 'react';
import {
    CurrencyDollarIcon,
    ChartBarIcon,
    ClockIcon,
    UserGroupIcon
} from '@heroicons/react/24/outline';

interface StatCardProps {
    title: string;
    value: string;
    change: string;
    isIncrease: boolean;
    icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, isIncrease, icon }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-colors">
        <div className="flex items-center justify-between">
            <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">{title}</p>
                <p className="text-2xl font-semibold mt-2 text-gray-900 dark:text-white">
                    {value}
                </p>
            </div>
            <div
                className={`p-3 rounded-full 
                ${isIncrease
                        ? 'text-green-600 bg-green-100 dark:bg-green-900/40'
                        : 'text-red-600 bg-red-100 dark:bg-red-900/40'
                    }`}
            >
                {icon}
            </div>
        </div>
        <div className="mt-4 flex items-center">
            <span
                className={`text-sm font-medium ${isIncrease ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}
            >
                {change}
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">
                vs last month
            </span>
        </div>
    </div>
);

const DashboardStats = () => {
    const stats = [
        {
            title: 'Total Spent',
            value: '$12,500',
            change: '+12.5%',
            isIncrease: true,
            icon: <CurrencyDollarIcon className="h-6 w-6" />
        },
        {
            title: 'Active Projects',
            value: '8',
            change: '+3.2%',
            isIncrease: true,
            icon: <ChartBarIcon className="h-6 w-6" />
        },
        {
            title: 'Avg. Project Duration',
            value: '15 days',
            change: '-5.1%',
            isIncrease: false,
            icon: <ClockIcon className="h-6 w-6" />
        },
        {
            title: 'Hired Freelancers',
            value: '24',
            change: '+8.3%',
            isIncrease: true,
            icon: <UserGroupIcon className="h-6 w-6" />
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
            ))}
        </div>
    );
};

export default DashboardStats;
