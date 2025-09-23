import React from 'react';
import DashboardStats from '@/components/clients/DashboardStats';
import ActiveProjects from '@/components/clients/ActiveProjects';
import RecentActivity from '@/components/clients/RecentActivity';
import TopFreelancers from '@/components/clients/TopFreelancers';
import { PlusIcon } from '@heroicons/react/24/outline';
import SpendingChart from '@/components/clients/SpendingChart';

const Dashboard = () => {
    return (
        <div className="space-y-6">
            <div className="mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                            Welcome back! Here's what's happening with your projects.
                        </p>
                    </div>
                    <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        <PlusIcon className="-ml-1 mr-2 h-5 w-5 dark:text-gray-200" />
                        Post New Project
                    </button>
                </div>

                {/* Stats Cards */}
                <div className="mb-8">
                    <DashboardStats />
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Side (2 columns) */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Active Projects */}
                        <ActiveProjects />

                        {/* Chart Section */}
                        <div>
                            <SpendingChart />
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="space-y-8">
                        <RecentActivity />
                        <TopFreelancers />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
