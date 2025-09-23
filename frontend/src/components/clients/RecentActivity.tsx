import React from 'react';

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

const ActivityItem = ({ activity }: { activity: any }) => (
    <div className="flex items-start space-x-4 py-4">
        <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-gray-900 dark:text-white">
                {activity.project}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
                {activity.description}
            </p>
        </div>
        <div className="flex-shrink-0 flex flex-col items-end">
            {activity.amount && (
                <p
                    className={`text-sm font-medium ${activity.amount.startsWith('+')
                            ? 'text-green-600 dark:text-green-400'
                            : 'text-red-600 dark:text-red-400'
                        }`}
                >
                    {activity.amount}
                </p>
            )}
            <p className="text-sm text-gray-500 dark:text-gray-400">
                {activity.date}
            </p>
        </div>
    </div>
);

const RecentActivity = () => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow transition-colors">
            <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Recent Activity
                </h3>
                <div className="mt-6 flow-root">
                    <ul className="-my-5 divide-y divide-gray-200 dark:divide-gray-700">
                        {recentActivity.map((activity) => (
                            <li key={activity.id}>
                                <ActivityItem activity={activity} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-6">
                    <button
                        type="button"
                        className="w-full flex justify-center items-center px-4 py-2 
                                   border border-gray-300 dark:border-gray-600 
                                   shadow-sm text-sm font-medium 
                                   rounded-md text-gray-700 dark:text-gray-200 
                                   bg-white dark:bg-gray-700 
                                   hover:bg-gray-50 dark:hover:bg-gray-600 
                                   transition-colors"
                    >
                        View all activity
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecentActivity;
