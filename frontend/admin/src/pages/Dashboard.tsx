import React from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Alert from '../components/ui/Alert';
import Table from '../components/ui/Table';

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    status: string;
}

// Sample data for the table
const recentUsers: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
];

const Dashboard = () => {
    const tableColumns = [
        { header: 'Name', accessor: 'name' as const },
        { header: 'Email', accessor: 'email' as const },
        { header: 'Role', accessor: 'role' as const },
        {
            header: 'Status',
            accessor: 'status' as const,
            render: (value: string, item: User) => (
                <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${value === 'Active'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                        }`}
                >
                    {value}
                </span>
            ),
        },
    ];

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                    <div className="flex items-center">
                        <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900">
                            <svg
                                className="w-6 h-6 text-blue-600 dark:text-blue-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <h2 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                Total Users
                            </h2>
                            <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                                1,234
                            </p>
                        </div>
                    </div>
                </Card>

                <Card>
                    <div className="flex items-center">
                        <div className="p-3 rounded-full bg-green-100 dark:bg-green-900">
                            <svg
                                className="w-6 h-6 text-green-600 dark:text-green-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <h2 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                Revenue
                            </h2>
                            <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                                $12,345
                            </p>
                        </div>
                    </div>
                </Card>

                <Card>
                    <div className="flex items-center">
                        <div className="p-3 rounded-full bg-yellow-100 dark:bg-yellow-900">
                            <svg
                                className="w-6 h-6 text-yellow-600 dark:text-yellow-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <h2 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                Growth
                            </h2>
                            <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                                +23%
                            </p>
                        </div>
                    </div>
                </Card>

                <Card>
                    <div className="flex items-center">
                        <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900">
                            <svg
                                className="w-6 h-6 text-purple-600 dark:text-purple-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <h2 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                Tasks
                            </h2>
                            <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                                12/15
                            </p>
                        </div>
                    </div>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card title="Recent Activity">
                    <div className="space-y-4">
                        <Alert
                            variant="info"
                            message="New user registration: John Doe"
                            dismissible
                        />
                        <Alert
                            variant="success"
                            message="System update completed successfully"
                            dismissible
                        />
                        <Alert
                            variant="warning"
                            message="Database backup required"
                            dismissible
                        />
                    </div>
                </Card>

                <Card title="Quick Actions">
                    <div className="grid grid-cols-2 gap-4">
                        <Button variant="primary" fullWidth>
                            Add User
                        </Button>
                        <Button variant="secondary" fullWidth>
                            Generate Report
                        </Button>
                        <Button variant="success" fullWidth>
                            Export Data
                        </Button>
                        <Button variant="info" fullWidth>
                            View Analytics
                        </Button>
                    </div>
                </Card>
            </div>

            <Card title="Recent Users">
                <Table
                    columns={tableColumns}
                    data={recentUsers}
                    sortable
                    pagination
                    itemsPerPage={5}
                />
            </Card>
        </div>
    );
};

export default Dashboard; 